const logo = document.querySelector("#logo");

logo.addEventListener("mouseover", changeNewLogo);
logo.addEventListener("mouseleave", changeOldLogo);

function changeNewLogo() {
    logo.src = "assets/logo-hover.png";
}

function changeOldLogo() {
    logo.src = "assets/logo.png";
}
