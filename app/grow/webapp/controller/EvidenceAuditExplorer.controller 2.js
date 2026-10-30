sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oAuditModel = new JSONModel({
    count: 4,
    bannerType: "Information",
    bannerText: "Authorized evidence events are visible and correlated to the current project package.",
    events: [
      { actor: "Release Manager", time: "2026-10-30 08:12", artifact: "Approval payload", correlation: "corr-2041", status: "Approved", statusState: "Success" },
      { actor: "Deployment Operator", time: "2026-10-30 08:14", artifact: "Readback snapshot", correlation: "corr-2041", status: "Unknown", statusState: "Warning" },
      { actor: "Integration Operator", time: "2026-10-30 08:18", artifact: "Exception log", correlation: "corr-5170", status: "Recovered", statusState: "Success" },
      { actor: "Auditor", time: "2026-10-30 08:20", artifact: "Evidence package", correlation: "AUD-01", status: "Exported", statusState: "Information" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.EvidenceAuditExplorer", {
    onInit: function () {
      this.getView().setModel(oAuditModel, "audit");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P02", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onSearchAudit: function () {
      oAuditModel.setProperty("/bannerType", "Success");
      oAuditModel.setProperty("/bannerText", "Audit search returned only authorized events and stable correlation references for this project and time range.");
      MessageToast.show("Audit search completed with authorized events only.");
    },

    onOpenLineage: function () {
      oAuditModel.setProperty("/bannerType", "Information");
      oAuditModel.setProperty("/bannerText", "Lineage was traversed from requirement to proposal, approval, action and observation without exposing restricted values.");
      MessageToast.show("Artifact lineage opened.");
    },

    onInspectRedaction: function () {
      oAuditModel.setProperty("/bannerType", "Warning");
      oAuditModel.setProperty("/bannerText", "Restricted field policy is visible without exposing the hidden confidential value.");
      MessageToast.show("Redaction policy inspection completed.");
    },

    onExportBundle: function () {
      oAuditModel.setProperty("/bannerType", "Success");
      oAuditModel.setProperty("/bannerText", "Evidence bundle exported with manifest, simulation label and current project correlation metadata.");
      MessageToast.show("Evidence bundle exported successfully.");
    },

    onSelectEvent: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("audit");
      var oEventItem = oContext && oContext.getObject();
      if (!oEventItem) {
        return;
      }

      oAuditModel.setProperty("/bannerText", "Selected event for " + oEventItem.artifact + " has correlation " + oEventItem.correlation + ".");
      MessageToast.show("Selected event: " + oEventItem.artifact + ".");
    }
  });
});
