'use strict'

//Menu hamburguesa

document.querySelector("#btn-menu").addEventListener("click", activarMenu);

let linea1 = document.querySelector("#linea-1");
let linea2 = document.querySelector("#linea-2");
let linea3 = document.querySelector("#linea-3");

function activarMenu(){
    linea1.classList.toggle("activar-linea-1");
    linea2.classList.toggle("activar-linea-2");
    linea3.classList.toggle("activar-linea-3");
}

