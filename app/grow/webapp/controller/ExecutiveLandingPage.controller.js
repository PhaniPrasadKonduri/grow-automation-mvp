sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("com.ey.grow.prototype.controller.ExecutiveLandingPage", {
    onProgramHealth: function () {
      this.getOwnerComponent().getRouter().navTo("LeadershipOverview");
      MessageToast.show("Opening program health dashboard.");
    },

    onPhaseRoadmap: function () {
      this.getOwnerComponent().getRouter().navTo("ProjectPhaseOverview");
      MessageToast.show("Opening the seven-phase transformation roadmap.");
    },

    onValueStory: function () {
      this.getOwnerComponent().getRouter().navTo("ValueImpactDashboard");
      MessageToast.show("Opening the value impact story.");
    },

    onRiskBoard: function () {
      this.getOwnerComponent().getRouter().navTo("RiskGovernanceBoard");
      MessageToast.show("Opening the risk and governance board.");
    }
  });
});
