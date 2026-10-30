const { normalizeAdapterInput, OPERATION_CLASSIFICATIONS } = require('../contracts');

function capability(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    supported: true,
    adapter: 'leanix',
    target: cfg.targetId,
    operationTypes: [OPERATION_CLASSIFICATIONS.API, OPERATION_CLASSIFICATIONS.UI],
    status: 'ready'
  };
}

function validate(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (!cfg.projectId || !cfg.targetId) {
    return { valid: false, reason: 'LeanIX requires project and target' };
  }
  return { valid: true, reason: 'LeanIX validation passed', correlationId: cfg.correlationId };
}

function snapshot(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'leanix',
    projectId: cfg.projectId,
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    factSheet: 'illustrative-application-record',
    lifecycle: 'simulated',
    classification: OPERATION_CLASSIFICATIONS.UI
  };
}

function dryRun(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: true,
    adapterId: 'leanix',
    actionKey: cfg.actionKey,
    status: 'dry-run-verified',
    classification: OPERATION_CLASSIFICATIONS.UI,
    payload: { factSheet: 'illustrative-application-record' }
  };
}

function execute(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: true,
    adapterId: 'leanix',
    correlationId: cfg.correlationId,
    status: 'verified',
    result: 'fact-sheet-synced'
  };
}

function status(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'leanix',
    correlationId: cfg.correlationId,
    status: cfg.payload && cfg.payload.conflict ? 'conflict' : 'observed',
    attempts: cfg.attempts || 1
  };
}

function reconcile(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'leanix',
    correlationId: cfg.correlationId,
    status: 'verified',
    mappingMatches: !(cfg.payload && cfg.payload.conflict),
    factSheet: 'illustrative-application-record'
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
