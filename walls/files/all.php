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

if (is_dir('./thumbs') === false){
	mkdir('./thumbs', 0755);
}

$images = glob('*.{jpg,JPG,PNG,jpeg,png,gif}', GLOB_BRACE);

?>

<html>
<head>
	<title>iPhone 6 Plus Wallpapers</title>
	<style>
	a, img{
		float: left;
		 border: 0px solid white;
		 margin: 5px;
	}
	img{
		-webkit-box-shadow: 0 8px 6px -6px black;
	}
	html{
		background-color: #e14748
	}
	#outer{
		width: 100%;
		text-align:center;}
	#imgcontainer{
			margin-top:60px;
			display: inline-block;
	}
	#menu{
		position: absolute;
		margin-top: 0px;
		width: 100%;
	}
	#home{
		position: absolute;
		font-size: 50px;
		margin-left: 42%;
		color: white;
	}
	#ad{
		width: 100%;
		text-align: center;
	}
	.image{float: left;margin-left:29px;color:white;}
	a{text-decoration: none;}
	html{font-family:helvetica;font-weight:100;}
	#pages{width: 100%; display: inline-block; white-space: nowrap; float: left;}
	#next{text-align: right; width:40px;  margin-left: 82%; margin-top: 40px; font-size: 30px; }
	#prev{text-align: left; width:40px;   margin-left: 10%; margin-top: -35px; font-size: 30px;}
	</style>
	<div id="menu">
		<a id="home" href="http://JunesiPhone.com/idevicewalls">Home</a>
	</div>
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

    for ($i = count($images) - 1; $i >= 0; $i--) {
        $image = $images[$i];
        $file = $image;
		$t=date ("F d Y H:i:s", filemtime($file));

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
				<tr><td><a href=\"{$image}\"><img src=\"?img={$image}\" alt=\"{$image}\"/></a></td></tr>
				</table>";
			}
    }




		?>
	</div>
</div>

</body>
</html>