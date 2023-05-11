import pygame
from enemy import Enemy

# Initialize Pygame
pygame.init()

# Set up the screen
screen_width, screen_height = 800, 600
win = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Enemy Path Example")

# Create an instance of Enemy
enemy = Enemy(100, 100, 50, 50, 5)

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Move the enemy
    enemy.move()

    # Draw the enemy
    win.fill((255, 255, 255))
    enemy.draw(win)

    # Update the display
    pygame.display.update()

# Quit Pygame
pygame.quit()
