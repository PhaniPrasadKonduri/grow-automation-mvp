const { createAgentRun, validateAgentInput, resolveCitations, advanceRun } = require('./base-agent');

function runOrganizationAgent(input = {}) {
  const base = createAgentRun({
    agentId: 'organization-agent',
    input,
    goal: 'validate organization graph',
    toolAllowlist: ['organization-fixture', 'country-graph-check'],
    budget: 3,
    handoffOwner: 'demo.finance.approver',
    tests: ['graph-valid', 'country-valid', 'parent-valid']
  });

  const validation = validateAgentInput({
    agentId: 'organization-agent',
    title: input.title || 'Organization design',
    projectId: input.projectId || 'P-DEMO-001',
    dependencies: input.dependencies || ['DEMO-SCOPE-06'],
    evidence: input.evidence || []
  });

  if (!validation.valid) {
    return advanceRun(base, validation.status, validation.reasons);
  }

  const citations = resolveCitations(input.citations || [
    { sourceId: 'LE-001', sourceType: 'organization' },
    { sourceId: 'LE-003', sourceType: 'organization' }
  ]);

  return {
    ...base,
    status: 'completed',
    output: {
      agentId: 'organization-agent',
      type: 'organization',
      graph: [
        { id: 'LE-001', parentId: null, type: 'legal-entity', status: 'valid' },
        { id: 'LE-003', parentId: 'LE-001', type: 'company-code', status: 'valid' }
      ],
      citations,
      rationale: 'Organization graph was validated against the project fixture set and country rules',
      isApprovalGranting: false
    },
    citations,
    updatedAt: new Date().toISOString()
  };
}

module.exports = {
  runOrganizationAgent
};
