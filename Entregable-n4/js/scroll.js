"use strict"

// Cuando se scrollea la ventana, se llama a la funcion que determina:
window.onscroll = function() {
  
  //HEADER

  let header = document.querySelector("#header");
  let logo = document.querySelector("#logo");
  
  //SECCION 1 - HERO

  let personaje1 = document.querySelector("#personaje1");
  let personaje2 = document.querySelector("#personaje2");
  let personaje3 = document.querySelector("#personaje3");

  let telaArañaIzq = document.querySelector("#tela-araña-izq");
  let telaArañaDer = document.querySelector("#tela-araña-der");

  let edificio1 = document.querySelector("#edificio1");
  let edificio2 = document.querySelector("#edificio2");
  let edificio3 = document.querySelector("#edificio3");
   
  
  if (window.scrollY > 0) {
      
    //HEADER - Si se scrolleó se fija el header
    header.classList.add("fixed");
    logo.classList.add("fixed-img");
      
      
    //SECCION 1 - HERO -- cuando se scrollea se le da movimiento a los personajes

    personaje1.style.transform = 'translate(-40px, 20px) scale(1.1)';
    personaje2.style.transform = 'translate(0px, 40px) scale(1.2)';
    personaje3.style.transform = 'translate(40px, 20px) scale(1.1)';

    telaArañaIzq.style.transform = 'scale(1.2) translate(-70px, -30px) rotate(20deg)';
    telaArañaDer.style.transform = 'scale(1.2) translate(70px, 70px) rotate(20deg)';

    edificio1.style.transform = 'scale(1.1)';
    edificio1.style.left = '-35px';
      
    edificio2.style.transform = 'scale(1.1)';
    edificio2.style.bottom = '150px';
    edificio2.style.right = '10px';
      

    edificio3.style.transform = 'scale(0.9)';
     edificio3.style.left = '30%';
  } 
  else {
      
    //HEADER - Deja el header sin fijar en su tamaño original
    header.classList.remove("fixed");
    logo.classList.remove("fixed-img");

    //SECCION 1 - Deja los elementos de la seccion 1 con sus estilos originales      
    personaje1.style.transform = 'translate(0px, 0px)';
    personaje2.style.transform = 'translate(0px, 0px)';
    personaje3.style.transform = 'translate(0px, 0px)';

    telaArañaIzq.style.transform = 'translate(0px, 0px)';
    telaArañaDer.style.transform = 'translate(0px, 0px)';

    edificio1.style.transform = 'scale(1)';
    edificio1.style.left = '-55px';
      
    edificio2.style.transform = 'scale(1)';
    edificio2.style.bottom = '150px';
    edificio2.style.right = '0px';
      
    edificio3.style.transform = 'scale(1)';
    edificio3.style.left = '31%';

  }


  // SECCION 2  *CONOCE A SPIDEY Y SUS SORPRENDENTES AMIGOS*

  let personaje4 = document.querySelector("#personaje-4");
  let posPersonaje4 = personaje4.getBoundingClientRect();
    
  //Si la posicion del scroll esta dentro de la posicion del personaje de la sección
  if (((window.scrollY >= posPersonaje4.top+200))&&((posPersonaje4.bottom+100)>=window.scrollY)){
    let velocidad = (window.scrollY - posPersonaje4.top) * 0.2;
    personaje4.style.transform = 'translateY(' + velocidad + 'px)';

  }


  //SECCION 6 - SCROLL con imagen fijada
 
  //Imagenes del scroll
  const img1 = document.querySelector('#img-1');
  const img2 = document.querySelector('#img-2');
  const img3 = document.querySelector('#img-3');
  const img4 = document.querySelector('#img-4');

  //Textos del scroll
  const texto1 = document.querySelector('#texto-1');
  const texto2 = document.querySelector('#texto-2');
  const texto3 = document.querySelector('#texto-3');
  const texto4 = document.querySelector('#texto-4');

  //Scroll actual de la ventana
  let scrollY = this.window.scrollY;

  //Si el scroll se encuentra en la primer imagen
  if(scrollY >= 4060 && scrollY < 4210){
    img2.classList.remove('fijado');
    img2.classList.add('desactivar');
        
    img1.classList.remove('desactivar');
    img1.classList.add('fijado');
        
    texto2.classList.remove('activar');
    texto2.classList.add('desactivar');
        
    texto1.classList.add('activar');

  } 

  //Si el scroll se encuentra en la segunda imagen
  else if(scrollY >= 4210 && scrollY < 4684){
    img1.classList.remove('fijado');
    img1.classList.add('desactivar');
       
    img3.classList.remove('fijado');
    img3.classList.add('desactivar');
        
    img2.classList.remove('desactivar');
    img2.classList.add('fijado');
        
    texto1.classList.remove('activar');
    texto1.classList.add('desactivar');

    texto3.classList.remove('activar');
    texto3.classList.add('desactivar');
    
    texto2.classList.add('activar');
  } 

  //Si el scroll se encuentra en la tercer imagen
  else if(scrollY >= 4684 && scrollY < 5244){

    img2.classList.remove('fijado');
    img2.classList.add('desactivar');
        
    img4.classList.remove('fijado');
    img4.classList.add('desactivar');
        
    img3.classList.remove('desactivar');
    img3.classList.add('fijado');
        
    texto2.classList.remove('activar');
    texto2.classList.add('desactivar');
        
    texto4.classList.remove('activar');
    texto4.classList.add('desactivar');

    texto3.classList.add('activar');

  } 

  //Si el scroll se encuentra en la cuarta imagen
  else if(scrollY >= 5244 && scrollY < 5573){

    img3.classList.remove('fijado');
    img3.classList.add('desactivar');
        
    img4.classList.remove('desactivar');
    img4.classList.add('fijado');
        
    texto3.classList.remove('activar');
    texto3.classList.add('desactivar');
        
    texto4.classList.add('activar');

  }
  else if(scrollY >= 5573 && scrollY < 5628){
    img4.classList.remove('fijado');
  } 

  //Si no se encuentra en los rangos establecidos (el scroll esta por encima o por debajo del contenedor), 
  // deja a la primer y ultima imagen sin fijar (sticky)
  else {
    img1.classList.remove('fijado');
    img4.classList.remove('fijado');
  }  


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
  } 

  
  // Cuando ya no se cumple (ya no es visible la sección), se le quita la clase
  else {
    card1.classList.remove('fade-in');    
    card2.classList.remove('fade-in');    
    card3.classList.remove('fade-in');
  }

}
  
// Agrega un event listener para la función al hacer scroll
document.addEventListener('scroll', fadeIn);

// Llama a la función inicialmente para aplicar clases si es necesario al cargar la página
fadeIn();


