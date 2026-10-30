sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oValueModel = new JSONModel({
    headline: "Finance automation pilot value",
    projectId: "PRJ-01",
    bannerType: "Success",
    bannerText: "Observed value is positive: rework risk and manual effort are reduced while governance and evidence traceability remain explicit.",
    metrics: [
      { label: "Reduced manual steps", value: "42%", state: "Success" },
      { label: "Rework avoided", value: "18 hrs", state: "Success" },
      { label: "Resolution confidence", value: "High", state: "Success" },
      { label: "Open risk", value: "2 items", state: "Warning" }
    ],
    scenarios: [
      { scenario: "Baseline", effort: "84 h", quality: "Medium", benefit: "Lower", benefitState: "None" },
      { scenario: "Assisted pilot", effort: "51 h", quality: "High", benefit: "Moderate", benefitState: "Success" },
      { scenario: "Scaled rollout", effort: "38 h", quality: "Very high", benefit: "High", benefitState: "Success" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.ValueAndImpact", {
    onInit: function () {
      this.getView().setModel(oValueModel, "value");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P02", {
          id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project"
        });
      }
    },

    onInspectMetric: function () {
      oValueModel.setProperty("/bannerText", "Coverage metric is based on the pilot baseline and the validated support scenarios. Results remain illustrative and are clearly labeled.");
      MessageToast.show("Benefit metric opened with supporting assumptions.");
    },

    onEditPlanningAssumption: function () {
      oValueModel.setProperty("/bannerType", "Information");
      oValueModel.setProperty("/bannerText", "Planning assumption adjusted for the illustrative scenario; the recalculated value remains clearly labeled as a demo estimate.");
      MessageToast.show("Planning assumption updated for the current value scenario.");
    },

    onCompareJourney: function () {
      oValueModel.setProperty("/bannerType", "Success");
      oValueModel.setProperty("/bannerText", "The assisted journey shows fewer manual checkpoints and a stronger evidence trail than the baseline approach.");
      MessageToast.show("Baseline versus assisted journey compared.");
    },

    onExportExecutiveSummary: function () {
      MessageToast.show("Executive summary exported with caveats and open-risk notes.");
    }
  });
});
