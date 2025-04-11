import FormModel from "/Lab1/Scripts/models/sign_in_model.js";
import FormView from "/Lab1/Scripts/view/sign_in_view.js";
import FormController from "/Lab1/Scripts/controller/sign_in_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  const formModel = new FormModel();
  const formView = new FormView();
  const formController = new FormController(formModel, formView);

  formController.initialize();
});

