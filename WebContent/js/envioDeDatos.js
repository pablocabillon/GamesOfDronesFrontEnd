function enviarCoordenadasDron() {
	datoDrone.tipo = "aereo";
	datoDrone.x = drone.x;
	datoDrone.y = drone.y;
	datoDrone.angle = drone.angle;
	datoDrone.rotation = drone.rotation; 
	datoFuego.dispara = false;
	datoDrone.disparo = datoFuego;
	enviar(datoDrone);   	
	return false;
}

function enviarCoordenadasTanque() {
	datoDrone.tipo = "terrestre";
	datoDrone.x = tanque.x;
	datoDrone.y = tanque.y;
	datoDrone.angle = tanque.angle;
	datoDrone.rotation = tanque.rotation;
	datoFuego.dispara = false;
	datoDrone.disparo = datoFuego;
	enviar(datoDrone);
	return false;
}
function enviar(dato){
	var msg = JSON.stringify(dato);
	webSocket.send(msg);	
}