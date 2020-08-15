var m,f; 

function setup() {
  createCanvas(800,400);
  f = createSprite(400, 200, 50, 50);
  m = createSprite(600, 200, 50, 50); 
  f.shapeColor = "pink";
  m.shapeColor = "pink";
  f.debug = true;
  m. debug = true;
}

function draw() {
  background(255,255,255); 
  m.y = World.mouseY;
  m.x = World.mouseX;
  if((m.x-f.x<m.width/2+f.width/2)&&(f.x-m.x<f.width/2+m.width/2)
  &&(m.y-f.y<m.width/2+f.width/2)&&(f.y-m.y<f.width/2+m.width/2))
  {
  f.shapeColor = "yellow";
  m.shapeColor = "yellow";
  }
  else {
  f.shapeColor = "pink";
  m.shapeColor = "pink";
  }
  drawSprites();
}