let sprite_sheet = 'dude';
let pos_x        = 32;
let pos_y        = 0;
let frame        = 4;

let velocity_x   = 150;
let velocity_y   = 350;

class Player extends Phaser.Sprite {

	constructor(game) {
  	pos_y = game.world.height - 150;
		super(game, pos_x, pos_y, sprite_sheet, frame);
	}
	
	load() {
    this.game.add.existing(this);
    this.game.physics.arcade.enable(this);
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;

    this.animations.add('left', [0, 1, 2, 3], 10, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);

    return this;
	}

  move(input) {
    this.body.velocity.x = 0;   
    if (input.left.isDown)
    {
      this.body.velocity.x = -velocity_x;
      this.animations.play('left');
    }
    else if (input.right.isDown)
    {
      this.body.velocity.x = velocity_x;
      this.animations.play('right');
    }
    else
    {
      this.animations.stop();
      this.frame = frame;
    }
    
    if (input.up.isDown && this.body.touching.down)
    {
      this.body.velocity.y = -velocity_y;
    }
  }

}

export default Player;