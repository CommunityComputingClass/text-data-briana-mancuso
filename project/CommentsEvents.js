let myQuestion = "Compliment me or Insult me?"
 
let contents = "";

let button
let textBox; 

function preload(){
    myFont = loadFont("La Machine Company.ttf")
    myImage = loadImage ("Bathroom.png")
    backdrop = loadImage ("Background.jpg")
    sadFace = loadImage ("sad.webp")
    thinkingFace = loadImage ("thinking.png")
  }

function setup() {
  createCanvas(500, 400);
  compliment = createButton ("Compliment")
  insult = createButton ("Insult")
  compliment.position(50,160)
  insult.position(350,160)
  compliment.mousePressed(complimenting)
  insult.mousePressed(insulting)
  compliment.style('color','white')
  compliment.style ('background-color','#ff00d9')
  compliment.style('font-size','20px')
  insult.style('color','white')
  insult.style ('background-color','#ff00d9')
  insult.style('font-size','20px')
  background(255, 130, 171);
  fill(255);
  textSize(35);
  textFont (myFont);
  fill(255,242,5)
  text(myQuestion,20,60) 
}

function complimenting() {
  createCanvas(500, 400);
  background(255, 130, 171);
  text("YAY, ok go ahead!",20,60) 
  button = createButton("Submit Compliment");
  button.position(140,260)
  button.mousePressed(complimentOutput)
  textBox = createInput("")
  textBox.size(300,40)
  textBox.position(90,200)
  textBox.input(storeText)
  compliment.position(1000,1000)
  insult.position(1000,1000)
  button.style('color','white')
  button.style ('background-color','#ff00d9')
  button.style('font-size','20px')
}

function insulting(){
  createCanvas(500, 400);
  background(255, 130, 171);
  text("FINE, see if I care.",20,60) 
  button2 = createButton("Submit Insult")
  button2.position(170,260)
  textBox = createInput("")
  textBox.size(300,40)
  textBox.position(90,200)
  textBox.input(storeText)
  compliment.position(1000,1000)
  insult.position(1000,1000)
  button2.mousePressed(insultOutput)
  button2.style('color','white')
  button2.style ('background-color','#ff00d9')
  button2.style('font-size','20px')
}

function complimentOutput(){ 
   image(backdrop,0,0)
   image(myImage,0,-300)
   textFont (myFont);
   fill(255, 0, 127)
   text("You're right, I'm great!",50,200)
   textBox.hide(); 
   button.position(1000,1000)
}

function insultOutput(){
  createCanvas(500, 400);
  background(255, 130, 171);
   image(sadFace,-380,-300)
   textFont (myFont);
   fill(96, 91, 216)
   text("YOUR SO MEAN, I HATE YOU!",10,200)
   textBox.hide(); 
   button2.position(1000,1000)
}


function storeText(){
  contents = this.value(); 
}