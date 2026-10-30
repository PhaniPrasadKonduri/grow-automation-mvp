const { normalizeAdapterInput, OPERATION_CLASSIFICATIONS } = require('../contracts');

function capability(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    supported: true,
    adapter: 'cbc',
    target: cfg.targetId,
    operationTypes: [OPERATION_CLASSIFICATIONS.API, OPERATION_CLASSIFICATIONS.ATTENDED],
    status: 'ready'
  };
}

function validate(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (cfg.payload && cfg.payload.blocked === true) {
    return { valid: false, reason: 'CBC payload is blocked by policy' };
  }
  return { valid: true, reason: 'CBC validation passed', correlationId: cfg.correlationId };
}

function snapshot(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'cbc',
    targetId: cfg.targetId,
    projectId: cfg.projectId,
    correlationId: cfg.correlationId,
    snapshot: {
      scope: 'organization-and-values',
      lastObserved: '2026-10-30T00:00:00Z',
      authoritative: false
    }
  };
}

function dryRun(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: true,
    adapterId: 'cbc',
    targetId: cfg.targetId,
    actionKey: cfg.actionKey,
    status: 'dry-run-verified',
    classification: OPERATION_CLASSIFICATIONS.API,
    evidence: [{ type: 'simulation', value: 'CBC dry run executed' }]
  };
}

function execute(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (cfg.payload && cfg.payload.ambiguous === true) {
    return {
      ok: false,
      adapterId: 'cbc',
      targetId: cfg.targetId,
      status: 'partial-failure',
      correlationId: cfg.correlationId,
      reason: 'Ambiguous write blocked'
    };
  }
  return {
    ok: true,
    adapterId: 'cbc',
    targetId: cfg.targetId,
    status: 'verified',
    correlationId: cfg.correlationId,
    result: 'configuration-request-accepted'
  };
}

function status(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'cbc',
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    status: cfg.targetLock === 'paused' ? 'paused' : 'ready',
    attempts: cfg.attempts || 1
  };
}

function reconcile(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'cbc',
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    status: 'verified',
    readbackMatches: true,
    observedValues: cfg.payload || {}
  };
}

module.exports = {
  capability,
  validate,
  snapshot,
  dryRun,
  execute,
  status,
  reconcile
};
