<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
  		*{
        margin:0;
        padding:0;
        font-family:helvetica;
        font-weight: 400;
      }
	    body {
        text-align: center;
        background-color:#4f4f4f
      }
      div {
        display: inline-block;
        margin-top:40px;
      }
      .container{
        position: relative;
        left:-5px;
      }
      a{
      	text-decoration: none;
              color: white;
              font-size: 25px;
      }
      p{
        font-style: italic;
        font-size: 12px;
      }
      .poster{
        margin-left: 10px;
        background-color: rgba(0,0,0,0.2);
        padding: 10px;
      }
      .img{
        width: 90px;
        height: 125px;
        margin-left: 0px;
        margin-top:10px;
        -webkit-background-size: cover;
      }
      .back{
        position: relative;
        top: 40px;
        background-color: #323232;
        padding: 5px;
        border-radius: 5px;
      }
      .lock{
        position: relative;
        top: 40px;
        font-size: 20px;

      }
      .click{
        position: relative;
        top: 42px;
        font-size: 8px;
        font-style: italic;
        color:rgba(255,255,255,0.3);
      }
      label{
        width: 90px;
        text-align: center;
        font-size:12px;
        text-transform: capitalize;
        padding-top: 20px;
      }
      footer{
        -webkit-filter: grayscale(100%);
      }
	</style>
  <meta name="description" content="best wallpapers | iPhone iPad Android Windows Samsung Galaxy HTC Blackberry">
<meta name="keywords" content="wallpaper, 4k wallpapers, iphone, ipad, android, iOS, HTC, Samsung, galaxy, google nexus, LG, sony, surface, Blackberry, Desktop ">
<meta name="copyright" content="Copyright 2013-2015 LockPlus.us All Rights Reserved.">
</head>
<body>
 <!-- <a class="back" href="http://LockPlus.us/walls">Back</a><br>-->
  <a class="lock" href="http://LockPlus.info">Take a look at Lock +</a><br>
  <a class="click" href="http://LockPlus.info">click here</a><br>
<div class="container">
<?php
  $folders = array("overlays","abstract","cities","macro","nature","animals","landscapes","heros","girls","cars","photo","jailbreak","flat","gradients","desktop","ipad");
  foreach ($folders as $key) {
    $images = glob("$key/thumbs/*.{jpg,png,gif,PNG}", GLOB_BRACE);
    if(count($images) > 0){
      $randomImageIndex = rand(0, count($images)-1);
      $img = $images[$randomImageIndex];
      $spc = str_replace(' ', '%20', $img);
      $number = count($images);
      echo '<div class="poster"><a href='.$key.'><div class="img" style="background-image:url('.$spc.')"></div><br><label>'.$key.' <br><p> '.$number.' Walls<p><label></a></div>';
    }
  }
?>
</div>


<footer>
<script type="text/javascript">
  ( function() {
    if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
    var unit = {"calltype":"async[2]","publisher":"junesiphone","width":320,"height":60,"sid":"Chitika Default"};
    var placement_id = window.CHITIKA.units.length;
    window.CHITIKA.units.push(unit);
    document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
}());
</script>
<script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
</footer>
</body>
</html>