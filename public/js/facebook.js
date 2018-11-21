var activeFacebook = true;
window.fbAsyncInit = function () {
    FB.init({
        appId: '1125127617525103', /* Pegar aqui el número de identificador de facebook*/
        xfbml: true,
        version: 'v2.9'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function shareScore(active, username1, score1, username2, score2) {
if(active)
{
    FB.ui({
        method: 'feed', /* method: 'feed'  solo en el muro */
        link: 'http://games.twicky.com.mx/crystal-bit/public/index.php',
        quote: 'Jugador 1: ' + username1 + ': ' + score1 + '\n Jugador 2: ' + username2 + ' : ' + score2,
        picture: 'http://games.twicky.com.mx/crystal-bit/public/media/img/gamercat.jpg'
    });
}
}
