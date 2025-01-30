let myMessage = "Make a Burger, Make it Yummy."
let myMessageTwo = "B=Bun, P=Patty, C=Cheese, L=Lettuce, T=Tomato"
let textNumber = 50 

let ingredients = 400; 

function preload(){
    myFont = loadFont("vhs-gothic.ttf")
}

function setup() {
  createCanvas(400, 400);
  background(255, 201, 246);
  noStroke();
  fill(0);
  textFont(myFont)
  text(myMessage, 30, textNumber);
  fill(255, 182, 110)
  text("B=Bun",30,textNumber+20);
  fill(71, 50, 29) 
  text("P=Patty",30,textNumber+40);
  fill(255, 115, 0)
  text("C=Cheese",30,textNumber+60);
  fill(3, 156, 0)
  text("L=Lettuce",30,textNumber+80);
  fill(232, 41, 28)
  text("T=Tomato",30,textNumber+100);
  text("Press E to Evaluate.",30,380)

}

function keyPressed(){
    noFill()  
  //Bun
  if(keyCode === 66){
    fill(255, 182, 110)
    ingredients = ingredients - 10
  }  
  //Patty
  if(keyCode === 80){
    fill(71, 50, 29)
    ingredients = ingredients - 10
  } 
  //Cheese
  if(keyCode === 67){
    fill(255, 115, 0)
    ingredients = ingredients - 10
  } 
  //Lettuce
  if(keyCode === 76){
    fill(3, 156, 0)
    ingredients = ingredients - 10
  } 
  //Tomato
  if(keyCode === 84){
    fill(232, 41, 28)
    ingredients = ingredients - 10
  } 
  //Evaluate
  if(keyCode === 69){
    createCanvas(400, 400);
    background(0);
    if (ingredients<150){
        text("Too Many Ingredients.",200,200)
    
    noFill()
    }
  }
  rect(250,ingredients,100,10) 
}

