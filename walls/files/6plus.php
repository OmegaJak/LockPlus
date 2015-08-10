

 <?php
require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";
?>
<?php

if (isset($_GET['img'])){
	if (file_exists($_GET['img'])){
		ignore_user_abort(true);
		set_time_limit(120);
		ini_set('memory_limit', '512M');

		$src_size = getimagesize($_GET['img']);

		if ($src_size === false){ //if not an image
			die('This is not an image boss');
		}

		$thumb_height = 250;
		$thumb_width = 180;

		if ($src_size['mime'] === 'image/jpeg'){
			$src = imagecreatefromjpeg($_GET['img']);
		}
		else if ($src_size['mime'] === 'image/png') {
			$src = imagecreatefrompng($_GET['img']);
		}
		else if ($src_size['mime'] === 'image/gif') {
			$src = imagecreatefromgif($_GET['img']);
		}
		else{
		}

		$src_aspect = round(($src_size[0] / $src_size[1]), 1);
		$thumb_aspect = round(($thumb_width / $thumb_height), 1);

		if ($src_aspect < $thumb_aspect){
			$new_size = array($thumb_width,($thumb_width / $src_size[0]) * $src_size[1]);
			$src_pos = array(0,(($new_size[1] - $thumb_height)* ($src_size[1] / $new_size[1])) / 2);
		}else if($src_aspect > $thumb_aspect){
			$new_size = array(($thumb_width / $src_size[1] * $src_size[0]),$thumb_height);
			$src_pos = array(0,($new_size[0] - $thumb_width) / 2, 0);
		}else{
			$new_size = array($thumb_width, $thumb_height);
			$src_pos = array(0, 0);
		}

		if ($new_size[0] < 1) $new_size[0] = 1;
		if ($new_size[1] < 1) $new_size[1] = 1;

		$thumb = imagecreatetruecolor($thumb_width, $thumb_height);
		imagecopyresampled($thumb, $src, 0, 0, $src_pos[0], $src_pos[1], $new_size[0], $new_size[1], $src_size[0], $src_size[1]);

		if ($src_size['mime'] === 'image/jpeg'){
			imagejpeg($thumb, "thumbs/{$_GET['img']}");
		}
		else if ($src_size['mime'] === 'image/png') {
			imagepng($thumb, "thumbs/{$_GET['img']}");
		}
		else if ($src_size['mime'] === 'image/gif') {
			imagegif($thumb, "thumbs/{$_GET['img']}");
		}
		else{
		}
		header("Location: thumbs/{$_GET['img']}");

	}

	die();
}

if (is_dir('thumbs') === false){
	mkdir('thumbs', 0755);
}
$images = glob("*.{jpg,JPG,PNG,jpeg,png,gif}", GLOB_BRACE);

?>

<html>
<head>
	<title>Wallpapers</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
	body {

   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 200; -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: rgba(0,0,0,0);
 }
	img{
		 width: 145px;
	}
	a{
		display: inline-block;
		text-decoration: none;
	}
	img{
		-webkit-box-shadow: 0 8px 6px -6px black;
	}
	html{
		background-color: teal;
	}
	#outer{
		width: 100%;
		text-align:center;}
	#imgcontainer{
			margin-top:40px;
			display: inline-block;
	}
	#menu a{
		display: block;
		text-align: center;
		font-size: 25px;
		display: inline-block;
		margin: 5px;
		margin-top: 40px;
		padding: 3px;
		background-color: rgba(255,255,255,0.2);
		border-radius: 5px;
		color:white;
		font-weight: 100;
	}

	.image{text-align:center;display:inline-block;color:white;}

#contain{
  position: relative;
  width: 100%;
  height: auto;
  display: inline-block;
}
.nav{
  position: relative;
  text-align: center;
  bottom: 10px;
  margin: 0 auto;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  color:white;
  overflow: hidden;
}
.nav a{
	color:white!important;
	background-color: rgba(255,255,255,0.1);
	padding:2px;
	border-radius: 2px;
	font-size: 15px;

}
.nav i{
	background-color: rgba(0,0,0,0.2);
	padding: 2px;
	border-radius: 2px;
}
html, body {
    max-width: 100%;
    overflow-x: hidden;
}
	</style>
	<center><div id="menu">
		<a id="home" href="http://LockPlus.info">-LockPlus-</a>
		<a id="filter" href="i5.php">i5</a>
		<a id="filter" href="i6.php">i6</a>
		<a id="filter" href="6plus.php">6+</a>
		<a id="filter" href="http://LockPlus.us/walls">All</a>
	</div></center>
</head>
<body>
<div id="outer">
	<div id="imgcontainer">
		<?php

function mtimecmp($a, $b) {
        $mt_a = filemtime($a);
        $mt_b = filemtime($b);

        if ($mt_a == $mt_b)
            return 0;
        else if ($mt_a < $mt_b)
            return -1;
        else
            return 1;
    }


    usort($images, "mtimecmp");

if($_GET['page']){
	$page = $_GET['page'];
}else{
	$page = 1;
}

$sizes = array(1080, 1920);
$image = array();

foreach ($images as $filename) {

	$size = getimagesize($filename);
	if($size[0] === $sizes[0] && $size[1] === $sizes[1]){
		array_push($image, $filename);
	}
}



$pagedResults = new Paginated($image, 24, $page);
echo '<div id="contain">';


    while($row = $pagedResults->fetchPagedRow()) {
        $image = $row;
        $file = $image;
		//$t=date ("F d Y H:i:s", filemtime($file));
		$size = getimagesize($file);
		$t = $size[0]. 'px X ' . $size[1] . 'px';

					if (file_exists("thumbs/{$image}")){

					//echo "<a href=\"{$image}\"><img src=\"thumbs/{$image}\" alt=\"{$image}\"/></a>";
					echo "<table class='image'>
					<caption align='bottom'>{$t}</caption>
					<tr><td><a href=\"{$image}\"><img src=\"thumbs/{$image}\" alt=\"{$image}\"/></a></td></tr>
					</table>";
					}
					else{
					//echo "<a href=\"{$image}\"><img src=\"?img={$image}\" alt=\"{$image}\"/></a>";
					echo "<table class='image'>
					<caption align='bottom'>{$t}</caption>
					<tr><td><a href=\"{$image}\"><img src=\"{$image}\" alt=\"{$image}\"/></a></td></tr>
					</table>";
					}
    			}







    echo "</div>";
 $pagedResults->setLayout(new DoubleBarLayout());
  echo $pagedResults->fetchPagedNavigation();



		?>
	</div>
</div>

</body>
</html>
