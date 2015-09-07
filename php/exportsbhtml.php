<?php
ignore_user_abort(true);
ini_set('max_execution_time', 1200);
ini_set('memory_limit', '512M');
ini_set('post_max_size', '70M');
ini_set('upload_max_filesize', '70M');
ini_set('max_input_time', 1200);

error_reporting(E_ALL);
ini_set( 'display_errors','1');


$preview = $_POST['Tpreview'];
$wallpaper = $_POST['Twallpaper'];
$elements = $_POST['Telements'];
$icon = $_POST['Ticon'];
$overlay = $_POST['Toverlay'];
$name = $_POST['fileName'];
$devname = $_POST['devname'];


echo 'Export is not available yet<br>';


if(strlen($elements) > 0){
	$elVar = 'var elements = '.$elements.';';
}else{
	$elVar = '';
}

if(strlen($icon) > 0){
	$iconVar = 'var wIcon = '.$icon.';';
}else{
	$iconVar = '';
}

if(strlen($devname) > 0){
	$devVar = 'var dev = '.$devname.';';
}else{
	$devVar = '';
}

if(strlen($wallpaper) > 0){
	$wallpaperVar = 'var wallpaper = '.$wallpaper.';';
}else{
	$wallpaperVar = '';
}

if(strlen($overlay) > 0){
	$overlayVar = 'var overlay = '.$overlay.';';
}else{
	$overlayVar = '';
}



//$txt = 'var elements = '.$elements.';' .PHP_EOL. 'var wIcon = ' .$icon. ';' .PHP_EOL. ' var wallpaper = "' .$wallpaper. '";' .PHP_EOL . 'var overlay =' .$overlay. ';';

$txt = $devVar .PHP_EOL. $elVar .PHP_EOL. $iconVar .PHP_EOL. $wallpaperVar .PHP_EOL. $overlayVar;

echo $txt;

/*
function recurse_copy($src,$dst) {
    $dir = opendir($src);
    @mkdir($dst);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            if ( is_dir($src . '/' . $file) ) {
                recurse_copy($src . '/' . $file,$dst . '/' . $file);
            }
            else {
                copy($src . '/' . $file,$dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

recurse_copy('./sbhtml/basesbhtml/','./sbhtml/'.$name.'/');
$myfile = fopen("./sbhtml/".$name."/lockplus.js", "w") or die("Unable to open file!");
$txt = 'var elements = '.$elements.';' .PHP_EOL. 'var wIcon = ' .$icon. ';' .PHP_EOL. ' var wallpaper = "' .$wallpaper. '";' .PHP_EOL . 'var overlay =' .$overlay. ';';
fwrite($myfile, $txt);
fclose($myfile);


echo '<script>location.href = "http://LockPlus.us/php/sbhtml/download.php?name='.$name.'"</script>'
*/
?>