<style type="text/css">
body{
	font-family: helvetica;
}
</style>
<?php

$theme = $_GET["name"];

$strip = $split = explode("-", $theme);


$array = unserialize(file_get_contents('http://LockPlus.info/themes/themes.bin'));

//print_r($array);

$userName = $strip[1];
$themeName = $strip[0];


$lines = file('../php/creators/'.$userName.'.txt', FILE_IGNORE_NEW_LINES);
$remove = "themes/".$themeName;


if(in_array('themes/'.$theme, $array)){
	echo "<center>This theme is showing on the public list. If you rename it, then users will get an error when trying to download it. If you really want this theme deleted please email us.";
	echo '<br><br><a href="mailto:street.visions@yahoo.com">Email</a><br>';
	echo '<br><a href="http://www.lockplus.us/login/mythemes.php">Go Back</a></center>';

}else{

$storage = '../php/creators/'.$userName.'.txt';

if(file_exists($storage)){

foreach($lines as $key => $line){
  if(stristr($line, $remove)){
  	 unset($lines[$key]);
  }

   $data = implode("\n", array_values($lines));
}

$file = fopen($storage, 'w');
fwrite($file, $data);
fclose($file);

}



	$fullname = '../php/themes/'.$themeName;
	$newHome = '../php/moved/'.$themeName;
	rename($fullname, $newHome);


	echo '<script>location.href = "http://lockplus.us/login/mythemes.php";</script>';
	//header("Location: http://www.lockplus.us/login/mythemes.php");
}
?>