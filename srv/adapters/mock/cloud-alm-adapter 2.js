const { normalizeAdapterInput, OPERATION_CLASSIFICATIONS } = require('../contracts');

function capability(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    supported: true,
    adapter: 'cloud-alm',
    target: cfg.targetId,
    operationTypes: [OPERATION_CLASSIFICATIONS.API, OPERATION_CLASSIFICATIONS.UI],
    status: 'ready'
  };
}

function validate(input = {}) {
  const cfg = normalizeAdapterInput(input);
  if (!cfg.projectId || !cfg.targetId) {
    return { valid: false, reason: 'Cloud ALM requires project and target' };
  }
  return { valid: true, reason: 'Cloud ALM validation passed', correlationId: cfg.correlationId };
}

function snapshot(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'cloud-alm',
    targetId: cfg.targetId,
    projectId: cfg.projectId,
    correlationId: cfg.correlationId,
    status: 'snapshot-ready',
    approvedIntent: cfg.approvedIntent,
    operation: cfg.operation,
    classification: cfg.classification
  };
}

function dryRun(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    ok: true,
    adapterId: 'cloud-alm',
    targetId: cfg.targetId,
    actionKey: cfg.actionKey,
    status: 'dry-run-verified',
    evidence: [
      { type: 'simulated-task', value: `CA-${cfg.targetId}-DRYRUN-${cfg.actionKey.slice(0, 6)}` }
    ]
  };
}

function execute(input = {}) {
  const cfg = normalizeAdapterInput(input);
  const status = cfg.targetLock === 'paused' ? 'paused' : 'verified';
  return {
    ok: status !== 'paused',
    adapterId: 'cloud-alm',
    targetId: cfg.targetId,
    actionKey: cfg.actionKey,
    status,
    correlationId: cfg.correlationId,
    result: status === 'verified' ? 'task-created' : 'paused'
  };
}

function status(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'cloud-alm',
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    status: 'observed',
    attempts: cfg.attempts || 1
  };
}

function reconcile(input = {}) {
  const cfg = normalizeAdapterInput(input);
  return {
    adapterId: 'cloud-alm',
    targetId: cfg.targetId,
    correlationId: cfg.correlationId,
    status: 'verified',
    readbackMatches: true,
    evidence: [{ type: 'readback', value: 'matched observation and task state' }]
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
