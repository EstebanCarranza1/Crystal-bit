<style>

    .clsP_MenuPause
    {
        z-index:300;  
        position:absolute;
        width:calc(100% - 10px);
        height:calc(100% - 10px);
        background-color:rgba(0,0,0,0.1);

        -webkit-box-shadow: inset 0px 0px 154px 58px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 0px 0px 154px 58px rgba(0,0,0,0.75);
        box-shadow: inset 0px 0px 154px 58px rgba(0,0,0,0.75);
    }

    .clsP_MenuPause > .container
    {
        -webkit-box-shadow:  0px 0px 154px 58px rgba(0,0,0,0.75);
        -moz-box-shadow:  0px 0px 154px 58px rgba(0,0,0,0.75);
        box-shadow:  0px 0px 154px 58px rgba(0,0,0,0.75);

        border-radius:5px;
        margin-top:5%;
        max-height:600px;
        overflow:auto;

           
    }
</style>
<div class="clsP_MenuPause">
<div class="container">
    <div class="card-panel indigo darken-4">
        <div class="row">
            <?php require_once 'como_jugar.php'; ?>
            <?php require_once 'elegir_cancion.php'; ?>
            <?php require_once 'puntuaciones.php'; ?>
            <div class="col s12 m6 offset-m3 l8 offset-l2 center clsP_ContinuarJuego">
                <div class="card horizontal blue hoverable">
                    <div  class="card-stacked">
                        <div class="card-action">
                        <a href="#"  class="white-text">Continuar juego</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 offset-m3 l8 offset-l2 center clsP_ComoJugar">
                <div class="card horizontal blue hoverable">
                    <div  class="card-stacked">
                        <div class="card-action">
                        <a href="#"  class="white-text">¿Como jugar?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 offset-m3 l8 offset-l2 center clsP_CambiarMusica">
                <div class="card horizontal blue hoverable">
                    <div  class="card-stacked">
                        <div class="card-action">
                        <a href="#"  class="white-text">Cambiar música, cantidad de obstaculos y cristales</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 offset-m3 l8 offset-l2 center clsP_Regresar">
                <div class="card horizontal blue hoverable">
                    <div  class="card-stacked">
                        <div class="card-action">
                        <a href="#"  class="white-text">Regresar</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="col s12 m6 offset-m3 l8 offset-l2 center clsP_Salir">
                <div class="card horizontal blue hoverable">
                    <div  class="card-stacked">
                        <div class="card-action">
                        <a href="#"  class="white-text">Regresar al menu principal</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 offset-m3 l8 offset-l2 center clsP_TestInsert">
                <div class="card horizontal blue hoverable">
                    <div  class="card-stacked">
                        <div class="card-action">
                        <a href="#"  class="white-text">Insertar alv :v</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</div>
  <script src="https://code.jquery.com/jquery-2.1.1.min.js" integrity="sha256-h0cGsrExGgcZtSZ/fRz4AwV+Nn6Urh/3v3jFRQ0w9dQ=" crossorigin="anonymous"></script>
    <!--JavaScript at end of body for optimized loading-->
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    
<script>
    $(document).ready(  
        function()
        {
            $('.tabs').tabs();
            $(".indicator").addClass("white");
            $("#test2").remove();
            $("#headTab02").remove();
            $("#headTab01").removeClass("s6");
            $("#headTab01").addClass("s12");

            
            $(".clsPanelPuntuaciones").hide();
            $(".clsP_MenuPause").hide();
            $(".clsP_ContinuarJuego").hide();
            $(".clsP_ComoJugar").hide();
            $(".clsP_CambiarMusica").hide();
            $(".clsP_Salir").hide();
            $(".clsComoJugarPanel").hide();
            $(".clsElegirCancionPanel").hide();
            $(".clsP_TestInsert").hide();
            $("#idEC_Instrucciones").remove();
            $("#idEC_CapturarNombreJugadores").remove();
            $("#idEC_CapturarJugadores").remove();
            $("#idEC_IniciarJuego").remove();

            $(".clsP_Regresar").hide();
            function ocultar_menu_pausa(ocultar)
            {
                if(ocultar)
                {
                    $(".clsP_ContinuarJuego").hide();
                    $(".clsP_ComoJugar").hide();
                    $(".clsP_CambiarMusica").hide(); 
                    $(".clsP_Regresar").show();
                    $(".clsP_Salir").hide();
                }
                else
                {
                   $(".clsP_ContinuarJuego").show();
                    $(".clsP_ComoJugar").show();
                    $(".clsP_CambiarMusica").show(); 
                    $(".clsP_Regresar").hide();
                    $(".clsP_Salir").show();
                }
            }
            $(".clsP_ComoJugar").click(function()
            {
                ocultar_menu_pausa(true);
                $(".clsComoJugarPanel").show();
            });
            $(".clsP_Regresar").click(function(){
                $(".clsComoJugarPanel").hide();
                $(".clsElegirCancionPanel").hide();
                ocultar_menu_pausa(false);
            });
            $(".clsP_ContinuarJuego").click(function(){
                activar_menu_pause(false, P_idAudioControl);
            });
            $(".clsP_CambiarMusica").click(function(){
                ocultar_menu_pausa(true);
                $(".clsElegirCancionPanel").show();
            });
            $(".clsP_Salir").click(function(){
                location.href = "index.php";
            });

            $(".clsP_TestInsert").click(function(){
                 $(".PUN_row").remove();
                $("#idPun_CabeceraText").html("FIN DE LA PARTIDA");
                /*agregarPartida
                (
                    localStorage.getItem("gamename_01"), 
                    localStorage.getItem("gamepoints_01"), 
                    localStorage.getItem("gamename_02"), 
                    localStorage.getItem("gamepoints_02")
                );*/
                //obtenerPuntuaciones(0, 1, '#bodyTab01');
            });

        }
    );

</script>