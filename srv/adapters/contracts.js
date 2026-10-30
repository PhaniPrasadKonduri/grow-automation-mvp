const OPERATION_CLASSIFICATIONS = {
  API: 'API',
  UPLOAD: 'UPLOAD',
  UI: 'UI',
  ATTENDED: 'ATTENDED',
  UNSUPPORTED: 'UNSUPPORTED'
};

function normalizeAdapterInput(input = {}) {
  return {
    adapterId: input.adapterId || 'unknown-adapter',
    projectId: input.projectId || 'P-DEMO-001',
    targetId: input.targetId || 'S4-PILOT',
    correlationId: input.correlationId || `corr-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    operation: input.operation || 'read',
    classification: input.classification || OPERATION_CLASSIFICATIONS.API,
    payload: input.payload || {},
    approvedIntent: input.approvedIntent || null,
    actionKey: input.actionKey || `action-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    targetLock: input.targetLock || null,
    evidence: Array.isArray(input.evidence) ? input.evidence : [],
    attempts: Number(input.attempts || 0),
    status: input.status || 'ready'
  };
}

module.exports = {
  OPERATION_CLASSIFICATIONS,
  normalizeAdapterInput
};
