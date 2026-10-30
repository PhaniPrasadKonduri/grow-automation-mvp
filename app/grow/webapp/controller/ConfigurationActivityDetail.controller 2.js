sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oActivityModel = new JSONModel({
    activityId: "ACT-101",
    target: "Finance posting",
    bannerType: "Information",
    bannerText: "Observed, proposed and approved values are visible; no irreversible value drift is currently detected.",
    values: [
      { field: "Tax rate", observed: "7.00%", proposed: "7.00%", approved: "7.00%", source: "BR-104 / requirement" },
      { field: "Posting template", observed: "Standard", proposed: "Standard", approved: "Standard", source: "Org mapping" },
      { field: "Settlement rule", observed: "Regional", proposed: "Global", approved: "Regional", source: "Finance approval" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.ConfigurationActivityDetail", {
    onInit: function () {
      this.getView().setModel(oActivityModel, "activity");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P13", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onEditProposedValue: function () {
      oActivityModel.setProperty("/bannerType", "Success");
      oActivityModel.setProperty("/bannerText", "Proposed value edit retained with human attribution and validated against cross-field rules.");
      MessageToast.show("Proposed value validated and retained with attribution.");
    },

    onViewEvidence: function () {
      oActivityModel.setProperty("/bannerType", "Information");
      oActivityModel.setProperty("/bannerText", "BR/source evidence and organization dependency are visible for the selected field.");
      MessageToast.show("Evidence opened for the selected configuration field.");
    },

    onExplainRisk: function () {
      oActivityModel.setProperty("/bannerType", "Warning");
      oActivityModel.setProperty("/bannerText", "Finance-sensitive settlement rule requires owner review before final save due to cross-country exposure.");
      MessageToast.show("Risk explanation displayed with required owner details.");
    },

    onRefreshObservedValues: function () {
      oActivityModel.setProperty("/values/2/proposed", "Regional");
      oActivityModel.setProperty("/bannerType", "Warning");
      oActivityModel.setProperty("/bannerText", "Observed value refresh introduced drift; the approving decision was invalidated until re-approval.");
      MessageToast.show("Observed values refreshed and approval invalidated by drift.");
    },

    onSubmitOrRevise: function () {
      var sProjectId = this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project";
      this.getOwnerComponent().getRouter().navTo("P16", { id: sProjectId });
      MessageToast.show("Configuration change was submitted or revised and routed to approval.");
    }
  });
});
