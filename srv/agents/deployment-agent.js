const { createAgentRun, validateAgentInput, resolveCitations, advanceRun } = require('./base-agent');

function runDeploymentAgent(input = {}) {
  const base = createAgentRun({
    agentId: 'deployment-agent',
    input,
    goal: 'prepare a bounded deployment plan and validation targets',
    toolAllowlist: ['deployment-fixture', 'adapter-registry', 'verification-pipeline'],
    budget: 5,
    handoffOwner: 'demo.deployment.lead',
    tests: ['bounded-targets', 'prechecks-complete', 'verification-readback']
  });

  const validation = validateAgentInput({
    agentId: 'deployment-agent',
    title: input.title || 'Deployment plan',
    projectId: input.projectId || 'P-DEMO-001',
    dependencies: input.dependencies || ['CF-001', 'ORG-001'],
    evidence: input.evidence || []
  });

  if (!validation.valid) {
    return advanceRun(base, validation.status, validation.reasons);
  }

  const citations = resolveCitations(input.citations || [
    { sourceId: 'CF-001', sourceType: 'configuration' },
    { sourceId: 'ORG-001', sourceType: 'organization' }
  ]);

  return {
    ...base,
    status: 'completed',
    output: {
      agentId: 'deployment-agent',
      type: 'deployment',
      plan: {
        stages: [
          'precheck',
          'package-validation',
          'deploy',
          'verification'
        ],
        targets: ['cloud-alm', 'cbc', 's4hana'],
        dryRun: true,
        expectedOutcome: 'verified-deployment'
      },
      citations,
      rationale: 'The deployment plan stays within the approved scope and requires readback verification before completion.',
      isApprovalGranting: false
    },
    citations,
    updatedAt: new Date().toISOString()
  };
}

module.exports = {
  runDeploymentAgent
};
