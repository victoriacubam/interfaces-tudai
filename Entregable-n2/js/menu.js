
//Menu hamburguesa

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

    if(!perfil.classList.contains("activar-perfil")){
        activarPerfil();
    }

    if(!carrito.classList.contains("activar-carrito")){
        activarPerfil();
    }

}

// Menu perfil

let perfil = document.querySelector("#perfil-desplegado");
let btnPerfil = document.querySelector("#btn-perfil");

btnPerfil.addEventListener("click", activarPerfil);

function activarPerfil() {
    perfil.classList.toggle("activar-perfil");
    btnPerfil.classList.toggle("activar-ico");

    if(menu.classList.contains("activar-menu")){
       activarMenu();
    }
    if(!carrito.classList.contains("activar-carrito")){
        activarCarrito();
    }
};


//Carrito

let carrito = document.querySelector("#carrito");
let btnCarrito = document.querySelector("#btn-carrito");
let btnCarritoCerrar = document.querySelector("#cerrar-carrito");

btnCarrito.addEventListener("click", activarCarrito);
btnCarritoCerrar.addEventListener("click", activarCarrito);


function activarCarrito() {
    carrito.classList.toggle("activar-carrito");
    btnCarrito.classList.toggle("activar-ico");

    if(menu.classList.contains("activar-menu")){
       activarMenu();
    }
    if(!perfil.classList.contains("activar-perfil")){
        activarPerfil();
    }
};
