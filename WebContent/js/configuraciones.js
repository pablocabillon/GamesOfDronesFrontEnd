//configuraciones
var ancho = 600;//1350;
var alto = 600;//680;
var mask=0;
var drone;
var controles;
var izqT;
var derT;
var arribaT;
var abajoT;
var bala;
var balin;
var bomba;
var fuego;
var tiro;
var tanque;
var fondo;
var vision;
var velocidadA = 500;
var velocidadT = 300;
var droneTerrestre;
var droneAereo;
var visionDrone = 400;
var webSocket =new WebSocket('ws://192.168.43.104:8080/GamesOfDronesFrontEnd/websocket');
var datoFuego = {
		"dispara"			: false,
		"tipo"      		: "fuego", 
		"caracteristica"	: "normal",
		"idDrone"			: "aereo",
		"x"					: ""
	};
var datoDrone = {};
var distanciaBalaAereo = 120;
var distanciaBalaTerrestre = 120;
var contenido;
var json;
var xa = 65;
var ya = 65;
var xt = ancho - 65;
var yt = alto - 65;	
var zonaGuerra = false;
//modificacion
var layer;
var aumentarAltura;
var disminuirAltura;			

function creoMapa(){
	map = mundo.add.tilemap('map', 32, 32);
	map.addTilesetImage('tiles');
	layer = map.createLayer(0);
	layer.resizeWorld();
	if (vista == "tanque")
		map.setCollisionBetween(0, 44);
	else
		map.setCollisionBetween(0, 43);
	vision = mundo.add.graphics(0,0);
	vision.drawCircle(10,10,visionDrone);
	mundo.world.mask = vision;			
}
function creoYConfiguroBalas(){
				//carga bala (puede ser la bomba por como se maneja)				
			bala = mundo.add.weapon(1, 'bull');	
			mundo.physics.arcade.enable(bala);
			bala.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
			bala.bulletKillDistance = distanciaBalaAereo;
			
			bala.bulletAngleOffset = 270;
			bala.bulletSpeed = 600;
			bala.trackSprite(drone, 0, 0, true);
			bala.checkWorldBounds = true;
			// Bala tanque
			balin = mundo.add.weapon(1, 'balaT');	
			mundo.physics.arcade.enable(bala);
			bala.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
			bala.bulletKillDistance = distanciaBalaTerrestre;
			balin.bulletAngleOffset = 270;
			balin.bulletSpeed = 600;
			balin.trackSprite(tanque, 0, 0, true);
			balin.checkWorldBounds = true;
	
			
			//carga bomba
			bomba = mundo.add.weapon(1, 'bomb')
			mundo.physics.arcade.enable(bomba);
			bomba.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
			bomba.bulletAngleOffset = 270;
			bomba.bulletSpeed = 400;
			bomba.trackSprite(drone, 0, 0, true);
	
}
