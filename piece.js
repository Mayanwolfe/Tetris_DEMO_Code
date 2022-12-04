class Piece {

    x;
    y;
    color;
    shape;
    ctx;
    typeId;


    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.typeId = this.randomizeTetrominoType(COLORS.length -1)
        this.shape = SHAPES[typeId];
        this.color = COLORS[typeId];
        this.x = 0
        this.y = 0
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row,y) => {
            row.forEach((value, x) => {
                if(value > 0) {
                    this.ctx.fillRect(this.x +x, this.y + y, 1 ,1)
                }
            })
        })
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }

    randomizeTetrominoType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes)
    }

    setStartingPosition(){
        this.x = this.typeId === 4 ? 4 :3
    }
}