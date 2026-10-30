sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oArchitectureModel = new JSONModel({
    projectName: "Finance automation proof of concept",
    projectId: "PRJ-01",
    bannerType: "Information",
    bannerText: "Architecture context is mapped to the current implementation scope and includes clear source ownership for each relation.",
    relations: [
      { label: "Finance posting process", domain: "ERP", status: "Mapped" },
      { label: "Tax rule capability", domain: "Finance", status: "Review" },
      { label: "User access model", domain: "Identity", status: "Mapped" }
    ],
    selected: {
      label: "Finance posting process",
      lifecycle: "In scope",
      owner: "Architecture team",
      impact: "The proposed scale-up keeps the current ERP and tax capability mapping unchanged but adds additional review points for governance and support handoff."
    }
  });

  return Controller.extend("com.ey.grow.prototype.controller.ArchitectureAndApplicationMap", {
    onInit: function () {
      this.getView().setModel(oArchitectureModel, "arch");
      this.getOwnerComponent().setModel(this.getOwnerComponent().getModel("project"), "project");
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

    onSelectRelation: function () {
      MessageToast.show("Relation selection opened for dynamic architecture review.");
    },

    onOpenSignavioContext: function () {
      oArchitectureModel.setProperty("/bannerText", "Signavio context is visible and linked to the current process record, scope candidates and source ownership.");
      MessageToast.show("Signavio context opened for the selected process relation.");
    },

    onOpenLeanIxContext: function () {
      oArchitectureModel.setProperty("/bannerText", "LeanIX context is visible with the application fact sheet and supporting dependency metadata for the current scope.");
      MessageToast.show("LeanIX context opened for the selected application mapping.");
    },

    onAssessImpact: function () {
      oArchitectureModel.setProperty("/bannerType", "Warning");
      oArchitectureModel.setProperty("/bannerText", "Impact assessment highlights a review point for the proposed extension and flags the required governance sign-off.");
      MessageToast.show("Impact assessment prepared for the selected architecture change.");
    },

    onRefreshMappedContext: function () {
      oArchitectureModel.setProperty("/bannerType", "Success");
      oArchitectureModel.setProperty("/bannerText", "Mapped context refreshed from the simulated source metadata and ownership model without changing the current implementation scope.");
      MessageToast.show("Mapped architecture context refreshed.");
    },

    onSelectRelationItem: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("arch");
      var oRelation = oContext && oContext.getObject();
      if (!oRelation) {
        return;
      }

      oArchitectureModel.setProperty("/selected", {
        label: oRelation.label,
        lifecycle: "In scope",
        owner: "Architecture team",
        impact: "The current relation remains aligned to the active process and application mapping and should be reviewed with any planned scope changes."
      });
      MessageToast.show("Selected relation: " + oRelation.label + ".");
    }
  });
});
