<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta property="og:url"           content="http://games.twicky.com.mx/crystal-bit/" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="Crystal Bit" />
  <meta property="og:description"   content="Un nuevo juego para navegador cuyo objetivo es obtener más cristales que tu rival, además de recoger cristales también podrán recoger algunos items que harán el juego más divertido y entretenido." />
  <meta property="og:image"         content="http://games.twicky.com.mx/wp-content/uploads/2018/10/menu.png" />

    <title>Cristal bit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    
    <style>
        #particle-js
        {
            width:100%;
            height:auto;
        }
    </style>
</head>
<body class="black">
    <div class="container">
        <div class="card-panel indigo darken-4">
            <div class="row">
                <div class="col s12">
                    <img width="100%" src="media/img/banner_02.png">
                </div>
                
                <br>

                 <div class="col s12 m6 offset-m3 l8 offset-l2 center clsIniciarJuego">
                    <div class="card horizontal blue hoverable">
                   
                        <div  class="card-stacked">
                            <div class="card-action">
                            <a href="#" id="iniciarJuego" class="white-text">Iniciar juego</a>
                            </div>
                        </div>
                    </div>
                </div>

                 
                 <div class="col s12 m6 offset-m3 l8 offset-l2 center clsComoJugar">
                    <div class="card horizontal blue hoverable">
                   
                        <div class="card-stacked">
                            <div class="card-action">
                            <a href="#" class="white-text">Como jugar</a>
                            </div>
                        </div>
                    </div>
                </div>

                 
                 <div class="col s12 m6 offset-m3 l8 offset-l2 center clsPuntuaciones">
                    <div class="card horizontal blue hoverable">
                   
                        <div class="card-stacked">
                            <div class="card-action">
                            <a href="#" class="white-text">Puntuaciones</a>
                            </div>
                        </div>
                    </div>
                </div>


                <?php include 'views/como_jugar.php' ?>
                <?php include 'views/puntuaciones.php' ?> 
                <?php include 'views/elegir_cancion.php' ?> 

                <div class="col s12 m6 offset-m3 l8 offset-l2 center clsRegresar">
                    <div class="card horizontal blue hoverable">   
                        <div class="card-stacked">
                            <div class="card-action">
                                <a href="#" class="white-text">Regresar</a>
                            </div>
                        </div>
                    </div>
                </div>

               
               <div class="col s12 center">
                    <?php include 'views/facebook.php'; ?>
                </div>



            </div>
        </div>
    </div>
    
    <div id="particles-js"></div>


    <script src="https://code.jquery.com/jquery-2.1.1.min.js" integrity="sha256-h0cGsrExGgcZtSZ/fRz4AwV+Nn6Urh/3v3jFRQ0w9dQ=" crossorigin="anonymous"></script>
    <!--JavaScript at end of body for optimized loading-->
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    
<!--    <script src="js/lib/particles-lib.js"></script>
    <script src="js/particles.js"></script>
-->
 

    <script>
        $(document).ready(function(){
            localStorage.clear();
            $('.tabs').tabs();
            $(".indicator").addClass("white");

            $(".clsComoJugarPanel").hide();
            $(".clsRegresar").hide();
            $(".clsPanelPuntuaciones").hide();
            $(".clsElegirCancionPanel").hide();

            function ocultar_menu_principal(ocultar)
            {
                if(ocultar)
                {
                    $(".clsIniciarJuego").hide();
                    $(".clsComoJugar").hide();
                    $(".clsPuntuaciones").hide(); 
                    $(".clsElegirCancionPanel").hide();
                }
                else
                {
                    $(".clsIniciarJuego").show();
                    $(".clsComoJugar").show();
                    $(".clsPuntuaciones").show(); 
                }
            }
            
            $(".clsIniciarJuego").click(function(){
                ocultar_menu_principal(true);
                $(".clsElegirCancionPanel").show();
                $(".clsRegresar").show();
            });
            $(".clsComoJugar").click(function(){
                ocultar_menu_principal(true);
                $(".clsComoJugarPanel").show();
                $(".clsRegresar").show();
            });
            $(".clsRegresar").click(function(){
                ocultar_menu_principal(false);
                $(".clsComoJugarPanel").hide();
                $(".clsRegresar").hide();
                $(".clsPanelPuntuaciones").hide();
                $(".clsElegirCancionPanel").hide();
            });
            $(".clsPuntuaciones").click(function()
            {
                ocultar_menu_principal(true);
               $(".clsPanelPuntuaciones").show();
               $(".clsRegresar").show();
            });



        });
    </script>
</body>
</html>