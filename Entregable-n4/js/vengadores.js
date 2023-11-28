//Efecto de paralax en la seccion de los vengadores 
document.addEventListener('mousemove', function (e) {
    let parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function (element) {
        let speed = parseFloat(element.getAttribute('data-speed'));
        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});