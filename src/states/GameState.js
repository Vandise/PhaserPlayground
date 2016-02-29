import PlatformGroup from 'groups/platform';
import StarGroup     from 'groups/star';
import Player        from 'objects/player';

let cursors =   {};

let player    = {};
let platforms = {};
let stars     = {};
let score     = 0;
let score_text = null;

class GameState extends Phaser.State {

  preload() {
    this.game.load.image('sky', 'assets/sky.png');
    this.game.load.image('ground', 'assets/platform.png');
    this.game.load.image('star', 'assets/star.png');
    this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  }

	create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.sprite(0, 0, 'sky');

  	platforms = new PlatformGroup(this.game).load();
  	stars     = new StarGroup(this.game).load();
  	player    = new Player(this.game).load();
    cursors   = this.game.input.keyboard.createCursorKeys();

    score_text = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
	}
	
  collect_star(player, star) {
    star.kill();
    score += 10;
    score_text.text = 'Score: ' + score;
  }

  update() {
    this.game.physics.arcade.collide(player, platforms);
    this.game.physics.arcade.collide(stars, platforms);
    this.game.physics.arcade.overlap(player, stars, this.collect_star, null, this);
    player.move(cursors);
  }

}

export default GameState;
