const { registerAdapter, getAdapter, buildAdapterDescriptor, OPERATION_CLASSIFICATIONS } = require('../adapters/adapter-registry');
const cloudAlm = require('../adapters/mock/cloud-alm-adapter');
const cbc = require('../adapters/mock/cbc-adapter');
const s4 = require('../adapters/mock/s4-adapter');
const signavio = require('../adapters/mock/signavio-adapter');
const leanix = require('../adapters/mock/leanix-adapter');

registerAdapter('cloud-alm', cloudAlm);
registerAdapter('cbc', cbc);
registerAdapter('s4hana-public-cloud', s4);
registerAdapter('signavio', signavio);
registerAdapter('leanix', leanix);

function getActionId(input = {}) {
  const { projectId = 'P-DEMO-001', adapterId = 'cloud-alm', operation = 'read' } = input;
  return `${projectId}:${adapterId}:${operation}:${String((input.actionKey || 'draft')).slice(0, 10)}`;
}

function createExecutionPlan(input = {}) {
  const normalized = { ...input };
  const adapter = getAdapter(normalized.adapterId);
  if (!adapter) {
    return {
      adapterId: normalized.adapterId,
      supported: false,
      reason: 'Unknown adapter',
      status: 'unknown',
      actionId: getActionId(normalized)
    };
  }

  const descriptor = buildAdapterDescriptor(normalized.adapterId, normalized);
  const validation = adapter.validate ? adapter.validate(normalized) : { valid: true, reason: 'No validation rule' };
  const snapshot = adapter.snapshot ? adapter.snapshot(normalized) : { snapshot: 'none' };

  const plan = {
    actionId: getActionId(normalized),
    adapterId: normalized.adapterId,
    projectId: normalized.projectId,
    targetId: normalized.targetId,
    correlationId: normalized.correlationId || `corr-${Date.now()}`,
    status: validation.valid ? 'planned' : 'blocked',
    supported: descriptor.supported,
    classification: normalized.classification || descriptor.classification || OPERATION_CLASSIFICATIONS.API,
    validation,
    snapshot,
    dryRun: null,
    execute: null,
    reconcile: null
  };

  if (!validation.valid) {
    return plan;
  }

  plan.dryRun = adapter.dryRun ? adapter.dryRun(normalized) : { ok: true, status: 'dry-run-verified' };
  return plan;
}

function executeAdapterAction(input = {}) {
  const plan = createExecutionPlan(input);
  if (!plan.supported || plan.status === 'blocked') {
    return {
      ...plan,
      ok: false,
      reason: plan.validation ? plan.validation.reason : 'Execution is blocked',
      status: 'blocked'
    };
  }

  const adapter = getAdapter(input.adapterId);
  const dryRun = adapter.dryRun ? adapter.dryRun(input) : { ok: true, status: 'dry-run-verified' };
  const executed = adapter.execute ? adapter.execute({ ...input, targetLock: input.targetLock, attempts: (input.attempts || 0) + 1 }) : { ok: true, status: 'verified' };
  const reconciled = adapter.reconcile ? adapter.reconcile({ ...input, targetLock: input.targetLock, attempts: (input.attempts || 0) + 1 }) : { status: 'verified', readbackMatches: true };

  return {
    ...plan,
    ok: dryRun.ok && executed.ok && reconciled.readbackMatches !== false,
    dryRun,
    execute: executed,
    reconcile: reconciled,
    status: executed.ok && reconciled.readbackMatches !== false ? 'verified' : executed.status || 'unknown',
    evidence: {
      correlationId: plan.correlationId,
      privilegedAttempt: true,
      redacted: true,
      target: input.targetId
    }
  };
}

module.exports = {
  getActionId,
  createExecutionPlan,
  executeAdapterAction,
  OPERATION_CLASSIFICATIONS
};
