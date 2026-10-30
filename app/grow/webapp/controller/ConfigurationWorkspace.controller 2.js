sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oConfigModel = new JSONModel({
    bannerType: "Information",
    bannerText: "Configuration values are ready for review; 2 activities need validation and 1 pathway is pending ownership.",
    activities: [
      { activityId: "ACT-101", target: "Finance posting", pathway: "API upload", status: "Ready", statusState: "Success", owner: "Configuration Consultant" },
      { activityId: "ACT-102", target: "Org mapping", pathway: "Attended flow", status: "Needs updates", statusState: "Warning", owner: "Finance Approver" },
      { activityId: "ACT-103", target: "Tax mapping", pathway: "API upload", status: "Blocked", statusState: "Error", owner: "Configuration Consultant" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.ConfigurationWorkspace", {
    onInit: function () {
      this.getView().setModel(oConfigModel, "config");
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

    onGenerateValues: function () {
      oConfigModel.setProperty("/bannerType", "Success");
      oConfigModel.setProperty("/bannerText", "Configuration agent generated values from grounded requirements and verified structure.");
      MessageToast.show("Values generated for the pilot activity set.");
    },

    onOpenActivity: function () {
      var sProjectId = this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project";
      this.getOwnerComponent().getRouter().navTo("P14", { id: sProjectId, activityId: "ACT-101" });
      MessageToast.show("Opened activity ACT-101 details.");
    },

    onFilterPathway: function () {
      oConfigModel.setProperty("/bannerType", "Information");
      oConfigModel.setProperty("/bannerText", "Pathway filter applied: API upload rows are prioritized; attended flow remains available for human review.");
      MessageToast.show("Pathway filter updated.");
    },

    onValidateSet: function () {
      oConfigModel.setProperty("/bannerType", "Warning");
      oConfigModel.setProperty("/bannerText", "Field and dependency checks show 1 unresolved local requirement in tax mapping and 1 blocked API dependency.");
      MessageToast.show("Validation set completed with blockers and dependency warnings.");
    },

    onSubmitChangeSet: function () {
      var sProjectId = this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project";
      this.getOwnerComponent().getRouter().navTo("P16", { id: sProjectId });
      MessageToast.show("Change set submitted and routed for approval.");
    },

    onSelectActivity: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("config");
      var oActivity = oContext && oContext.getObject();
      if (!oActivity) {
        return;
      }

      this.getOwnerComponent().getRouter().navTo("P14", {
        id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project",
        activityId: oActivity.activityId
      });
      MessageToast.show("Selected activity: " + oActivity.activityId + ".");
    }
  });
});
