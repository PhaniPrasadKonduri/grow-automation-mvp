sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oQualityModel = new JSONModel({
    projectName: "Finance automation proof of concept",
    projectId: "PRJ-01",
    bannerType: "Information",
    bannerText: "Demo qualification is active with 3 deterministic tests and 1 pending business acceptance result.",
    tests: [
      { feature: "Tax posting", caseId: "TC-101", result: "Passed", resultState: "Success", evidence: "Fixture check + control-plane trace" },
      { feature: "Org mapping", caseId: "TC-102", result: "Failed", resultState: "Error", evidence: "Mismatch detected in tax rule mapping" },
      { feature: "Release gate", caseId: "TC-103", result: "Queued", resultState: "None", evidence: "Awaiting final verification" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.QualityValidationWorkspace", {
    onInit: function () {
      this.getView().setModel(oQualityModel, "quality");
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

    onRunDemoSuite: function () {
      oQualityModel.setProperty("/bannerType", "Success");
      oQualityModel.setProperty("/bannerText", "Deterministic demo suite queued and running: 2 tests passed, 1 test is still pending business verification.");
      MessageToast.show("Demo suite started with deterministic fixture checks.");
    },

    onInspectFailure: function () {
      oQualityModel.setProperty("/bannerType", "Error");
      oQualityModel.setProperty("/bannerText", "Inspection shows a failed assertion in Tax posting mapping; affected gate is release readiness.");
      MessageToast.show("Failure details opened with assertion, evidence and affected gate.");
    },

    onRecordUATResult: function () {
      oQualityModel.setProperty("/bannerType", "Success");
      oQualityModel.setProperty("/bannerText", "UAT result recorded as accepted with accountable owner and linked evidence.");
      MessageToast.show("UAT result recorded and persisted.");
    },

    onCreateALMTask: function () {
      oQualityModel.setProperty("/bannerType", "Information");
      oQualityModel.setProperty("/bannerText", "ALM task created with simulated external ID ALM-3421 and correlated evidence reference.");
      MessageToast.show("ALM task created with correlated external ID.");
    },

    onRequestQualityGate: function () {
      var sProjectId = this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project";
      this.getOwnerComponent().getRouter().navTo("P16", { id: sProjectId });
      MessageToast.show("Quality gate request created and routed for approval.");
    },

    onSelectTest: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("quality");
      var oTest = oContext && oContext.getObject();
      if (!oTest) {
        return;
      }

      oQualityModel.setProperty("/bannerText", "Selected test " + oTest.caseId + ": evidence and gate details are visible for review.");
      MessageToast.show("Selected test: " + oTest.caseId + ".");
    }
  });
});
