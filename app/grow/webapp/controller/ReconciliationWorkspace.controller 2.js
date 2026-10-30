sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oReconcileModel = new JSONModel({
    packageName: "Finance automation package",
    packageId: "pkg-01",
    readbackStatus: "Unknown / requires reconciliation",
    readbackState: "Warning",
    bannerType: "Warning",
    bannerText: "A seeded mismatch remains unresolved: the target observed value differs from approved intent and evidence is still incomplete.",
    differences: [
      { field: "Tax jurisdiction", approved: "DE-CH", observed: "DE", impact: "Blocked", impactState: "Error", requirement: "BR-109" },
      { field: "Posting date", approved: "2026-10-30", observed: "2026-10-28", impact: "Needs review", impactState: "Warning", requirement: "BR-111" },
      { field: "Target org unit", approved: "org-fin-02", observed: "org-fin-01", impact: "Mismatch", impactState: "Warning", requirement: "BR-117" }
    ],
    selection: {
      field: "Tax jurisdiction",
      approved: "DE-CH",
      observed: "DE",
      timestamp: "2026-10-30 08:14 UTC",
      requirements: ["BR-109", "BR-115"]
    }
  });

  return Controller.extend("com.ey.grow.prototype.controller.ReconciliationWorkspace", {
    onInit: function () {
      this.getView().setModel(oReconcileModel, "reconcile");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
      this._selectInitialDifference();
    },

    _selectInitialDifference: function () {
      var aDifferences = oReconcileModel.getProperty("/differences");
      if (aDifferences && aDifferences.length) {
        oReconcileModel.setProperty("/selection", {
          field: aDifferences[0].field,
          approved: aDifferences[0].approved,
          observed: aDifferences[0].observed,
          timestamp: "2026-10-30 08:14 UTC",
          requirements: [aDifferences[0].requirement, "BR-115"]
        });
      }
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P19", {
          id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project",
          runId: "DEP-201"
        });
      }
    },

    onRefreshObservation: function () {
      var sTime = new Date().toISOString();
      var aDifferences = oReconcileModel.getProperty("/differences");
      if (aDifferences && aDifferences.length) {
        aDifferences[1].observed = "2026-10-30";
        aDifferences[1].impact = "Resolved";
        aDifferences[1].impactState = "Success";
        oReconcileModel.setProperty("/differences", aDifferences);
      }
      oReconcileModel.setProperty("/bannerText", "Read-only check refreshed at " + sTime + ". One mismatch remains unresolved and was reclassified as a valid unknown.");
      MessageToast.show("Observation refreshed with a new timestamp; seeded mismatch status updated.");
    },

    onInspectDifference: function () {
      var oSelection = oReconcileModel.getProperty("/selection");
      if (!oSelection || !oSelection.field) {
        this._selectInitialDifference();
      }
      MessageToast.show("Approved and observed values plus affected requirements are displayed for the selected difference.");
    },

    onSelectDifference: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("reconcile");
      var oDifference = oContext && oContext.getObject();
      if (!oDifference) {
        return;
      }

      oReconcileModel.setProperty("/selection", {
        field: oDifference.field,
        approved: oDifference.approved,
        observed: oDifference.observed,
        timestamp: "2026-10-30 08:14 UTC",
        requirements: [oDifference.requirement, "BR-115"]
      });
      MessageToast.show("Difference selected: " + oDifference.field + ".");
    },

    onCreateRecoveryTask: function () {
      this.getOwnerComponent().getRouter().navTo("P21", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      MessageToast.show("Recovery task created and linked to the original deployment action.");
    },

    onAcceptVerifiedCompletion: function () {
      oReconcileModel.setProperty("/readbackStatus", "Verified completion");
      oReconcileModel.setProperty("/readbackState", "Success");
      oReconcileModel.setProperty("/bannerType", "Success");
      oReconcileModel.setProperty("/bannerText", "All required observations match and the project is ready for release continuation.");
      MessageToast.show("Verified completion accepted; project readiness updated.");
    },

    onExportReconciliation: function () {
      MessageToast.show("Fixture reconciliation report exported with source, observed status and validation summary.");
    }
  });
});
