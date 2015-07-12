<?php

ignore_user_abort(true);
ini_set('max_execution_time', 1200);
ini_set('memory_limit', '512M');
ini_set('post_max_size', '70M');
ini_set('upload_max_filesize', '70M');
ini_set('max_input_time', 1200);

$wallpaper = $_POST['Twallpaper'];
$elements = $_POST['Telements'];
$overlay = $_POST['Toverlay'];
$name = $_POST['name'];
$devname = $_POST['devname'];

$head = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL . '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">' . PHP_EOL . '<plist version="1.0">' . PHP_EOL . '<dict>' . PHP_EOL;

$tname = '<key>ThemeName</key>' . PHP_EOL . '<string>' . PHP_EOL . $name . '</string>' . PHP_EOL;
$dname = '<key>DevName</key>' . PHP_EOL . '<string>' . PHP_EOL . $devname . '</string>' . PHP_EOL;
$wkey = '<key>Wallpaper</key>' . PHP_EOL . '<string>' . PHP_EOL . $wallpaper . '</string>' . PHP_EOL;
$okey = '<key>Overlay</key>' . PHP_EOL . '<string>' . PHP_EOL . $overlay . '</string>' . PHP_EOL;
$ekey = '<key>Elements</key>' . PHP_EOL . '<string>' . PHP_EOL . $elements . '</string>' . PHP_EOL;

$end = '</dict>' . PHP_EOL . '</plist>';


$file = fopen("themes/".$name.".plist", "w") or die("Unable to open file!");

fwrite($file, $head . $tname . $dname . $wkey . $okey . $ekey . $end);

fclose($file);

header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename('themes/' . $name.'.plist'));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize('themes/' . $name.'.plist'));
    readfile('themes/' . $name.'.plist');
    exit;
?>