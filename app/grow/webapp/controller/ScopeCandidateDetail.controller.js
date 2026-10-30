sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oScopeDetailModel = new JSONModel({
    candidateName: "Order confirmation",
    sapId: "SAP-101",
    title: "Manage customer order confirmation workflow",
    release: "SAP S/4HANA 2025",
    verification: "Verified",
    recommendation: "This scope item matches the approved finance requirement set and the current process baseline. It remains gated on the prerequisite review and the validity of the downstream approval chain.",
    prerequisites: [
      { label: "BR-104: Finance requirement", status: "Approved" },
      { label: "TC-210: Order confirmation test case", status: "Linked" },
      { label: "Org-3: Finance operations", status: "Pending" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.ScopeCandidateDetail", {
    onInit: function () {
      this.getView().setModel(oScopeDetailModel, "scopeDetail");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P09", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onInspectSapIdentity: function () {
      MessageToast.show("SAP identity inspected: SAP-101 / Manage customer order confirmation workflow / Release 2025 / Verified.");
    },

    onExplainRecommendation: function () {
      MessageToast.show("Recommendation explained using the cited requirements, process excerpt and catalog evidence.");
    },

    onResolvePrerequisite: function () {
      MessageToast.show("Prerequisite reviewed. The dependent scope object is open and return context preserved.");
    },

    onApplyReviewerDecision: function () {
      MessageToast.show("Reviewer decision saved. Impacted approvals were invalidated and the candidate moved to a reviewed state.");
    },

    onPrepareActivationPackage: function () {
      this.getOwnerComponent().getRouter().navTo("P18", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project", packageId: "package-activation-01" });
      MessageToast.show("Activation package prepared from the approved baseline.");
    }
  });
});
