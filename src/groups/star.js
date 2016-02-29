let stars = {};

class StarGroup extends Phaser.Group {

	constructor(game) {
		super(game);
	}
	
	load() {
    stars = this.game.add.group();
    stars.enableBody = true;
    for (var i = 0; i < 12; i++)
    {
      let star = stars.create(i * 70, 0, 'star');
      star.body.gravity.y = 10;
      star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    return stars;
	}

}

export default StarGroup;