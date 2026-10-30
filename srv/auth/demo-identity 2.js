const personas = require('../../fixtures/personas.json');

function createMockContext({ personaId, projectId, companyCode, mode = 'development', session = {} } = {}) {
  const persona = personas.find((entry) => entry.id === personaId) || null;

  if (!persona && personaId) {
    throw new Error(`Unknown persona ${personaId}`);
  }

  const context = {
    mode,
    source: 'demo-identity-provider',
    personaId: persona ? persona.id : null,
    projectId: projectId || (persona && persona.authorizedProjects[0]) || null,
    companyCode: companyCode || (persona && persona.authorizedCompanyCodes[0]) || null,
    session: {
      ...session,
      trusted: true,
      source: 'demo-identity-provider'
    },
    persona,
    isDevelopmentMode: mode === 'development'
  };

  ensureDevelopmentBoundary(context);
  return context;
}

function ensureDevelopmentBoundary(context) {
  if (!context || !context.isDevelopmentMode) {
    throw new Error('Demo identity is only valid in development mode');
  }
}

function evaluateReadableProject(context, projectId) {
  ensureDevelopmentBoundary(context);
  if (!context.persona) {
    return { allowed: false, reason: 'No persona in mock session' };
  }
  if (!projectId) {
    return { allowed: true, reason: 'No project restriction applied' };
  }
  const allowed = (context.persona.authorizedProjects || []).includes(projectId);
  return {
    allowed,
    reason: allowed ? 'Project is in the persona scope' : 'Project is outside persona scope'
  };
}

function evaluateReadAccess(context, { projectId, companyCode }) {
  ensureDevelopmentBoundary(context);
  const projectCheck = evaluateReadableProject(context, projectId);
  if (!projectCheck.allowed) {
    return { allowed: false, reason: projectCheck.reason, auditEvent: 'DENY_READ_SCOPE' };
  }

  if (companyCode && !(context.persona.authorizedCompanyCodes || []).includes(companyCode)) {
    return { allowed: false, reason: 'Company code is outside persona scope', auditEvent: 'DENY_READ_COMPANY' };
  }

  return { allowed: true, reason: 'Authorized project and company access', auditEvent: 'ALLOW_READ' };
}

function evaluateApprovalAccess(context, { projectId, actorId, approverId }) {
  ensureDevelopmentBoundary(context);
  const projectCheck = evaluateReadableProject(context, projectId);
  if (!projectCheck.allowed) {
    return { allowed: false, reason: 'Project is outside persona scope', auditEvent: 'DENY_APPROVAL_SCOPE' };
  }
  if (!approverId || approverId === actorId) {
    return { allowed: false, reason: 'Self approval is denied', auditEvent: 'DENY_SELF_APPROVAL' };
  }
  return { allowed: true, reason: 'Approved approver with project scope', auditEvent: 'ALLOW_APPROVAL' };
}

function evaluateExportAccess(context, { projectId, canExportAudit }) {
  ensureDevelopmentBoundary(context);
  const projectCheck = evaluateReadableProject(context, projectId);
  if (!projectCheck.allowed) return { allowed: false, reason: 'Project is outside persona scope' };

  const personaGrant = Boolean(context.persona && context.persona.canExportAudit === true);
  const requestGrant = Boolean(canExportAudit === true);

  if (!personaGrant || !requestGrant) {
    return { allowed: false, reason: 'Audit export entitlement missing' };
  }

  return { allowed: true, reason: 'Audit export allowed for this persona' };
}

module.exports = {
  createMockContext,
  ensureDevelopmentBoundary,
  evaluateReadableProject,
  evaluateReadAccess,
  evaluateApprovalAccess,
  evaluateExportAccess
};
