const crypto = require('node:crypto');

function stableStringify(value) {
  if (value === null || value === undefined) {
    return 'null';
  }

  if (Array.isArray(value)) {
    return `[${value.map((entry) => stableStringify(entry)).join(',')}]`;
  }

  if (typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }

  return JSON.stringify(value);
}

function computeHash(payload) {
  return crypto.createHash('sha256').update(stableStringify(payload || {})).digest('hex');
}

function normalizeApprovalStatus(status) {
  return status && typeof status === 'string' ? status.trim() : 'Pending';
}

function requestApproval(input = {}) {
  const now = new Date().toISOString();
  const approval = {
    id: input.id || `APP-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    projectId: input.projectId,
    proposalId: input.proposalId,
    approver: input.approver,
    targetId: input.targetId || input.target || 'unknown-target',
    status: 'Pending',
    payloadHash: input.payloadHash,
    artifactRevision: input.artifactRevision ?? input.revision ?? 1,
    policyKey: input.policyKey || input.policy || 'demo-policy',
    expiresAt: input.expiresAt || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    reason: input.reason || 'Awaiting approval',
    createdAt: now,
    updatedAt: now
  };

  if (!approval.projectId || !approval.proposalId || !approval.approver || !approval.payloadHash) {
    return {
      allowed: false,
      status: 'Rejected',
      reason: 'Approval requires project, proposal, approver and payload hash',
      approval
    };
  }

  if (input.actorId && input.actorId === approval.approver) {
    return {
      allowed: false,
      status: 'Rejected',
      reason: 'Self approval is denied',
      approval: { ...approval, status: 'Rejected' }
    };
  }

  return {
    allowed: true,
    status: 'Pending',
    reason: 'Pending approval created',
    approval
  };
}

function evaluateApprovalEligibility({ approval, actorId, expectedHash, now = new Date().toISOString() }) {
  if (!approval || !approval.projectId || !approval.proposalId) {
    return { allowed: false, status: 'Rejected', reason: 'Approval record is missing' };
  }

  if (actorId && approval.approver && actorId === approval.approver) {
    return { allowed: false, status: 'Rejected', reason: 'Self approval is denied' };
  }

  if (approval.status === 'Revoked') {
    return { allowed: false, status: 'Revoked', reason: 'Approval was revoked' };
  }

  if (approval.status === 'Rejected') {
    return { allowed: false, status: 'Rejected', reason: 'Approval was rejected' };
  }

  if (new Date(approval.expiresAt).getTime() <= new Date(now).getTime()) {
    return { allowed: false, status: 'Expired', reason: 'Approval expired' };
  }

  if (expectedHash && approval.payloadHash && approval.payloadHash !== expectedHash) {
    return {
      allowed: false,
      status: 'Stale',
      reason: 'Approval payload hash no longer matches the proposal snapshot'
    };
  }

  if (approval.status === 'Stale') {
    return { allowed: false, status: 'Stale', reason: 'Approval is stale' };
  }

  return { allowed: true, status: 'Pending', reason: 'Approval is still valid' };
}

function decideApproval(input = {}) {
  const approval = input.approval || {};
  const decision = String(input.decision || '').toLowerCase();
  const reason = input.reason || 'Approval decision recorded';
  const expectedHash = input.payloadHash || approval.payloadHash;
  const decisionMap = {
    approve: 'Approved',
    return: 'Returned',
    reject: 'Rejected',
    revoke: 'Revoked'
  };

  const eligibility = evaluateApprovalEligibility({
    approval,
    actorId: input.actorId,
    expectedHash,
    now: input.now || new Date().toISOString()
  });

  if (!eligibility.allowed) {
    return {
      allowed: false,
      status: eligibility.status,
      reason: eligibility.reason,
      approval: { ...approval, status: eligibility.status, reason: eligibility.reason, updatedAt: new Date().toISOString() }
    };
  }

  const nextStatus = decisionMap[decision];
  if (!nextStatus) {
    return {
      allowed: false,
      status: approval.status,
      reason: 'Unsupported approval decision',
      approval: { ...approval, status: normalizeApprovalStatus(approval.status), updatedAt: new Date().toISOString() }
    };
  }

  const updatedApproval = {
    ...approval,
    status: nextStatus,
    reason,
    updatedAt: new Date().toISOString()
  };

  return {
    allowed: true,
    status: nextStatus,
    reason,
    approval: updatedApproval
  };
}

function invalidateApprovals({ approvals = [], proposal = {}, changeSummary = 'material change', now = new Date().toISOString() } = {}) {
  const invalidated = (approvals || [])
    .filter((approval) => {
      if (!proposal || !proposal.projectId) {
        return false;
      }
      return approval.projectId === proposal.projectId && approval.proposalId === proposal.id && approval.status !== 'Rejected';
    })
    .map((approval) => ({
      ...approval,
      status: 'Stale',
      reason: `Approval invalidated by ${changeSummary}`,
      updatedAt: now
    }));

  return {
    invalidated,
    invalidatedCount: invalidated.length,
    approvals: invalidated
  };
}

function restorePendingApprovals(approvals = []) {
  return (approvals || [])
    .filter((approval) => normalizeApprovalStatus(approval.status) === 'Pending')
    .map((approval) => ({
      ...approval,
      status: 'Pending',
      preserved: true,
      restoredAt: new Date().toISOString()
    }));
}

function getReadiness({ projectId, proposalId, proposal = {}, approvals = [], payloadHash, linkPrefix = '/projects' } = {}) {
  const blockers = [];
  const currentProposal = proposal || {};

  if (!projectId) {
    blockers.push({
      code: 'MISSING_PROJECT',
      message: 'Project ID is required to assess readiness',
      objectType: 'Projects',
      objectId: 'unknown',
      link: `${linkPrefix}/unknown`
    });
  }

  if (!currentProposal.id && !proposalId) {
    blockers.push({
      code: 'MISSING_PROPOSAL',
      message: 'Proposal ID is required before approval can proceed',
      objectType: 'Proposals',
      objectId: 'unknown',
      link: `${linkPrefix}/${projectId || 'unknown'}/proposals/unknown`
    });
  }

  if (!currentProposal.payloadHash && !payloadHash) {
    blockers.push({
      code: 'MISSING_PAYLOAD_HASH',
      message: 'Proposal payload hash is required for approval integrity',
      objectType: 'Proposals',
      objectId: proposalId || currentProposal.id || 'unknown',
      link: `${linkPrefix}/${projectId || 'unknown'}/proposals/${proposalId || currentProposal.id || 'unknown'}`
    });
  }

  if (!currentProposal.targetId && !currentProposal.target) {
    blockers.push({
      code: 'MISSING_TARGET',
      message: 'Proposal target is required for approval validation',
      objectType: 'Proposals',
      objectId: proposalId || currentProposal.id || 'unknown',
      link: `${linkPrefix}/${projectId || 'unknown'}/proposals/${proposalId || currentProposal.id || 'unknown'}`
    });
  }

  const staleApprovals = (approvals || []).filter((approval) => ['Pending', 'Stale'].includes(normalizeApprovalStatus(approval.status)));
  if (staleApprovals.length > 0) {
    staleApprovals.forEach((approval) => {
      blockers.push({
        code: 'STALE_APPROVAL',
        message: `Approval ${approval.id} is pending or stale and requires renewal`,
        objectType: 'Approvals',
        objectId: approval.id,
        link: `${linkPrefix}/${projectId || approval.projectId || 'unknown'}/approvals/${approval.id}`
      });
    });
  }

  return {
    ready: blockers.length === 0,
    blockers
  };
}

module.exports = {
  computeHash,
  requestApproval,
  evaluateApprovalEligibility,
  decideApproval,
  invalidateApprovals,
  restorePendingApprovals,
  getReadiness,
  stableStringify
};
