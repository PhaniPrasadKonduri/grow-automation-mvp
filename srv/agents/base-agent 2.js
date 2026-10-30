const crypto = require('node:crypto');

function createAgentRun({
  agentId,
  projectId = 'P-DEMO-001',
  input = {},
  sourceRevision = 'draft-v1',
  goal = 'resolve proposal',
  toolAllowlist = ['read-only-fixture', 'validated-graph'],
  budget = 2,
  handoffOwner = 'demo.delivery.lead',
  tests = []
} = {}) {
  const runId = `${agentId}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  const intentHash = crypto.createHash('sha256').update(JSON.stringify({ agentId, projectId, sourceRevision, goal, input })).digest('hex');

  return {
    runId,
    agentId,
    projectId,
    sourceRevision,
    goal,
    status: 'planned',
    input: { ...input },
    output: null,
    toolAllowlist: [...toolAllowlist],
    budget,
    handoffOwner,
    citations: [],
    tests: [...tests],
    rationale: 'Bounded deterministic run with local fixture evidence only',
    model: 'prototype-deterministic-agent',
    intentHash,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function validateAgentInput({ agentId, title, projectId, dependencies = [], evidence = [] } = {}) {
  if (!agentId || !title || !projectId) {
    return { valid: false, reasons: ['Agent ID, title and project ID are required'], status: 'blocked' };
  }

  if (!Array.isArray(dependencies)) {
    return { valid: false, reasons: ['Dependencies must be an array'], status: 'blocked' };
  }

  if (evidence && evidence.some((entry) => entry && entry.status === 'unsupported')) {
    return { valid: false, reasons: ['Unsupported evidence is not allowed'], status: 'abstained' };
  }

  return { valid: true, reasons: [], status: 'ready' };
}

function resolveCitations(citations = []) {
  if (!Array.isArray(citations)) {
    return [];
  }

  return citations.map((citation) => ({
    ...citation,
    resolved: Boolean(citation && citation.sourceId),
    sourceType: citation && citation.sourceType ? citation.sourceType : 'fixture'
  }));
}

function advanceRun(run, nextState, reasons = []) {
  if (!run) {
    return { status: 'blocked', reason: 'Run required' };
  }

  return {
    ...run,
    status: nextState,
    reasons: Array.isArray(reasons) ? reasons : [String(reasons || 'Decision blocked')],
    updatedAt: new Date().toISOString(),
    rationale: nextState === 'abstained' ? 'Unsupported evidence or invalid inputs prevented action' : run.rationale
  };
}

module.exports = {
  createAgentRun,
  validateAgentInput,
  resolveCitations,
  advanceRun
};
