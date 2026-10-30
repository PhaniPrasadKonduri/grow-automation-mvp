sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oIntegrationModel = new JSONModel({
    items: [
      { system: "SAP S/4HANA", capability: "API", observedAt: "2026-10-30 08:15", status: "Healthy", state: "Success", correlationId: "corr-s4-0101" },
      { system: "SuccessFactors", capability: "Upload", observedAt: "2026-10-30 08:20", status: "Warning", state: "Warning", correlationId: "corr-sf-0102" },
      { system: "SAP Ariba", capability: "UI", observedAt: "2026-10-30 08:10", status: "Offline", state: "Error", correlationId: "corr-ar-0103" },
      { system: "SAP BTP", capability: "Attended", observedAt: "2026-10-30 08:18", status: "Healthy", state: "Success", correlationId: "corr-btp-0104" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.IntegrationControlCenter", {
    onInit: function () {
      this.getView().setModel(oIntegrationModel, "integration");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P04", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onSelectIntegration: function (oEvent) {
      var oItem = oEvent.getSource();
      var sCorrelationId = oItem.getBindingContext("integration").getProperty("correlationId");
      MessageToast.show("Selected correlation: " + sCorrelationId);
    },

    onTestConnection: function () {
      var aItems = oIntegrationModel.getProperty("/items") || [];
      var oSelected = aItems[0];
      MessageToast.show("Connectivity: OK; Authentication: OK; Permitted operations: " + (oSelected ? oSelected.capability : "API"));
    },

    onViewContract: function () {
      var aItems = oIntegrationModel.getProperty("/items") || [];
      var oSelected = aItems[1] || aItems[0];
      MessageToast.show("Contract view for " + (oSelected ? oSelected.system : "selected system") + ": API/upload/UI/attended classification confirmed.");
    },

    onRefreshSnapshot: function () {
      var aItems = oIntegrationModel.getProperty("/items") || [];
      var oSelected = aItems[2] || aItems[0];
      if (oSelected && oSelected.status === "Offline") {
        MessageToast.show("Snapshot refresh failed: system is offline and has seeded stale state.");
      } else {
        MessageToast.show("Snapshot refreshed; observed timestamp advanced successfully.");
      }
    },

    onInspectFailedExchange: function () {
      this.getOwnerComponent().getRouter().navTo("P21", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
    },

    onOpenSapReference: function () {
      MessageToast.show("Simulated SAP reference preview opened with external system identity and return route.");
    }
  });
});
