<?php
	$action = $_POST['action'];

    switch($action)
    {
        case "agregarPartida":
            agregarPartida();
        break;
        case "obtenerPartida":
            obtenerPartida();
        break;
        case "obtenerPuntuaciones":
            obtenerPuntuaciones();
        break;
    }
	
	function connect() {
		$databasehost = "localhost";
		$databasename = "db_esteban";
		$databaseuser = "db_esteban";
		$databasepass = "db_esteban";

		$mysqli = new mysqli($databasehost, $databaseuser, $databasepass, $databasename);
		if ($mysqli->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}
		return $mysqli;
	}

	function disconnect() {
		mysqli_close();
	}

	function agregarPartida() {

		$gamename_01 = $_POST["gamename_01"];
		$gamename_02 = $_POST["gamename_02"];
		$gamepoints_01 = $_POST["gamepoints_01"];
		$gamepoints_02 = $_POST["gamepoints_02"];

		$mysqli = connect();
		
		$result = $mysqli->query("call sp_registrarPartida('$gamename_01', $gamepoints_01, '$gamename_02', $gamepoints_02);");
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			// Recorremos los resultados devueltos
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
		}
		mysqli_close($mysqli);
	}

	function obtenerPartida() {
		$mysqli = connect();
		$idPartida = $_POST['idPartida'];
		$result = $mysqli->query("call sp_PuntuacionesPorPartida($idPartida);");	
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			// Recorremos los resultados devueltos
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
		}
		mysqli_close($mysqli);		
    }
    function obtenerPuntuaciones()
    {
        $mysqli = connect();
		$limit1 = $_POST['limit1'];
		$limit2 = $_POST['limit2'];
		$idTab = $_POST['idTab'];
		$result = $mysqli->query("call sp_Puntuaciones($limit1, $limit2,'$idTab');");	
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			// Recorremos los resultados devueltos
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
		}
		mysqli_close($mysqli);		
    }
?>