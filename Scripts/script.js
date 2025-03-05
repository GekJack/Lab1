const signIn = document.getElementById("signinButton")
const signUp = document.getElementById("signupButton")
const sighInBlock = document.getElementById("sighInBlock");
const sighUpBlock = document.getElementById("sighUpBlock");


signIn.addEventListener("click" , () => {
    sighUpBlock.classList.add("d-none");
    sighInBlock.classList.remove("d-none");
})

signUp.addEventListener("click" , () => {
    sighInBlock.classList.add("d-none");
    sighUpBlock.classList.remove("d-none");
})
