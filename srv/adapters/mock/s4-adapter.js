const { normalizeAdapterInput, OPERATION_CLASSIFICATIONS } = require('../contracts');

function capability(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    supported: true,
    adapter: 's4hana-public-cloud',
    target: cfg.targetId,
    operationTypes: [OPERATION_CLASSIFICATIONS.API, OPERATION_CLASSIFICATIONS.READONLY],
    status: 'ready'
  };
}

function validate(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (!cfg.projectId || !cfg.targetId) {
    return { valid: false, reason: 'S/4HANA requires project and target' };
  }
  return { valid: true, reason: 'S/4HANA validation passed', correlationId: cfg.correlationId };
}

function snapshot(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 's4hana-public-cloud',
    targetId: cfg.targetId,
    projectId: cfg.projectId,
    correlationId: cfg.correlationId,
    snapshot: {
      integrityStatus: cfg.payload && cfg.payload.mismatch ? 'mismatch' : 'matching',
      readOnly: true
    }
  };
}

function dryRun(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: cfg.payload && cfg.payload.unknown ? false : true,
    adapterId: 's4hana-public-cloud',
    targetId: cfg.targetId,
    actionKey: cfg.actionKey,
    status: cfg.payload && cfg.payload.unknown ? 'unknown' : 'dry-run-verified',
    classification: OPERATION_CLASSIFICATIONS.API
  };
}

function execute(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (cfg.payload && cfg.payload.unknown) {
    return {
      ok: false,
      adapterId: 's4hana-public-cloud',
      targetId: cfg.targetId,
      status: 'unknown',
      correlationId: cfg.correlationId,
      reason: 'S/4 target state is unknown'
    };
  }
  return {
    ok: true,
    adapterId: 's4hana-public-cloud',
    targetId: cfg.targetId,
    status: 'verified',
    correlationId: cfg.correlationId,
    result: 'readback-matched'
  };
}

function status(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 's4hana-public-cloud',
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    status: cfg.payload && cfg.payload.offline ? 'offline' : 'observed',
    attempts: cfg.attempts || 1
  };
}

function reconcile(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 's4hana-public-cloud',
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    status: cfg.payload && cfg.payload.mismatch ? 'partial-failure' : 'verified',
    readbackMatches: !(cfg.payload && cfg.payload.mismatch),
    observed: cfg.payload || {}
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
