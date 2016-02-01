<?php
ignore_user_abort(true);

$preview = strip_tags(trim($_POST['Tpreview' ]));
$ppc = explode(";", $preview);
if($ppc[0] !== 'data:image/png'){
	die("Invalid Preview");
}

$wallpaper = strip_tags(trim($_POST['Twallpaper' ]));
$pwc = explode(";", $preview);
if($pwc[0] !== 'data:image/png'){
	if($wallpaper !== ''){
		die("Invalid Wallpaper Type");
	}
}

$elements = strip_tags(trim($_POST['Telements']));
$icon = strip_tags(trim($_POST['Ticon']));
$overlay = strip_tags(trim($_POST['Toverlay']));
$name = strip_tags(trim($_POST['fileName']));
$devname = strip_tags(trim($_POST['devname']));
$email = strip_tags(trim($_POST['email']));


// Catch users who upload porn
$ip = $_SERVER['REMOTE_ADDR'];
$myfile = fopen("catch/".$name.".txt", "w") or die("Unable to open file!");
$txt = $ip.'-'.$email;
fwrite($myfile, $txt);
fclose($myfile);


$creatorFolder = "creators/".trim(stripcslashes((string)$devname));
if (!is_dir($creatorFolder)) {
    mkdir($creatorFolder, 0777);
}
$themerFolder = fopen($creatorFolder."/".$name.'.txt', "w") or die();
fclose($themerFolder);


$blocked = array();

if (in_array($ip, $blocked)) {
	echo 'You have been blocked from saving themes. Email LockBuilder@gmail.com';
    echo '<script>localStorage.clear(); </script>';
}else{

$filename = '../../php/themes/'.$name.'.plist';

if (file_exists($filename)) {
	$message = 'The theme ' .$name. ' already exists, please save as a different name. If you are updating a theme use a version number.';
    echo "<script type='text/javascript'>alert('$message'); window.location.href='http://LockPlus.us';</script>";
} else {
	$head = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL . '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">' . PHP_EOL . '<plist version="1.0">' . PHP_EOL . '<dict>' . PHP_EOL;
	$tname = '<key>ThemeName</key>' . PHP_EOL . '<string>' . PHP_EOL . $name . '</string>' . PHP_EOL;
	$dname = '<key>DevName</key>' . PHP_EOL . '<string>' . PHP_EOL . $devname . '</string>' . PHP_EOL;
	$tprev = '<key>ThemePreview</key>' . PHP_EOL . '<string>' . PHP_EOL . $preview . '</string>' . PHP_EOL;
	$wkey = '<key>Wallpaper</key>' . PHP_EOL . '<string>' . PHP_EOL . $wallpaper . '</string>' . PHP_EOL;
	$okey = '<key>Overlay</key>' . PHP_EOL . '<string>' . PHP_EOL . $overlay . '</string>' . PHP_EOL;
	$ekey = '<key>Elements</key>' . PHP_EOL . '<string>' . PHP_EOL . $elements . '</string>' . PHP_EOL;
	$ikey = '<key>IconName</key>' . PHP_EOL . '<string>' . PHP_EOL . $icon . '</string>' . PHP_EOL;
	$end = '</dict>' . PHP_EOL . '</plist>';
	$file = fopen($filename, "w") or die("Unable to open file!");
	fwrite($file, $head . $tname . $dname . $tprev . $wkey . $okey . $ekey . $ikey . $end);
	fclose($file);


	   // $newURL = 'http://lockplus.us/uploaded?'.$name;
	    $newURL = 'http://lockplus.us/php/dump.php';
	    echo '<script>window.location.href = "'.$newURL.'";</script>';
}

}

	/*header('Content-Type: application/octet-stream');
	    header('Content-Disposition: attachment; filename='.basename('themes/' . $name.'.plist'));
	    header('Expires: 0');
	    header('Cache-Control: must-revalidate');
	    header('Pragma: public');
	    header('Content-Length: ' . filesize('themes/' . $name.'.plist'));
	    readfile('themes/' . $name.'.plist');
	    exit;*/

?>