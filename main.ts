controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let rocks: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c9999b222222222222fc..
    .c2b991119222222222c22c.
    c2222b11992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222444222f.....
    ..ff2222222cf444222f....
    ....ffffffffff444222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
mySprite.setPosition(77, 110)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    rocks = sprites.createProjectileFromSide(img`
        . . . . . . . . . b b b b . . . 
        . . . . . . b b b d d d d b . . 
        . . . . . . b d d d d d d b . . 
        . . . . b b d d d d d b b d . . 
        . . . . b d d d d d d b b d b . 
        . . . . c d d d d d b b d b c . 
        . . . b c c b b b b d d b c c . 
        . . b b c c c b d d b c c c c . 
        . b b d d d b b b b b b c c c c 
        . c d d d d d d b d b c c c b c 
        . c b d d d b b d b c c c b b c 
        c b c c c c b d d b b b b b c c 
        c c b b b d d b c c b b b b c c 
        c c c c c c c c c b b b b c c . 
        . c c c c b b b b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        `, 0, 50)
    rocks.x = randint(0, scene.screenWidth())
    rocks.setKind(SpriteKind.Enemy)
})
