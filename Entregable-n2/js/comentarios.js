let estrellas = document.querySelectorAll('#estrellas');
let pintado = true;

estrellas.forEach(function(estrella) {
        // console.log(estrella);
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
        '<h3>tu</h3>'+
    '</div>'+
    '<div class="puntuacion anonoimo">'+
        '<h4>'+54454+'​</h4>'+
        '<p>'+comentario.opinion+'</p>'+
    '</div>'
'</div>';
  }

