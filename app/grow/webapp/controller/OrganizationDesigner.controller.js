sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oOrgModel = new JSONModel({
    nodes: [
      { label: "Global parent", type: "Company", country: "DE", assignments: "3", parent: "Root" },
      { label: "Germany plant", type: "Plant", country: "DE", assignments: "2", parent: "Global parent" },
      { label: "US distribution", type: "Org unit", country: "US", assignments: "4", parent: "Global parent" }
    ],
    selected: {
      label: "Global parent",
      type: "Company",
      country: "DE",
      assignments: "3",
      parent: "Root"
    }
  });

  return Controller.extend("com.ey.grow.prototype.controller.OrganizationDesigner", {
    onInit: function () {
      this.getView().setModel(oOrgModel, "org");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P10", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", scopeId: "scope-101" });
      }
    },

    onSelectNode: function () {
      var oSelected = oOrgModel.getProperty("/selected");
      this.getOwnerComponent().getRouter().navTo("P12", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", nodeId: "node-global-parent" });
      MessageToast.show("Node selected: " + (oSelected ? oSelected.label : "organization node"));
    },

    onAddNodeOrAssignment: function () {
      MessageToast.show("Typed form opened for valid object type and parent structure. Duplicate codes and invalid parents remain blocked.");
    },

    onGenerateDesign: function () {
      MessageToast.show("Organization agent generated proposed graph differences from the approved scope version.");
    },

    onValidateStructure: function () {
      MessageToast.show("Structure validation completed. Missing attributes and assignment issues were highlighted with focus links.");
    },

    onSubmitStructure: function () {
      this.getOwnerComponent().getRouter().navTo("P16", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      MessageToast.show("Organization structure submitted. Approval and downstream impact summary created.");
    },

    onSelectNodeFromTree: function (oEvent) {
      var oItem = oEvent.getParameter("listItem");
      var oNode = oItem && oItem.getBindingContext("org") && oItem.getBindingContext("org").getObject();
      if (oNode) {
        oOrgModel.setProperty("/selected", oNode);
        MessageToast.show("Selected organization node: " + oNode.label);
      }
    }
  });
});
