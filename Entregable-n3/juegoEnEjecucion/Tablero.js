class Tablero {
    constructor(ancho, alto, filas, columnas, ctx) {
      this.ancho = ancho;
      this.alto = alto;
      this.filas = filas;
      this.columnas = columnas;
      this.celdas = [];
      this.ctx = ctx;
      
    }

    getCeldas(){
      return this.celdas;
    }

    draw() {
      let anchoCelda = this.ancho / this.columnas;
      let altoCelda = this.alto / this.filas;

      for (let fila = 0; fila < this.filas; fila++) {
        this.celdas[fila] = [];
        for (let columna = 0; columna < this.columnas; columna++) {

            // inicioX e inicioY permite que el tablero este centrado
            let inicioX= ((anchoCanvas-this.ancho)/2); // Total ancho del canvas - ancho del tablero = lo que sobra en total /2 = lo que sobra de cada lado
            let inicioY = ((altoCanvas-this.alto)/2); // Lo mismo pero con el alto
            
            let x = inicioX + columna * anchoCelda;
            let y = inicioY + fila * altoCelda;
            this.celdas[fila][columna] = new Celda(x, y, anchoCelda, altoCelda, this.ctx, fila, columna);
            this.celdas[fila][columna].draw(); //Dibuja la celda
        }
      }

      
    }

  }
