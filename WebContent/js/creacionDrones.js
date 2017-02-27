function creoDrone(){
	drone = mundo.add.sprite(xa,ya,'aereo');
	drone.scale.setTo(0.2,0.2);
	drone.anchor.setTo(0.5,0.5);
	drone.angle = 180;
	mundo.physics.arcade.enable(drone);
	drone.body.collideWorldBounds = true;
}

function creoTanque(){
	tanque = mundo.add.sprite(xt,yt,'tank');
	tanque.scale.setTo(0.2,0.2);
	tanque.anchor.setTo(0.5,0.5);
	mundo.physics.arcade.enable(tanque);
	tanque.body.collideWorldBounds = true;
	tanque.body.velocity.x = 0;
	tanque.body.velocity.y = 0;
}
