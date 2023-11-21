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



document.addEventListener('DOMContentLoaded', function() {
  const botonesPersonajes = document.querySelectorAll('.personaje');
  const popUps = document.querySelectorAll('.popUp');

  botonesPersonajes.forEach(boton => {
    boton.addEventListener('click', function() {
      // Obtener el número del personaje desde el ID del botón
      const personajeNum = this.id.split('-')[1];
      
      // Ocultar todos los pop-ups excepto el correspondiente al personaje clicado
      popUps.forEach(popUp => {
        const popUpNum = popUp.id.split('-')[2];
        if (popUpNum === personajeNum) {
          popUp.style.display = 'flex'; // Muestra el pop-up del personaje clicado
          console.log("Hola");
        } else {
          popUp.style.display = 'none'; // Oculta los otros pop-ups
        }
      });
    });
  });
});

  // Código para cerrar solo el pop-up correspondiente al botón de cerrar presionado
  const botonesCerrar = document.querySelectorAll('.cerrar');
  botonesCerrar.forEach(botonCerrar => {
    botonCerrar.addEventListener('click', function() {
      const popUpToClose = this.parentElement.parentElement;
      if (popUpToClose) {
        popUpToClose.style.display = 'none';
      } else {
        console.error(`No se encontró el pop-up correspondiente al botón de cerrar`);
      }
    });
  });


  

 

  
  
  
  
  
  