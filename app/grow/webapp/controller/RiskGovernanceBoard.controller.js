sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
  "use strict";

  return Controller.extend("com.ey.grow.prototype.controller.RiskGovernanceBoard", {
    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("LeadershipOverview");
      }
    },

    onInit: function () {
      MessageToast.show("Risk and governance board opened.");
    }
  });
});
