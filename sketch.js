var canvas;
var block1,block2,block3,block4;
var ball, edges, box
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "blue"

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "green"

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "orange"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 3;

    //create edgeSprite
    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.play();
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "orange";
    }

    drawSprites();
}
    
