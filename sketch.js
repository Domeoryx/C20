var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200,300,30,30);
  a.shapeColor = "green"
  b.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  b.x = World.mouseX
  b.y = World.mouseY

  if(b.x-a.x < b.width/2 + a.width/2&&a.x-b.x < b.width/2 + a.width/2){
    b.shapeColor = "red"
    a.shapeColor = "red"
  }
  else{
    b.shapeColor = "green"
    a.shapeColor = "green"
  }
  if(b.y-a.y < b.height/2 + a.height/2&&a.y-b.y < b.height/2 + a.height/2){
    b.shapeColor = "red"
    a.shapeColor = "red"
  }
  else{
    b.shapeColor = "green"
    a.shapeColor = "green"
  }
  

  
  drawSprites();
}