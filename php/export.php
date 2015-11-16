<?php
ignore_user_abort(true);
ini_set('max_execution_time', 1200);
ini_set('memory_limit', '512M');
ini_set('post_max_size', '70M');
ini_set('upload_max_filesize', '70M');
ini_set('max_input_time', 1200);

$preview = $_POST['Tpreview'];
$wallpaper = $_POST['Twallpaper'];
$elements = $_POST['Telements'];
$icon = $_POST['Ticon'];
$overlay = $_POST['Toverlay'];
$name = $_POST['fileName'];
$devname = $_POST['devname'];

// Catch users who upload porn
$ip = $_SERVER['REMOTE_ADDR'];
$myfile = fopen("catch/".$name.".txt", "w") or die("Unable to open file!");
$txt = $ip;
fwrite($myfile, $txt);
fclose($myfile);

$Dname = "creators/".trim(stripcslashes((string)$devname)).".txt";

        if(file_exists($Dname)){
            file_put_contents($Dname, "themes/".$name.".plist\n",FILE_APPEND);
        }else{
            $themerFile = fopen($Dname, "w") or die($Dname);
            $txt = "\nthemes/".$name.".plist\n";
            fwrite($themerFile, $txt);
            fclose($themerFile);
        }



$blocked = array('50.199.86.49','141.0.8.157','141.0.9.77');

if (in_array($ip, $blocked)) {
	echo 'You have been blocked from saving themes. Please do not post porn. If you recieve this message on error, please let us know.';
    echo '<script>localStorage.clear(); </script>';
}else{

$filename = 'themes/'.$name.'.plist';

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
	$file = fopen("themes/".$name.".plist", "w") or die("Unable to open file!");
	fwrite($file, $head . $tname . $dname . $tprev . $wkey . $okey . $ekey . $ikey . $end);
	fclose($file);

	/*header('Content-Type: application/octet-stream');
	    header('Content-Disposition: attachment; filename='.basename('themes/' . $name.'.plist'));
	    header('Expires: 0');
	    header('Cache-Control: must-revalidate');
	    header('Pragma: public');
	    header('Content-Length: ' . filesize('themes/' . $name.'.plist'));
	    readfile('themes/' . $name.'.plist');
	    exit;*/
	    $newURL = 'http://lockplus.us/uploaded?'.$name;
	    echo '<script>window.location.href = "'.$newURL.'";</script>';
}

}
?>