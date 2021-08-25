var bananaImage,
  ObstacleImage,
  ObstacleGroup,
  bground,
  score = 0,
  player,
  ground;

var foodGroup, ObstacleGroup;

function preload() {
  bground = loadImage("jungle.png");
  player_running =
    ("Monkey_01.png",
    "Monkey_02.png",
    "Monkey_03.png",
    "Monkey_04.png",
    "Monkey_05.png",
    "Monkey_06.png",
    "Monkey_07.png",
    "Monkey_08.png",
    "Monkey_09.png",
    "Monkey_10.png");

  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  var bground = createSprite;
  bground.addImage("background.png");
  if (bground.x > 600) {
    bground.x = bground.width / 2;
  }
}
//   background.visible=false;

function draw() {
  background(220);
  drawSprites();

  switch (score) {
    case 10:
      player.scale = 0.12;
      break;

    case 20:
      player.scale = 0.14;
      break;

    case 30:
      player.scale = 0.16;
      break;

    case 40:
      player.scale = 0.18;
      break;
    default:
      break;
  }

  if (foodGroup.isTouching(player)) {
    player.scale = player.scale + 0.5;
    score = score + 2;
    fruitGroup.destroyEach();
  }

  if (obstacleGroup.isTouching(player)) {
    player.scale = player.scale - 5;
  }

  stroke("white");
  textSize(20);
  fill("white");
  text("score :" + score, 500, 50);
}
