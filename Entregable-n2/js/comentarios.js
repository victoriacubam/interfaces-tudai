let estrellas = document.querySelectorAll('#estrellas');
let pintado = true;

estrellas.forEach(function(estrella) {
        estrella.pintado = false;
        estrella.addEventListener('click', function() {
          estrellas.forEach(function(estrella){
            estrella.src = '../css/imagenes/iconos/estrella-desmacarda.png'; 
            estrella.pintado = false;
          })
                if (estrella.pintado) {
                   estrella.src = '../css/imagenes/iconos/estrella-desmacarda.png'; 
                } else {
                   estrella.src = '../css/imagenes/iconos/estrella-marcada.png';   
                }
          estrella.pintado = !estrella.pintado; 
          i_e = 0 
          while(i_e < estrellas.length && !estrellas[i_e].pintado){
            estrellas[i_e].src = '../css/imagenes/iconos/estrella-marcada.png'; 
            estrellas[i_e].pintado = !estrellas[i_e].pintado;
            i_e ++;
          }
        
        });

});



let enviar = document.getElementById('enviar');
enviar.addEventListener("click", agregarComentario);

let comentarios= [];

function agregarComentario() {
    let estrellas= document.querySelector('#estrellas').value;
    let opinion = document.querySelector('#comentario').value;
    let comentario = {
      "estrellas": estrellas,
      "opinion": opinion,
            
    }
    comentarios.push(comentario);
    console.log(comentarios);
    document.querySelector("#comentarioNuevo").innerHTML += 
    '<div class="comentario">' +
    '<div class="perfil">'+
        '<img src="css/imagenes/iconos/avatar-perfil.png.png" id="perfil" />'+
        '<h3>Tu</h3>'+
    '</div>'+
    '<div class="puntuacion anonoimo">'+
        '<h4> ⭐​⭐​⭐​⭐​⭐​​</h4>'+
        '<p>'+comentario.opinion+'</p>'+
    '</div>'
'</div>';
  }



const items = document.querySelectorAll('.carousel-item');
const izquierda = document.getElementById('izq');
const derecha = document.getElementById('der');

let currentIndex = 0;



function rotateCarousel() {
  const numItems = items.length;
  const circumference = 360; 
  const angle = -currentIndex * (circumference / numItems); 
  const radius = 300;

  items.forEach((item, index) => {
      const rotation = angle + index * (circumference / numItems); 
      const z = radius * Math.cos((rotation * Math.PI) / 180); 
      item.style.transform = `rotateY(${rotation}deg) translateZ(${z}px)`; 
  });
}



izquierda.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    rotateCarousel();
});


derecha.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    rotateCarousel();
});

rotateCarousel();




 