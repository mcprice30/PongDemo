// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 540;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/bg.png";

// Paddle Image
var paddleReady = false;
var paddleImage = new Image();
paddleImage.onload = function () {
	paddleReady = true;
};
paddleImage.src = "images/paddle.png";

// Ball Image
var ballReady = false;
var ballImage = new Image();
ballImage.onload = function () {
	ballReady = true;
};
ballImage.src = "images/ball.png";

// Game objects
var paddle1 = {
	speed: 300,
  height: 120,
  width: 30,
  x: 5,
	y: 210,
  dy: 0
};
var paddle2 = {
  speed: 300,
  height: 120,
  width: 30,
  x: 989,
	y: 210,
  dy: 0
};
var ball = {
  speed: 250,
  height: 30,
  width: 30,
	dx: 0,
	dy: 0
};

// Game Variables
var p1Score = 0;
var p2Score = 0;
var BG_TOP = 101;
var BG_BOTTOM = 500;
var BG_START = 0;
var BG_END = 1024;
var MARGIN = 5;
var BOUNCEFACT = 0.45;
var MID = 30;
var BG_MID = (BG_BOTTOM + BG_TOP) / 2;
var UP_ARROW = 38;
var DOWN_ARROW = 40;

// Will hold whether the up and down arrows are being pressed.
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game whenever someone scores.
var reset = function () {
  ball.x = (canvas.width / 2) - 15;
	ball.y = (canvas.height / 2) - 15;

	// TODO: Make the ball move!
};

var collideLR = function (left, right) {
	// TODO: Fill this function in!
}

// Update game objects
var update = function (modifier) {
  paddle1.dy = 0;
  paddle2.dy = 0;

	// TODO: Give player control of paddle 1.

	// TODO: Add basic AI to player 2.

	// Update paddle and ballpositions with their speed.
  paddle1.y += paddle1.dy * modifier;
  paddle2.y += paddle2.dy * modifier;
	ball.y += ball.dy * modifier;
	ball.x += ball.dx * modifier;

	// TODO: Keep paddles and ball on the board.

	// TODO: Add scoring / reset logic.

	// TODO: Handle ball colliding with the paddle.
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (paddleReady) {
		ctx.drawImage(paddleImage, paddle1.x, paddle1.y);
    ctx.drawImage(paddleImage, paddle2.x, paddle2.y);
	}

	if (ballReady) {
		ctx.drawImage(ballImage, ball.x, ball.y);
	}

	// Display the score.
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "36px Helvetica";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.fillText(p1Score + " - " + p2Score, 512, 32);
};

// The main game loop
var main = function () {

	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
