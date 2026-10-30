const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const {
  computeHash,
  requestApproval,
  evaluateApprovalEligibility,
  decideApproval,
  invalidateApprovals,
  restorePendingApprovals,
  getReadiness
} = require('../../srv/workflow/approval-workflow');

describe('B06 workflow approval and invalidation services', function () {
  it('creates a valid pending approval and prevents self approval', function () {
    const payload = { projectId: 'P-DEMO-001', target: 'S4-PILOT', values: { paymentTerms: '45' } };
    const hash = computeHash(payload);

    const created = requestApproval({
      id: 'APP-NEW-001',
      projectId: 'P-DEMO-001',
      proposalId: 'PROP-100',
      approver: 'demo.finance.approver',
      targetId: 'S4-PILOT',
      payloadHash: hash,
      artifactRevision: 2,
      policyKey: 'demo-policy'
    });

    assert.equal(created.allowed, true);
    assert.equal(created.approval.status, 'Pending');

    const selfDenied = requestApproval({
      projectId: 'P-DEMO-001',
      proposalId: 'PROP-101',
      approver: 'demo.finance.approver',
      targetId: 'S4-PILOT',
      payloadHash: hash,
      actorId: 'demo.finance.approver'
    });

    assert.equal(selfDenied.allowed, false);
    assert.equal(selfDenied.reason, 'Self approval is denied');
  });

  it('rejects stale, expired, revoked and invalid hash approval decisions', function () {
    const baseApproval = {
      id: 'APP-EXPIRE-001',
      projectId: 'P-DEMO-001',
      proposalId: 'PROP-200',
      approver: 'demo.finance.approver',
      payloadHash: 'abc123',
      status: 'Pending',
      expiresAt: '2020-01-01T00:00:00Z'
    };

    const expired = evaluateApprovalEligibility({ approval: baseApproval, expectedHash: 'abc123' });
    assert.equal(expired.allowed, false);
    assert.equal(expired.status, 'Expired');

    const stale = evaluateApprovalEligibility({
      approval: { ...baseApproval, expiresAt: '2099-01-01T00:00:00Z', status: 'Pending', payloadHash: 'old-hash' },
      expectedHash: 'new-hash'
    });
    assert.equal(stale.allowed, false);
    assert.equal(stale.status, 'Stale');

    const revoked = evaluateApprovalEligibility({ approval: { ...baseApproval, status: 'Revoked', expiresAt: '2099-01-01T00:00:00Z' }, expectedHash: 'abc123' });
    assert.equal(revoked.allowed, false);
    assert.equal(revoked.status, 'Revoked');

    const decided = decideApproval({
      approval: { ...baseApproval, expiresAt: '2099-01-01T00:00:00Z', status: 'Pending', payloadHash: 'same' },
      decision: 'approve',
      payloadHash: 'different',
      actorId: 'demo.release.manager'
    });
    assert.equal(decided.allowed, false);
    assert.equal(decided.status, 'Stale');
  });

  it('invalidates the stale approvals affected by a proposal change and preserves pending approvals on restart', function () {
    const approvals = [
      { id: 'APP-1', projectId: 'P-DEMO-001', proposalId: 'PROP-1', approver: 'demo.finance.approver', status: 'Pending', expiresAt: '2099-01-01T00:00:00Z' },
      { id: 'APP-2', projectId: 'P-DEMO-001', proposalId: 'PROP-1', approver: 'demo.release.manager', status: 'Approved', expiresAt: '2099-01-01T00:00:00Z' }
    ];
    const proposal = { id: 'PROP-1', projectId: 'P-DEMO-001' };

    const invalidated = invalidateApprovals({ approvals, proposal, changeSummary: 'scope change' });
    assert.equal(invalidated.invalidatedCount, 2);
    assert.equal(invalidated.invalidated.every((entry) => entry.status === 'Stale'), true);

    const restored = restorePendingApprovals([{ id: 'APP-3', projectId: 'P-DEMO-001', status: 'Pending' }, { id: 'APP-4', projectId: 'P-DEMO-001', status: 'Approved' }]);
    assert.equal(restored.length, 1);
    assert.equal(restored[0].preserved, true);
  });

  it('returns actionable readiness blockers and a failed stale check for unresolved approval states', function () {
    const readiness = getReadiness({
      projectId: 'P-DEMO-001',
      proposalId: 'PROP-6',
      proposal: { id: 'PROP-6', projectId: 'P-DEMO-001', targetId: 'S4-PILOT' },
      approvals: [{ id: 'APP-7', projectId: 'P-DEMO-001', proposalId: 'PROP-6', status: 'Pending', approver: 'demo.finance.approver' }],
      payloadHash: 'abc123'
    });

    assert.equal(readiness.ready, false);
    assert.equal(readiness.blockers.some((entry) => entry.code === 'STALE_APPROVAL'), true);

    const decision = decideApproval({
      approval: { id: 'APP-8', projectId: 'P-DEMO-001', proposalId: 'PROP-6', approver: 'demo.finance.approver', status: 'Pending', expiresAt: '2099-01-01T00:00:00Z', payloadHash: 'hash-1' },
      decision: 'approve',
      payloadHash: 'hash-2',
      actorId: 'demo.release.manager'
    });
    assert.equal(decision.allowed, false);
    assert.equal(decision.status, 'Stale');
  });
});
