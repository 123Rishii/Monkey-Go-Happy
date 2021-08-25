var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage, bground;
var FoodGroup, obstacleGroup;
var score, ground, gameState;

gameState = 1;

function preload() {
  monkey_running = loadAnimation(
    "Monkey_01.png",
    "Monkey_02.png",
    "Monkey_03.png",
    "Monkey_04.png",
    "Monkey_05.png",
    "Monkey_06.png",
    "Monkey_07.png",
    "Monkey_08.png",
    "Monkey_09.png",
    "Monkey_10.png"
  );
  bground = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstaleImage = loadImage("stone.png");

  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function setup() {
  createCanvas(600, 400);
  score = 0;
  surface = createSprite(300, 380, 900, 10);
  surface.shapeColor = "black";
  surface.visible = false;

  ground = createSprite(0, 150);
  ground.addAnimation("bground", bground);
  //ground.scale=0.8;
  ground.velocityX = -1;
  monkey = createSprite(90, 320, 10, 10);
  //monkey.velocityX = monkey.velocityX + 0.3;
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1;
  //monkey.collide(ground);
}

// function keyReleased() {
//   if (value === 32) {
//     monkey.y = 320;
//   }
//   return false; // prevent any default behavior
// }

// function keyPressed() {
//   if (value === 32) {
//     monkey.y = monkey.y+30;
//   }
//   return false; // prevent any default behavior
// }

function draw() {
  //background(bground);
  if (gameState === 1) {
    monkey.collide(surface);
    monkey.velocityY = monkey.velocityY + 0.8;

    if (keyIsPressed === true && monkey.y >= 0) {
      // monkey.y = monkey.y-10;
      //monkey.addAnimation("Monkey_08.png");
      monkey.velocityY = -15;
    } else {
      monkey.collide(surface);
      //monkey.velocityY=monkey.velocityY+15;
      //monkey.addAnimation("monkey_running", monkey_running);
    }

    if (ground.x < 100) {
      ground.x = ground.width / 2;
    }
    // ground.velocityX = -7;
    // ground.x = ground.width / 2;

    if (World.frameCount % 200 === 0) {
      fruits();
    }

    if (World.frameCount % 300 === 0) {
      stones();
    }

    if (monkey.isTouching(FoodGroup)) {
      FoodGroup.destroyEach();
      score = score + 1;
    }

    if (monkey.isTouching(obstacleGroup)) {
      fill("white");
      stroke("white");
      textSize(50);
      textFont("Arial");
      textStyle(BOLD);
      text("Game Over", 200, 200);

      gameState = 0;
    }

    if (monkey.isTouching(obstacleGroup)) {
      monkey.scale = monkey.scale - 0.2;
      bground.velocityEach = 0;
      stone.velocityEach = 0;
      banana.velocityEach = 0;
    }
  }
  drawSprites();

  function fruits() {
    banana = createSprite(670, random(100, 200), 5, 5);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    FoodGroup.add(banana);
  }

  function stones() {
    obstacle = createSprite(670, 320, 10, 10);
    obstacle.addImage(obstaleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }
}
