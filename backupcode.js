
var keys = {};

// Define the player object
var player = {
  x: 960,
  y: 540,
  width: 15,
  height: 15,
  speed: 5
};

// Define enemy objects
var enemy1 = {
  x: 100,
  y: 100,
  width: 20,
  height: 20,
  speed: 2
};

var enemy2 = {
  x: 800,
  y: 200,
  width: 20,
  height: 20,
  speed: 2
};

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
    player.y -= player.speed;
  }
  if (keys["a"]) {
    player.x -= player.speed;
  }
  if (keys["s"]) {
    player.y += player.speed;
  }
  if (keys["d"]) {
    player.x += player.speed;
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
var enemies = [enemy1, enemy2];

// Reference canvas
  var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Update the player position based on key states
function updatePlayer() {
if (keys["w"]) {
player.y -= player.speed;
}
if (keys["a"]) {
player.x -= player.speed;
}
if (keys["s"]) {
player.y += player.speed;
}
if (keys["d"]) {
player.x += player.speed;
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
// Spawn new enemies
function spawnEnemy() {
var newEnemy = {
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
width: 15,
height: 15,
speed: 2
};
enemies.push(newEnemy);
}

// Spawn new bullets
function spawnBullet() {
var newBullet = {
x: player.x + player.width / 2,
y: player.y,
width: 5,
height: 10,
speed: 10
};
bullets.push(newBullet);
}

// Update the game state
function update() {
updatePlayer();

// Move game objects
bullets.forEach(function (bullet) {
bullet.y -= bullet.speed;
});

enemies.forEach(function (enemy) {
if (enemy.x < canvas.width / 2) {
enemy.x -= enemy.speed;
} else {
enemy.x += enemy.speed;
}
});

// Remove off-screen objects
bullets = bullets.filter(function (bullet) {
return bullet.y > 0;
});

enemies = enemies.filter(function (enemy) {
return enemy.x > -enemy.width && enemy.x < canvas.width + enemy.width;
});

// Check for collisions
// ...

// Spawn new enemies
if (Math.random() < 0.05) {
spawnEnemy();
}

// Spawn new bullets
if (keys[" "]) {
spawnBullet();
}

// Draw the game objects
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "blue";
ctx.fillRect(player.x, player.y, player.width, player.height);

bullets.forEach(function (bullet) {
ctx.fillStyle = "red";
ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
});

enemies.forEach(function (enemy) {
ctx.beginPath();
ctx.arc(enemy.x, enemy.y, 10, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
});
}

function loop() {
update();
requestAnimationFrame(loop);
}

loop();