scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(sprites.create(assets.image`butterfly`, SpriteKind.Enemy), tiles.getTileLocation(0, 15))
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`mysprite`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
