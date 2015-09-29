<html>
<head>
	<title>LockGlyphs</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<style type="text/css">
		.images{
			display: block;
			text-align: center;
		}
		*{
			padding: 0;
			margin: 0;
			font-family: helvetica;
		}
		a{
			position: relative;
			top: 20px;
			color:black;
			margin-bottom: 50px;
		}
		footer{
			text-align: center;
			margin-bottom: 40px;
			margin-left: 40px;
			margin-right: 40px;
		}
		label{
			font-style: italic;
		}
	</style>
</head>
<body>
<center>
	<br>
	<br>
	<h2>Free LockGlyphs</h2>
	<h6>Check back for more</h6>
	<a href="http://LockPlus.info">Get LockPlus for iPhone</a>
	<br>
	<br>
	<br>
	<br>
	<br>
</center>
<script type="text/javascript">
function download(name){
	location.href = 'http://LockPlus.us/lockglyph/download/' + name + '.zip';
}
</script>

<?php
echo '<div class="glyphs">';
foreach (glob("screens/*.PNG") as $filename) {
 $name = basename($filename,'.PNG');
 echo '<center><label>'.$name.'</label><img title='.$name.' class="images" onclick="download(this.title)" src="'.$filename.'" width="300"/></center>';
}
echo '</div>';
?>

<footer>
	<p>Tap an image to download the lockglyph. Unzip the file downloaded and put in Library/Application Support/LockGlyph/Themes and apply in LockGlyph.<p>
		<a href="https://paypal.me/junesiphone">Donate</a>

</footer>
<center><small>© Copyright 2015, LockPlus</small></center>
</body>
</html>