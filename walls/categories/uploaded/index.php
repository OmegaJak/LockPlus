<?php
require_once "../../files/pages/Paginated.php";
require_once "../../files/pages/DoubleBarLayout.php";
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
   $images = array_reverse($images);


?>

<html>
<head>
	<title>Wallpapers</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="../../main.css">
	<?php include('../../files/menu.php');?>
	<style>
input[type="submit"]{
  border: 1px solid #333;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  margin: 0;
  padding: 8px;
  position: relative;
  background: #323232;
  overflow: hidden;
  width: 85%;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  z-index: 1;
  color:white;
  	margin-top:5px;
}


input[type="file"] {
  border: 1px solid #333;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  margin: 0;
  padding: 8px;
  position: relative;
  background: #323232;
  overflow: hidden;
  width: 85%;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  z-index: 1;
}
input[type="file"]:after { /* Mask the no file chosen label */
   background: #323232;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  z-index: 10;
}

input[type="file"]::-webkit-file-upload-button { /* Style the button */
   background: #323232;
  color: white;
  font: inherit;
  padding: 0;
  border: none;
  text-align: center;
  position: relative;
  z-index: 100;
  width: 100%;
  -webkit-appearance: none;
}
	</style>
</head>
<body>
	<center>
		<form action="upload.php" method="post" enctype="multipart/form-data" style="margin-top:50px;">
    		<input type="file" name="fileToUpload" id="fileToUpload">
    		<input type="submit" value="Choose file then click here to submit" name="submit">
		</form>
	</center>
	<center style="font-size:12px;">All images are uploaded by our users, some may be nsfw. <br> Please do not upload personal photos.</center>
<div id="outer">
	<div id="imgcontainer">
		<?php


if($_GET['page']){
	$page = $_GET['page'];
}else{
	$page = 1;
}
$pagedResults = new Paginated($images, 48, $page);
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
				<tr><td><a href=\"{$image}\"><img src=\"?img={$image}\" alt=\"{$image}\"/></a></td></tr>
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