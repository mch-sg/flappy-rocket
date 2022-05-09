class TextObject extends GameObject {

    constructor(text) {
        let drawOrder = 10;
        super(drawOrder)
        this.text = text;
        this.xPosition = canvas.width / 2.5; // canvas.width / 2.5
        this.yPosition = canvas.height / 2; // canvas.height / 1.925
        this.size = 50;
        this.color = "white";
    }

    draw() {
        drawText(
            this.text,
            this.xPosition,
            this.yPosition,
            this.size,
            this.color
        );
    }

}