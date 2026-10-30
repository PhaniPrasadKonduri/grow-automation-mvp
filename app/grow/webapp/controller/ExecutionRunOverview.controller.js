sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oRunModel = new JSONModel({
    runName: "Pilot activation run",
    runId: "RUN-204",
    runStatus: "Ready for handover",
    runState: "Success",
    bannerType: "Information",
    bannerText: "Pilot health is stable. Remaining risk is limited to known operational handover items and support follow-up.",
    steps: [
      { action: "Scope baseline approval", owner: "A. Smith", status: "Completed", statusState: "Success", nextStep: "Documented" },
      { action: "Configuration validation", owner: "J. Lee", status: "Completed", statusState: "Success", nextStep: "Closed" },
      { action: "Deployment verification", owner: "M. Patel", status: "Needs review", statusState: "Warning", nextStep: "Reconcile mismatch" },
      { action: "Support follow-up", owner: "D. Ruiz", status: "Queued", statusState: "None", nextStep: "Open helpdesk task" }
    ],
    selection: {
      action: "Deployment verification",
      owner: "M. Patel",
      status: "Needs review",
      procedure: "Reconcile the remaining package mismatch, confirm the approved readback, then accept handover only after the support owner is assigned."
    }
  });

  return Controller.extend("com.ey.grow.prototype.controller.ExecutionRunOverview", {
    onInit: function () {
      this.getView().setModel(oRunModel, "run");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
      this._selectInitialStep();
    },

    _selectInitialStep: function () {
      var aSteps = oRunModel.getProperty("/steps");
      if (aSteps && aSteps.length) {
        oRunModel.setProperty("/selection", {
          action: aSteps[2].action,
          owner: aSteps[2].owner,
          status: aSteps[2].status,
          procedure: "Reconcile the remaining package mismatch, confirm the approved readback, then accept handover only after the support owner is assigned."
        });
      }
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P23", {
          id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project"
        });
      }
    },

    onOpenRunbook: function () {
      oRunModel.setProperty("/bannerText", "Runbook opened for the active pilot. Recovery and handoff procedures are visible for the operational team.");
      MessageToast.show("Runbook opened with the validated pilot procedure.");
    },

    onInspectPilotHealth: function () {
      oRunModel.setProperty("/bannerType", "Success");
      oRunModel.setProperty("/bannerText", "Pilot health is stable: deployment actions verified, remaining items are procedural and linked to assigned support ownership.");
      MessageToast.show("Pilot health inspection opened from the current run ledger.");
    },

    onAcceptHandover: function () {
      oRunModel.setProperty("/runStatus", "Handover accepted");
      oRunModel.setProperty("/runState", "Success");
      oRunModel.setProperty("/bannerType", "Success");
      oRunModel.setProperty("/bannerText", "Handover accepted and recorded with complete evidence for pilot continuity.");
      MessageToast.show("Handover accepted and recorded.");
    },

    onRecordSupportTask: function () {
      oRunModel.setProperty("/bannerType", "Information");
      oRunModel.setProperty("/bannerText", "Support task recorded with project linkage and recovery ownership for the next follow-up cycle.");
      MessageToast.show("Support task created with project linkage.");
    },

    onOpenFutureCapability: function () {
      MessageToast.show("Future capability roadmap opened with explanatory context and a safe return route.");
    },

    onSelectStep: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("run");
      var oStep = oContext && oContext.getObject();
      if (!oStep) {
        return;
      }

      oRunModel.setProperty("/selection", {
        action: oStep.action,
        owner: oStep.owner,
        status: oStep.status,
        procedure: "Follow the linked runbook for the selected action and confirm that all supporting evidence is present before closing the step."
      });
      MessageToast.show("Selected run step: " + oStep.action + ".");
    }
  });
});
