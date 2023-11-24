
// const pantera = document.getElementById('capa5-Pantera');

// // Función para manejar el movimiento del mouse y el efecto de paralax
// function controlDesplazamiento(event) {
//     const mouseX = event.clientX; // Posición horizontal del mouse
//     const mouseY = event.clientY; // Posición vertical del mouse

//     // Calcula la cantidad de desplazamiento para la imagen de la Pantera
//     const offsetX = mouseX / window.innerWidth - 0.5;
//     const offsetY = mouseY / window.innerHeight - 0.5;

//     // Aplica el desplazamiento a la posición de la imagen
//     pantera.style.transform = `translate(${offsetX * 100}px, ${offsetY * 100}px)`;
// }

// document.addEventListener('mousemove', controlDesplazamiento);


document.addEventListener('mousemove', function (e) {
    let parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function (element) {
        let speed = parseFloat(element.getAttribute('data-speed'));
        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});