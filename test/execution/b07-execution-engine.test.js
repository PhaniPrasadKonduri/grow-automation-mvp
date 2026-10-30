const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const { createExecutionPlan, executeAdapterAction, OPERATION_CLASSIFICATIONS } = require('../../srv/execution/dispatcher');

describe('B07 deterministic integration and execution engine', function () {
  it('builds a plan for a supported adapter and keeps the action key stable', function () {
    const plan = createExecutionPlan({
      adapterId: 'cloud-alm',
      projectId: 'P-DEMO-001',
      targetId: 'S4-PILOT',
      correlationId: 'corr-123',
      operation: 'create-task',
      classification: OPERATION_CLASSIFICATIONS.API,
      actionKey: 'task-001'
    });

    assert.equal(plan.supported, true);
    assert.equal(plan.status, 'planned');
    assert.equal(plan.actionId.includes('P-DEMO-001:cloud-alm:create-task'), true);
  });

  it('blocks invalid inputs before a real target write and records the reason', function () {
    const plan = createExecutionPlan({
      adapterId: 'cbc',
      projectId: '',
      targetId: '',
      operation: 'approve',
      payload: { blocked: true }
    });

    assert.equal(plan.status, 'blocked');
    assert.match(plan.validation.reason, /requires|blocked|validation/i);
  });

  it('prevents ambiguous writes and surfaces an unknown/partial-failure branch', function () {
    const result = executeAdapterAction({
      adapterId: 'cbc',
      projectId: 'P-DEMO-001',
      targetId: 'S4-PILOT',
      operation: 'apply',
      payload: { ambiguous: true },
      targetLock: 'unlocked',
      attempts: 1,
      actionKey: 'cbc-ambiguous'
    });

    assert.equal(result.ok, false);
    assert.equal(result.execute.status, 'partial-failure');
  });

  it('requires verified readback for success and can report an unknown outcome', function () {
    const unknown = executeAdapterAction({
      adapterId: 's4hana-public-cloud',
      projectId: 'P-DEMO-001',
      targetId: 'S4-PILOT',
      operation: 'read',
      payload: { unknown: true },
      attempts: 1,
      actionKey: 's4-unknown'
    });

    const verified = executeAdapterAction({
      adapterId: 'cloud-alm',
      projectId: 'P-DEMO-001',
      targetId: 'S4-PILOT',
      operation: 'create-task',
      actionKey: 'calm-verified',
      attempts: 1
    });

    assert.equal(unknown.execute.status, 'unknown');
    assert.equal(verified.ok, true);
    assert.equal(verified.reconcile.status, 'verified');
  });
});
