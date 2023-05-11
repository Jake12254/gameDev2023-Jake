class Enemy:
    def __init__(self, x, y, width, height, speed):
        self.rect = pygame.Rect(x, y, width, height)
        self.speed = speed
        self.path = [(100, 100), (700, 100), (700, 500), (100, 500)]
        self.path_idx = 0

    def move(self):
        target_x, target_y = self.path[self.path_idx]
        if self.rect.x < target_x:
            self.rect.x += self.speed
        elif self.rect.x > target_x:
            self.rect.x -= self.speed
        if self.rect.y < target_y:
            self.rect.y += self.speed
        elif self.rect.y > target_y:
            self.rect.y -= self.speed

        if self.rect.x == target_x and self.rect.y == target_y:
            self.path_idx = (self.path_idx + 1) % len(self.path)

    def draw(self, win):
        pygame.draw.rect(win, (255, 0, 0), self.rect)
