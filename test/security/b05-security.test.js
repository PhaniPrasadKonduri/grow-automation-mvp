const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const {
  buildSessionContext,
  authorizeRead,
  authorizeApproval,
  authorizeExport
} = require('../../srv/policy/authorization');

describe('B05 persona and project scope policy', function () {
  it('allows read access only for the persona project and organization scope', function () {
    const allowed = authorizeRead({ personaId: 'deliveryLead', projectId: 'P-DEMO-001', companyCode: '1000' }, { projectId: 'P-DEMO-001', companyCode: '1000' });
    const denied = authorizeRead({ personaId: 'deliveryLead', projectId: 'P-DEMO-001', companyCode: '1000' }, { projectId: 'P-DEMO-001', companyCode: '9999' });

    assert.equal(allowed.allowed, true);
    assert.equal(denied.allowed, false);
    assert.equal(denied.auditEvent, 'DENY_READ_COMPANY');
  });

  it('denies self approval and missing project scope', function () {
    const selfApproval = authorizeApproval({ personaId: 'financeApprover', projectId: 'P-DEMO-001', companyCode: '1000' }, { projectId: 'P-DEMO-001', actorId: 'financeApprover', approverId: 'financeApprover' });
    const wrongProject = authorizeApproval({ personaId: 'financeApprover', projectId: 'P-DEMO-001', companyCode: '1000' }, { projectId: 'P-DEMO-002', actorId: 'demo.owner', approverId: 'financeApprover' });

    assert.equal(selfApproval.allowed, false);
    assert.equal(selfApproval.reason, 'Self approval is denied');
    assert.equal(wrongProject.allowed, false);
  });

  it('only allows audit export when the persona has explicit entitlement', function () {
    const permitted = authorizeExport({ personaId: 'auditor', projectId: 'P-DEMO-001', companyCode: '1000' }, { projectId: 'P-DEMO-001', canExportAudit: true });
    const denied = authorizeExport({ personaId: 'supportOperator', projectId: 'P-DEMO-001', companyCode: '1000' }, { projectId: 'P-DEMO-001', canExportAudit: true });

    assert.equal(permitted.allowed, true);
    assert.equal(denied.allowed, false);
  });

  it('requires development mode for mock identity and rejects non-development contexts', function () {
    const context = buildSessionContext({ personaId: 'deliveryLead', projectId: 'P-DEMO-001', companyCode: '1000', mode: 'development' });
    assert.equal(context.isDevelopmentMode, true);
    assert.equal(context.persona.id, 'deliveryLead');

    assert.throws(() => {
      buildSessionContext({ personaId: 'deliveryLead', projectId: 'P-DEMO-001', companyCode: '1000', mode: 'production' });
    }, /Demo identity is only valid in development mode/);
  });
});
