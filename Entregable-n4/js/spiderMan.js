let animacion = document.querySelector(".speddsheet");

function mostrarAnimacion(){
  animacion.classList.toggle("animacion");
}

animacion.addEventListener("mouseover", ()=> {

  let y = window.getComputedStyle(animacion).getPropertyValue('bottom');
  let x = window.getComputedStyle(animacion).getPropertyValue('left');
  animacion.classList.add("caida");
  let c = document.querySelector(".caida");
  c.style.setProperty('--posMax', y);
  c.style.setProperty('--x',x);

  setTimeout(quitarCaida, 2350);
});


function quitarCaida(){
  animacion.classList.remove("caida");
}

function cargarAnimacion() {
    mostrarAnimacion();
    
    setTimeout(cargarAnimacion, 2400);
  }
  
  
  setTimeout(cargarAnimacion, 2400);
  let footer = document.querySelector(".speddsheet");
  let ejecutado = false;




