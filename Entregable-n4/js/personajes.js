const contenedorPersonajes = document.getElementById('personajes');

contenedorPersonajes.addEventListener('mouseover', function(event) {
  if (event.target.classList.contains('personaje')) {
    // Quita las clases 'grande' y 'pequeno' de todas las imágenes
    document.querySelectorAll('.personaje').forEach(function(element) {
      element.classList.remove('grande', 'pequeno');
    });

    // Agrega la clase 'grande' a la imagen sobre la que se hizo hover
    event.target.classList.add('grande');
    // Agrega la clase 'pequeno' a las imágenes no seleccionadas
    document.querySelectorAll('.personaje:not(:hover)').forEach(function(element) {
      element.classList.add('pequeno');
    });

    // Cambia el color de fondo según el atributo 'data-color'
    const colorClase = event.target.dataset.color || '';
    contenedorPersonajes.className = `container ${colorClase}`;
  }
});


// Función para mostrar el popup correspondiente al personaje seleccionado
// function mostrarPopup(idPersonaje) {
//   var popupId = 'pop-up-' + idPersonaje.split('-')[1];
//   document.getElementById(popupId).style.display = 'block';
//  }
 
 // Función para ocultar todos los popups
 function ocultarPopups() {
  var popups = document.getElementsByClassName('popUp');
  for (var i = 0; i < popups.length; i++) {
     popups[i].style.display = 'none';
  }
 }
 
 // Asignar eventos de clic a las imágenes
 document.getElementById('personaje-1').addEventListener('click', function() {
  ocultarPopups();
  // mostrarPopup(this.id);
 });
 
 document.getElementById('personaje-2').addEventListener('click', function() {
  ocultarPopups();
  mostrarPopUp(this.id);
 });
 
 document.getElementById('personaje-3').addEventListener('click', function() {
  ocultarPopups();
  // mostrarPopup(this.id);
 });



function mostrarPopUp(id) {
  console.log("Mostrar pop-up: " + id);
  let popUp = document.getElementById(id);
  
  if (popUp) {
    popUp.style.display = 'flex';
  } else {
    console.error("El elemento con ID " + id + " no fue encontrado.");
  }
}

function ocultarPopUp(id) {
  var popUp = document.getElementById(id);
  popUp.style.display = 'none';
}
  
  
  
  
  
  
  