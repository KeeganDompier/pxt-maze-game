sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setVelocity(0, 0)
    mySprite.destroy(effects.bubbles, 500)
    info.setLife(0)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d 7 d d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d 7 7 7 d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d e d d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d e d d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 5 
5 8 8 8 8 8 8 8 8 d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 5 
5 8 8 8 8 8 8 8 d d d 7 d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 d d d 7 7 7 d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 d d d d e d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 d d d d e d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 8 d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 7 d 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 7 7 7 5 
5 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d d d d d d d e d 5 
5 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d d d 7 d d d d e d 5 
5 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d d d 7 7 7 d d d d d 5 
5 8 8 8 8 8 8 8 8 8 d d d d d d d d d d d d d d e d d d d d d 5 
5 8 8 8 8 8 8 8 8 d d d d d d d d d d d d d d d e d d d d d d 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, TileScale.ThirtyTwo)
// When turned on, player cannot move to this color.
// there is a color texture to add to the orange
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 
5 5 5 4 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 
5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
scene.setTile(14, img`
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e d e e e e 
e e e e e e e e e e e e e e e e e e d e e e e e e e d d e e e e 
e e e d e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e d e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e d e e e e e 
e e e e e e e e e e e e e e e e e e d e e e e e e e d e e e e e 
e e e e e e e e e e d e e e e e e e d e e e e e e e d e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e d e e e e e 
e e e e e e e e e e e d e e e e e e e e e e e e e e e e e e e e 
e e d e e e e e e e e e e e e e e e d e e e e e e e d e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e d e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e d e e e e e e e e e e e e e 
e e e d e e e e e e e e e e e e e e d e e e e e e e e e e e e e 
e e e d e e e e e e e e e e e e e e e e e e e e e e e d e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e d e e e e e e d e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e d e e e e e 
e e e e e e e e e e e e e e e e e d e e e e e e e e e e e e e e 
e d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e d e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 9 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 9 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
scene.setTile(15, img`
c c a c c c a a c c c c a 3 3 a a a a c a a a a a a a c a a a a 
c c a c a c a a c c 3 a a 3 3 3 a a a c a a a a c a c a a a a a 
c c c c a c a 3 c 3 3 a 3 3 3 a 3 a a c a a a a c c c c a a a a 
c c c c a c 3 3 a 3 3 a 3 3 3 c a 3 3 c a a c a c a a c a a a a 
c c a c a 3 3 3 3 3 3 a a a c c a c c c 3 3 c c c a a a c a a 3 
c c a c a a 3 3 a 3 3 a 3 3 3 a a a a c a c c c b b b c c c 3 3 
c c a c a a a c 4 4 3 3 3 3 3 a a a a c 3 a b b c c c b c c c a 
c c a c a c e 4 1 5 4 4 3 3 3 a a a 3 c a 3 b b b b b c b a c a 
c c a c a c e 4 1 5 4 3 3 3 3 a a a c a c b b b b b b b b b c a 
c c a c a a a 4 4 4 3 3 3 3 3 a a 3 a c c b b b b b b b b b c c 
c c c c a a 3 3 3 3 3 a 3 3 3 a 3 a c c b b b 4 b b b b b b a a 
c c c c a 3 3 3 3 3 3 a 3 3 3 3 a a c c b b b 4 4 4 b b b b a a 
c c a c a a 3 3 a 3 3 a a a c 3 a c c a 3 b b 4 4 4 4 b b b a a 
c c a c a c a 3 a 3 3 a c 3 3 a c c a 3 c b b 4 5 d 4 b b b a a 
c c a c a c a a a 3 3 c a 3 3 a c c 3 3 3 3 b 4 5 d 4 b b b a a 
c c a c c c a a c a a c a 3 3 c 3 3 3 3 3 c b 4 4 4 4 4 b b a a 
a a a a a a a a a a a a a a c 3 3 3 3 c a c c b b a b b b b a a 
a c c c c c c c c c c a a a a 3 3 a a c c c 3 c c b b b b c a a 
a a a a a a a a b a a c c 3 3 a a a a c c c 3 3 c c b b b c a a 
a a a a a a a a a b b b a a c a a a a c a c c a c c c c a c a a 
a a a a a c a a b b 3 b b b b b a a c c c 3 3 c c c c 3 c c a a 
a a a a c c a 3 b b 3 3 4 b b b a c c c c 3 c c c c c 3 c a a a 
a a a a c c c b b b 3 4 4 4 b b c a a c c 3 a a c c c 3 c a a a 
a a a c c c c b b b 4 1 5 4 b b c c b c c 3 a a c a c 3 a c a a 
a a c c a a c b b 4 4 1 5 4 b b b c a c c 3 b a c a a 3 a c c a 
a a c a a b c c b 4 4 4 4 4 b b b c b c c 3 b b c a a 3 a c c a 
a a c c a b c b c b b b b b b b b c c c a 3 a c c a a 3 a a c a 
a a a c a a c c b c c c c c b b 3 c c c a 3 a c c a a 3 a a c a 
a a a a c c c c c c c c c c c b b c c a a 3 a c c a a 3 a a c a 
a a a a a a a a a a a a c c a c c c c a a 3 a a c a a 3 a a a a 
a a a a a a a a a a a a a a c c c c a a 3 a a c a a 3 a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
`, true)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 3 3 3 3 3 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . 3 3 8 3 8 3 3 . . . . . . . . . . . . . 
. . . . . . . . . . . . 3 3 3 2 3 3 3 . . . . . . . . . . . . . 
. . . . . . . . . . . . 3 3 3 3 3 3 3 . . . . . . . . . . . . . 
. . . . . . . . . . a a a a 3 3 3 a a a a . . . . . . . . . . . 
. . . . . . . . . a a a a a a 3 a a a a a a . . . . . . . . . . 
. . . 3 3 3 3 3 3 a a a a a a a a a a a a a 3 3 3 3 3 3 . . . . 
. . . . . . . . . a a a a a a a a a a a a a . . . . . . . . . . 
. . . . . . . . . . . . a a a a a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a 1 a a a 1 a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a a a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a 4 a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a a a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a 1 1 1 1 1 a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a a a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a . a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a . a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a . a a a . . . . . . . . . . . . . 
. . . . . . . . . . . . a a a . a a a . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a . a a a a a . . . . . . . . . . . 
. . . . . . . . . . a a a a a . a a a a a . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// Controls the sprite
controller.moveSprite(mySprite)
// Camera follows sprite through game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 50; index++) {
    mySprite2 = sprites.create(img`
. . . . . f f f f f . . . . . . 
. . . . f e e e e e f . . . . . 
. . . f d d d d d e e f . . . . 
. . f f f d d f f d e f f . . . 
. c d d e e d d d d e d d f . . 
. c c d d d d c d d e d f f f . 
. c d c c c c d d d e d f b d f 
. . c d d d d d d e e f f d d f 
. . . c d d d d e e f f e f f f 
. . . . f f f e e f e e e f . . 
. . . . f e e e e e e e f f f . 
. . . f e e e e e e f f f e f . 
. . f f e e e e f f f f f e f . 
. f b d f e e f b b f f f e f . 
. f d d f e e f d d b f f f f . 
. f f f f f f f f f f f f f . . 
`, SpriteKind.Enemy)
    mySprite2.setPosition(Math.randomRange(100, 512), Math.randomRange(100, 512))
    mySprite.z = 1
    mySprite2.follow(mySprite, 30)
    info.startCountdown(60)
}
forever(function () {
    if (info.life() == 0) {
        game.over(false)
    }
})
