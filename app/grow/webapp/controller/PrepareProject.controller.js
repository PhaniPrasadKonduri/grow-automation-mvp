sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History",
  "../model/route-registry",
  "../shared/action-registry"
], function (Controller, MessageToast, History, routeRegistry, actionRegistry) {
  "use strict";

  return Controller.extend("com.ey.grow.prototype.controller.PrepareProject", {
    onInit: function () {
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
      this.byId("preparePage").setBusy(false);
    },

    onBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("P02");
      }
    },

    _getProjectModel: function () {
      return this.getView().getModel("project") || this.getOwnerComponent().getModel("project");
    },

    _getRequiredState: function () {
      var oProject = this._getProjectModel();
      if (!oProject) {
        return { ready: false, missing: ["Project data model"] };
      }

      var sProjectName = oProject.getProperty("/projectName");
      var aLegalEntities = oProject.getProperty("/legalEntities") || [];
      var aOwners = oProject.getProperty("/owners") || [];
      var sCountry = oProject.getProperty("/country");
      var aMissing = [];

      if (!sProjectName || !sProjectName.trim()) {
        aMissing.push("Project name");
      }
      if (!sCountry) {
        aMissing.push("Target country");
      }
      if (!aLegalEntities.length) {
        aMissing.push("Legal entities");
      }
      if (!aOwners.length) {
        aMissing.push("Owners");
      }

      return { ready: aMissing.length === 0, missing: aMissing };
    },

    onEditProject: function () {
      var oProject = this._getProjectModel();
      if (!oProject) {
        MessageToast.show("Project metadata is not available in the current context.");
        return;
      }

      var sName = oProject.getProperty("/projectName") || "New project";
      if (!sName || !sName.trim()) {
        MessageToast.show("Project name is required before saving the draft.");
        return;
      }

      MessageToast.show("Draft project metadata saved for " + sName + ".");
    },

    onOpenLegalEntities: function () {
      var oProject = this._getProjectModel();
      var aLegalEntities = oProject ? (oProject.getProperty("/legalEntities") || []) : [];

      if (!aLegalEntities.length) {
        MessageToast.show("No legal entities are configured yet. Add a seeded entity to continue.");
        return;
      }

      this.getOwnerComponent().getRouter().navTo("P11", { id: "legal-entity" });
    },

    onAssignOwners: function () {
      var oProject = this._getProjectModel();
      var aOwners = oProject ? (oProject.getProperty("/owners") || []) : [];

      if (!aOwners.length) {
        MessageToast.show("No eligible owners are assigned yet. Select a valid persona owner.");
        return;
      }

      MessageToast.show("Ownership assignment updated for " + aOwners.length + " assignee(s).");
    },

    onReadinessCheck: function () {
      var oState = this._getRequiredState();

      if (!oState.ready) {
        MessageToast.show("Missing setup: " + oState.missing.join(", ") + ". Please resolve before continuing.");
        return;
      }

      MessageToast.show("Project setup readiness confirmed. Proceeding to next workstream.");
      this.getOwnerComponent().getRouter().navTo("P05", { id: this._getProjectModel().getProperty("/projectId") || "demo-project" });
    }
  });
});
