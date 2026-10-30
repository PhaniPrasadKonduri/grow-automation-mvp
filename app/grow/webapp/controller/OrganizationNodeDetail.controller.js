sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oOrgNodeModel = new JSONModel({
    label: "Global parent",
    code: "ORG-001",
    country: "DE",
    currency: "EUR",
    parent: "Root",
    impactSummary: "Configuration proposals and approvals affected: 2 proposals, 1 approval pending.",
    assignments: [
      { label: "Finance operations", status: "Approved" },
      { label: "Supplier governance", status: "Pending" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.OrganizationNodeDetail", {
    onInit: function () {
      this.getView().setModel(oOrgNodeModel, "orgNode");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P11", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onEditAttributes: function () {
      MessageToast.show("Attributes valid: code, country and currency. New graph revision saved.");
    },

    onManageAssignments: function () {
      MessageToast.show("Assignments updated and tree/detail state synchronized.");
    },

    onCompareObservedTarget: function () {
      MessageToast.show("Designed vs observed structure shown with timestamp and variance summary.");
    },

    onInspectImpact: function () {
      MessageToast.show("Impact analysis opened: affected configuration proposals and approvals are visible.");
    },

    onReturnToDesigner: function () {
      this.getOwnerComponent().getRouter().navTo("P11", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      MessageToast.show("Returned to the organization designer with the selected node restored.");
    }
  });
});
