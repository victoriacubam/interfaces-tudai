class Ficha{
    constructor(jugador, ancho, alto){
        this.jugador = jugador;
        // this.ancho =ancho;
        // this.alto = alto;
    }

    draw(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        // Crea una nueva instancia de la imagen
        let imagen = new Image();

        // source de la imagen
        imagen.src = this.jugador;

        // Manejador de eventos para cargar la imagen
        imagen.onload = function() {

        // Dibuja la imagen en el canvas
        ctx.drawImage(imagen, posX, posY, ancho/7, ancho/7); // Las coordenadas (0, 0) son la posición donde se dibujará la imagen en el canvas
        };
    }

    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }


}