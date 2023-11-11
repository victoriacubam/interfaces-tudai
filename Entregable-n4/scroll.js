// document.addEventListener('DOMContentLoaded', function() {
//     const stickyImage = document.getElementById('img-1');
//     const scrollContent = document.getElementById('seccion-6');
  
//     window.addEventListener('scroll', function() {
//         const scrollContentRect = scrollContent.getBoundingClientRect();
//         const centerY = window.innerHeight / 2;
    
//         // Verifica si el centro vertical de la sección está en el centro de la ventana
//         if (scrollContentRect.top <= centerY && scrollContentRect.bottom >= centerY) {
//           stickyImage.classList.add('sticky'); // Agrega la clase 'sticky'
//           console.log("if")

//         } else {
//           stickyImage.classList.remove('sticky'); // Quita la clase 'sticky'
//         }
//       });
// });