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




 

  
  
  
  
  
  