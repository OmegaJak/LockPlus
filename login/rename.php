<style type="text/css">
body{
	font-family: helvetica;
}
</style>
<?php

$theme = $_GET["name"];
$old = $_GET["old"];

$dir    = '../php/themes';
$list = glob("$dir/*.plist");

$array = unserialize(file_get_contents('http://LockPlus.info/themes/themes.bin')); //get current list of public themes

if(in_array('themes/'.basename($old), $array)){ // if this theme is public
	echo "<center>This theme is showing on the public list. If you rename it, then users will get an error when trying to download it. If you really want this theme deleted please email us.";
	echo '<br><br><a href="mailto:street.visions@yahoo.com">Email</a><br>';
	echo '<br><a href="http://www.lockplus.us/login/mythemes.php">Go Back</a></center>';
}else{ //let user do what he/she wants
	if (in_array($dir.'/'.$theme.'.plist', $list)) {
	    echo "This theme name already exists.";
	}else{
		$fullname = $old;
		$newHome = '../php/themes/'.$theme.'.plist';
		rename($fullname, $newHome);
		echo '<script>location.href = "http://lockplus.us/login/mythemes.php";</script>';
		//header("Location: http://www.lockplus.us/login/mythemes.php");
	}
}

 ?>