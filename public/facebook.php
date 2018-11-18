<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<!--
    <meta property="og:url"                content="http://games.twicky.com.mx/crystal-bit/public/index.php" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
    <meta property="og:description"        content="How much does culture influence creative thinking?" />
    <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
-->
<meta property="og:url" content="http://games.twicky.com.mx/crystal-bit/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Crystal Bit" />
<meta property="og:description" content="Un nuevo juego para navegador cuyo objetivo es obtener más cristales que tu rival, además de recoger cristales también podrán recoger algunos items que harán el juego más divertido y entretenido." />
<meta itemprop="imageData" property="og:image" content="http://games.twicky.com.mx/public/media/img/ori.jpg" />


    <script type="text/javascript">

// Initialize the Facebook JS SDK.
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1125127617525103',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.1'
    });

    // Put additional init code here
  };

  // Load the Facebook JS SDK Asynchronously
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

/*FB.api(
  '/',
  'POST',
  {"scrape":"true","id":"http://games.twicky.com.mx/crystal-bit/public/facebook.php"},
  function(response) {
      // Insert your code here
  }
);*/

    // Custom function to call when user initiates a share
    function ogShare() {
       FB.ui({
         method: 'share_open_graph',
         action_type: 'og.likes',
         action_properties: JSON.stringify({
             object:'http://games.twicky.com.mx/crystal-bit/',
         })
    }, function(response){
         // Debug response (optional)
         console.log(response);
    });
  }

function changeMeta()
    {
        //alert("");
        //debugger;
        var metas = document.getElementsByTagName("meta");
        for (var i=0; i<metas.length; i++) {  
          //  debugger;
        if (metas[i].getAttribute("itemprop") && 
            metas[i].getAttribute("itemprop")==="imageData") {
            //    debugger;
                metas[i].setAttribute("content","http://games.twicky.com.mx/crystal-bit/public/media/img/gamercat.jpg");
                ogShare();
            }
        }
    }

</script>
</head>
<body>
    <button onclick="changeMeta();">changeMeta </button>
    <button onclick="ogShare();">share</button>
</body>
</html>