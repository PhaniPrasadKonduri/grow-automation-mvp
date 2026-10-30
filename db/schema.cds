namespace grow;

// Shared domain types used across the prototype

type ProposalState : String enum {
  Draft;
  Validating;
  ReviewReady;
  Submitted;
  Approved;
  Returned;
  Rejected;
};

type ApprovalState : String enum {
  Pending;
  Approved;
  Returned;
  Rejected;
  Expired;
  Revoked;
  Stale;
};

type PackageState : String enum {
  Draft;
  Preflight;
  AwaitingRelease;
  Authorized;
  Queued;
  Running;
  Reconciling;
  Verified;
  Failed;
  Unknown;
  Attended;
  Paused;
};

type ActionState : String enum {
  Planned;
  Executing;
  Completed;
  Failed;
  Unknown;
  Paused;
  Cancelled;
};

aspect Managed {
  createdAt: DateTime;
  modifiedAt: DateTime;
}

entity Projects : Managed {
  key ID: String(64);
  client: String(120);
  name: String(200);
  status: String(40);
  projectKey: String(80);
  owner: String(120);
}

entity Landscapes : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  name: String(200);
  targetSystem: String(80);
  region: String(80);
  status: String(40);
}

entity Requirements : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  requirementKey: String(80);
  title: String(200);
  description: String(2000);
  status: String(40);
  sourceDocument_ID: Association to SourceDocuments;
}

entity SourceDocuments : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  title: String(200);
  revision: Integer;
  fileName: String(200);
  contentHash: String(128);
  documentType: String(80);
  isDraft: Boolean;
}

entity CatalogItems : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  catalogCode: String(80);
  itemType: String(80);
  title: String(200);
  version: Integer;
  isActive: Boolean;
  sourceDocument_ID: Association to SourceDocuments;
}

entity OrganizationNodes : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  parent_ID: Association to OrganizationNodes;
  nodeType: String(80);
  code: String(80);
  name: String(200);
  status: String(40);
  isActive: Boolean;
}

entity Assignments : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  organizationNode_ID: Association to OrganizationNodes;
  resourceKey: String(80);
  roleName: String(80);
  startDate: Date;
  endDate: Date;
  isPrimary: Boolean;
}

entity Proposals : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  revision: Integer;
  name: String(200);
  status: ProposalState;
  createdBy: String(120);
  sourceDocument_ID: Association to SourceDocuments;
  approvalState: ApprovalState;
  payloadHash: String(128);
}

entity ConfigurationChanges : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  proposal_ID: Association to Proposals;
  target: String(160);
  path: String(200);
  oldValue: String(500);
  newValue: String(500);
  status: String(40);
  changeType: String(80);
}

entity Approvals : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  proposal_ID: Association to Proposals;
  approver: String(120);
  targetID: String(128);
  status: ApprovalState;
  payloadHash: String(128);
  expiresAt: DateTime;
  reason: String(500);
}

entity DeploymentPackages : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  proposal_ID: Association to Proposals;
  name: String(200);
  version: Integer;
  status: PackageState;
  target: String(160);
  releaseNotes: String(2000);
}

entity Actions : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  package_ID: Association to DeploymentPackages;
  actionType: String(80);
  correlationId: String(128);
  targetKey: String(128);
  status: ActionState;
  attempts: Integer;
  lastError: String(1000);
}

entity Observations : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  action_ID: Association to Actions;
  kind: String(80);
  code: String(120);
  message: String(500);
  observedAt: DateTime;
}

entity Evidence : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  proposal_ID: Association to Proposals;
  action_ID: Association to Actions;
  type: String(80);
  location: String(250);
  checksum: String(128);
  isRedacted: Boolean;
}

entity AuditEvents : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  actor: String(120);
  action: String(80);
  summary: String(500);
  occurredAt: DateTime;
}

entity Conversations : Managed {
  key ID: String(64);
  project_ID: Association to Projects;
  createdBy: String(120);
  scope: String(80);
  message: String(1000);
  createdAt: DateTime;
}
