var car, wall;
var speed, weight


function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 100, 50, 20);

  wall = createSprite(1500,150,60,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(50,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if(wall.x - car.x < (car.width+wall.width)/2){
    car.velocityX = 0;

    var deformation = (0.5* weight * speed * speed)/ 22500;

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
    else if(deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    else{
      car.shapeColor = color(255,0,0);
    }
  }


  drawSprites();
}