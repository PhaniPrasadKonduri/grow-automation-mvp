sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oRequirementsModel = new JSONModel({
    items: [
      { brId: "BR-104", domain: "Finance", status: "Approved", state: "Success", source: "BPD fixture", fit: "High" },
      { brId: "BR-105", domain: "AP", status: "Needs evidence", state: "Warning", source: "Upload", fit: "Medium" },
      { brId: "BR-106", domain: "Procurement", status: "Open", state: "None", source: "Manual review", fit: "Low" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.RequirementsWorkbench", {
    onInit: function () {
      this.getView().setModel(oRequirementsModel, "requirements");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P06", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onFilter: function (oEvent) {
      var sValue = (oEvent.getParameter("newValue") || "").trim().toLowerCase();
      var aAll = [
        { brId: "BR-104", domain: "Finance", status: "Approved", state: "Success", source: "BPD fixture", fit: "High" },
        { brId: "BR-105", domain: "AP", status: "Needs evidence", state: "Warning", source: "Upload", fit: "Medium" },
        { brId: "BR-106", domain: "Procurement", status: "Open", state: "None", source: "Manual review", fit: "Low" }
      ];

      var aFiltered = aAll.filter(function (entry) {
        return !sValue || entry.brId.toLowerCase().indexOf(sValue) >= 0 || entry.domain.toLowerCase().indexOf(sValue) >= 0 || entry.source.toLowerCase().indexOf(sValue) >= 0;
      });

      if (!aFiltered.length) {
        MessageToast.show("No requirements match the current filter. Reset or broaden the search.");
      }

      oRequirementsModel.setProperty("/items", aFiltered.length ? aFiltered : []);
    },

    onReset: function () {
      oRequirementsModel.setProperty("/items", [
        { brId: "BR-104", domain: "Finance", status: "Approved", state: "Success", source: "BPD fixture", fit: "High" },
        { brId: "BR-105", domain: "AP", status: "Needs evidence", state: "Warning", source: "Upload", fit: "Medium" },
        { brId: "BR-106", domain: "Procurement", status: "Open", state: "None", source: "Manual review", fit: "Low" }
      ]);
      MessageToast.show("Filters reset to the default requirement set.");
    },

    onSelectRequirement: function (oEvent) {
      var oContext = oEvent.getSource().getBindingContext("requirements");
      var sBrId = oContext && oContext.getProperty("brId");
      MessageToast.show("Trace opened for " + (sBrId || "selected requirement") + ".");
    },

    onRequestScopeProposal: function () {
      this.getOwnerComponent().getRouter().navTo("P15", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", runId: "agent-run-01" });
      MessageToast.show("Agent run requested for eligible requirements and routed to scope review.");
    }
  });
});
