<?php
$wallpaper = $_POST['Twallpaper'];
$overlay = $_POST['Toverlay'];
$name = $_POST['name'];
$devname = $_POST['devname'];

$head = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL . '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">' . PHP_EOL . '<plist version="1.0">' . PHP_EOL . '<dict>' . PHP_EOL;

$tname = '<key>ThemeName</key>' . PHP_EOL . '<string>' . PHP_EOL . $name . '</string>' . PHP_EOL;
$dname = '<key>DevName</key>' . PHP_EOL . '<string>' . PHP_EOL . $devname . '</string>' . PHP_EOL;
$wkey = '<key>Wallpaper</key>' . PHP_EOL . '<string>' . PHP_EOL . $wallpaper . '</string>' . PHP_EOL;
$okey = '<key>Overlay</key>' . PHP_EOL . '<string>' . PHP_EOL . $overlay . '</string>' . PHP_EOL;

$end = '</dict>' . PHP_EOL . '</plist>';


$file = fopen("themes/".$name.".plist", "w") or die("Unable to open file!");

fwrite($file, $head . $tname . $dname . $wkey . $okey . $end);

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