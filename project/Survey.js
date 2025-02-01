let myMessage = "Make a Burger, Make it Yummy."
let myMessageTwo = "B=Bun, P=Patty, C=Cheese, L=Lettuce, T=Tomato"
let textNumber = 50 

let ingredients = 400; 
let bun = 0
let patty = 0
let cheese = 0
let lettuce = 0
let tomato = 0

let spacing = 30


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
    bun = bun +1 
  }  
  //Patty
  if(keyCode === 80){
    fill(71, 50, 29)
    ingredients = ingredients - 10
    patty = patty +1
  } 
  //Cheese
  if(keyCode === 67){
    fill(255, 115, 0)
    ingredients = ingredients - 10
    cheese = cheese + 1
  } 
  //Lettuce
  if(keyCode === 76){
    fill(3, 156, 0)
    ingredients = ingredients - 10
    lettuce = lettuce +1
  } 
  //Tomato
  if(keyCode === 84){
    fill(232, 41, 28)
    ingredients = ingredients - 10
    tomato = tomato +1
  } 
  //Evaluate
  if(keyCode === 69){
    createCanvas(400, 400);
    background(0);
    fill(255,0,0)
    text("Press R to Restart",220,380)
    fill(255)
    if (ingredients<=150){
        text("Too Many Ingredients, Make it Reasonable.",20,200)
    }
    if (300>=ingredients && ingredients>150){
      text("Thats One Big Burger.",100,100)
   }
    if (350>=ingredients && ingredients>300 && tomato<=5 && bun<=5){
    text("I'd Eat that Burger.",100,100)
   }
    if(ingredients>350 && ingredients<=380){
      text("Not Enough Burger.",100,100)
   }
   if(ingredients>380 && ingredients<400){
    text("You Must Be Kidding.",100,100)
  }
   if(ingredients===400){
  text("So You Just Have No Burger, Fine Then.",20,100)
  } 
  if (bun>5){
  text("Little Heavy on the Bread.", 80, 100)
  spacing = spacing + 30
  }
  if (tomato>5){
  text("Too Much Tomato.",120,100+spacing)
  spacing = spacing + 30
  }
   noFill()
  }

  if(keyCode===82){
    background(255, 201, 246);
    noStroke();
    fill(0);
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
    noFill()
    ingredients = 400
  }
  rect(250,ingredients,100,10) 
}