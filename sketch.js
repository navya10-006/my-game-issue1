const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;
var gameState = 0;
var score =0;
var cancerL,capricornusL,geminiL,sagittariusL,taurusL;
var constellation,border,clue,border2,border3,border4,border5;

function preload(){
    bg = loadImage("bg.jfif");
    cancerL = loadImage("Images/cancer complete.png");
    capricornusL = loadImage("Images/capricornus complete.png");
    geminiL = loadImage("Images/gemini complete.png");
    sagittariusL = loadImage("Images/sagittarius complete.png");
    taurusL = loadImage("Images/taurus complete.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    quiz = new Quiz1();
    clue = new Clues();
}

function draw(){
    background(bg);
    Engine.update(engine);
    clue.display();
    stroke("white");
    strokeWeight(3);
    border = line(700,0,700,1000);
    border2 = line(750,50,750,500);
    border3 = line(750,50,1200,50);
    border4 = line(1200,50,1200,500);
    border5 = line(750,500,1200,500);
    textSize(20);
    strokeWeight(1.2);
    fill("white");
    text("Score:"+score,550,150);
    text("Clue 1:",770,130);
    text("Clue 2:",770,330);
    text("Clue 3:",770,430);
    textSize(30);
    text("HINTS",930,80);
}