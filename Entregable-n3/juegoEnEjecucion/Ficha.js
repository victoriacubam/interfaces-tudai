class Ficha{
    constructor(jugador){
        this.jugador = jugador;
        this.activa = false;
    }

    draw(posX, posY, tamaño) {
        this.posX = posX;
        this.posY = posY;
        this.tamaño = tamaño
        // Crea una nueva instancia de la imagen
        let imagen = new Image();

        // source de la imagen
        imagen.src = this.jugador;

        // Manejador de eventos para cargar la imagen
        imagen.onload = function() {

        // Dibuja la imagen en el canvas
        ctx.drawImage(imagen, posX, posY, tamaño, tamaño); // Las coordenadas (0, 0) son la posición donde se dibujará la imagen en el canvas
        };
    }

    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }

    setPosX(x){
        return this.posX = x;
    }
    setPosY(y){
        return this.posY = y;
    }

    getActiva(){
        return this.activa;
    }

    setActiva(bool){
        return this.activa = bool;
    }
}