<style type="text/css">
body{
	font-family: helvetica;
}
</style>
<?php

$theme = $_GET["name"];

$array = unserialize(file_get_contents('http://LockPlus.info/themes/themes.bin'));

//print_r($array);

if(in_array('themes/'.$theme, $array)){
	echo "<center>This theme is showing on the public list. If you rename it, then users will get an error when trying to download it. If you really want this theme deleted please email us.";
	echo '<br><br><a href="mailto:street.visions@yahoo.com">Email</a><br>';
	echo '<br><a href="http://www.lockplus.us/login/mythemes.php">Go Back</a></center>';

}else{
	$fullname = '../php/themes/'.$theme;
	$newHome = '../php/moved/'.$theme;
	rename($fullname, $newHome);
//move_uploaded_file($fullname ,$newHome );
	echo '<script>location.href = "http://lockplus.us/login/mythemes.php";</script>';
	//header("Location: http://www.lockplus.us/login/mythemes.php");
}
?>