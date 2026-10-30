sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  var DEMO_PROJECT = {
    projectId: "NORTHSTAR-DEMO",
    projectName: "Northstar Finance Transformation",
    country: "DE",
    status: "On track",
    summary: "Program is tracking within executive tolerance with controlled execution risk and clear ownership.",
    owners: [
      { name: "A. Chen", role: "Delivery Lead" },
      { name: "M. Rahman", role: "Finance Approver" },
      { name: "L. Schmidt", role: "Release Manager" }
    ],
    legalEntities: [
      { id: "DE-01", country: "DE", status: "Ready", state: "Success" },
      { id: "US-02", country: "US", status: "Review", state: "Warning" },
      { id: "FR-04", country: "FR", status: "Ready", state: "Success" }
    ],
    readiness: {
      programHealth: 82,
      valueImpact: 4.2,
      governance: 96,
      deployment: 94,
      riskExposure: 12,
      blockers: 3
    },
    phases: [
      { id: 1, name: "Discover", description: "Business goals and architecture fit confirmed", state: "Success", statusText: "Complete" },
      { id: 2, name: "Prepare", description: "Ownership, setup, and target context aligned", state: "Success", statusText: "Complete" },
      { id: 3, name: "Integrate", description: "System and document readiness validated", state: "Success", statusText: "Complete" },
      { id: 4, name: "Scope", description: "Requirements and process fit mapped", state: "Information", statusText: "Active" },
      { id: 5, name: "Configure", description: "Value changes and dependency checks under review", state: "Information", statusText: "Active" },
      { id: 6, name: "Deploy", description: "Run control, verification and reconciliation", state: "Warning", statusText: "Watch" },
      { id: 7, name: "Validate", description: "Evidence, pilot handover and quality gate", state: "Warning", statusText: "Watch" }
    ],
    decisions: [
      { title: "Approve staged go-live", detail: "Release readiness remains within tolerance and is conditioned on control checks." },
      { title: "Confirm support model", detail: "Operational ownership assigned to the event support group." },
      { title: "Align executive sponsor", detail: "Final governance review pending with no unresolved critical blocker." }
    ],
    nextTasks: [
      { title: "Review scope", owner: "Functional Consultant", due: "Due today", phase: "Scope", status: "In review", state: "Warning" },
      { title: "Finalize configuration package", owner: "Configuration Lead", due: "Due tomorrow", phase: "Configure", status: "Ready for approval", state: "Success" },
      { title: "Close deployment exception", owner: "Release Manager", due: "Due this week", phase: "Deploy", status: "Monitoring", state: "Information" }
    ],
    valueLevers: [
      { title: "Manual effort saved", metric: "42% reduction", value: "42", scale: "%", state: "Good" },
      { title: "Rework avoided", metric: "18.4 hours", value: "18.4", scale: "h", state: "Good" },
      { title: "Time to value", metric: "-31 days", value: "31", scale: "d", state: "Good" },
      { title: "Executive confidence", metric: "High", value: "92", scale: "%", state: "Good" }
    ]
  };

  return {
    createProjectModel: function () {
      return new JSONModel(DEMO_PROJECT);
    }
  };
});