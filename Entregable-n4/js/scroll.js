"use strict"

// Cuando se scrollea la ventana, se llama a la funcion que determina:
window.onscroll = function() {
  
  //HEADER

  let header = document.querySelector("#header");
  let logo = document.querySelector("#logo");
  // let seccion1 = document.querySelector("#seccion-1");
  
  //Si se scrolleó se fija el header
  if (window.scrollY > 0) {
      header.classList.add("fixed");
      logo.classList.add("fixed-img");
  } 
  //Sino, lo deja grande
  else {
      header.classList.remove("fixed");
      logo.classList.remove("fixed-img");
  }


  // SECCION 2 
  // *CONOCE A SPIDEY Y SUS SORPRENDENTES AMIGOS*

  let posPersonaje4 = document.querySelector("#personaje-4");
  let posPersonaje4Top = posPersonaje4.getBoundingClientRect().top;
  let posPersonaje4Bottom = posPersonaje4.getBoundingClientRect().bottom;
    
  //Si la posicion del scroll esta dentro de la posicion del personaje de la sección
  if (((window.scrollY >= posPersonaje4Top+200))&&((posPersonaje4Bottom+100)>=window.scrollY)){
    let scrolled = window.scrollY;

    posPersonaje4.style.transform = 'translateY(' + scrolled * 0.2 + 'px)';
  }

  // //SECCION 6
  // let posSeccion6 = document.querySelector("#seccion-6");
  // let posSeccion6Top = posSeccion6.getBoundingClientRect().top;
  // let posSeccion6Bottom = posSeccion6.getBoundingClientRect().bottom;
  // if(((window.scrollY >= posSeccion6Top+460))&&((posSeccion6Bottom)>=window.scrollY)){
  //   console.log(posSeccion6Top, posSeccion6Bottom);
  // }

}  


// SECCION 3

// Agrega o quita la clase fade-in dependiendo si la sección está visible dentro de la ventana o no
function fadeIn() {
  
  let seccion3 = document.getElementById('seccion-3');
  
  //getBoundingClientRect() Otorga un objeto DOMRect con la informacion sobre 
  //la posicion y el tamaño del elemento con relacion a la ventana del navegador
  let cards = seccion3.getBoundingClientRect();
  
  //Mitad de la altura de la ventana visible
  let offset = window.innerHeight * 0.5;

  let card1 = document.querySelector("#card-1");
  let card2 = document.querySelector("#card-2");
  let card3 = document.querySelector("#card-3");

  //Si el borde superior de la seccion 3 es menor a la mitad de la altura de la ventana 
  // y el borde superior es mayor, agrega la clase
  if (cards.top < offset && cards.bottom > offset) {
      card1.classList.add('fade-in');
      card2.classList.add('fade-in');
      card3.classList.add('fade-in');


      // card1.classList.remove('oculto');
      // card1.classList.add('fade-in');
      // setTimeout(function() {
      //   card2.classList.remove('oculto');
      //   card2.classList.add('fade-in');
      // }, 2000);
      
      // setTimeout(function() {
      //   card3.classList.remove('oculto');
      //   card3.classList.add('fade-in');
      // }, 4000);
  } 

  
  // Cuando ya no se cumple (ya no es visible la sección), se le quita la clase
  else {
    card1.classList.remove('fade-in');
    // card1.classList.add('oculto');
    
    card2.classList.remove('fade-in');
    // card2.classList.add('oculto');
    
    card3.classList.remove('fade-in');
    // card3.classList.add('oculto');
  }

  let seccion6 = document.getElementById('seccion-6');
  let posSeccion6 = seccion6.getBoundingClientRect();
  let offset2 = window.innerHeight * 0.5;

  let texto1 = document.querySelector("#texto-1");
  let texto2 = document.querySelector("#texto-2");
  let texto3 = document.querySelector("#texto-3");
  let texto4 = document.querySelector("#texto-4");

  if (seccion6.top < offset2 && seccion6.bottom > offset2) {
    console.log("text1");
    if((texto1.getBoundingClientRect().top < offset2)&&(texto1.getBoundingClientRect().bottom > offset2)){
    }
  }
}

// Agrega un event listener para la función al hacer scroll
document.addEventListener('scroll', fadeIn);

// Llama a la función inicialmente para aplicar clases si es necesario al cargar la página
fadeIn();


// function castParallax() {

// 	window.addEventListener("scroll", function(event){

// 		var top = this.scrollY;

// 		let posPersonaje4 = document.querySelector("#personaje-4");
// 		var speed, yPos;
//       console.log("hola")
// 			speed = posPersonaje4.getAttribute('data-speed');
// 			var yPos = -(top * speed / 100);
// 			posPersonaje4.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');


// 	});
// }

// castParallax();