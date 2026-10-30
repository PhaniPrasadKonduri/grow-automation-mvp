sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "./model/models",
  "./model/route-registry",
  "./shared/action-registry"
], function (UIComponent, Device, models, routeRegistry, actionRegistry) {
  "use strict";

  return UIComponent.extend("com.ey.grow.prototype.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      this.routeRegistry = routeRegistry;
      this.actionRegistry = actionRegistry;
      this.setModel(models.createDeviceModel(), "device");
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    }
  });
});
