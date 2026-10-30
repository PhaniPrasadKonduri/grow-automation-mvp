const { normalizeAdapterInput, OPERATION_CLASSIFICATIONS } = require('../contracts');

function capability(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    supported: true,
    adapter: 'signavio',
    target: cfg.targetId,
    operationTypes: [OPERATION_CLASSIFICATIONS.API, OPERATION_CLASSIFICATIONS.UI],
    status: 'ready'
  };
}

function validate(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (!cfg.projectId) {
    return { valid: false, reason: 'Signavio requires project scope' };
  }
  return { valid: true, reason: 'Signavio validation passed', correlationId: cfg.correlationId };
}

function snapshot(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'signavio',
    projectId: cfg.projectId,
    correlationId: cfg.correlationId,
    process: 'illustrative-local-flow',
    source: 'local-synthetic',
    version: 'v1',
    classification: OPERATION_CLASSIFICATIONS.UI
  };
}

function dryRun(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: true,
    adapterId: 'signavio',
    actionKey: cfg.actionKey,
    status: 'dry-run-verified',
    classification: OPERATION_CLASSIFICATIONS.UI,
    payload: { process: 'illustrative-local-flow', readOnly: true }
  };
}

function execute(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: true,
    adapterId: 'signavio',
    correlationId: cfg.correlationId,
    status: 'verified',
    result: 'process-reference-opened'
  };
}

function status(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'signavio',
    correlationId: cfg.correlationId,
    status: 'observed',
    attempts: cfg.attempts || 1
  };
}

function reconcile(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'signavio',
    correlationId: cfg.correlationId,
    status: 'verified',
    processMatches: true,
    source: 'local-synthetic'
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
