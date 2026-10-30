const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { Projects, Approvals } = this.entities;

  this.on('ping', async () => 'GROW CAP mock backend is ready');

  this.on('READ', Projects, async () => [
    { ID: 'P-100', name: 'Demo project', status: 'Ready' }
  ]);

  this.on('READ', Approvals, async () => [
    { ID: 'A-100', project_ID: 'P-100', state: 'Pending' }
  ]);
});
