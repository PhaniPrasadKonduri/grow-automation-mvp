sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "./model/models",
  "./model/route-registry",
  "./shared/action-registry",
  "./model/demo-data"
], function (UIComponent, Device, models, routeRegistry, actionRegistry, demoData) {
  "use strict";

  return UIComponent.extend("com.ey.grow.prototype.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      this.routeRegistry = routeRegistry;
      this.actionRegistry = actionRegistry;
      this.setModel(models.createDeviceModel(), "device");
      this.setModel(demoData.createProjectModel(), "project");
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
      this.loadBoardroomStyles();
    },

    loadBoardroomStyles: function () {
      if (document.getElementById("grow-boardroom-css")) {
        return;
      }

      var oLink = document.createElement("link");
      oLink.id = "grow-boardroom-css";
      oLink.rel = "stylesheet";
      oLink.type = "text/css";
      oLink.href = "css/boardroom.css";
      document.head.appendChild(oLink);
    }
  });
});
