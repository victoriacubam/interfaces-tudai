//Seccion 6 - SCROLL con imagen fijada

let seccion6 = document.getElementById('seccion-6');
let posSeccion6 = seccion6.getBoundingClientRect();
//Mitad de la pantalla
let offset2 = window.innerHeight * 0.5; 
let bottom = window.innerHeight;

let texto1 = document.querySelector("#texto-1");
let texto2 = document.querySelector("#texto-2");
let texto3 = document.querySelector("#texto-3");
let texto4 = document.querySelector("#texto-4");

let img1 = document.querySelector("#img-1");
let img2 = document.querySelector("#img-2");
let img3 = document.querySelector("#img-3");
let img4 = document.querySelector("#img-4");

if (posSeccion6.top < offset2/* && posSeccion6.bottom > bottom*/) {
  
    if((texto1.getBoundingClientRect().top < offset2)&&(texto1.getBoundingClientRect().bottom > offset2)){
      texto1.classList.remove('desactivar');
      texto1.classList.add('activar');
      img1.classList.remove('noFijado');
      img1.classList.add('fijado');

    } else {
      texto1.classList.add('desactivar');
      texto1.classList.remove('activar');
      img1.classList.remove('fijado');
      img1.classList.add('noFijado');

    }
    
    if((texto2.getBoundingClientRect().top < offset2)&&(texto2.getBoundingClientRect().bottom > offset2)){
      texto2.classList.remove('desactivar');
      texto2.classList.add('activar');
      img2.classList.remove('noFijado');
      img2.classList.add('fijado');

    } else {
      texto2.classList.add('desactivar');
      texto2.classList.remove('activar');
      img2.classList.remove('fijado');
      img2.classList.add('noFijado');
    }
   
    if((texto3.getBoundingClientRect().top < offset2)&&(texto3.getBoundingClientRect().bottom > offset2)){
      texto3.classList.remove('desactivar');
      texto3.classList.add('activar');
      img3.classList.remove('noFijado');
      img3.classList.add('fijado');

    } else {
      texto3.classList.add('desactivar');
      texto3.classList.remove('activar');
      img3.classList.remove('fijado');
      img3.classList.add('noFijado');
    }
   
    if((texto4.getBoundingClientRect().top < offset2)&&(texto4.getBoundingClientRect().bottom > offset2)){
      texto4.classList.remove('desactivar');
      texto4.classList.add('activar');
      img4.classList.remove('noFijado');
      img4.classList.add('fijado');

    } else {
      texto4.classList.add('desactivar');
      texto4.classList.remove('activar');
      img4.classList.remove('fijado');
      img4.classList.add('noFijado');
    }
    
} else {
    img4.classList.remove('fijado');
    img4.classList.add('noFijado');
}

