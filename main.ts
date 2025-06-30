scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(100, 0)
})
scene.onOverlapTile(SpriteKind.Player, img`end`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, img`start`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, img`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(sprites.create(assets.image`butterfly`, SpriteKind.Enemy), tiles.getTileLocation(0, 15))
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`mysprite`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, img`start`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
