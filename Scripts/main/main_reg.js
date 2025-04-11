import FormModel from "./models/reg_model.js";
import FormView from "./view/reg_view.js";
import FormController from "./controller/reg_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  const formModel = new FormModel();
  const formView = new FormView();
  const formController = new FormController(formModel, formView);

  formController.initialize();
});

