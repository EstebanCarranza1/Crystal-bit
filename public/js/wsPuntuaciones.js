
function agregarPartida(_gamename_01, _gamepoints_01, _gamename_02, _gamepoints_02)
{
    var dataToSend =
    {
        action: 'agregarPartida',
        gamename_01: _gamename_01,
        gamepoints_01: _gamepoints_01,
        gamename_02: _gamename_02,
        gamepoints_02: _gamepoints_02
    };

    $.ajax({
        url: '../public/wsPuntuaciones.php',
        async: 'true',
        type: 'POST',
        data: dataToSend,
        dataType: 'json',

        success: function (respuesta) {
            //debugger;
            //alert(respuesta);
        },
        error: function (x, h, r) {
            alert("Error: " + x + h + r);

        }

    });
}
function obtenerPartida(_idPartida)
{
    var dataToSend =
    {
        action: 'obtenerPartida',
        idPartida: _idPartida
    };

    $.ajax({
        url: '../public/wsPuntuaciones.php',
        async: 'true',
        type: 'POST',
        data: dataToSend,
        dataType: 'json',

        success: function (respuesta) {
            //alert(respuesta);

            //var prod = [];
            //debugger;
           
            /*
            for (var i = 0; i < respuesta.length; i++) {
                var product = new Product(respuesta[i].p_name, respuesta[i].p_detail, respuesta[i].p_price);
                $('.product-list').append(product.getHtml());
            }
            */

            //debugger;

        },
        error: function (x, h, r) {
            alert("Error: " + x + h + r);

        }

    });
}
function obtenerPuntuaciones(_limit1, _limit2, _idTab)
{
    var dataToSend =
    {
        action: 'obtenerPuntuaciones',
        limit1: _limit1,
        limit2: _limit2,
        idTab: _idTab
    };

    $.ajax({
        url: '../public/wsPuntuaciones.php',
        async: 'true',
        type: 'POST',
        data: dataToSend,
        dataType: 'json',

        success: function (respuesta) {
            //alert(respuesta);

            //var prod = [];
            //debugger;
            for (var i = 0; i < respuesta.length; i++) {
                if(respuesta[i].punPlayer1 > respuesta[i].punPlayer2)
                {
                    $(respuesta[i]._idTab).append("<tr class='PUN_row'><td>" + respuesta[i].nomPlayer1 + "</td><td>" + respuesta[i].punPlayer1 + "</td></tr>");
                    $(respuesta[i]._idTab).append("<tr class='PUN_row'><td>" + respuesta[i].nomPlayer2 + "</td><td>" + respuesta[i].punPlayer2 + "</td></tr>");
                }
                else
                {
                    $(respuesta[i]._idTab).append("<tr class='PUN_row'><td>" + respuesta[i].nomPlayer2 + "</td><td>" + respuesta[i].punPlayer2 + "</td></tr>");
                    $(respuesta[i]._idTab).append("<tr class='PUN_row'><td>" + respuesta[i].nomPlayer1 + "</td><td>" + respuesta[i].punPlayer1 + "</td></tr>");
                }
                
            }
            /*
            for (var i = 0; i < respuesta.length; i++) {
                var product = new Product(respuesta[i].p_name, respuesta[i].p_detail, respuesta[i].p_price);
                $('.product-list').append(product.getHtml());
            }
            */


            //debugger;

        },
        error: function (x, h, r) {
            alert("Error: " + x + h + r);

        }

    });
}