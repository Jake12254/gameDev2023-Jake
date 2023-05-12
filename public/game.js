


// Define a dictionary to store key states
var keys = {};

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", function (event) {
  keys[event.key] = true;
});

document.addEventListener("keyup", function (event) {
  keys[event.key] = false;
});

// Update the player position based on key states
function updatePlayer() {
  if (keys["w"]) {
    player.y -= 5;
  }
  if (keys["a"]) {
    player.x -= 5;
  }
  if (keys["s"]) {
    player.y += 5;
  }
  if (keys["d"]) {
    player.x += 5;
  }

  // Make sure the player stays within the canvas bounds
  if (player.x < 0) {
    player.x = 0;
  } else if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }
  if (player.y < 0) {
    player.y = 0;
  } else if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
  }
}

// Define game objects

var bullets = [];

var enemies = [
  { x: 500, y: 500, width: 15, height: 15, speed: 0.1 },
  { x: 500, y: 500, width: 15, height: 15, speed: 0.1 },
];

// Set up the canvas and game loop
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Define the player object
var player = {
  x: 960,
  y: 540,
  width: 15,
  height: 15,
  speed: 0.8
};

  // Update the game state
  function update() {
     updatePlayer();

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
    enemy.angle += 0.01; // Increase the angle for each enemy to make them move in a circle
    enemy.x = canvas.width / 2 + 100 * Math.cos(enemy.angle); // Update the x-coordinate using the cosine of the angle
    enemy.y = canvas.height / 2 + 100 * Math.sin(enemy.angle); // Update the y-coordinate using the sine of the angle

    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
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
