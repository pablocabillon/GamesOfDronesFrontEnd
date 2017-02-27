function seteoMovimientosDrones(){
	controles = mundo.input.keyboard.createCursorKeys();
	fuego = mundo.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
	va = mundo.input.keyboard.addKey(Phaser.Keyboard.B);		
	
	derT = mundo.input.keyboard.addKey(Phaser.KeyCode.D);
	izqT = mundo.input.keyboard.addKey(Phaser.KeyCode.A);
	arribaT = mundo.input.keyboard.addKey(Phaser.KeyCode.W);
	abajoT = mundo.input.keyboard.addKey(Phaser.KeyCode.S);
	tiro = mundo.input.keyboard.addKey(Phaser.Keyboard.Z);	

}

function refrezcoControlesAereos(){
	if (controles.left.isDown) {
		drone.angle = 180;
		drone.body.velocity.x = -velocidadA;
		enviarCoordenadasDron();
	}
	else if (controles.right.isDown) {
		drone.angle = 360;
		drone.body.velocity.x = velocidadA;
		enviarCoordenadasDron();
	}
	else if (controles.up.isDown) {
		drone.angle = 270;
		drone.body.velocity.y = -velocidadA;
		enviarCoordenadasDron();
	}
	else if (controles.down.isDown) {
		drone.angle = 90;					
		drone.body.velocity.y = velocidadA;	
		enviarCoordenadasDron();				
	}
	
}

function refrezcoControlesTerrestres(){
	if (derT.isDown) {
		tanque.angle = 360;
		tanque.body.velocity.x = velocidadT;
		enviarCoordenadasTanque();
	}
	else if (izqT.isDown) {
		tanque.angle = 180;
		tanque.body.velocity.x = -velocidadT;
		enviarCoordenadasTanque();
	}
	else if (arribaT.isDown) {
		tanque.angle = 270;
		tanque.body.velocity.y = -velocidadT;		
		enviarCoordenadasTanque();				
	}
	else if (abajoT.isDown) {
		tanque.angle = 90;					
		tanque.body.velocity.y = velocidadT;
		enviarCoordenadasTanque();				
	}
					
}
		
function disparos(){
	if (tiro.justDown){
		balin.fire();
		datoFuego.caracteristica = "normal";
		datoFuego.idDrone = "terrestre";
		datoFuego.dispara = true;
		//datoFuego.x = balin.x;
		//datoFuego.y = balin.y;
		//datoFuego.angle = balin.fireAngle;				
		datoDrone.disparo = datoFuego;
		enviar(datoDrone);
		datoFuego.dispara = false;
	}
			
	if (fuego.justDown){
		bala.fire();
		datoFuego.caracteristica = "normal";
		datoFuego.idDrone = "aereo";
		datoFuego.dispara = true;
		//datoFuego.x = bala.x;
		//datoFuego.y = bala.y;
		//datoFuego.angle = bala.fireAngle;
		datoDrone.disparo = datoFuego;
		enviar(datoDrone);
		datoFuego.dispara = false;
	}
	
	if (va.justDown){
		bomba.fire();
		datoFuego.caracteristica = "especial";
		datoFuego.idDrone = "aereo";
		datoFuego.dispara = true;
		//datoFuego.x = bomba.x;
		//datoFuego.y = bomba.y;
		//datoFuego.angle = bomba.fireAngle;
		datoDrone.disparo = datoFuego;
		enviar(datoDrone);
		datoFuego.dispara = false;
	}

}
