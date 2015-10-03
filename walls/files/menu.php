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
  top:30px;
}
.menuUL li{
	margin-top: 5px;
	width: 100px;
	height: 20px;
	background-color: #323232;
	text-align: center;
	padding: 5px;
	border-radius: 2px;
}
.menuUL a{
	color:white;
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
	background-color: rgba(0,0,0,0.8);
	display: none;
	z-index: 2;
}
</style>
<header>
	<div id="overlay"></div>
	<div class="select-menu">
			<div class="select"></div>
	</div>
	<a id="categories" href="http://LockPlus.us/walls/categories">Categories</a>
	<ul class="menuUL hidden">
		<li><a href="http://lockplus.us/walls/files/i5.php">iPhone 5</a></li>
		<li><a href="http://lockplus.us/walls/files/i6.php">iPhone 6</a></li>
		<li><a href="http://lockplus.us/walls/files/6plus.php">iPhone 6+</a></li>
		<li><a href="http://LockPlus.us/walls">All Walls</a></li>
		<li><a href="http://LockPlus.info">-LockPlus-</a></li>
  	  </ul>
</header>

<script type="text/javascript">
	$(".select-menu").click(function () {
	    $(this).toggleClass("menu-on");
	    $('.menuUL').toggle();
	    $('#overlay').toggle();
	});
</script>