document.addEventListener("DOMContentLoaded", function () {
    let loader = document.querySelector('.loading');

    // Mostrar el loader
    loader.style.display = "block";

    // Esperar 3 segundos (3000 milisegundos) y luego ocultar el loader
    setTimeout(function () {
        loader.style.display = "none";
    }, 9000);
});

const numb = document.querySelector('.numb');
              let counter = 0;
              setInterval(()=>{
                if(counter == 100){
                  clearInterval();
                }else{
                  counter+=1;
                  numb.textContent = counter + "%";
                }
              }, 80);
