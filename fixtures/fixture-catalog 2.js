const fs = require('node:fs');
const path = require('node:path');

const seedData = require('./seed-data.json');

function loadSeedCatalog() {
  return JSON.parse(JSON.stringify(seedData));
}

function snapshotWorkspace(userKey = 'demo-user', workspaceKey = 'grow-demo') {
  const catalog = loadSeedCatalog();
  const snapshotKey = `${workspaceKey}:${userKey}:${catalog.seedVersion}`;

  return {
    snapshotKey,
    userKey,
    workspaceKey,
    data: {
      ...catalog,
      userKey,
      workspaceKey,
      mutableState: {
        ...catalog.mutableState,
        lastResetAt: new Date().toISOString()
      }
    }
  };
}

function resetWorkspace(snapshotKey, currentState) {
  const catalog = loadSeedCatalog();
  const current = currentState && currentState.data ? currentState.data : currentState;
  const resetState = JSON.parse(JSON.stringify(catalog));
  resetState.userKey = current && current.userKey ? current.userKey : catalog.userKey;
  resetState.workspaceKey = current && current.workspaceKey ? current.workspaceKey : catalog.workspaceKey;
  resetState.mutableState = {
    ...catalog.mutableState,
    lastResetAt: new Date().toISOString()
  };

  return {
    snapshotKey: snapshotKey || `${resetState.workspaceKey}:${resetState.userKey}:${resetState.seedVersion}`,
    userKey: resetState.userKey,
    workspaceKey: resetState.workspaceKey,
    data: resetState
  };
}

function refreshMutableState(baseState, currentMutableState) {
  const previous = baseState && baseState.mutableState ? baseState.mutableState : {};
  const incoming = currentMutableState || {};

  return {
    ...previous,
    ...incoming,
    selectedProjectId: incoming.selectedProjectId || previous.selectedProjectId,
    selectedScopeId: incoming.selectedScopeId || previous.selectedScopeId,
    selectedActivityId: incoming.selectedActivityId || previous.selectedActivityId
  };
}

module.exports = {
  loadSeedCatalog,
  snapshotWorkspace,
  resetWorkspace,
  refreshMutableState
};
