let myQuestion = "Compliment Me!"
 
let contents = "";

let button
let textBox; 

function preload(){
    myFont = loadFont("La Machine Company.ttf")
    myImage = loadImage ("Bathroom.png")
    backdrop = loadImage ("Background.jpg")
  }

function setup() {
  createCanvas(500, 400);
  button = createButton("Submit Compliment");
  button.position(180,130)
  button.mousePressed(showText)
  textBox = createInput("")
  textBox.size(300,40)
  textBox.position(90,200)
  textBox.input(storeText)
  
  background(255, 130, 171);
  fill(255);
  textSize(40);
  textFont (myFont);
  fill(255,242,5)
  text(myQuestion,100,60) 
}

function draw() {
  
}

function showText(){ 
   image(backdrop,0,0)
   image(myImage,0,-300)
   textFont (myFont);
   fill(255, 0, 127)
   text("You're right, I'm great!",50,200)
   textBox.hide(); 
   button.position(1000,1000)
}

function storeText(){
  contents = this.value(); 
}