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

// Al hacer click se despliega el menu 
document.addEventListener('DOMContentLoaded', function() {
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu');

  btnMenu.addEventListener('click', function() {
      menu.classList.toggle('mostrar'); 
  });
});