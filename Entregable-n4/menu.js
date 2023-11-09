'use strict'

//Menu hamburguesa

document.querySelector("#btn-menu").addEventListener("click", activarMenu);

let linea1 = document.querySelector("#linea1");
let linea2 = document.querySelector("#linea2");
let linea3 = document.querySelector("#linea3");

function activarMenu(){
    linea1.classList.toggle("activar-linea1");
    linea2.classList.toggle("activar-linea2");
    linea3.classList.toggle("activar-linea3");
}

