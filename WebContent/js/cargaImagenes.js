function cargarImagenes(){
	mundo.load.image('tank','sprites/DroneTanqueArriba.png');
	mundo.load.image('aereo','sprites/DroneAereoArriba.png');
	mundo.load.image('bull','sprites/bullet.png');
	mundo.load.image('bomb','sprites/bomba.png');
	mundo.load.image('balaT','sprites/balin.png');
	mundo.load.tilemap('map', 'sprites/tile/mapa.csv', null, Phaser.Tilemap.CSV);
	mundo.load.image('tiles', 'sprites/tile/tiles_gameofdrones.png');
	mundo.load.spritesheet('playerAereo', 'sprites/tile/DroneAereoArriba.png', 32, 32);
	mundo.load.spritesheet('playerTerrestre', 'sprites/tile/DroneTanqueArriba.png', 32, 32);

}