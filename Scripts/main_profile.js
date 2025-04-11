document.addEventListener('DOMContentLoaded', function() {
    const currentaccountJSON = localStorage.getItem("currentAccount");

    if (currentaccountJSON) {
        const currentaccount = JSON.parse(currentaccountJSON);

        const nameElement = document.getElementById("login");
        const dobElement = document.getElementById("dob");

        if (nameElement) {
            nameElement.textContent = currentaccount.name;
        }

        if (dobElement) {
            dobElement.textContent = "День народження: " + currentaccount.dob;
        }

        const logoutLink = document.getElementById("logoutButton");

        if (logoutLink) {
            logoutLink.addEventListener("click", function(event) {
                event.preventDefault();

                localStorage.removeItem("currentAccount");

                window.location.href = "./index.html";
            });
        }
    } else {
        console.log("Дані про аккаунт не знайдені в LocalStorage");
    }
});
