// You could have multiple flags like: start, launch to indicate the state of the game.
var start, launch;
var cannon, cannonBall;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



const {Engine} = Matter; 
//is the same as 
const Engine = Matter.Engine;
                


function setup() {
  //Setup the canvas, the ground, the tanker, the shooting ball and the bubble balls.

    var background = createCanvas(400,400);              
                                          
}

function draw() {
// Remember to update the Matter Engine and set the background.
update(Matter.engine);
keyReleased();
keypressed();
drawSprites();
}


function keyReleased() {
  // Call the shoot method x the cannon.
    
}

function keypressed(){
if(keyCode === UP_ARROW)

Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});
}