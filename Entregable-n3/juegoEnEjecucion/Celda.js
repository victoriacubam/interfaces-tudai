class Celda {

    constructor(x, y, ancho, alto, ctx, fila, columna) {
        this.ficha = null;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.ctx = ctx;
        this.fila = fila;
        this.columna = columna;
    }

    getPosX(){
        return this.x;
    }
    getPosY(){
        return this.y;
    }
    setPosX(posX){
        this.x = posX;
    }
    setPosY(posY){
        this.y = posY;
    }
    getAncho(){
        return this.ancho;
    }
    getAlto(){
        return this.alto;
    }


    draw() {
        // Establece el grosor del borde a cero
        this.ctx.lineWidth = 0;

        // Dibuja un rectangulo verde como celda
        this.ctx.fillStyle = "rgba(23,62,70,1)";
        this.ctx.fillRect(this.x, this.y, this.ancho, this.alto);

        // Dibuja un circulo en el centro de la celda
        let radio = Math.min(this.ancho, this.alto) / 2;
        let centroX = this.x + this.ancho / 2;
        let centroY = this.y + this.alto / 2;
        

        let gradient = this.ctx.createRadialGradient(centroX, centroY, 0, centroX, centroY, radio);
        gradient.addColorStop(0, "rgba(0, 255, 0, 1)"); // Verde claro en el centro
        gradient.addColorStop(1, "rgba(0, 128, 0, 0.8)"); // Verde oscuro en los bordes

        this.ctx.fillStyle = gradient;

        this.ctx.beginPath();
        this.ctx.arc(centroX, centroY, radio - 5, 0, Math.PI * 2);
        this.ctx.fill();
  
    }

    insertarFicha(ficha){
        this.ficha = ficha;
    }

    //Podria pasarle el personaje y verificar que no lo tenga?
    tieneFicha(){
        if(this.ficha==null){
            return false;
        }
        return true;
    }
  }