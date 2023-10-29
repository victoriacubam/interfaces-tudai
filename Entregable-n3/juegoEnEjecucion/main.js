let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

let ancho = 700;
let alto = 500;

let tablero6x7 = new Tablero(ancho, alto, 6, 7, ctx);
let tablero7x8 = new Tablero(ancho, alto, 7, 8, ctx);
let tablero8x9 = new Tablero(ancho, alto, 8, 9, ctx);
let tablero9x10 = new Tablero(ancho, alto, 9, 10, ctx);

tablero6x7.draw();

console.log(tablero6x7);
