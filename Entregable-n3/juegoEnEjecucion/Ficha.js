class Ficha{
    constructor(jugador){
        this.jugador = jugador;
        this.activa = true;
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

        //  // Dibuja un borde rojo si la ficha está seleccionada
        //  if (this.activa) {
        //     ctx.strokeStyle = "red";
        //     ctx.lineWidth = 3; // Grosor del borde
        //     ctx.beginPath();
        //     ctx.arc(posX + tamaño/2, posY + tamaño/2, tamaño/2 + 10, 0, 2 * Math.PI);
        //     ctx.stroke();
        //  }
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