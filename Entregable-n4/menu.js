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

      //Cuando se hace scroll se ejecuta la funcion que pregunta si la posicion del scroll 
      //esta dentro de la posicion del personaje
      let posPersonaje4 = document.querySelector("#personaje-4")
      let posPersonaje4Top = posPersonaje4.getBoundingClientRect().top;
      let posPersonaje4Bottom = posPersonaje4.getBoundingClientRect().bottom;
      if (((window.scrollY >= posPersonaje4Top+200))&&((posPersonaje4Bottom+100)>=window.scrollY)){
          const scrolled = window.scrollY;

          posPersonaje4.style.transform = 'translateY(' + scrolled * 0.2 + 'px)';
      }
      // //Cards fade-in
      // let card1 = document.querySelector("#card-1");
      // let card2 = document.querySelector("#card-2");
      // let card3 = document.querySelector("#card-3");
  
      // let cardTop = card1.getBoundingClientRect().top;
      // let catdBottom = card1.getBoundingClientRect().bottom;
  
      // if (((window.scrollY >= cardTop))&&(catdBottom>=window.scrollY)){
      //   card1.classList.add(".fade-in");
      //   console.log("jeje")
      // }

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



