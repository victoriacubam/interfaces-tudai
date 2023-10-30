let seleccionarJugador1 = document.querySelectorAll(".jugador1");
let seleccionarJugador2 = document.querySelectorAll(".jugador2");
let jug1;
let jug2;



for(let i = 0; i< seleccionarJugador1.length; i++){
    seleccionarJugador1[i].addEventListener("click", function(){
        for(let i = 0; i< seleccionarJugador1.length; i++){
            seleccionarJugador1[i].classList.remove("seleccionado");
        }
        if(!seleccionarJugador2[i].classList.contains("seleccionado")){
            seleccionarJugador1[i].classList.add("seleccionado");
            jug1 = seleccionarJugador1[i].classList[1];
            console.log(jug1);
        }
    });
}




for(let i = 0; i< seleccionarJugador2.length; i++){
    seleccionarJugador2[i].addEventListener("click", function(){
        for(let i = 0; i< seleccionarJugador2.length; i++){
            seleccionarJugador2[i].classList.remove("seleccionado");
        }
        if(!seleccionarJugador1[i].classList.contains("seleccionado")){
            seleccionarJugador2[i].classList.add("seleccionado");
            jug2 = seleccionarJugador2[i].classList[1];
            console.log(jug2);
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
    for(let f = 0; f<tablero6x7.filas; f++){
        for (let c = 0; c < tablero6x7.columnas; c++) {
            let celda = tablero6x7.getCeldas()[f][c];

            if((celda.getPosX()<x)&&((celda.getPosX()+celda.getAncho())>x)){
                if((celda.getPosY()<y)&&((celda.getPosY()+celda.getAlto())>y)){
                    console.log(celda)
                }
            }
        }
    }
});

let anchoCanvas = 1400;
let altoCanvas = 540;

let ancho = 700;
let alto = 500;

let tablero6x7 = new Tablero(ancho, alto, 6, 7, ctx);
let tablero7x8 = new Tablero(ancho, alto, 7, 8, ctx);
let tablero8x9 = new Tablero(ancho, alto, 8, 9, ctx);
let tablero9x10 = new Tablero(ancho, alto, 9, 10, ctx);



// console.log(tablero6x7);


function dibujarFichas(j, x, array){
    for (let i=0; i<(6*7)/2; i++){
        let posX = x;
        //let posY = altoCanvas/2 + i;
        let posY = 20*i;
        array.push(new Ficha(j));
        array[i].draw(posX, posY);
    } 
}

let jugador1 = "css/imagenes/bugsbunny.png";
let jugador2 = "css/imagenes/patolucas.png";

let fichasJugador1 = new Array();
let fichasJugador2 = new Array();



let jugar = document.querySelector("#empezar-jugar-ejecucion");
jugar.addEventListener("click", function(){
    if(jug1!=null && jug2!=null){
        document.querySelector("#selectorPersonaje").classList.add("cerrar");
        jugar.classList.add("cerrar");
        tablero6x7.draw();
        dibujarFichas(jugador1, 10, fichasJugador1);
        dibujarFichas(jugador2, anchoCanvas - 120, fichasJugador2);
    } else {
        console.log("Seleccionar personajes");
    }
});

console.log(tablero6x7);

