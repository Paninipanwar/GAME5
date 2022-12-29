//Chase The Ball Game
let ballx = 300
let bally = 300
let ballsize = 40
let score = 0
let gamestate = "L1";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(5,92,160);
if(gamestate == "L1"){
  levelOne();
}
  if(gamestate == "L2"){
  levelTwo();
  }
  if(gamestate == "L3"){
  YOU_WIN();
  }
  
}

function levelOne(){
  fill(5,98,166)
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  
  let distToBall = dist(ballx,bally, mouseX,mouseY)
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height)
    score = score+1
  }
  if (score > 5){
  gamestate="L2"
  
  }
  line(ballx,bally, mouseX,mouseY)
  ellipse(ballx,bally,ballsize,ballsize)
  fill(0)
  text(("Score: "+score),width/2,40)
text("Level 1", width/2,height-20)
textSize(20)
}

function levelTwo(){
  background(64,5,160)
  fill(80,10,200)
  
  let distToBall = dist(ballx,bally, mouseX,mouseY)
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height)
    score = score+1
  }
  if (score > 10){
  gamestate="L3"
  
  }
 
  ellipse(ballx,bally,ballsize/2,ballsize/2)
  fill(209,207,255)
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  text(("Score: "+score),width/2,40)
text("Last Level ", width/2,height-20)
textSize(20)
}
function YOU_WIN(){
  noStroke()
background (255)
  fill(180,0,random(255))
  text("YOU WIN!",width/2,height/2)
  textSize(50)
}