
<script src="js/facebook.js"></script>

<script>

   $(document).ready()
   {
        var gameName_01 =  localStorage.getItem("gamename_01");
        var gamePoint_01 = localStorage.getItem("gamepoints_01");
        var gameName_02 =  localStorage.getItem("gamename_02");
        var gamePoint_02 = localStorage.getItem("gamepoints_02");
        
       
        
        function score()
        {
            if(gameName_01 == null)
            {
                alert("no hay datos");
            }
            else
            {
                gameName_01 =  localStorage.getItem("gamename_01");
                gamePoint_01 = localStorage.getItem("gamepoints_01");
                gameName_02 =  localStorage.getItem("gamename_02");
                gamePoint_02 = localStorage.getItem("gamepoints_02");
                shareScore(true,  
                    gameName_01,gamePoint_01,
                    gameName_02, gamePoint_02
                );
            }
            
            
        }
        
  
    }

    
</script>
<div class="col s12 m6 offset-m3 l8 offset-l2 center clsPanelPuntuaciones" id="clsPunFacebook" onclick="score();">
    <div class="card horizontal blue hoverable">
        <div class="card-stacked">
            <div class="card-action white-text" id="idPun_CabeceraText">
                Compartir en Facebook
               <i class="fab fa-facebook"></i>
            </div>
        </div>
    </div>
</div>