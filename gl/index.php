<html>
<head>
	<title>GroovyLock, SBHTML, and LockHTML</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<meta charset="UTF-8">
	<style type="text/css">
		.images{
			display: block;
			text-align: center;
		}
		body{
			background:#e33933;
		}
		*{
			padding: 0;
			margin: 0;
			font-family:  Monserrat, sans-serif;
			/*font-family: helvetica;*/
		}
		footer{
			text-align: center;
			margin-bottom: 40px;
			margin-left: 40px;
			margin-right: 40px;
			color:white;
			font-family:  Monserrat, sans-serif;
		}
		footer a{
			text-decoration: none;
			color:white;
		}
		label{
			color:white;
			margin-bottom: 40px;
			display: inline-block;
			text-align: center;
			background-color: #353535;
			padding: 10px;
			border-radius: 5px;
			margin-top: -20px;
		}
		label:hover, img:hover{
			cursor: pointer;
		}
		img{
			border: 1px solid #353535;
			border-radius: 10px;
			background-color: rgba(0,0,0,0.3);
		}
		h2{
			color:white;
			font-weight: 700;
			letter-spacing: -.02em;
			font-family: Montserrat, sans-serif;
			text-shadow: 0 1px 2px rgba(0,0,0,.5);
			width: 100%;
			text-align: center;
			margin-top: 80px;
			margin-bottom: 50px;
		}
		small{
			color:white;
			font-family:  Monserrat, sans-serif;
		}
		.gl{

		}
		.donate{
			color:white;
			font-weight: 700;
			letter-spacing: -.02em;
			font-family: Montserrat, sans-serif;
			text-shadow: 0 1px 2px rgba(0,0,0,.5);
			width: 100%;
			text-align: center;
			margin-top: 50px;
			background-color: transparent;
			font-size: 3em;
		}
		.ls{

		}
		.name{

		}
	</style>
</head>
<body>
		<?php
			include('menu.php');
		 ?>

<script type="text/javascript">
function download(name){
	location.href = 'http://LockPlus.us/gl/download/' + name + '.zip';
}
</script>

<?php

$sArray = glob("screens/*.PNG");
usort($sArray, create_function('$a,$b', 'return filemtime($b) - filemtime($a);')); //sort by latest

$total = count($sArray); //count of items

echo '<h2>'.$total.' Free GroovyLock/SBHTML</h2>';

echo '<div class="gl">';
foreach ($sArray as $filename) {
 $name = basename($filename,'.PNG');
 echo '<center><div class="ls"><img title='.$name.' class="images" onclick="download(this.title)" src="'.$filename.'" width="300"/><label class="
 name" title='.$name.' onclick="download(this.title)" >Download '.$name.'</label></div></center>';
}
echo '</div>';

?>

<footer>
	<a class="donate" href="https://paypal.me/junesiphone">Donate</a>
</footer>
<center><small>© Copyright 2015, LockPlus</small></center>
</body>
</html>