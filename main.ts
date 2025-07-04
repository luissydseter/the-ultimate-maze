scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
    makeFlyte()
    i_like_to_move_it()
})
function moving_my_sprite () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`magma1`, function (sprite, location) {
    game.reset()
})
function makeFlyte () {
    flyte = sprites.create(assets.image`butterfly`, SpriteKind.Enemy)
    tiles.placeOnTile(flyte, tiles.getTileLocation(1, 15))
    flyte.setVelocity(100, 0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    pixelsToMeters = 30
    pixelsToMeters = 5 * pixelsToMeters
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
    i_like_to_move_it()
})
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
function i_like_to_move_it () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`magma2`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`end`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile18`)
    i_like_to_move_it()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`treasure chest`, function (sprite, location) {
    coins += 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.reset()
})
let coins = 0
let pixelsToMeters = 0
let flyte: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`mysprite`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`start`)
i_like_to_move_it()
game.onUpdate(function () {
    moveFlyte()
})
