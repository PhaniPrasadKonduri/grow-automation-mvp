sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, MessageToast, History) {
  "use strict";

  var oAccessModel = new JSONModel({
    projectName: "Finance automation proof of concept",
    projectId: "PRJ-01",
    bannerType: "Information",
    bannerText: "Active persona grants are visible and restricted to the current demo scope. Access revocation stays auditable and safe.",
    grants: [
      { persona: "Project Lead", allowedActions: "Prepare, approve, deploy", scope: "Project, approvals", expiry: "No expiry" },
      { persona: "Support Operator", allowedActions: "Monitor, recover", scope: "Run, exception queue", expiry: "30 days" },
      { persona: "Security Reviewer", allowedActions: "Inspect access, export evidence", scope: "Access, evidence", expiry: "No expiry" }
    ]
  });

  return Controller.extend("com.ey.grow.prototype.controller.AccessAndEntitlements", {
    onInit: function () {
      this.getView().setModel(oAccessModel, "access");
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

    onInspectPersonaGrants: function () {
      oAccessModel.setProperty("/bannerText", "Persona grants are explicitly limited to approved project functions and organizational scope for this demo project.");
      MessageToast.show("Persona grants inspected.");
    },

    onChangeDemoGrant: function () {
      oAccessModel.setProperty("/bannerType", "Information");
      oAccessModel.setProperty("/bannerText", "Demo grant updated with an auditable scope change and a refreshed expiry timestamp.");
      MessageToast.show("Demo grant updated and recorded.");
    },

    onRevokeAccess: function () {
      oAccessModel.setProperty("/bannerType", "Warning");
      oAccessModel.setProperty("/bannerText", "Selected access is revoked; the user will be blocked from the protected route until the grant is re-established by a reviewed change.");
      MessageToast.show("Access revoked for the selected persona.");
    },

    onTestDeniedRoute: function () {
      this.getOwnerComponent().getRouter().navTo("P02", {
        id: this.getOwnerComponent().getModel("project").getProperty("/projectId") || "demo-project"
      });
      MessageToast.show("Denied-route demonstration is complete and the user safely returned to the project workspace.");
    },

    onSelectGrant: function (oEvent) {
      var oContext = oEvent.getParameter("listItem").getBindingContext("access");
      var oGrant = oContext && oContext.getObject();
      if (!oGrant) {
        return;
      }

      oAccessModel.setProperty("/bannerText", "Selected persona: " + oGrant.persona + ". Scope remains restricted to the authorized project and evidence boundaries.");
      MessageToast.show("Grant selected: " + oGrant.persona + ".");
    }
  });
});
