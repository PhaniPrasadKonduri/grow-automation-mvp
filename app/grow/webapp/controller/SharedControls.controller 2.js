sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "../shared/action-registry"
], function (Controller, MessageToast, actionRegistry) {
  "use strict";

  return Controller.extend("com.ey.grow.prototype.controller.SharedControls", {
    onInit: function () {
      var oModel = new sap.ui.model.json.JSONModel({
        controls: actionRegistry.all()
      });
      this.getView().setModel(oModel);
    },
    onSelectControl: function (oEvent) {
      var sId = oEvent.getSource().getBindingContext().getObject().id;
      var control = actionRegistry.byId(sId);
      if (control) {
        MessageToast.show(control.id + ": " + control.outcome);
      }
    }
  });
});
