<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<style type="text/css">

.select-menu {
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  right: -10px;
  top:-10px;
  -webkit-transform:scale(0.5);
  transform:scale(0.5);
  background-color: #323232;
  border-radius: 100%;
  border: 15px solid #323232;
  z-index: 999;
}
.select-menu:hover{
  background-color: #323232;
  border: 15px solid #323232;
}
.select {
  position: absolute;
  background: white;
  margin-top: 23px;
  width: 100%;
  height: 5px;
  opacity: 1;
}
.select::before {
  position: absolute;
  background: white;
  width: 50px;
  height: 5px;
  top: 15px;
  content: "";
  display: block;
}
.select::after {
  position: absolute;
  background: white;
  width: 50px;
  height: 5px;
  bottom: 15px;
  content: "";
  display: block;
}
.select::after, .select::before, .select {
  transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
}
.select-menu.menu-on .select::after{
   transform: rotate(-45deg);
   -webkit-transform: rotate(-45deg);
  bottom: 0px;
}
.select-menu.menu-on .select::before{
   transform: rotate(45deg);
   -webkit-transform: rotate(45deg);
  top: 0px;
}
.select-menu.menu-on .select{
 background: rgba(111,111,111,.0);
}
.menuUL {
  position: absolute;
  display: none;
  z-index: 1000;
  list-style: none;
  right:46px;
  top:40px;
}
.menuUL li{
	margin-top: 5px;
	width: 130px;
	height: 20px;
	background-color: #323232;
	text-align: center;
	padding: 5px;
	border-radius: 2px;
}
.menuUL a{
	color:white;
  text-decoration: none;
}
#categories{
	position: relative;
	top:8px;
	background-color: #323232;
	text-align: center;
	padding: 5px;
	border-radius: 2px;
	color:white;
}
.filter{

}
#overlay{
	position: absolute;
	top:0;
	left:0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.6);
	display: none;
	z-index: 2;
}
</style>
<meta name="description" content="best wallpapers | iPhone iPad Android Windows Samsung Galaxy HTC Blackberry">
<meta name="keywords" content="wallpaper, 4k wallpapers, iphone, ipad, android, iOS, HTC, Samsung, galaxy, google nexus, LG, sony, surface, Blackberry, Desktop ">
<meta name="copyright" content="Copyright 2013-2015 LockPlus.us All Rights Reserved.">
<header>
	<div id="overlay"></div>
	<div class="select-menu">
			<div class="select"></div>
	</div>
	<ul class="menuUL hidden">
		<li><a href="http://LockPlus.info">LockPlus</a></li>
		<li><a href="http://LockPlus.us/lockglyph">Free LockGlyph</a></li>
		<li><a href="http://LockPlus.us/mac">Free Mac Widgets</a></li>
    <li><a href="http://idevicewalls.com">Wallpapers</a></li>
		<li><a href="http://lockplus.info/forum/index/topic/groovylock-sbhtml-and-lockhtml/#post-1390">GroovyLock Help</a></li>
  	  </ul>
</header>

<script type="text/javascript">
	$(".select-menu").click(function () {
	    $(this).toggleClass("menu-on");
	    $('.menuUL').toggle();
	    $('#overlay').toggle();
	});
</script>