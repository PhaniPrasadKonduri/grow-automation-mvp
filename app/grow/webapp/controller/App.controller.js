sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "../model/route-registry"
], function (Controller, History, routeRegistry) {
  "use strict";

  return Controller.extend("com.ey.grow.prototype.controller.App", {
    onInit: function () {
      var oModel = this.getOwnerComponent().getModel("screen") || this.getOwnerComponent().getModel();
      var sRoute = window.location.hash ? window.location.hash.replace(/^#\//, "/") : "/home";
      var oScreen = routeRegistry.byRoute(sRoute) || routeRegistry.byRoute("/home") || routeRegistry.getNotFoundScreen();

      if (oModel) {
        oModel.setData({
          screenInfo: {
            id: oScreen.id,
            title: oScreen.title,
            purpose: oScreen.purpose,
            actions: oScreen.actions || []
          }
        }, true);
      }

      this.getOwnerComponent().getRouter().attachRouteMatched(function (oEvent) {
        var sName = oEvent.getParameter("name");
        var oMatched = routeRegistry.byId(sName) || routeRegistry.byRoute(window.location.hash.replace(/^#\//, "/")) || routeRegistry.getNotFoundScreen();
        var oScreenModel = this.getOwnerComponent().getModel("screen");

        if (oScreenModel) {
          oScreenModel.setData({
            screenInfo: {
              id: oMatched.id,
              title: oMatched.title,
              purpose: oMatched.purpose,
              actions: oMatched.actions || []
            }
          }, true);
        }
      }.bind(this));
    },

    onHome: function () {
      this.getOwnerComponent().getRouter().navTo("P01");
    },

    onPhaseOverview: function () {
      this.getOwnerComponent().getRouter().navTo("ProjectPhaseOverview");
    },

    onValueBoard: function () {
      this.getOwnerComponent().getRouter().navTo("ValueImpactDashboard");
    },

    onRiskBoard: function () {
      this.getOwnerComponent().getRouter().navTo("RiskGovernanceBoard");
    },

    onReadinessBoard: function () {
      this.getOwnerComponent().getRouter().navTo("OperatingReadinessBoard");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P01");
      }
    }
  });
});
