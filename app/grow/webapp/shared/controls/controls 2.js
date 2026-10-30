sap.ui.define([
  "sap/ui/core/Fragment",
  "sap/ui/core/UIComponent",
  "sap/m/MessageToast",
  "../action-registry"
], function (Fragment, UIComponent, MessageToast, actionRegistry) {
  "use strict";

  var Controls = {
    getControlMetadata: function () {
      return actionRegistry.all();
    },
    openControlInfo: function (sId) {
      var control = actionRegistry.byId(sId);
      if (!control) {
        MessageToast.show("Control not found");
        return;
      }
      MessageToast.show(control.control + ": " + control.outcome);
    },
    applyDemoVariant: function () {
      MessageToast.show("Demo variant applied to authorized view state");
    },
    exportDemoReport: function () {
      MessageToast.show("Demo export generated for current project context");
    },
    triggerRetry: function () {
      MessageToast.show("Retry initiated under safe operation rules");
    }
  };

  return Controls;
});
