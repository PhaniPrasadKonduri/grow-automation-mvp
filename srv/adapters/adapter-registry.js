const { normalizeAdapterInput, OPERATION_CLASSIFICATIONS } = require('./contracts');

const adapterRegistry = new Map();

function registerAdapter(adapterId, adapter) {
  adapterRegistry.set(adapterId, adapter);
}

function getAdapter(adapterId) {
  return adapterRegistry.get(adapterId) || null;
}

function listAdapters() {
  return Array.from(adapterRegistry.keys());
}

function buildAdapterDescriptor(adapterId, input = {}) {
  const cfg = normalizeAdapterInput(input);
  const adapter = getAdapter(adapterId);

  if (!adapter) {
    return {
      adapterId,
      supported: false,
      reason: 'Adapter not registered',
      capability: { supported: false },
      validate: false,
      operation: cfg.operation,
      classification: cfg.classification,
      status: 'unknown'
    };
  }

  const capability = adapter.capability ? adapter.capability(cfg) : { supported: true };
  return {
    adapterId,
    supported: Boolean(capability.supported !== false),
    reason: capability.reason || 'Supported local mock adapter',
    capability,
    validate: Boolean(adapter.validate),
    operation: cfg.operation,
    classification: cfg.classification,
    status: 'ready'
  };
}

module.exports = {
  adapterRegistry,
  registerAdapter,
  getAdapter,
  listAdapters,
  buildAdapterDescriptor,
  OPERATION_CLASSIFICATIONS
};
