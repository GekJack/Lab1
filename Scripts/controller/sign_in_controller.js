export default class LoginController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  initialize() {
    const loginButton = document.getElementById("SignInBut");
    const form = document.getElementById("SignInForm");

    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.login();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.login();
    });
  }

  login() {
    const userData = this.view.getUserData();

    if (!this.model.authenticateUser(userData)) {
      return;
    }
    this.view.redirectToHomePage();
  }
}
