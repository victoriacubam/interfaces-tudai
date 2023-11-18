"use strict"

let btnSuscribirse = document.querySelector("#btn-suscribirse");
let input = document.querySelector("#input-suscribirse");
let msj = document.querySelector("#mensaje");

btnSuscribirse.addEventListener('click', suscribirse);

function suscribirse(){
    if(input.value != ""){
        // Posicion del @ en el input
        let posicionArroba = input.value.indexOf('@');

        // Verifica si encontro el @
        if ((posicionArroba !== -1)&&(posicionArroba !== 0)) {
          // obtiene el nombre antes del @
          let nombre = input.value.substring(0, posicionArroba);        
          msj.innerHTML = `${nombre}, ¡Gracias por suscribirte! Visita tu casilla para enterarte de todas las novedades`
        }
        else {
          msj.innerHTML = `"${input.value}" no es un correo válido, por favor revisalo para poder suscribirte y no perderte nada!`

        }
        input.value = "";
    }
}
