import FormModel from "/Lab1/Scripts/models/reg_model.js";
import FormView from "/Lab1/Scripts/view/reg_view.js";
import FormController from "/Lab1/Scripts/controller/reg_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  const formModel = new FormModel();
  const formView = new FormView();
  const formController = new FormController(formModel, formView);

  formController.initialize();
});

