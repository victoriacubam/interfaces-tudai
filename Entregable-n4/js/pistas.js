document.addEventListener('DOMContentLoaded', function () {
  let elementos = document.querySelectorAll('.pistas');

  window.addEventListener('scroll', function () {
    elementos.forEach(function (elemento, index) {
      let alturaElemento = elemento.getBoundingClientRect().top;
      let alturaScroll = window.innerHeight;

      if (alturaElemento < alturaScroll - 100) {
        elemento.style.animation = 'aparecer 0.5s ease forwards ' + (index * 0.2) + 's';
      } else {
        elemento.style.animation = '';
      }
    });
  });


});