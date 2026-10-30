const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const {
  loadSeedCatalog,
  snapshotWorkspace,
  resetWorkspace,
  refreshMutableState
} = require('../../fixtures/fixture-catalog.js');

describe('B04 fixture catalog', function () {
  it('contains a synthetic catalog with the required counts and labels', function () {
    const catalog = loadSeedCatalog();

    assert.equal(catalog.synthetic, true);
    assert.equal(catalog.projects.length, 2);
    assert.equal(catalog.legalEntities.length, 10);
    assert.equal(new Set(catalog.legalEntities.map((entity) => entity.country)).size, 5);
    assert.equal(catalog.scopeCandidates.length, 16);
    assert.equal(catalog.configurationActivities.length, 10);
    assert.match(catalog.label, /Synthetic fixture catalog/i);

    const activityIds = catalog.configurationActivities.map((item) => item.id);
    for (const id of activityIds) {
      assert.match(id, /^DEMO-CA-/);
    }
  });

  it('preserves cross-reference integrity across project and organization data', function () {
    const catalog = loadSeedCatalog();
    const projectIds = new Set(catalog.projects.map((project) => project.id));
    const legalEntityIds = new Set(catalog.legalEntities.map((entity) => entity.id));
    const assignmentProjectIds = new Set(catalog.organizationAssignments.map((assignment) => assignment.projectId));
    const scopeProjectIds = new Set(catalog.scopeCandidates.map((scope) => scope.projectId));
    const activityProjectIds = new Set(catalog.configurationActivities.map((activity) => activity.projectId));

    assert.ok(projectIds.has('P-DEMO-001'));
    assert.ok(projectIds.has('P-DEMO-002'));
    assert.ok(assignmentProjectIds.has('P-DEMO-001'));
    assert.ok(assignmentProjectIds.has('P-DEMO-002'));
    assert.ok(scopeProjectIds.has('P-DEMO-001'));
    assert.ok(activityProjectIds.has('P-DEMO-001'));

    for (const assignment of catalog.organizationAssignments) {
      assert.ok(projectIds.has(assignment.projectId));
      assert.ok(legalEntityIds.has(assignment.legalEntityId));
    }

    for (const activity of catalog.configurationActivities) {
      assert.ok(projectIds.has(activity.projectId));
      assert.ok(catalog.policySource.id === activity.policyId || catalog.policySource.id === 'DEMO-POLICY-001');
    }
  });

  it('supports reset and mutable refresh behavior with stable IDs', function () {
    const snapshot = snapshotWorkspace('demo-user', 'grow-demo');
    const originalProjectIds = snapshot.data.projects.map((project) => project.id);

    const mutated = JSON.parse(JSON.stringify(snapshot.data));
    mutated.projects[0].status = 'Modified';
    mutated.mutableState.selectedProjectId = 'P-DEMO-002';
    mutated.mutableState.selectedActivityId = 'DEMO-CA-10';

    const reset = resetWorkspace(snapshot.snapshotKey, mutated);
    assert.deepEqual(reset.data.projects.map((project) => project.id), originalProjectIds);
    assert.equal(reset.data.projects[0].status, 'Ready');
    assert.equal(reset.data.mutableState.selectedProjectId, 'P-DEMO-001');

    const refreshed = refreshMutableState(snapshot.data, mutated.mutableState);
    assert.equal(refreshed.selectedProjectId, 'P-DEMO-002');
    assert.equal(refreshed.selectedActivityId, 'DEMO-CA-10');
  });
});
