// const fichaBugsBunny = "css/imagenes/bugsbunny.png";
// const fichaPatoLucas = "css/imagenes/patolucas.png";
// const fichaTweety = "css/imagenes/tweety.png";
// const fichaWolf = "css/imagenes/wolf.png";

let seleccionarJugador1 = document.querySelectorAll(".jugador1");
let seleccionarJugador2 = document.querySelectorAll(".jugador2");
let fichaJugador1;
let fichaJugador2;


//Le pone el evento a los personajes del jugador1
for(let i = 0; i< seleccionarJugador1.length; i++){
    seleccionarJugador1[i].addEventListener("click", function(){
        //Para cada personaje, setea en null la ficha y remueve la seleccion
        for(let i = 0; i< seleccionarJugador1.length; i++){
            seleccionarJugador1[i].classList.remove("seleccionado");
            fichaJugador1= null;
        }
        //Si el personaje al que se le hace click no esta seleccionado por el jugador 2, lo selecciona
        if(!seleccionarJugador2[i].classList.contains("seleccionado")){
            seleccionarJugador1[i].classList.add("seleccionado");
            fichaJugador1 = `css/imagenes/` + seleccionarJugador1[i].classList[1] + `.png`;
            console.log(fichaJugador1);
        } else {
            //Aca deberia mostrar un mensaje de error de que ya esta seleccionado para el otro jugador
        }
    });
}

//Le pone el evento a los personajes del jugador2
for(let i = 0; i< seleccionarJugador2.length; i++){
    seleccionarJugador2[i].addEventListener("click", function(){
        //Para cada personaje, setea en null la ficha y remueve la seleccion
        for(let i = 0; i< seleccionarJugador2.length; i++){
            seleccionarJugador2[i].classList.remove("seleccionado");
            fichaJugador2= null;
        }
        //Si el personaje al que se le hace click no esta seleccionado por el jugador 2, lo selecciona
        if(!seleccionarJugador1[i].classList.contains("seleccionado")){
            seleccionarJugador2[i].classList.add("seleccionado");
            fichaJugador2 = `css/imagenes/` + seleccionarJugador2[i].classList[1] + `.png`;
            console.log(fichaJugador2);
        } else {
            //Aca deberia mostrar un mensaje de error de que ya esta seleccionado para el otro jugador
        }
    });
}



let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");


//Me da la x e y de lo que clickee en el canvas
canvas.addEventListener("click", function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("Posición en el canvas: X=" + x + ", Y=" + y);
    // console.log(tablero6x7.getCeldas()[0][1]);
    for(let f = 0; f<tableroSeleccionado.filas; f++){
        for (let c = 0; c < tableroSeleccionado.columnas; c++) {
            let celda = tableroSeleccionado.getCeldas()[f][c];

            if((celda.getPosX()<x)&&((celda.getPosX()+celda.getAncho())>x)){
                if((celda.getPosY()<y)&&((celda.getPosY()+celda.getAlto())>y)){
                    console.log(celda)
                }
            }
        }
    }

    
});

let anchoCanvas = 1000;
let altoCanvas = 500;

let ancho = 500;
let alto = 350;

let tablero6x7 = new Tablero(ancho, alto, 6, 7, ctx);
let tablero7x8 = new Tablero(ancho, alto, 7, 8, ctx);
let tablero8x9 = new Tablero(ancho, alto, 8, 9, ctx);
let tablero9x10 = new Tablero(ancho, alto, 9, 10, ctx);

let tableroSeleccionado = tablero6x7;

// console.log(tablero6x7);

//Sector para las fichas
//Fichas jugador 1
let j1InicioX = 0;
let j1FinX = ((anchoCanvas - ancho)/2)-100;
let j1InicioY = alto/2;
let j1FinY = alto;

//Fichas jugador 2
let j2InicioX = j1FinX + ancho + 100;
let j2FinX = anchoCanvas-100;
let j2InicioY = alto/2;
let j2FinY = alto;



console.log(j1InicioX, j1FinX, j1InicioY, j1FinY);
console.log(j2InicioX, j2FinX, j2InicioY, j2FinY);

function dibujarFichas(j, array, inicioX, inicioY, finX, finY){
    for (let i=0; i<(6*7)/2; i++){
        //let posX = x;
        //let posY = altoCanvas/2 + i;
        //let posY = 20*i;

        let difX = finX - inicioX;
        let difY = finY - inicioY;
        let x = inicioX + Math.random()*difX;
        let y = inicioY + Math.random()*difY;

        array.push(new Ficha(j));
        array[i].draw(x, y, 70);
    } 
}


let fichasJugador1 = new Array();
let fichasJugador2 = new Array();


let btnJugar = document.querySelector("#empezar-jugar-ejecucion");
let divSelector = document.querySelector("#selectorPersonaje");

//Le agrega evento al boton empezar a jugar
btnJugar.addEventListener("click", function(){
    //Si ambos jugadores tienen su personaje, se oculta el div de seleccion y el boton y se dibuja el tablero
    if(fichaJugador1!=null && fichaJugador2!=null){
        divSelector.classList.add("cerrar");
        btnJugar.classList.add("cerrar");
        temporizadorJuego();
       
        tableroSeleccionado.draw();

        
        
        dibujarFichas(fichaJugador1, fichasJugador1, j1InicioX, j1InicioY, j1FinX, j1FinY);
        dibujarFichas(fichaJugador2, fichasJugador2, j2InicioX, j2InicioY, j2FinX, j2FinY);

        //dibujarFichas(fichaJugador1, 10, fichasJugador1);
        //dibujarFichas(fichaJugador2, anchoCanvas - 120, fichasJugador2);
    } else {
        //Mostrar un mensaje de error
        console.log("Seleccionar personajes");
    }
});

console.log(tableroSeleccionado);


  let fichaSeleccionada = null; // Variable para mantener un seguimiento de la ficha seleccionada
  
  // Manejador de eventos de clic para seleccionar una ficha al azar
  canvas.addEventListener("mousedown", function() {
    if (fichasJugador1.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * fichasJugador1.length);
      fichaSeleccionada = fichasJugador1[indiceAleatorio];
      fichasJugador1.splice(indiceAleatorio, 1); // Remueve la ficha del arreglo
      fichaSeleccionada.setActiva(true);
    }
  });
  
  // Manejador de eventos para el movimiento del mouse y arrastre
  canvas.addEventListener("mousemove", function(event) {
    if (fichaSeleccionada) {
      const mouseX = event.offsetX;
      const mouseY = event.offsetY;
  
      fichaSeleccionada.setPosX(mouseX - (ancho / 7));
      fichaSeleccionada.setPosy(mouseY - (ancho / 7));
    
  
      ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
      fichasJugador1.forEach(ficha => ficha.draw(x,y));
      if (fichaSeleccionada) {
        fichaSeleccionada.draw(x,y);
      }
    }
  });
  
  // Manejador de eventos de liberación del mouse para detener el arrastre
  canvas.addEventListener("mouseup", function() {
    if (fichaSeleccionada) {
      fichaSeleccionada.setActiva(false);
      fichaSeleccionada = null;
    }
  });
  

