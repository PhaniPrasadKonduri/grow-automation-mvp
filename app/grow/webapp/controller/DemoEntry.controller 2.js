sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
  "use strict";

  var PERSONA_LABELS = {
    sponsor: "Sponsor",
    deliveryLead: "Delivery Lead",
    analyst: "Analyst",
    functionalConsultant: "Functional Consultant",
    configurationConsultant: "Configuration Consultant",
    financeApprover: "Finance Approver",
    releaseManager: "Release Manager"
  };

  return Controller.extend("com.ey.grow.prototype.controller.DemoEntry", {
    onInit: function () {
      var oSelect = this.byId("personaSelect");
      var oScenario = this.byId("scenarioSelect");

      if (oSelect && oSelect.getSelectedKey && !oSelect.getSelectedKey()) {
        oSelect.setSelectedKey("sponsor");
      }
      if (oScenario && oScenario.getSelectedKey && !oScenario.getSelectedKey()) {
        oScenario.setSelectedKey("happy-path");
      }

      this._updateContextSummary();
    },

    _updateContextSummary: function () {
      var persona = this.byId("personaSelect").getSelectedKey() || "sponsor";
      var scenario = this.byId("scenarioSelect").getSelectedKey() || "happy-path";
      var personaText = this.byId("selectedPersonaText");
      var scenarioText = this.byId("selectedScenarioText");
      var summaryText = this.byId("contextSummaryText");

      if (personaText) {
        personaText.setText("Selected persona: " + (PERSONA_LABELS[persona] || persona));
      }
      if (scenarioText) {
        scenarioText.setText("Selected scenario: " + (scenario === "happy-path" ? "Happy path" : "Exception path"));
      }
      if (summaryText) {
        summaryText.setText(
          scenario === "happy-path"
            ? "The scenario starts from the approved baseline and demonstrates the standard project flow."
            : "The scenario starts from the exception path and highlights the blocker, corrective actions and review narrative."
        );
      }
    },

    onStartTour: function () {
      var persona = this.byId("personaSelect").getSelectedKey() || "sponsor";
      var scenario = this.byId("scenarioSelect").getSelectedKey() || "happy-path";

      MessageToast.show("Starting guided tour for " + (PERSONA_LABELS[persona] || persona) + " in " + (scenario === "happy-path" ? "happy path" : "exception path"));
      this.getOwnerComponent().getRouter().navTo("P01");
    },

    onResetScenario: function () {
      var oScenario = this.byId("scenarioSelect");
      if (oScenario) {
        oScenario.setSelectedKey("happy-path");
      }
      this._updateContextSummary();
      MessageToast.show("Scenario reset to the default happy path demo workspace");
    }
  });
});
