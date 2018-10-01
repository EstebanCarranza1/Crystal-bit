
<script src="js/wsPuntuaciones.js"></script>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsPanelPuntuaciones" id="clsPun_Cabecera">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text" id="idPun_CabeceraText">
                Tabla de puntuaciones
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsPanelPuntuaciones">
    <div class="card horizontal blue hoverable">
    
        <div class="card-stacked">
            <div class="card-action">

            <div class="row">
                <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s6 blue darken-4 white-text" id="headTab01"><a class="white-text" href="#test1">Puntuacion partida</a></li>
                    <li class="tab col s6 blue darken-4 white-text" id="headTab02"><a class="white-text" href="#test2">Puntuacion global</a></li>
                  
                </ul>
                </div>
                <div id="test1" class="col s12">
                    <table id="tableTab01" class="centered white-text">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Puntuación</th>
                            </tr>
                        </thead>
                        <tbody id="bodyTab01">
                            
                        </tbody>
                    </table>
                </div>
                <div id="test2" class="col s12">
                    <table id="tableTab02" class="centered white-text">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Puntuación</th>
                            </tr>
                        </thead>
                        <tbody id="bodyTab02">
                            
                        </tbody>
                    </table>
                </div>
                
            </div>



            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function(){
        var _ACTIVATE_GLOBAL_PUNTATIONS = true;
        var _ACTIVATE_LAST_PUNTATIONS = true;
        if(_ACTIVATE_GLOBAL_PUNTATIONS)
            obtenerPuntuaciones(0, 5, '#bodyTab02');
        if(_ACTIVATE_LAST_PUNTATIONS)
            obtenerPuntuaciones(0, 1, '#bodyTab01');

        

    });
</script>