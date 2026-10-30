const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const schemaPath = path.join(__dirname, '../../db/schema.cds');
const schema = fs.readFileSync(schemaPath, 'utf8');

describe('B03 domain contracts', function () {
  it('defines the expected project lifecycle entities and types', function () {
    const requiredEntities = [
      'Projects',
      'Landscapes',
      'Requirements',
      'SourceDocuments',
      'CatalogItems',
      'OrganizationNodes',
      'Assignments',
      'Proposals',
      'ConfigurationChanges',
      'Approvals',
      'DeploymentPackages',
      'Actions',
      'Observations',
      'Evidence',
      'AuditEvents',
      'Conversations'
    ];

    for (const entityName of requiredEntities) {
      assert.match(schema, new RegExp(`entity ${entityName}\\s*:`), `Expected entity ${entityName} in db/schema.cds`);
    }

    assert.match(schema, /type ProposalState/);
    assert.match(schema, /type ApprovalState/);
    assert.match(schema, /type PackageState/);
    assert.match(schema, /type ActionState/);
  });

  it('keeps the approval and proposal guardrails required by the foundation contract', function () {
    assert.match(schema, /entity Projects/);
    assert.match(schema, /entity Approvals/);
    assert.match(schema, /entity Proposals/);
    assert.match(schema, /entity DeploymentPackages/);
    assert.match(schema, /entity Evidence/);
    assert.match(schema, /status: ProposalState/);
    assert.match(schema, /status: ApprovalState/);
    assert.match(schema, /approvalState: ApprovalState/);
    assert.match(schema, /sourceDocument_ID: Association to SourceDocuments/);
  });
});
