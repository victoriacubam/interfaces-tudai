
class Ficha{

    constructor(posX, posY, fill, context) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        //this.radius = radius;
    }

    setFill(fill) {
        this.fill = fill;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getFill() {
        return this.fill;
    }

    draw() {

        
       let imageData= context.createImageData(width , height);
       //let coeficiente= 255/width;
       let r;
       let g;
       let b;
       let a;
       
       for(let x0= 0; x0<width; x0++){
          
           for(let y0= 0; y0<height; y0++){
               setPixel(imageData , x0, y0, r,g,b,a);
           }
       }
       

       
       context.putImageData(imageData, 0,0);
       
       function setPixel(imageData, x0, y0, r, g, b, a) {
           let index = (x0 + y0 * imageData.width)*4;
           imageData.data[index + 0]=r;
           imageData.data[index + 1]=g;
           imageData.data[index + 2]=b;
           imageData.data[index + 3]=a; 
       }
       
        let x = 100;
        let y = 75;
        // Radio de la luz
        let innerRadius = 5;
        let outerRadius = 100;
        // Radio del circulo entero
        let  radius = 60;
       
       let gradient = this.context.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
       gradient.addColorStop(0, 'green');
       gradient.addColorStop(1, 'black');
       
       
       
       
       this.context.arc(x, y, radius, 0, 2 * Math.PI);
       
       this.context.fillStyle = gradient;
       this.context.fill();
    }




}

