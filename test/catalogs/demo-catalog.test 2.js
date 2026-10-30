const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const {
  loadDemoCatalog,
  listOrganizationTypes,
  listScopeCandidates,
  listActivities,
  validateField,
  validateActivity
} = require('../../fixtures/catalogs/demo-catalog.js');

describe('B11 demo catalog validation', function () {
  it('loads the synthetic pilot catalog with all required counts', function () {
    const catalog = loadDemoCatalog();

    assert.equal(catalog.organizationTypes.length, 10);
    assert.equal(catalog.scopeCandidates.length, 16);
    assert.equal(catalog.activities.length, 10);
    assert.match(catalog.status, /Synthetic prototype configuration contracts/i);
    assert.match(catalog.policySource.id, /^DEMO-POLICY-/);
  });

  it('binds each activity to a synthetic policy and a requirement BR', function () {
    const activities = listActivities();

    for (const activity of activities) {
      assert.match(activity.id, /^DEMO-/);
      assert.match(activity.br, /^BR-/);
      assert.ok(activity.fields && Object.keys(activity.fields).length > 0);
      assert.ok(['blocked', 'attended', 'allowed', 'API simulation', 'UI simulation', 'upload simulation', 'read-only validation'].includes(activity.pathway));
    }
  });

  it('validates typed references and range boundaries for demo fields', function () {
    const integerCheck = validateField('days', { type: 'integer', min: 0, max: 365 }, { days: 45 });
    const invalidInteger = validateField('days', { type: 'integer', min: 0, max: 365 }, { days: 999 });
    const orgRef = validateField('companyCode', { type: 'OrganizationReference', objectType: 'CompanyCode' }, { companyCode: 'ORG-CC-1000' });
    const enumCheck = validateField('currency', { type: 'enum', values: ['INR', 'USD'] }, { currency: 'INR' });

    assert.equal(integerCheck.valid, true);
    assert.equal(invalidInteger.valid, false);
    assert.equal(orgRef.valid, true);
    assert.equal(enumCheck.valid, true);
  });

  it('validates each activity passes the field contract and keeps pathway metadata', function () {
    const activities = listActivities();
    const results = activities.map(validateActivity);

    assert.equal(results.length, 10);
    for (const result of results) {
      assert.ok(Array.isArray(result.fieldResults));
      assert.ok(result.crossRule.length > 0);
      assert.ok(['blocked', 'attended', 'allowed', 'API simulation', 'UI simulation', 'upload simulation', 'read-only validation'].includes(result.pathway));
    }
  });
});
