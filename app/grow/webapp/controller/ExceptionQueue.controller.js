sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oExceptionModel = new JSONModel({
    total: 3,
    summaryStatus: "Recovery required",
    summaryState: "Error",
    bannerType: "Error",
    bannerText: "Two write-like operations require owner review; the ambiguous exchange must stay in reconciliation until evidence is verified.",
    items: [
      { category: "Write mismatch", detail: "S/4HANA payload returned unknown state for tax mapping.", statusText: "Requires action", statusState: "Error" },
      { category: "Validation failure", detail: "Org readback disagrees with approved scope and must be rechecked.", statusText: "Waiting on owner", statusState: "Warning" },
      { category: "Human task", detail: "Release manager must upload the readback artifact before completion.", statusText: "Attended", statusState: "Information" }
    ],
    selected: {
      category: "Write mismatch",
      categoryState: "Error",
      gate: "Deployment readback gate",
      owner: "Integration Operator",
      evidence: "sanitized payload + correlation 5170",
      instructions: "Check the target payload against approved values before resuming dispatch. If the write is ambiguous, return to reconciliation."
    }
  });

  return Controller.extend("com.ey.grow.prototype.controller.ExceptionQueue", {
    onInit: function () {
      this.getView().setModel(oExceptionModel, "exception");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
      this._showDefaultSelection();
    },

    _showDefaultSelection: function () {
      oExceptionModel.setProperty("/selected", {
        category: "Write mismatch",
        categoryState: "Error",
        gate: "Deployment readback gate",
        owner: "Integration Operator",
        evidence: "sanitized payload + correlation 5170",
        instructions: "Check the target payload against approved values before resuming dispatch. If the write is ambiguous, return to reconciliation."
      });
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P20", {
          id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project",
          packageId: "pkg-01"
        });
      }
    },

    onSelectException: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("exception");
      var oSelected = oContext && oContext.getObject();
      if (!oSelected) {
        return;
      }

      oExceptionModel.setProperty("/selected", {
        category: oSelected.category,
        categoryState: oSelected.statusState,
        gate: oSelected.category === "Validation failure" ? "Quality gate" : "Deployment readback gate",
        owner: oSelected.category === "Human task" ? "Release Manager" : "Integration Operator",
        evidence: oSelected.category === "Human task" ? "manual evidence upload pending" : "sanitized payload + correlation 5170",
        instructions: oSelected.category === "Human task"
          ? "Complete the human task, upload evidence and then verify the readback before a successful completion is allowed."
          : "Check the target payload against approved values before resuming dispatch. If the write is ambiguous, return to reconciliation."
      });
      MessageToast.show("Selected exception: " + oSelected.category + ".");
    },

    onInspectException: function () {
      MessageToast.show("Category, sanitized evidence and affected gate are shown for the selected exception.");
    },

    onAssignOwner: function () {
      oExceptionModel.setProperty("/selected/owner", "Deployment Operator");
      oExceptionModel.setProperty("/bannerText", "Owner assigned to the recovery task and notification recorded in the worklist.");
      oExceptionModel.setProperty("/bannerType", "Information");
      MessageToast.show("Owner assigned and notification recorded.");
    },

    onRetryEligibleOperation: function () {
      oExceptionModel.setProperty("/bannerText", "Read-only retry is safe. Ambiguous writes remain in reconciliation and must not reissue a write without fresh observation.");
      oExceptionModel.setProperty("/bannerType", "Success");
      MessageToast.show("Eligible operation retried safely; ambiguous writes remain in reconciliation.");
    },

    onCompleteAttendedTask: function () {
      oExceptionModel.setProperty("/bannerText", "Reported completion recorded. Readback is required before the project can move to verified completion.");
      oExceptionModel.setProperty("/bannerType", "Warning");
      MessageToast.show("Attended task completed; readback required before verified state can be accepted.");
    },

    onEscalate: function () {
      oExceptionModel.setProperty("/bannerText", "Escalation created and return context preserved for the current action and operator.");
      oExceptionModel.setProperty("/bannerType", "Information");
      MessageToast.show("Escalation created with return context preserved.");
    }
  });
});
