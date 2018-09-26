// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = dt;
    this.x = this.x + this.speed * dt;

    if (this.x > 510) {
     // speeds up
     this.speed = this.speed + 10;
     this.x = -100;
}
  if ((Math.abs(this.x - player.x)<=50)&&(Math.abs(this.y-player.y)<=20)){
  player.x = 200;
  player.y=450;
  enemy1.speed=150;
  enemy2.speed=150;
  enemy3.speed=90;
  enemy4.speed=180;
  enemy5.speed=180;
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x=200;
    this.y=450;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  // }

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var direction;
Player.prototype.handleInput = function(direction) {
    if(direction==='left'&&this.x>20){
      this.x-=100;
    }else if (direction==='right'&&this.x<370){
      this.x+=100;
    }else if (direction==='up'&&this.y>0){
      this.y-=80;
    }else if (direction==='down'&&this.y<450){
      this.y+=80;
    };
};


// Now instantiate your objects.
var enemy1 = new Enemy (0,50,150);
var enemy2 = new Enemy (50,130,150);
var enemy3 = new Enemy (0,210,90);
var enemy4 = new Enemy (-50,210,180);
var enemy5 = new Enemy (100,210,180);
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(enemy1,enemy2,enemy3,enemy4,enemy5);

// Place the player object in a variable called player
var player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
