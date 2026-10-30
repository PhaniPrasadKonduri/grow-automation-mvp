sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oProcessModel = new JSONModel({
    items: [
      { label: "Order to cash", domain: "Finance", status: "Ready", brTc: "BR-104 / TC-210", system: "S/4HANA", scopeCandidates: "3" },
      { label: "Procure to pay", domain: "AP", status: "Review", brTc: "BR-105 / TC-211", system: "Ariba", scopeCandidates: "2" },
      { label: "Hire to retire", domain: "HR", status: "Draft", brTc: "BR-107 / TC-214", system: "SuccessFactors", scopeCandidates: "1" }
    ],
    selected: {
      label: "Order to cash",
      domain: "Finance",
      brTc: "BR-104 / TC-210",
      system: "S/4HANA",
      scopeCandidates: "3"
    }
  });

  return Controller.extend("com.ey.grow.prototype.controller.ProcessExplorer", {
    onInit: function () {
      this.getView().setModel(oProcessModel, "process");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P07", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onProcessSelect: function (oEvent) {
      var oSelected = oEvent.getParameter("listItem").getBindingContext("process").getObject();
      oProcessModel.setProperty("/selected", oSelected);
      MessageToast.show("Selected process: " + oSelected.label);
    },

    onSelectDomainOrProcess: function () {
      var oSelected = oProcessModel.getProperty("/selected");
      MessageToast.show("Domain or process selected: " + (oSelected && oSelected.label ? oSelected.label : "n/a"));
    },

    onViewProcessFlow: function () {
      var oSelected = oProcessModel.getProperty("/selected");
      MessageToast.show("Process flow opened for " + (oSelected && oSelected.label ? oSelected.label : "selected process") + ". Labeled illustration shown with provenance metadata.");
    },

    onInspectApplicationRelation: function () {
      var oSelected = oProcessModel.getProperty("/selected");
      this.getOwnerComponent().getRouter().navTo("P27", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      MessageToast.show("Application relation opened for " + (oSelected && oSelected.label ? oSelected.label : "selected process") + ".");
    },

    onAddToReview: function () {
      var oSelected = oProcessModel.getProperty("/selected");
      MessageToast.show("Added " + (oSelected && oSelected.label ? oSelected.label : "selected process") + " to the scope review basket.");
    }
  });
});
