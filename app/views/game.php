<!doctype html>
<html>
<head>

<meta http-equiv="Expires" content="0">
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cristal bit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
     <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    
    <script src="js/libs/jquery/jquery-3.3.1.min.js"></script>

<script type="text/javascript" src="js/libs/jquery/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="js/libs/three/three.js"></script>
	<script type="text/javascript" src="js/libs/three/MTLLoader.js"></script>
	<script type="text/javascript" src="js/libs/three/OBJLoader.js"></script>
	<!--<script type="text/javascript" src="js/libs/three/LoaderUtils.js"></script>
	<script type="text/javascript" src="js/libs/three/FBXLoader.js"></script>-->
	<script type="text/javascript"> var mode_debug = false; </script>
	<script type="text/javascript" src="js/models/transform.js"></script>
	<script type="text/javascript" src="js/globvar.js"></script>
	<script type="text/javascript" src="js/cargaModelo.js"></script>
	<script type="text/javascript" src="js/cristales.js"></script>
	<script type="text/javascript" src="js/autos.js"></script>
	<script type="text/javascript" src="js/escenario.js"></script>
	<script type="text/javascript" src="js/objetos.js"></script>
	<script type="text/javascript" src="js/animation.js"></script>
	<script type="text/javascript" src="js/libs/gl-matrix.js"></script>
	<script type="text/javascript" src="js/libs/shader-utility.js"></script>
	<script id="shader-vs" type="x-shader/x-vertex">
	    uniform vec4 color_dark;
	    varying vec4 col;
	    void main(void)
			{
	        col = color_dark;
				//se multiplican las matrices para obtener la posicion final del vertice
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		</script>
	<script id="shader-fs" type="x-shader/x-fragment">
	        varying vec4 col;
			void main(void)
			{
	            //todos los fragmentos serán de color blanco
				gl_FragColor = col;
			}
	</script>
	<script type="text/javascript" src="js/shaders.js"></script>
	<script type="text/javascript" src="js/graph.js"></script>



	<style>
		@import url('https://fonts.googleapis.com/css?family=Roboto');
		@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
		*
		{ 
			font-family: 'Press Start 2P', cursive;
		}
		.clsGUI
		{
			position:fixed;
			width:calc(100% - 10px);  
			height:calc(100% - 10px);
			background-color:rgba(1,1,1,0.0);
		}
		.clsGUI_Points
		{
			width:25%;
			padding:1%;
			background-color:rgba(1,1,1,0.2);
			float:left;
			border-radius:5px;
		}
		.clsGUI_Points_text
		{
			float:left;
			display:inline;
			
			font-size:18px;
			color:white;
			height:40px;
			background-color:rgba(1,1,1,0.0);
		}
		.clsGUI_Points_img
		{
			background-color:rgba(1,1,1,0.0);
			float:left;
			display:inline;
			width:30px;
			height:40px;
		}
		.clsGUI_RIGHT
		{
			float:right;
		}
		.clsGUI_Central
		{
			position:absolute;
			left:26%;
			width:30%;
		}
		.clsGUI_Pause
		{
			position:absolute;
			left:58%;
			width:15%;
			cursor:pointer;
			
		}
		.clsGUI_Pause:hover
		{
			background-color:#2196f3;
		}
		.clsGUI_Pause *
		{
			cursor:pointer;
		}
		.clsGUI_MasterMessage
		{
			position:absolute;
			top:20%;
			left:45%;
			z-index:99;
			color:white;	
		}
	</style>
    
</head>
<body class="black">
<?php require_once 'pause.php'; ?>
<div class="clsGUI_MasterMessage"></div>

<div class="clsGUI">
	<div class="clsGUI_Points z-depth-3">
		<img src="media/img/crystal.png" class="clsGUI_Points_img">
		<label class="clsGUI_Points_text">
		 	&nbsp;x&nbsp; 
		</label>
		<label class="clsGUI_Points_text" id="lblPlayer_01_Points">
			&nbsp;00
		</label>
		<label class="clsGUI_Points_text"  id="lblPlayer_01">
			&nbsp; AAAAAAA
		</label>
		<label class="clsGUI_Points_text"  id="lblVelocity_01">
			&nbsp; Velocidad : 10
		</label>
		<label class="clsGUI_Points_text"  id="lblEstado_01">
			&nbsp; Normal
			<!--<progress value="4" max="4" width="300px" id="lblEstado_01_barra"></progress>-->
		</label>
	</div>

	<div class="clsGUI_Points clsGUI_RIGHT z-depth-3">
		<img src="media/img/crystal.png" class="clsGUI_Points_img clsGUI_RIGHT">
		<label class="clsGUI_Points_text clsGUI_RIGHT">
		 	&nbsp;x&nbsp; 
		</label>
		<label class="clsGUI_Points_text clsGUI_RIGHT" id="lblPlayer_02_Points">
			&nbsp;00
		</label>
		<label class="clsGUI_Points_text clsGUI_RIGHT" id="lblPlayer_02">
			&nbsp; BBBBBBB
		</label>
		<label class="clsGUI_Points_text"  id="lblVelocity_02">
			&nbsp; Velocidad : 10
		</label>
		<label class="clsGUI_Points_text"  id="lblEstado_02">
			&nbsp; Normal
			<!--<progress value="4" max="4" width="300px" id="lblEstado_02_barra"></progress> -->
		</label>
	</div>
	<div class="clsGUI_Points clsGUI_Central  z-depth-3">
		<img src="media/img/crystal.png" class="clsGUI_Points_img ">
		<label class="clsGUI_Points_text ">
		 	&nbsp;x&nbsp; 
		</label>
		<label class="clsGUI_Points_text " id="lblTotalCristalesRestantes">
			
			&nbsp;00
		</label>
		<label class="clsGUI_Points_text ">
			&nbsp;&nbsp; Restantes
		</label>
	</div>
	<div class="clsGUI_Points clsGUI_Central clsGUI_Pause  z-depth-3" id="id_ActivatePauseMenu">
		<label class="clsGUI_Points_text ">
			P: Pause
		</label>
	</div>
</div>



    <div id="scene-section" style="width:100%;"></div>
	
  
	<audio hidden id="musicList" src="" controls class="col s12" style="width:95%;" loop>
			Your browser does not support the <code>audio</code> element.
	</audio>


    <!--<script src="js/libs/jquery/jquery-2.1.1.min.js"></script>-->
	<script src="https://code.jquery.com/jquery-2.1.1.min.js" integrity="sha256-h0cGsrExGgcZtSZ/fRz4AwV+Nn6Urh/3v3jFRQ0w9dQ=" crossorigin="anonymous"></script>
    <!--JavaScript at end of body for optimized loading-->
    <!-- Compiled and minified JavaScript -->
    <!--<script src="js/libs/materialize.min.js"></script>-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    


	<!--<script src="js/musica.js"></script>-->
	<script src="js/player.js"></script>
    <script>
      $(document).ready(function(){

			var song = new musica(
				localStorage.getItem("nombre_fisico"), 
				localStorage.getItem("extension"),  
				localStorage.getItem("alias")
			);
			$("#musicList").attr("src", localStorage.getItem("pathMusic") + song.nombre_fisico + "." + song.extension);
			$("#musicList").trigger('play');

			
			var players = [];
			
			
			players[0] = new gameplayer(localStorage.getItem("gamename_01"), localStorage.getItem("gamepoints_01"));
			players[1] = new gameplayer(localStorage.getItem("gamename_02"), localStorage.getItem("gamepoints_02"));
			
			var total_cristales =  localStorage.getItem("total_cristales") - players[0].puntuacion - players[1].puntuacion;
			var total_obstaculos = localStorage.getItem("total_obstaculos");
			localStorage.setItem("total_cristales", total_cristales);
			localStorage.setItem("total_obstaculos", total_obstaculos);
			setTotalCristalesGUI();

			$("#lblPlayer_01").html("&nbsp;&nbsp;" + players[0].nombre);
			$("#lblPlayer_02").html("&nbsp;&nbsp;" + players[1].nombre);
			$("#lblPlayer_01_Points").html("&nbsp;" + players[0].puntuacion);
			$("#lblPlayer_02_Points").html("&nbsp;" + players[1].puntuacion);


		 // alert(song.alias + "," + song.nombre_fisico + "." + song.extension);

		 $("#id_ActivatePauseMenu").click(function(){
			  activar_menu_pause(true, "#musicList");
		 });
	  });

    </script>
</body>
</html>