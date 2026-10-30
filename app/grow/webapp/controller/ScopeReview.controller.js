sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oScopeModel = new JSONModel({
    items: [
      { sapId: "SAP-101", candidate: "Order confirmation", status: "Planned", state: "None", coverage: "79%", prerequisites: "BR-104, TC-210" },
      { sapId: "SAP-102", candidate: "AP invoice exception", status: "Ready", state: "Success", coverage: "82%", prerequisites: "BR-105" },
      { sapId: "SAP-103", candidate: "Supplier onboarding", status: "Blocked", state: "Warning", coverage: "57%", prerequisites: "BR-106, Org-3" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.ScopeReview", {
    onInit: function () {
      this.getView().setModel(oScopeModel, "scope");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P08", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onGenerateProposal: function () {
      MessageToast.show("Planning agent proposal generated. States set to planned, running and completed for review.");
    },

    onSelectCandidate: function () {
      var oSelected = oScopeModel.getProperty("/items/0");
      this.getOwnerComponent().getRouter().navTo("P10", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", scopeId: "scope-101" });
      MessageToast.show("Selected candidate: " + (oSelected ? oSelected.candidate : "scope candidate"));
    },

    onAcceptOrExclude: function () {
      MessageToast.show("Decision recorded. Dependency and coverage counts updated after reviewer action.");
    },

    onCompareVersions: function () {
      MessageToast.show("Version comparison displayed: added and removed scope items highlighted with downstream impact.");
    },

    onSubmitScopeBaseline: function () {
      this.getOwnerComponent().getRouter().navTo("P16", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      MessageToast.show("Scope baseline submitted. Approval workflow opened for unresolved blockers.");
    },

    onSelectScopeRow: function (oEvent) {
      var oContext = oEvent.getSource().getBindingContext("scope");
      var sScope = oContext && oContext.getProperty("candidate");
      MessageToast.show("Scope detail selected for " + (sScope || "scope candidate") + ".");
    }
  });
});
