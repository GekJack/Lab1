export default class FormController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    initialize() {
        const confirmButton = document.getElementById("RegConBut");
        const form = document.getElementById("RegForm");
  
      confirmButton.addEventListener("click", (event) => {
        event.preventDefault();
        this.saveDataToLocalStorage();
      });
  
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        this.saveDataToLocalStorage();
      });
    }
  
    saveDataToLocalStorage() {
      const userData = this.view.getUserData();
  
      if (!this.model.validateUserData(userData)) {
        return;
      }
  
      if (!this.model.checkExistingAccount(userData)) {
        return;
      }
  
      this.model.saveUserData(userData);
      this.view.showSuccessMessage();
      this.view.resetForm();
      this.model.setCurrentAccount(userData);
      window.location.href = "https://gekjack.github.io/Lab1/index.html";
    }
  }
  