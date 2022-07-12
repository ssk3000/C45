var paddle1, paddle2;
var gameState = 0;
var database;
var submit, input;
var playerCount = 0;

function setup() {
  createCanvas(600, 400);
  database = firebase.database();
  paddle1 = createSprite(20, 200, 10, 100);
  paddle2 = createSprite(580, 200, 10, 100);

  submit = createButton("Submit");
  submit.position(265, 290);
  submit.width = 100;
  submit.height = 50;
  submit.visible = false;

  input = createInput("Name");
  input.visible = false;
  input.position(220, 200);

}

function submitPressed() {
  submit.mousePressed(() => {
    if (input != null && input != '') {
      database.ref("players/player" + (playerCount + 1)).set({
        name: input.value(),
      });
    }
  })
  if (playerCount <= 2) {
  playerCount += 1;
  }
}

function showForm() {
  paddle1.visible = false;
  paddle2.visible = false;
  submit.visible = true;
  input.visible = true;

  submitPressed();
}


function draw() {
  background('black');

  if (gameState == 0) {
    showForm();
  }
  

  drawSprites();
}
