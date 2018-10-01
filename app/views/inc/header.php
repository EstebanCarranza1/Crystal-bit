<script>
    function mostrar_hora(){
    var fecha= new Date()
    var horas= fecha.getHours()
    var minutos = fecha.getMinutes()
    var segundos = fecha.getSeconds()
     
    document.getElementById('hora').innerHTML=''+horas+':'+minutos+':'+segundos+'';
     
    setTimeout("mostrar_hora()",1000);
  } 
    
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
</script>

<nav class="bColor ">
<div class="container">
    <div class="nav-wrapper">
      <a href="#!" class="right" id="hora">Hora</a>
      <a href="#!" class="brand-logo center" id="idLogo">Consultorio</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="left hide-on-med-and-down">
        <li><a title="Ir al inicio" href="home.php"><i class="material-icons">home</i></a></li>
        <li><a title="Cerrar sesión" href="index.php"><i class="material-icons">power_settings_new</i></a></li>
      </ul>
    </div>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="home.php"><i class="material-icons">home</i> Inicio</a></li>
    <li><a href="index.php"><i class="material-icons">power_settings_new</i>Salir</a></li>
  </ul>
  