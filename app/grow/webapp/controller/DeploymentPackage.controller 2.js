sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oPackageModel = new JSONModel({
    packageName: "Finance automation package",
    packageId: "pkg-01",
    items: [
      { actionKey: "A-01", target: "S/4HANA", stable: "Stable", state: "Success", status: "Pass" },
      { actionKey: "A-02", target: "Org design", stable: "Stable", state: "Success", status: "Pass" },
      { actionKey: "A-03", target: "Scope baseline", stable: "Pending", state: "Warning", status: "Blocker" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.DeploymentPackage", {
    onInit: function () {
      this.getView().setModel(oPackageModel, "package");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P12", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", nodeId: "node-global-parent" });
      }
    },

    onBuildPackage: function () {
      MessageToast.show("Package built with ordered manifest and stable action keys. Target checks are preserved.");
    },

    onDryRun: function () {
      MessageToast.show("Dry run complete: validation passed for eligible pathways and blocked on stale or missing approvals.");
    },

    onReviewBlockers: function () {
      MessageToast.show("Blocker review opened: stale snapshot and missing approval conditions are visible.");
    },

    onRequestReleaseAuthorization: function () {
      this.getOwnerComponent().getRouter().navTo("P16", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      MessageToast.show("Release authorization request created in approvals.");
    },

    onExecuteSimulation: function () {
      this.getOwnerComponent().getRouter().navTo("P19", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", runId: "deployment-run-01" });
      MessageToast.show("Simulation started only after policy, approval and target checks passed.");
    }
  });
});
