// Define game objects
var player = {
  x: 400,
  y: 500,
  width: 50,
  height: 50,
  speed: 5,
};

var bullets = [];

var enemies = [
  { x: 100, y: 100, width: 50, height: 50, speed: 2 },
  { x: 200, y: 100, width: 50, height: 50, speed: 3 },
  { x: 300, y: 100, width: 50, height: 50, speed: 4 },
  { x: 400, y: 100, width: 50, height: 50, speed: 5 },
];

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
  enemies.forEach(function (enemy) {
    // Calculate new x and y positions for the enemy
    var angle = Math.random() * Math.PI * 2;
    var distance = Math.random() * 50;
    var dx = Math.cos(angle) * distance * 0.1;
    var dy = Math.sin(angle) * distance; * 0.1;
    enemy.x += dx;
    enemy.y += dy;

    // Make sure the enemy stays within the canvas bounds
    if (enemy.x < 0) {
      enemy.x = 0;
    } else if (enemy.x + enemy.width > canvas.width) {
      enemy.x = canvas.width - enemy.width;
    }
    if (enemy.y < 0) {
      enemy.y = 0;
    } else if (enemy.y + enemy.height > canvas.height) {
      enemy.y = canvas.height - enemy.height;
    }
  });

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
