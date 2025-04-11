export default class LoginView {
    getUserData() {
      return {
        email: document.getElementById("inputEmailSignIn").value,
        password: document.getElementById("inputPasswordSignIn").value,
      };
    }
  
    redirectToHomePage() {
      window.location.href = "/Lab1/index.html";
    }
  }
  