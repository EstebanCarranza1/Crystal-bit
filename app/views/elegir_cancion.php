
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel" id="idEC_Instrucciones">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                El jugador que obtenga más puntuación de cristales ganará, el juego termina cuando no hay más cristales en el mapa.
                <br><br>
                
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel" id="idEC_CapturarNombreJugadores">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                Capturar nombre de los jugadores
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel" id="idEC_CapturarJugadores">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                <div class="row">
                    <div class="input-field col s6">
                        <input value="" id="gamename_01"  type="text" class="validate white-text center" required="required">
                        <label class="active white-text" for="gamename_01">Jugador 1</label>
                        <br>
                        <img src="media/img/controls_p1.png" style="width:100%;">
                    </div>
                    <div class="input-field col s6">
                        <input value="" id="gamename_02" type="text" class="validate white-text center" required="required">
                        <label class="active white-text" for="gamename_02">Jugador 2</label>
                        <br>
                        <img src="media/img/controls_p2.png" style="width:100%;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel" id="idEC_ElegirCancion">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                Elige la cancion que quieres escuchar
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text" id="nombreMusica">
                Cancion 01
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l2 offset-l2 center clsElegirCancionPanel clsRewindMusic">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                <i class="material-icons">fast_rewind</i>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l2 center clsElegirCancionPanel clsPlayMusic">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                <i class="material-icons">play_arrow</i>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l2 center clsElegirCancionPanel clsStopMusic">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                <i class="material-icons">pause</i>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l2 center clsElegirCancionPanel clsForwardMusic">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                <i class="material-icons">fast_forward</i>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel" id="idEC_CapturarCristales_Obstaculos">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                <div class="row">
                    <div class="input-field col s6">
                        <input value="20" id="total_cristales"  type="text" class="validate white-text center" required="required">
                        <label class="active white-text" for="total_cristales">Total de cristales</label>
                    </div>
                    <div class="input-field col s6">
                        <input value="10" id="total_obstaculos" type="text" class="validate white-text center" required="required">
                        <label class="active white-text" for="total_obstaculos">Total de obstaculos</label>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel" id="idEC_GuardarCambios">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text">
                Guardar cambios y reinciar partida
            </div>
        </div>
    </div>
</div>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsElegirCancionPanel clsEmpezarAJugar" id="idEC_IniciarJuego">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
           <button class="clsEmpezarAJugar btn waves-effect blue white-text" type="submit">Empezar a jugar
                <i class="material-icons right">videogame_asset</i>
            </button>
        </div>
    </div>
</div>

 <audio hidden id="musicList" src=""
        controls class="col s12">
        Your browser does not support the <code>audio</code> element.
</audio>
<input type="hidden" id="txtIdSong" name="idSong">

<script src="js/musica.js"></script>
<script>
    

    var lista_musica = [];
    lista_musica.push(new musica("song_00", "mp3",  "max revive_composed by kieran zane roberts"));
    lista_musica.push(new musica("song_01", "mp3",  "not dead yet! (battle theme) chiptune remix"));
    lista_musica.push(new musica("song_02", "mp3",  "Mattashi - Lost in Pixels [Adventurous 8-Bit Music]"));
    lista_musica.push(new musica("song_03", "mp3",  "Chiptune Music - Ready For Battle"));
    lista_musica.push(new musica("song_04", "mp3",  "Spanish Flea 8-bit"));
    lista_musica.push(new musica("song_05", "mp3",  "Thaehan - Final Boss (ElectroBaroqueChiptune)"));
    lista_musica.push(new musica("song_06", "mp3",  "Awesome 8bit THE MASSACRE"));
    lista_musica.push(new musica("song_07", "mp3",  "Overload -Chiptune Mix-"));
    lista_musica.push(new musica("song_08", "mp3",  "Shadowblaze - Champion Battle (Undertale-inspired Original Music)"));
    lista_musica.push(new musica("song_09", "mp3",  "Theory of N - Buttdawg Funk [Chiptune]"));
    lista_musica.push(new musica("song_10", "mp3",  "Zabutom, Dubmood and Blz - Chaos 1"));

    class partida
    {
        constructor(gamename_01, gamename_02, idSong)
        {
            this.gamename_01 = gamename_01;
            this.gamename_02 = gamename_02;
            this.idSong = idSong;
        }
    }
    var partidas = new partida("","","");

    $(document).ready(function()
    {
        var total_musica = lista_musica.length;
        var index = 1;
        var pathMusic = "media/audio/";
        $("#idEC_GuardarCambios").click(function(){
            //alert("Se reniciará la partida");
            localStorage.setItem("gamepoints_01", 0);
            localStorage.setItem("gamepoints_02", 0);
            localStorage.setItem("total_cristales", $("#total_cristales").val());
            localStorage.setItem("total_obstaculos", $("#total_obstaculos").val());
            localStorage.setItem("alias",           lista_musica[index].alias);
            localStorage.setItem("nombre_fisico",   lista_musica[index].nombre_fisico);
            localStorage.setItem("extension",       lista_musica[index].extension);
            localStorage.setItem("pathMusic",       pathMusic);
            location.href ="game.php";
        });
         
        
        function setEspec()
        {
            $("#nombreMusica").text(lista_musica[index].alias);
            $("#musicList").attr("src", pathMusic + lista_musica[index].nombre_fisico + "." + lista_musica[index].extension);
            $("#txtIdSong").val(index);
        }

        setEspec();
        $("#txtIdSong").val(index);

        $(".clsRewindMusic").click(function()
        {
              if(index > (0))
                index--;

            setEspec();
            $("#musicList").trigger('play');

        });
        $(".clsPlayMusic").click(function()
        {
            $("#musicList").trigger('play');
        });
        $(".clsStopMusic").click(function()
        {
            $("#musicList").trigger('pause');
        });
        $(".clsForwardMusic").click(function()
        {
            

            if(index < (total_musica - 1))
                index++;

            setEspec();
            $("#musicList").trigger('play');
        });

        
       $(".clsEmpezarAJugar").click(function(){
            /*
            partidas.gamename_01 = $("#gamename_01").val();
            partidas.gamename_02 = $("#gamename_02").val();
            partidas.idSong = index;
            alert(partidas.gamename_01 + " , " + partidas.gamename_02 + " , " + partidas.idSong);
            */
            localStorage.setItem("gamename_01", $("#gamename_01").val());
            localStorage.setItem("gamename_02", $("#gamename_02").val());
            localStorage.setItem("gamepoints_01", 0);
            localStorage.setItem("gamepoints_02", 0);
            localStorage.setItem("total_cristales", $("#total_cristales").val());
            localStorage.setItem("total_obstaculos", $("#total_obstaculos").val());
            

            localStorage.setItem("alias",           lista_musica[index].alias);
            localStorage.setItem("nombre_fisico",   lista_musica[index].nombre_fisico);
            localStorage.setItem("extension",       lista_musica[index].extension);
            localStorage.setItem("pathMusic",       pathMusic);
            location.href ="game.php";

       });
    });

</script>