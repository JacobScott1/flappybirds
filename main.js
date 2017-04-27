//Create our 'main' state that will contain the game
var mainStage = {
    preload: function() {
        //this function will be executed at the begining
        //thats where we load the images and the sound
        
        //load the bird sprite
        game.load.image('bird', 'assets/bird.png');
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
};

//initialise Phaser, and create a 400px x 490px game
var game = new Phaser.Game(400, 490);

//add the 'mainState' and call it 'main
game.state.add('main', mainState);

//start the state to actually start the game
game.state.start('main');