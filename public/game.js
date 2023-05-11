// Define game objects
var player = {
  x: 400,
  y: 500,
  width: 50,
  height: 50,
  speed: 5,
};

var bullets = [];

var enemies = [];

// Set up the canvas and game loop
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

function update() {
  // Update the game state
  // ...

  // Check for collisions
  // ...

  // Remove off-screen objects
  // ...

  // Spawn new enemies
  // ...

  // Spawn new bullets
  // ...

  // Move game objects
  // ...

  // Draw the game objects
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  bullets.forEach(function (bullet) {
    ctx.fillStyle = "red";
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  });

  enemies.forEach(function (enemy) {
    ctx.fillStyle = "green";
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });
}

function loop() {
  update();
  requestAnimationFrame(loop);
}

loop();
