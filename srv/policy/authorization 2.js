const { createMockContext, evaluateReadAccess, evaluateApprovalAccess, evaluateExportAccess } = require('../auth/demo-identity');

function buildSessionContext(sessionInput = {}) {
  const { personaId, projectId, companyCode, mode = 'development' } = sessionInput;
  return createMockContext({ personaId, projectId, companyCode, mode, session: sessionInput.session || {} });
}

function authorizeRead(sessionInput, request) {
  const context = buildSessionContext(sessionInput);
  return evaluateReadAccess(context, request || {});
}

function authorizeApproval(sessionInput, request) {
  const context = buildSessionContext(sessionInput);
  return evaluateApprovalAccess(context, request || {});
}

function authorizeExport(sessionInput, request) {
  const context = buildSessionContext(sessionInput);
  return evaluateExportAccess(context, request || {});
}

module.exports = {
  buildSessionContext,
  authorizeRead,
  authorizeApproval,
  authorizeExport
};
