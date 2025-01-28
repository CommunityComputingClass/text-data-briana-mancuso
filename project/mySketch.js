let coolMessage = "I'm so cool, I'm so awesome."
let xLocation = 0;
let myFont; 
let change=1
let ychange=1
let yLocation= 400;

function preload(){
  myFont = loadFont("vhs-gothic.ttf")
  myImage = loadImage ("Briana.png")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(18,255,0);
  noStroke()
  fill(255,0,208)
  image(myImage,-30,yLocation)
  yLocation += ychange
  if (yLocation>450){
    ychange=-1;
  }
  if (yLocation<-10){
    ychange=1;
  }
  textSize(20)
  textFont(myFont)
  text(coolMessage,xLocation,200)
  xLocation += change
  if (xLocation>80){
    change=-1;
  }
  if (xLocation<-50){
    change=1;
  }
}