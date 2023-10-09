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


document.querySelector(".btn-menu").addEventListener("click", activarMenu);

let linea1 = document.querySelector("#linea1");
let linea2 = document.querySelector("#linea2");
let linea3 = document.querySelector("#linea3");

let menu = document.querySelector("#menu");

function activarMenu(){
    linea1.classList.toggle("activar-linea1");
    linea2.classList.toggle("activar-linea2");
    linea3.classList.toggle("activar-linea3");

    menu.classList.toggle("activar-menu");

    if(perfil.classList.contains("abrir-perfil")){
        activarPerfil();
    }

}

let perfil = document.querySelector("#perfil-header");
let btnPerfil = document.querySelector("#btn-perfil");

btnPerfil.addEventListener("click", activarPerfil);

function activarPerfil() {
    perfil.classList.toggle("abrir-perfil");
    btnPerfil.classList.toggle("activar-ico");

    if(menu.classList.contains("activar-menu")){
       activarMenu();
    }
    //btnCarrito.classList.remove("abrir-carrito");
};


// let btnEmpezarJugar = document.querySelector("#empezar-jugar");
// btnEmpezarJugar.addEventListener("click", () => {
//     window.location.href = "juegoEnEjecucion.html"
// });

// Carrito

let carrito = document.querySelector("#carrito");
let btnCarrito = document.querySelector("#btn-carrito");

let btnCarritoCerrar = document.querySelector("#cerrar-carrito");

btnCarrito.addEventListener("click", activarCarrito);
btnCarritoCerrar.addEventListener("click", activarCarrito);

function activarCarrito(){
    console.log("abrir-cerrar")
    carrito.classList.toggle("abrir-carrito");
    btnCarrito.classList.toggle("activar-ico");
}