input.onButtonPressed(Button.AB, function () {
    sprite.delete()
    apple.delete()
    sprite = game.createSprite(2, 2)
    apple = game.createSprite(randint(0, 4), randint(0, 4))
    timer = 0
    sprite.set(LedSpriteProperty.Blink, 50)
    game.setScore(0)
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
        basic.pause(1000)
    }
})
let timer = 0
let apple: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
apple = game.createSprite(randint(0, 4), randint(0, 4))
timer = 0
sprite.set(LedSpriteProperty.Blink, 50)
game.setScore(0)
for (let index = 0; index <= 2; index++) {
    basic.showNumber(3 - index)
    basic.pause(1000)
}
basic.forever(function () {
    if (33 >= timer) {
        timer += 1
        basic.pause(1000)
    } else {
        game.gameOver()
    }
})
basic.forever(function () {
    if (-500 > input.acceleration(Dimension.Y)) {
        sprite.change(LedSpriteProperty.Y, -1)
    }
    if (500 < input.acceleration(Dimension.Y)) {
        sprite.change(LedSpriteProperty.Y, 1)
    }
    if (-900 > input.acceleration(Dimension.X)) {
        sprite.change(LedSpriteProperty.X, -1)
    }
    if (900 < input.acceleration(Dimension.X)) {
        sprite.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    if (sprite.isTouching(apple)) {
        game.addScore(1)
        apple.delete()
        apple = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
