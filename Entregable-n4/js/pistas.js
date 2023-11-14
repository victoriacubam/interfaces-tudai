document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      let elementos = document.querySelectorAll('.pistas');
  
      elementos.forEach(function (elemento, index) {
        let alturaElemento = elemento.offsetTop;
        let alturaScroll = window.scrollY;
        let windowHeight = window.innerHeight;
  
        if (alturaScroll > alturaElemento - windowHeight + 100) {
          elemento.style.animation = 'aparecer 0.5s ease forwards ' + (index * 0.2) + 's';
        } else {
          // Si el elemento no es visible, eliminar la animación para que pueda reaparecer.
          elemento.style.animation = '';
        }
      });
    });
  });
  