import LoginModel from "/Lab1/Scripts/models/sign_in_model.js";
import LoginView from "/Lab1/Scripts/view/sign_in_view.js";
import LoginController from "/Lab1/Scripts/controller/sign_in_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  const loginModel = new LoginModel();
  const loginView = new LoginView();
  const loginController = new LoginController(loginModel, loginView);

  loginController.initialize();
});
