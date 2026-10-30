const { createAgentRun, validateAgentInput, resolveCitations, advanceRun } = require('./base-agent');

function runConfigurationAgent(input = {}) {
  const base = createAgentRun({
    agentId: 'configuration-agent',
    input,
    goal: 'propose configuration values from requirements',
    toolAllowlist: ['requirements-fixture', 'demo-catalog', 'organization-fixture'],
    budget: 4,
    handoffOwner: 'demo.configuration.consultant',
    tests: ['value-types', 'requirements-cited', 'verified-structure']
  });

  const validation = validateAgentInput({
    agentId: 'configuration-agent',
    title: input.title || 'Configuration values',
    projectId: input.projectId || 'P-DEMO-001',
    dependencies: input.dependencies || ['BR-03-009', 'LE-001'],
    evidence: input.evidence || []
  });

  if (!validation.valid) {
    return advanceRun(base, validation.status, validation.reasons);
  }

  const citations = resolveCitations(input.citations || [
    { sourceId: 'BR-03-009', sourceType: 'requirement' },
    { sourceId: 'DEMO-CA-02', sourceType: 'configuration-activity' }
  ]);

  return {
    ...base,
    status: 'completed',
    output: {
      agentId: 'configuration-agent',
      type: 'configuration',
      values: {
        paymentTerms: '45',
        purchaseApprovalThreshold: 10000,
        journalReviewThreshold: 50000
      },
      citations,
      rationale: 'Approved configuration values are derived from cited requirements and verified project structure',
      isApprovalGranting: false
    },
    citations,
    updatedAt: new Date().toISOString()
  };
}

module.exports = {
  runConfigurationAgent
};
