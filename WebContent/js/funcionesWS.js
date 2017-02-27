		webSocket.onerror = function(event) {
		  onError(event)
		};

		webSocket.onopen = function(event) {
		  onOpen(event)
		};

		webSocket.onmessage = function(event) {
		  onMessage(event)
		};
		  function onOpen(event) {
			// definir si se quiere modificar algo en pantalla sino ya se ve por linea de comando
		}

		function onError(event) {
		  alert(event.data);
		}
		
		function onMessage(event) {
			json = event.data;
			contenido = JSON.parse(json);
			if(contenido.tipo == "aereo"){
				drone.x = contenido.x;
				drone.y = contenido.y;
				drone.angle = contenido.angle;
				drone.rotation = contenido.rotation;
				if(contenido.disparo.dispara == true){
					//bala.reset(drone.x, drone.y);
					bala.x = contenido.disparo.x;
					bala.y = contenido.disparo.y;
					bala.angle = contenido.angle;
					bala.fire();
				}
			}else if(contenido.tipo == "terrestre"){
				tanque.x = contenido.x;
				tanque.y = contenido.y;
				tanque.angle = contenido.angle;
				tanque.rotation = contenido.rotation;
				if(contenido.disparo.dispara == true){
					//balin.reset(tanque.x, tanque.y);
					balin.x = contenido.disparo.x;
					balin.y = contenido.disparo.y;
					balin.angle = contenido.angle;
					balin.fire();
				}
			}
			//else if(contenido.tipo == "fuego"){
				/*if(contenido.caracteristica == "normal"){
					if(contenido.idDrone == "terrestre"){
						balin.fire();	
					}else{
						bala.fire();
					}
				}else
					bomba.fire();
				*///	tanque.kill();
			//}
		}	
       