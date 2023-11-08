class Casilla extends Figure {
    constructor(posX, posY, sideLength, context, sizeFicha) {
        super(posX, posY, 'rgba(23,62,70,1)', context); // Establece el color de fondo de la celda
        this.sizeFicha = sizeFicha;
        this.sideLength = sideLength;
        this.ficha = null;
        this.drawable = true;
    }

    draw() {
        if(this.drawable){
            const centerX = this.posX + this.sideLength / 2;
            const centerY = this.posY + this.sideLength / 2;

            this.context.lineWidth = 0; // Establece el grosor del borde a cero

            // Dibuja un rectángulo verde como celda
            this.context.fillStyle = "rgba(23,62,70,1)";
            this.context.fillRect(this.posX, this.posY, this.sideLength, this.sideLength);

            // Dibuja un círculo en el centro de la celda
            let radio = Math.min(this.sideLength) / 2;
            let gradient = this.context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radio);
            gradient.addColorStop(0, "rgba(0, 255, 0, 1)"); // Verde claro en el centro
            gradient.addColorStop(1, "rgba(0, 128, 0, 0.8)"); // Verde oscuro en los bordes

            this.context.fillStyle = gradient;

            this.context.beginPath();
            this.context.arc(centerX, centerY, radio - 5, 0, Math.PI * 2);
            this.context.fill();

            if(this.ficha){
                this.context.strokeStyle = this.ficha.draw();
            }
        }
    }

    setColorFicha(color){
        if(this.ficha){
            this.ficha.fill = color;
        }
    }
    getColorFicha(){
        if(this.ficha){
            return this.ficha.fill;
        }else{
            return null;
        }
    }
    getTeam(){
        if(this.ficha){
            return this.ficha.getTeam();
        }else{
            return null;
        }
    }
    setFicha(ficha){
        this.ficha = ficha;
    }

    darkness(color, factor) {
        const rgba = color.match(/\d+/g); // Extraer los componentes R, G, B y A
        if (rgba) {
            const r = rgba[0] * factor;
            const g = rgba[1] * factor;
            const b = rgba[2] * factor;
            const a = rgba[3];
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        } else {
            return color; // Si el color no es válido, devolverlo sin cambios
        }
    }

    getX(){
        return this.posX;
    }
    
    getY(){
        return this.posY;
    }
}



// class Celda {

//     constructor(x, y, ancho, alto, ctx, fila, columna) {
//         this.ficha = null;
//         this.x = x;
//         this.y = y;
//         this.ancho = ancho;
//         this.alto = alto;
//         this.ctx = ctx;
//         this.fila = fila;
//         this.columna = columna;
//     }

//     getPosX(){
//         return this.x;
//     }
//     getPosY(){
//         return this.y;
//     }
//     setPosX(posX){
//         this.x = posX;
//     }
//     setPosY(posY){
//         this.y = posY;
//     }
//     getAncho(){
//         return this.ancho;
//     }
//     getAlto(){
//         return this.alto;
//     }


//     draw() {
//         // Establece el grosor del borde a cero
//         this.ctx.lineWidth = 0;

//         // Dibuja un rectangulo verde como celda
//         this.ctx.fillStyle = "rgba(23,62,70,1)";
//         this.ctx.fillRect(this.x, this.y, this.ancho, this.alto);

//         // Dibuja un circulo en el centro de la celda
//         let radio = Math.min(this.ancho, this.alto) / 2;
//         let centroX = this.x + this.ancho / 2;
//         let centroY = this.y + this.alto / 2;
        

//         let gradient = this.ctx.createRadialGradient(centroX, centroY, 0, centroX, centroY, radio);
//         gradient.addColorStop(0, "rgba(0, 255, 0, 1)"); // Verde claro en el centro
//         gradient.addColorStop(1, "rgba(0, 128, 0, 0.8)"); // Verde oscuro en los bordes

//         this.ctx.fillStyle = gradient;

//         this.ctx.beginPath();
//         this.ctx.arc(centroX, centroY, radio - 5, 0, Math.PI * 2);
//         this.ctx.fill();
  
//     }

//     insertarFicha(ficha){
//         this.ficha = ficha;
//     }

//     //Podria pasarle el personaje y verificar que no lo tenga?
//     tieneFicha(){
//         if(this.ficha==null){
//             return false;
//         }
//         return true;
//     }
//   }