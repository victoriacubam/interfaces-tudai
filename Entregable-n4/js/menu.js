"use strict"

//MENU HAMBURGUESA

document.querySelector("#btn-menu").addEventListener("click", activarMenu);

// Al hacer click en el menu hamburguesa, se transforma en una cruz
function activarMenu(){
  let linea1 = document.querySelector("#linea-1");
  let linea2 = document.querySelector("#linea-2");
  let linea3 = document.querySelector("#linea-3");

  linea1.classList.toggle("activar-linea-1");
  linea2.classList.toggle("activar-linea-2");
  linea3.classList.toggle("activar-linea-3");
}