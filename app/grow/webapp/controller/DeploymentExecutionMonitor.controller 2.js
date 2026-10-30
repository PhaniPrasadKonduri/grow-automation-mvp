sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oMonitorModel = new JSONModel({
    runId: "DEP-201",
    status: "Running",
    state: "Warning",
    resultType: "Warning",
    resultStatus: {
      text: "Unknown outcome detected. New dispatch paused while observation and reconciliation are reviewed."
    },
    selection: {
      classification: "Write",
      classificationState: "Warning",
      correlationId: "corr-ctx-2041",
      attempts: 2,
      observedState: "Unknown",
      observedStateState: "Warning",
      summary: "A write attempt was observed, but the target system did not return a conclusive success signal."
    },
    attended: {
      instructions: "Confirm the target change in the connected environment and attach the readback artifact before resuming dispatch.",
      owner: "Release Manager",
      evidenceStatus: "Upload required",
      evidenceState: "Warning"
    },
    steps: [
      { step: "A-01 Create org sync", summary: "Queued", statusText: "Queued", state: "None" },
      { step: "A-02 Apply config", summary: "Running", statusText: "Running", state: "Warning" },
      { step: "A-03 Verify target", summary: "Unknown", statusText: "Unknown", state: "Warning" },
      { step: "A-04 Human review", summary: "Requires owner approval", statusText: "Attended", state: "Information" },
      { step: "A-05 Final readback", summary: "Pending evidence", statusText: "Pending", state: "None" }
    ],
    observations: [
      { observation: "Target readback", source: "SAP API", status: "Unknown", state: "Warning", evidence: "No valid evidence returned; check correlation context." },
      { observation: "Change log", source: "Control plane", status: "Observed", state: "Success", evidence: "Mutation request recorded with request ID corr-ctx-2041." },
      { observation: "Evidence bundle", source: "Release manager", status: "Missing", state: "Error", evidence: "Upload pending before completion can be confirmed." }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.DeploymentExecutionMonitor", {
    onInit: function () {
      this.getView().setModel(oMonitorModel, "monitor");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
      this._selectInitialStep();
    },

    _selectInitialStep: function () {
      var aSteps = oMonitorModel.getProperty("/steps");
      if (aSteps && aSteps.length) {
        oMonitorModel.setProperty("/selection", {
          classification: "Write",
          classificationState: "Warning",
          correlationId: "corr-ctx-2041",
          attempts: 2,
          observedState: "Unknown",
          observedStateState: "Warning",
          summary: "A write attempt was observed, but the target system did not return a conclusive success signal."
        });
      }
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P18", {
          id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project",
          packageId: "pkg-01"
        });
      }
    },

    onSelectStep: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("monitor");
      var oStep = oContext && oContext.getObject();
      if (!oStep) {
        return;
      }

      this._setSelectionForStep(oStep);
      MessageToast.show("Selected step: " + oStep.step + ". Request classification and correlation details are visible.");
    },

    _setSelectionForStep: function (oStep) {
      var sStepName = oStep.step || "A-00";
      var oSelection = {
        classification: sStepName.indexOf("A-03") >= 0 || sStepName.indexOf("A-05") >= 0 ? "Unknown" : "Write",
        classificationState: sStepName.indexOf("A-03") >= 0 || sStepName.indexOf("A-05") >= 0 ? "Warning" : "Success",
        correlationId: "corr-ctx-2041",
        attempts: sStepName.indexOf("A-03") >= 0 ? 2 : 1,
        observedState: sStepName.indexOf("A-03") >= 0 ? "Unknown" : "Completed",
        observedStateState: sStepName.indexOf("A-03") >= 0 ? "Warning" : "Success",
        summary: sStepName.indexOf("A-03") >= 0
          ? "The step shows an indeterminate outcome. Reconciliation is preferred to a blind retry."
          : "The step has a clear outcome and generated an observed artifact for the release record."
      };

      oMonitorModel.setProperty("/selection", oSelection);
    },

    onInspectAction: function () {
      var oSelection = oMonitorModel.getProperty("/selection");
      if (!oSelection || !oSelection.correlationId) {
        this._setSelectionForStep({ step: "A-03 Verify target" });
      }
      MessageToast.show("Request classification, correlation and attempts are shown for the selected action.");
    },

    onPauseRemainingActions: function () {
      oMonitorModel.setProperty("/status", "Paused");
      oMonitorModel.setProperty("/state", "Warning");
      oMonitorModel.setProperty("/resultStatus/text", "Dispatch paused. New actions are blocked while the in-flight step resolves.");
      MessageToast.show("Remaining actions are paused while the in-flight step resolves.");
    },

    onReconcileUnknown: function () {
      var sProjectId = this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project";
      this.getOwnerComponent().getRouter().navTo("P20", {
        id: sProjectId,
        packageId: "pkg-01"
      });
      MessageToast.show("Unknown outcome opened for reconciliation without a blind retry.");
    },

    onOpenAttendedStep: function () {
      var oSelection = oMonitorModel.getProperty("/selection");
      if (!oSelection || !oSelection.correlationId) {
        this._setSelectionForStep({ step: "A-04 Human review" });
      }
      MessageToast.show("Human task instructions, owner and upload requirement are visible.");
    },

    onOpenResults: function () {
      var sProjectId = this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project";
      var sStatus = oMonitorModel.getProperty("/status");
      if (sStatus === "Paused" || oMonitorModel.getProperty("/selection/observedState") === "Unknown") {
        this.getOwnerComponent().getRouter().navTo("P20", {
          id: sProjectId,
          packageId: "pkg-01"
        });
      } else {
        this.getOwnerComponent().getRouter().navTo("P21", { id: sProjectId });
      }
      MessageToast.show("Results opened with evidence verification required before completion.");
    }
  });
});
