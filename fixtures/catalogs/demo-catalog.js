const fs = require('node:fs');
const path = require('node:path');

const catalogPath = path.join(__dirname, '../../docs/spec/demo-catalogs.json');
const rawCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

const organizationTypes = rawCatalog.organizationTypes || [];
const scopeCandidates = rawCatalog.scopeCandidates || [];
const activities = rawCatalog.activities || [];

function loadDemoCatalog() {
  return JSON.parse(JSON.stringify(rawCatalog));
}

function listOrganizationTypes() {
  return [...organizationTypes];
}

function listScopeCandidates() {
  return scopeCandidates.map((item) => ({ ...item }));
}

function listActivities() {
  return activities.map((activity) => ({ ...activity }));
}

function validateField(fieldName, definition, values = {}) {
  const type = definition.type;
  const proposedValue = values[fieldName];

  if (proposedValue === undefined) {
    return { valid: true, field: fieldName, reason: 'optional' };
  }

  if (type === 'string') {
    const pattern = definition.pattern;
    const candidate = String(proposedValue);
    if (pattern && !new RegExp(pattern).test(candidate)) {
      return { valid: false, field: fieldName, reason: `Value does not match pattern ${pattern}` };
    }
    return { valid: true, field: fieldName };
  }

  if (type === 'integer') {
    const num = Number(proposedValue);
    if (!Number.isInteger(num)) {
      return { valid: false, field: fieldName, reason: 'Value must be an integer' };
    }
    if (definition.min !== undefined && num < definition.min) {
      return { valid: false, field: fieldName, reason: `Value below minimum ${definition.min}` };
    }
    if (definition.max !== undefined && num > definition.max) {
      return { valid: false, field: fieldName, reason: `Value above maximum ${definition.max}` };
    }
    return { valid: true, field: fieldName };
  }

  if (type === 'decimal') {
    const num = Number(proposedValue);
    if (Number.isNaN(num)) {
      return { valid: false, field: fieldName, reason: 'Value must be numeric' };
    }
    if (definition.min !== undefined && num < definition.min) {
      return { valid: false, field: fieldName, reason: `Value below minimum ${definition.min}` };
    }
    if (definition.max !== undefined && num > definition.max) {
      return { valid: false, field: fieldName, reason: `Value above maximum ${definition.max}` };
    }
    return { valid: true, field: fieldName };
  }

  if (type === 'enum') {
    const values = definition.values || [];
    if (!values.includes(proposedValue)) {
      return { valid: false, field: fieldName, reason: 'Value is not in the allowed enum list' };
    }
    return { valid: true, field: fieldName };
  }

  if (type === 'OrganizationReference') {
    if (!proposedValue || typeof proposedValue !== 'string') {
      return { valid: false, field: fieldName, reason: 'Organization reference expected' };
    }
    const refName = definition.objectType;
    if (!refName) {
      return { valid: false, field: fieldName, reason: 'Reference type missing' };
    }
    return { valid: true, field: fieldName, objectType: refName };
  }

  if (type === 'boolean') {
    if (typeof proposedValue !== 'boolean') {
      return { valid: false, field: fieldName, reason: 'Value must be boolean' };
    }
    return { valid: true, field: fieldName };
  }

  return { valid: true, field: fieldName };
}

function validateActivity(activity) {
  const fields = activity.fields || {};
  const results = Object.entries(fields).map(([name, definition]) => {
    const value = definition.proposed ?? definition.observed;
    return validateField(name, definition, { [name]: value });
  });

  const crossRule = activity.crossRule || '';
  return {
    activityId: activity.id,
    valid: results.every((item) => item.valid) && Boolean(crossRule),
    fieldResults: results,
    crossRule,
    pathway: activity.pathway || 'unknown'
  };
}

module.exports = {
  loadDemoCatalog,
  listOrganizationTypes,
  listScopeCandidates,
  listActivities,
  validateField,
  validateActivity
};
