 <?PHP
require_once("./include/membersite_config.php");

if(!$fgmembersite->CheckLogin())
{
    $fgmembersite->RedirectToURL("./login.php");
    exit;
}

$name = $fgmembersite->UserFullName();
echo 'BETA';
?>

<html>
<head>
	<title>LockPlus Creator</title>
	<base href="../" target="_blank">
	<meta charset="UTF-8">
	<meta name="description" content="Lock + Lockscreen designer for iPhones in your browser">
    <link rel="author" href="https://plus.google.com/107601000975926769542/posts">

    <meta name="keywords" content="JunesiPhone, JunesGraphics, Apple, jailbreak, lockscreen, designer, LockPlus">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@JunesiPhone">
    <meta name="twitter:creator" content="@JunesiPhone">
    <meta name="twitter:title" content="Lock +">
    <meta name="twitter:description" content="Design lockscreens online to use on your iPhone">
    <meta name="twitter:image" content="/twittercard.png">

	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="icon" type="image/png" href="http://lockplus.us/favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/base.css">
	<link rel="stylesheet" type="text/css" href="css/phone.css">
	<link rel="stylesheet" type="text/css" href="css/toolpanel.css">
	<link rel="stylesheet" type="text/css" href="css/elementPanels.css">
	<link rel="stylesheet" type="text/css" href="css/tooltips.css">
	<link rel="stylesheet" type="text/css" href="css/stroll.css">
	<link rel="stylesheet" type="text/css" href="css/slick.css">
	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/slick.min.js"></script>
	<script src="js/jquery.mousewheel.min.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script src='js/spectrum.js'></script>
	<script src='js/html2canvas.js'></script>
	<script src='js/prefixfree.min.js'></script>
	<script src='js/StackBlur.js'></script>
	<link rel='stylesheet' href='css/spectrum.css' />
	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>-->
	<script>
	if (screen.width <= 800) {
		alert("This site is not designed for mobile.");
    	window.location = "http://lockplus.info";
  	}
	</script>
</head>
<body>
	<header>
		<div class="select-menu">
  			<div class="select"></div>
		</div>
		<ul class="menuUL hidden">
  			<li class="menulist"><a href="javascript:void(0)" title="On" id="menutips">Tips</a></li>
  			<li class="menulist"><a href="javascript:void(0)" title="Off" id="snaptips">Snap</a></li>
  			<li class="menulist"><a href="javascript:void(0)" title="Off" id="gridtips">Grid</a></li>
         	 <li class="menulist"><a href="http://lockplus.info/docs">Help</a></li>
         	 <li class="menulist"><a href="http://lockplus.info/themes">Themes</a></li>
         	 <li class="menulist"><a href="http://lockplus.us/walls">Walls</a></li>
         	 <li class="menulist"><a href="https://twitter.com/intent/tweet?url=http%3A%2F%2FLockPlus.us/&text=Create%20a%20lockscreen%20online&hashtags=LockPlus">Share</a></li>
         	 <li class="menulist"><a href="http://LockPlus.us/login">Login</a></li>
         	 <li class="menulist"><a href="http://cydia.saurik.com/package/com.macciti.lockplus/">Cydget</a></li>
      	  </ul>
	</header>
<div class="container">
	<div class="phone">
		<div class="screen">
			<img class='svg'/>
			<div id="screenElements"></div>
			<div id="overlay" class="screenoverlay"></div>
			<img width="320px" height="568px" id='wallpaper' style='width:320px; height:568px; pointer-events:none; display:none;'/>
			<canvas width="320px" height="568px" id='blurcanvas' class='blur canvas'></canvas>
			<img width="100px" height="177.5px" id='miniWallpaper' style='width:150px; height:266.25px; pointer-events:none; display:none; position:absolute; top:0;'/>
			<canvas width="150px" height="266.25px" id='miniBlurCanvas' class='miniBlur canvas'></canvas>
		</div>
	</div>
	<div class="grids"></div>
<div id="tipContainer">
	<div id="tips" title="tap to hide tips">
		<span id="helpicon" class="fa fa-lightbulb-o"></span>
		<div id="helpinfo"></div>
	</div>
</div>
	<div class="toolPanel">
		<ul id="icons">
		</ul>
	</div>
	<div class="elementPanel" style="display:none;">
		<h3 id="cl">Clock Elements</h3>
		<div id="clockList" style="display:none;">
		</div>
		<h3 id="wl">Weather Elements</h3>
		<div id="weatherList" style="display:none;">
		</div>
		<h3 id="sl">System Elements</h3>
		<div id="systemList" style="display:none;">
		</div>
        <h3 id="ml">Misc Elements</h3>
        <div id="miscList" style="display:none;">
        </div>
	</div>
	<div id="font">
	<ul id="fList" class="wave font" style="display:none; cursor:default;" >
	</ul>
</div>
</div>
<div id="wallSelector" style="display:none;">
	<span>Pick your wallpaper size</span>
	<li onclick="chooseWallSize('i5')" title="640x1136">i5</li>
	<li onclick="chooseWallSize('i6')" title="750x1334">i6</li>
	<li onclick="chooseWallSize('6Plus')" title="1080x1920">6+</li>
</div>
<div id="previewCanvas" style="opacity:0;"></div>
<div class="iconList" style="display:none;"></div>
<div class="loader">Loading...</div>

<form action="php/exportsbhtml.php" method="POST" id="myform">
  <input type="hidden" name="fileName" id="fileName"/>
  <input type="hidden" name="devname" id="devname"/>
  <input type="hidden" name="Tpreview" id="Tpreview"/>
  <input type="hidden" name="Twallpaper" id="Twallpaper"/>
  <input type="hidden" name="Toverlay" id="Toverlay"/>
  <input type="hidden" name="Ticon" id="Ticon"/>
  <input type="hidden" name="Telements" id="Telements"/>
  <input style="display:none;" type="submit" value="Submit">
</form>
<!--<canvas id="canvas" width="320" height="568" style="border: 1px solid black;"></canvas>-->
<!-- alt to html2canvas (issue rendering text shadows upside down) -->
<footer>
	<a id="version" href="http://lockplus.info/forum/index/topic/lockplus-us/">Version 1.3.4</a>
	<span id="copyright">© Copyright 2015 <a href="http://JunesiPhone.com">JunesiPhone</a> All rights reserved </span>
</br>
	<div id="logo"><img src="css/logo.png" width="40"/></div>
</footer>
<input type='file' class="input" id='bgInput' name='bg'>
<script src="js/clock.js?001"></script>
<script src="js/arrays.js?001"></script>
<script src='js/stroll.js?001'></script>
<script src="js/sbhtmlmain.js?0021"></script>
<script src="js/svg.js"></script>
<link rel="stylesheet" type="text/css" href="css/fonts.css">
<div class="font_preload" style="position:absolute;top:-600px;left:0;opacity: 1"></div>
<script type="text/javascript">
$( window ).load(function() {
    var fpre = document.querySelector('.font_preload');
	for (var i = 0; i < fontArray.length; i++) {
		var f = document.createElement('SPAN');
		f.setAttribute('style','font-family:'+fontArray[i]+';');
		f.innerHTML = "test";
		fpre.appendChild(f);
	}
});
</script>
<!--<script src="js/rasterHTML.js"></script>-->
</body>
</html>
