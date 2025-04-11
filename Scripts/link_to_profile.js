document.addEventListener("DOMContentLoaded", () => {
    const profileLink = document.getElementById("profileLink");
    const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

    if (!currentAccount) {
        profileLink.href = "#";
        profileLink.style.pointerEvents = "auto";
        profileLink.style.opacity = "0.6";
        profileLink.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Будь ласка, увійдіть або зареєструйтеся для доступу до профілю.");
        });
    }
});