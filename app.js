const logo = document.querySelector("#logo");
const logIn = document.querySelector(".log-in-button");
const modal = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

console.log(logIn);

logo.addEventListener("mouseover", changeNewLogo);
logo.addEventListener("mouseleave", changeOldLogo);
logIn.addEventListener("click", modalVisi);
modalClose.addEventListener("click", modalCl);

function changeNewLogo() {
    logo.src = "assets/logo-hover.png";
}

function changeOldLogo() {
    logo.src = "assets/logo.png";
}

function modalVisi() {
    modal.classList.add("bg-active");
}

function modalCl() {
    modal.classList.remove("bg-active");
}



