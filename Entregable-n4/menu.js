// 'use strict'

// Header fijo al hacer scroll

let header = document.querySelector("#header");
let logo = document.querySelector("#logo");
let seccion1 = document.querySelector("#seccion-1");

window.onscroll = function() {
    if (window.scrollY > 0) {
        header.classList.add("fixed");
        logo.classList.add("fixed-img");
      } else {
        header.classList.remove("fixed");
        logo.classList.remove("fixed-img");
      }
}

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



