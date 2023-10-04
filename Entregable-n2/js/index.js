let menu = document.querySelector("#items-menu");
let btnMenu = document.querySelector("#btn-menu");

btnMenu.addEventListener("click", () => {
    console.log(menu.classList.value);
    if(menu.classList.contains("menu-abrir")){
        menu.classList.remove("menu-abrir");
        menu.classList.add("menu-cerrar");  
    } else if(menu.classList.contains("menu-cerrar")){
        menu.classList.remove("menu-cerrar");
        menu.classList.add("menu-abrir");     
    }
});




let perfil = document.querySelector("#items-perfil");
let btnPerfil = document.querySelector("#btn-perfil");

btnPerfil.addEventListener("click", () => {
    perfil.classList.toggle("perfil-desplegado");
    console.log("desplegado");
});


