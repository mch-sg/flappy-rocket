class Rocket extends GameObject {

    // constructor for a rocket object
    constructor () {
        let drawOrder = 5;
        super(drawOrder);
        this.xPosition = 300;
        this.yPosition = 450;
        this.ySpeed = 0;
        this.beginningYAccelleration = 0.7;
        this.yAccelleration = 0;
        this.hitboxRadius = 35;
        this.image = new Image(70, 70);
        this.image.src = "../assets/images/asteroid/player.png"; // "../assets/images/bird.png
        this.flapSound = new Audio("../assets/sounds/jump.wav");
        this.flapSound.volume = 0.3;
        this.flapForce = -12;
        this.flapKey = " ";
        this.canFlap = false;
    }

    draw() {
        drawImage(this.image,
            this.xPosition,
            this.yPosition,
            this.image.width,
            this.image.height
        );

        if(debugModeIsOn) {
            drawCircle(
                this.xPosition, 
                this.yPosition, 
                this.hitboxRadius, 
                hitboxColor
            );
        }
    }

    update () {

        if (gameState == "action" || gameState == "gameover") {
            this.ySpeed += this.yAccelleration;
            this.yPosition += this.ySpeed;
        }

        if((canvas.height < this.yPosition ||
        this.yPosition < 0) && gameState == "action") {
            this.canFlap = false;
            gameOverSound.play();
            gameOverSound.volume = 0.3;
            gameState = "gameover";
            flapText.isActive = false;
            gameOverText.isActive = true;
        }

        // Push new money bag when score reaches 50. score.addPoints(1) is added to prevent spamming.
        if(gameState == "action" && score.value == 50) {
            bags.push(new bag());
            score.addPoints(1);
        }


        
    }

    flap () {
        this.ySpeed = this.flapForce;
    }
}
