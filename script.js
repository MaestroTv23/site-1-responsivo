//seleciona o elemento de barras do DOM
const barras = document.querySelector(".barras");
const navMenu = document.querySelector(".nav-menu");

barras.addEventListener("click", mobileMenu);

//manipulação do menu em dispositivos pequenos
function mobileMenu() {
    barras.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//fecha o menu quando algum link for clicado
//lista os elementos de links de navegação
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    barras.classList.remove("active");
    navMenu.classList.remove("active");
}