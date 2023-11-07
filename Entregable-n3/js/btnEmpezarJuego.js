const div = document.getElementById('div-inicio');
const canvasEmpezar = document.getElementById('miCanvas');
const button = document.getElementById('empezar-jugar-ejecucion');

button.addEventListener('click', function() {
  // Oculta el div y muestra el canvas al hacer clic en el botón
  div.style.display = 'none';
  button.style.display='none';
  canvas.style.display = 'block';

});
