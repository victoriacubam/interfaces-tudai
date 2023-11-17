"use strict"
//Cuando se hace scroll se ejecuta la funcion que pregunta si la posicion del scroll 
//esta dentro de la posicion del personaje
// window.onscroll = function(){
//     // let posPersonaje4Top = document.querySelector("#personaje-4").getBoundingClientRect().top;
//     // let posPersonaje4Bottom = document.querySelector("#personaje-4").getBoundingClientRect().bottom;
//     // let posPersonaje4 = document.querySelector("#personaje-4")
//     // if ((window.scrollY >= posPersonaje4Top)&&(posPersonaje4Bottom>=window.scrollY)){
//     //     const scrolled = window.scrollY;
//     //     posPersonaje4.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
//     // }
// }

 // Función para agregar o quitar la clase según la posición del scroll
 function toggleSectionClass() {
    let seccion3 = document.getElementById('seccion-3');
    let card = seccion3.getBoundingClientRect();
    //Mitad de la altura de la ventana visible
    let offset = window.innerHeight * 0.5;

    let card1 = document.querySelector("#card-1");
    let card2 = document.querySelector("#card-2");
    let card3 = document.querySelector("#card-3");

    if (card.top < offset && card.bottom > offset) {
      card1.classList.add('fade-in');
      card2.classList.add('fade-in');
      card3.classList.add('fade-in');
    } else {
      card1.classList.remove('fade-in');
      card2.classList.remove('fade-in');
      card3.classList.remove('fade-in');
    }
  }

  // Agrega un event listener para la función al hacer scroll
  document.addEventListener('scroll', toggleSectionClass);

  // Llama a la función inicialmente para aplicar clases si es necesario al cargar la página
  toggleSectionClass();