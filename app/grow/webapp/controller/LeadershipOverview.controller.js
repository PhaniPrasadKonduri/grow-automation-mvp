sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("com.ey.grow.prototype.controller.LeadershipOverview", {
    onValueImpact: function () {
      this.getOwnerComponent().getRouter().navTo("ValueImpactDashboard");
      MessageToast.show("Opening value impact dashboard.");
    },

    onRiskBoard: function () {
      this.getOwnerComponent().getRouter().navTo("RiskGovernanceBoard");
      MessageToast.show("Opening risk and governance board.");
    },

    onOperatingReadiness: function () {
      this.getOwnerComponent().getRouter().navTo("OperatingReadinessBoard");
      MessageToast.show("Opening operating readiness board.");
    }
  });
});
