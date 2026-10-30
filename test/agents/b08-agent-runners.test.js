const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const { runScopingAgent } = require('../../srv/agents/scoping-agent');
const { runOrganizationAgent } = require('../../srv/agents/organization-agent');
const { runConfigurationAgent } = require('../../srv/agents/configuration-agent');
const { runDeploymentAgent } = require('../../srv/agents/deployment-agent');

describe('B08 bounded deterministic agents', function () {
  it('scoping agent resolves citations and keeps the proposal bounded', function () {
    const result = runScopingAgent({
      title: 'Requisition approval flow',
      projectId: 'P-DEMO-001',
      dependencies: ['BR-03-009'],
      citations: [
        { sourceId: 'BR-03-009', sourceType: 'requirement' },
        { sourceId: 'DEMO-SCOPE-06', sourceType: 'scope' }
      ]
    });

    assert.equal(result.status, 'completed');
    assert.equal(result.output.type, 'scope');
    assert.equal(result.output.proposal.status, 'proposed');
    assert.equal(result.citations.every((entry) => entry.resolved), true);
    assert.equal(result.output.isApprovalGranting, false);
  });

  it('organization agent abstains if the evidence set includes unsupported entries', function () {
    const result = runOrganizationAgent({
      title: 'Organization design',
      projectId: 'P-DEMO-001',
      dependencies: ['DEMO-SCOPE-06'],
      evidence: [{ status: 'unsupported' }]
    });

    assert.equal(result.status, 'abstained');
    assert.equal(Array.isArray(result.reasons), true);
  });

  it('configuration agent produces typed values from cited requirements', function () {
    const result = runConfigurationAgent({
      title: 'Configuration values',
      projectId: 'P-DEMO-001',
      dependencies: ['BR-03-009', 'LE-001'],
      citations: [
        { sourceId: 'BR-03-009', sourceType: 'requirement' },
        { sourceId: 'DEMO-CA-02', sourceType: 'configuration-activity' }
      ]
    });

    assert.equal(result.status, 'completed');
    assert.equal(typeof result.output.values.paymentTerms, 'string');
    assert.equal(Number(result.output.values.purchaseApprovalThreshold) > 0, true);
    assert.equal(result.output.isApprovalGranting, false);
  });

  it('deployment agent emits a bounded deployment plan with safe verification targets', function () {
    const result = runDeploymentAgent({
      title: 'Deployment plan',
      projectId: 'P-DEMO-001',
      dependencies: ['CF-001', 'ORG-001'],
      citations: [
        { sourceId: 'CF-001', sourceType: 'configuration' },
        { sourceId: 'ORG-001', sourceType: 'organization' }
      ]
    });

    assert.equal(result.status, 'completed');
    assert.deepEqual(result.output.plan.stages, ['precheck', 'package-validation', 'deploy', 'verification']);
    assert.deepEqual(result.output.plan.targets, ['cloud-alm', 'cbc', 's4hana']);
    assert.equal(result.output.isApprovalGranting, false);
    assert.equal(result.toolAllowlist.includes('adapter-registry'), true);
  });
});
