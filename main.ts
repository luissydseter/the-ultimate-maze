scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    placePlayer()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    makeFlyte()
    placePlayer()
})
function moving_my_sprite () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`magma1`, function (sprite, location) {
    game.reset()
})
function placePlayer () {
    start_door()
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
}
function makeFlyte () {
    flyte = sprites.create(assets.image`butterfly`, SpriteKind.Enemy)
    tiles.placeOnTile(flyte, tiles.getTileLocation(1, 15))
    flyte.setVelocity(100, 0)
}
function start_door () {
    tiles.placeOnRandomTile(mySprite, assets.tile`start`)
}
function moveFlyte () {
    if (flyte == null) {
        return
    }
    if (flyte.isHittingTile(CollisionDirection.Right)) {
        flyte.setVelocity(0, -100)
    }
    if (flyte.isHittingTile(CollisionDirection.Top)) {
        flyte.setVelocity(-100, 0)
    }
    if (flyte.isHittingTile(CollisionDirection.Left)) {
        flyte.setVelocity(0, 100)
    }
    if (flyte.isHittingTile(CollisionDirection.Bottom)) {
        flyte.setVelocity(100, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`magma2`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`end`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    placePlayer()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`treasure chest`, function (sprite, location) {
    coins += 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.reset()
})
let coins = 0
let flyte: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`mysprite`, SpriteKind.Player)
placePlayer()
game.onUpdate(function () {
    moveFlyte()
})
