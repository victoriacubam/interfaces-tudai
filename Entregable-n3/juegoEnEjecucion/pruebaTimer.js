//Una vez que se dibuja el tablero se activa un timer y 
//cuando se cumple se borra el tablero y se dibuja el mensaje 
//de se acabo el tiempo o si gano alguno el ganador

const tiempoInicial = 10/60;
let tiempo = tiempoInicial * 60;
let temporizador = document.querySelector("#temporizadorJuego");
let intervalo = null;

//temporizadorJuego();

function temporizadorJuego(){
    intervalo = setInterval(()=>{
        let minutes = Math.floor(tiempo / 60);
        let seconds = tiempo % 60;
        if((seconds<10)){
            temporizador.innerHTML = `0${minutes}:0${seconds}`;
        } else {
            temporizador.innerHTML = `0${minutes}:${seconds}`;
        }
        console.log(tiempo);
        if(tiempo>0){
            tiempo--;
        } else {
            clearInterval(intervalo);
            console.log("Se terminó el tiempo");
            //Llamar a la funcion que dice el ganador o mostrar un mensaje
        }
    }, 1000);

}

/*function temporizadorJuego(){
    intervalo = setInterval(()=>{
        temporizador.innerHTML = tiempo;
        console.log(tiempo)
        if(tiempo>0){
            tiempo--;
        } else {
            clearInterval(intervalo);
            //Aca deberia borrar el tablero y mostrar el mensaje
            //temporizador.innerHTML = "El tiempo ha finalizado";
        }
    },1000);
}*/

//Boton de reiniciar juego:
//Cuando se toca el boton se borra el tablero y se vuelve a dibujar

// let btnReiniciar = document.querySelector("#reiniciarJuego");
// btnReiniciar.addEventListener('click', function(){
//    // temporizadorJuego();
//     console.log("hola");
// });

