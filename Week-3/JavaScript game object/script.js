// Your solution goes here

const game={
    lives:3,
    coins:0,
    points:function(){
        return game.coins*10;
    },
    playerDies:function(){
        if (game.lives>0){
            game.lives =game.lives-1;
        }
    },
    newGame:function(){
        game.lives =3;
        game.coins=0;
    }
};
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0