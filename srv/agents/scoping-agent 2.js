const { createAgentRun, validateAgentInput, resolveCitations, advanceRun } = require('./base-agent');

function runScopingAgent(input = {}) {
  const base = createAgentRun({
    agentId: 'scoping-agent',
    input,
    goal: 'validate scope candidate set',
    toolAllowlist: ['requirement-catalog', 'project-scope-fixture', 'dependency-graph'],
    budget: 3,
    handoffOwner: 'demo.delivery.lead',
    tests: ['id-validation', 'dependency-context', 'citation-exists']
  });

  const validation = validateAgentInput({
    agentId: 'scoping-agent',
    title: input.title || 'Scope validation',
    projectId: input.projectId || 'P-DEMO-001',
    dependencies: input.dependencies || ['BR-03-009'],
    evidence: input.evidence || []
  });

  if (!validation.valid) {
    return advanceRun(base, validation.status, validation.reasons);
  }

  const citations = resolveCitations(input.citations || [
    { sourceId: 'BR-03-009', sourceType: 'requirement' },
    { sourceId: 'DEMO-SCOPE-06', sourceType: 'scope' }
  ]);

  const output = {
    agentId: 'scoping-agent',
    type: 'scope',
    proposal: {
      id: input.scopeId || 'DEMO-SCOPE-06',
      title: input.title || 'Requisition and purchase order approvals',
      projectId: input.projectId || 'P-DEMO-001',
      dependencies: input.dependencies || ['BR-03-009'],
      status: 'proposed',
      sourceRevision: input.sourceRevision || 'draft-v1'
    },
    citations,
    rationale: 'Grounded requirement and scope candidates resolved within the deterministic fixture set',
    isApprovalGranting: false
  };

  return {
    ...base,
    status: 'completed',
    output,
    citations,
    updatedAt: new Date().toISOString()
  };
}

module.exports = {
  runScopingAgent
};
