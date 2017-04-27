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
    },
    
    update: function() {
    //this function is called 60 times per second
        //it contains the games logic
    },
};

//initialise Phaser, and create a 400px x 490px game
var game = new Phaser.Game(400, 490);

//add the 'mainState' and call it 'main
game.state.add('main', mainState);

//start the state to actually start the game
game.state.start('main');