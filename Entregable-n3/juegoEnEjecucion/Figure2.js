class Figure {
    constructor(posX, posY, fill, context) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.borderColor = 'black';
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
    setPosX(x){
        return this.posX = x;
    }
    setPosY(y){
        return this.posY = y;
    }
    getFill() {
        return this.fill;
    }

    draw() {
        this.context.fillStyle = this.fill;
    }
}
