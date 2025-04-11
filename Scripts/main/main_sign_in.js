import LoginModel from "/Lab1/Scripts/model/model_sign_in.js";
import LoginView from "/Lab1/Scripts/view/view_sign_in.js";
import LoginController from "/Lab1/Scripts/controller/controller_sign_in.js";

document.addEventListener("DOMContentLoaded", function () {
  const loginModel = new LoginModel();
  const loginView = new LoginView();
  const loginController = new LoginController(loginModel, loginView);

  loginController.initialize();
});
