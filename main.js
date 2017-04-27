//Create our 'main' state that will contain the game
var mainStage = {
    preload: function() {
        //this function will be executed at the begining
        //thats where we load the images and the sound
        
        //load the bird sprite
        game.load.image('bird', 'assets/bird.png');
        game.load.image('pipe', 'assets/pipe.png');
    },
    
    create: function() {
        //this function is called after the preload functioin
        //here we setup the game, display sprites, etc...
        
        //change the background colour of the game to blue - for now
        game.stage.backgroundColor = '#71c5cf';
        
        //set the physics for the game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //display the bird at the position of x=100 and y=245
        this.bird = game.add.sprite(100, 245, 'bird');
        
        //add physics to the bird
        //needed for: movement, gravity, collisions, etc...
        game.physics.arcade.enable(this.bird);
        
        //add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;
        
        //call 'jump' function when the spacebar is pressed
        var spaceBar = game.input.keyboard.addKey(
                        Phaser.Keyboard.SPACEBAR);
        spaceBar.onDOWN.add(this.jump, this);
        
        //create an empty group
        this.pipes = game.add.group();
        
        //timer for pipes
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
    },
    
    update: function() {
    //this function is called 60 times per second
        //it contains the games logic
        
        //call the 'restartGame' funtion
        if(this.bird.y <0 || this.bird.y > 490)
            this.restartGame();
    },
    
    jump: function() {
        //add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;
    },
    
    //restart the game
    resartGame: function() {
        //start the 'main' state which restarts game
    game.state.start('main');
    },
    
    //add a pipe
    addOnePipe: function(x, y) {
        //create a pipe at the position x and y
        var pipe = game.add.sprite(x, y, 'pipe');
        
        //add pipe to group
        this.pipes.add(pipe);
        
        //enabe pysics on the pipe
        game.physics.arcade.enable(pipe);
        
        //add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200;
        
        //automatically kill pipe when it is no longer viable
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
        
    },
    
    //many pipes
    addRowOfPipes: function() {
        //randomly pick a number between 1 and 5
        //this will be the hole positon in the pipe
        var hole = Math.floot(Math.random() * 5) + 1;
        
        //add 6 pipes
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1)
                this.addOnePipe(400, i * 60 +10);
        
    },
};

//initialise Phaser, and create a 400px x 490px game
var game = new Phaser.Game(400, 490);

//add the 'mainState' and call it 'main
game.state.add('main', mainState);

//start the state to actually start the game
game.state.start('main');