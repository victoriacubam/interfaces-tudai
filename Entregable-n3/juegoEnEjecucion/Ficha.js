class Ficha extends Figure {
    constructor(posX, posY, radius, fill, context, team, image, draweable = true) {
        super(posX, posY, fill, context);
        this.team = team;
        this.radius = radius;
        this.image = image; // Agregar la imagen
        this.draweable = draweable;
    }

    draw() {
        if (this.image && this.draweable) {
            // Dibuja la imagen en el centro de la ficha
            const imageX = this.posX - this.radius;
            const imageY = this.posY - this.radius;
            this.context.drawImage(this.image, imageX, imageY, this.radius * 2, this.radius * 2);
        } else {
            if (this.draweable) {
                this.context.fillStyle = this.fill;
            } else {
                //Si el personaje ya fue elejido anteriormente, se pinta la imagen de color rojo 
                this.context.fillStyle = 'rgba(255, 0, 0, 0.4)';
                
            }
            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.context.fill();
            this.context.closePath();
        }
    }
    

    getFill() {
        return this.fill;
    }
    getTeam() {
        return this.team;
    }
    
    getRadius() {
        return this.radius;
    }
    
}


// class Ficha{
//     constructor(jugador){
//         this.jugador = jugador;
//         this.activa = false;
//     }

//     draw(posX, posY, tamaño) {
//         this.posX = posX;
//         this.posY = posY;
//         this.tamaño = tamaño
//         // Crea una nueva instancia de la imagen
//         let imagen = new Image();

//         // source de la imagen
//         imagen.src = this.jugador;

//         // Manejador de eventos para cargar la imagen
//         imagen.onload = function() {

//         // Dibuja la imagen en el canvas
//         ctx.drawImage(imagen, posX, posY, tamaño, tamaño); // Las coordenadas (0, 0) son la posición donde se dibujará la imagen en el canvas
//         };
//     }


//     getPosX(){
//         return this.posX;
//     }
//     getPosY(){
//         return this.posY;
//     }

//     setPosX(x){
//         return this.posX = x;
//     }
//     setPosY(y){
//         return this.posY = y;
//     }

//     getActiva(){
//         return this.activa;
//     }

//     setActiva(bool){
//         return this.activa = bool;
//     }
// }