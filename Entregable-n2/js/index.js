let menu = document.querySelector("#items-menu");
let btnMenu = document.querySelector("#btn-menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-desplegado")
});




let perfil = document.querySelector("#items-perfil");
let btnPerfil = document.querySelector("#btn-perfil");

btnPerfil.addEventListener("click", () => {
    perfil.classList.toggle("perfil-desplegado");
    console.log("desplegado");
});


