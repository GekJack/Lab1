export default class LoginView {
    getUserData() {
      return {
        email: document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value,
      };
    }
  
    redirectToHomePage() {
      window.location.href = "/Lab1/index.html";
    }
  }
  