sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oDocumentModel = new JSONModel({
    status: "Safe to process",
    state: "Success",
    progress: 82,
    revisions: [
      { revision: "v1.0", source: "BPD fixture", type: "DOCX", evidence: "Verified", evidenceState: "Success", ids: "BR-104 / TC-210" },
      { revision: "v1.1", source: "Upload", type: "DOCX", evidence: "Low-risk", evidenceState: "Warning", ids: "BR-105 / TC-211" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.DocumentIntake", {
    onInit: function () {
      this.getView().setModel(oDocumentModel, "document");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P05", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
      }
    },

    onUploadDocument: function () {
      oDocumentModel.setProperty("/status", "Extraction in progress");
      oDocumentModel.setProperty("/state", "Warning");
      oDocumentModel.setProperty("/progress", 46);
      MessageToast.show("Document upload validated. Safe file type and size accepted.");
    },

    onUseBpdFixture: function () {
      oDocumentModel.setProperty("/status", "BPD baseline loaded");
      oDocumentModel.setProperty("/state", "Success");
      oDocumentModel.setProperty("/progress", 100);
      MessageToast.show("BPD fixture applied; BR and TC IDs preserved.");
    },

    onInspectSource: function () {
      MessageToast.show("Document preview opened at the selected paragraph reference.");
    },

    onResolveUploadIssue: function () {
      oDocumentModel.setProperty("/status", "Resolution options ready");
      oDocumentModel.setProperty("/state", "Warning");
      MessageToast.show("Upload issue resolved: retry safe extraction or replace the draft revision.");
    },

    onSelectRevision: function () {
      MessageToast.show("Revision context retrieved successfully.");
    },

    onReviewRequirements: function () {
      this.getOwnerComponent().getRouter().navTo("P07", { id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project" });
    }
  });
});
