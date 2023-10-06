// let menu = document.querySelector("#items-menu");
// let btnMenu = document.querySelector("#btn-menu");

// btnMenu.addEventListener("click", () => {
//     console.log(menu.classList.value);
//     if(menu.classList.contains("menu-abrir")){
//         menu.classList.remove("menu-abrir");
//         menu.classList.add("menu-cerrar");  
//     } else if(menu.classList.contains("menu-cerrar")){
//         menu.classList.remove("menu-cerrar");
//         menu.classList.add("menu-abrir");     
//     }
// });


document.querySelector(".btn-menu").addEventListener("click", abrir);

let linea1 = document.querySelector("#linea1");
let linea2 = document.querySelector("#linea2");
let linea3 = document.querySelector("#linea3");

let menu = document.querySelector("#menu");

function abrir(){
    linea1.classList.toggle("activar-linea1");
    linea2.classList.toggle("activar-linea2");
    linea3.classList.toggle("activar-linea3");

    menu.classList.toggle("activar-menu");

}

// let perfil = document.querySelector("#items-perfil");
// let btnPerfil = document.querySelector("#btn-perfil");

// btnPerfil.addEventListener("click", () => {
//     perfil.classList.toggle("perfil-desplegado");
//     console.log("desplegado");
// });


// let btnEmpezarJugar = document.querySelector("#empezar-jugar");
// btnEmpezarJugar.addEventListener("click", () => {
//     window.location.href = "juegoEnEjecucion.html"
// });

