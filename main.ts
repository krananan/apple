input.onPinPressed(TouchPin.P0, function () {
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
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
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
music.playTone(392, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (33 >= timer) {
        timer += 1
        basic.pause(1000)
    } else {
        game.gameOver()
    }
})
basic.forever(function () {
    if (sprite.isTouching(apple)) {
        game.addScore(1)
        apple.delete()
        apple = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
