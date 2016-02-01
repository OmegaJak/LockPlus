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


echo 'BETA!<br>';


if(strlen($elements) > 0){
	$elVar = 'var elements = '.$elements.';';
}else{
	$elVar = 'var elements = null;';
}

if(strlen($icon) > 0){
	$iconVar = 'var wIcon = "'.$icon.'";';
}else{
	$iconVar = 'var wIcon = null;';
}

if(strlen($devname) > 0){
	$devVar = 'var dev = "'.$devname.'";';
}else{
	$devVar = '';
}

if(strlen($wallpaper) > 0){
	$wallpaperVar = 'var wallpaper = "'.$wallpaper.'";';
}else{
	$wallpaperVar = 'var wallpaper = null;';
}

if(strlen($overlay) > 0){
	$overlayVar = 'var overlay = "'.$overlay.'";';
}else{
	$overlayVar = 'var overlay = null;';
}



/* Grab fonts */
$manage = (array) json_decode($elements);
$fontArray = array();
foreach ($manage as $key => $value) {
    foreach ($value as $key => $value) {
        if($key === 'font-family'){
            if($value !== 'helvetica'){
                array_push($fontArray, $value);
            }
        }
    }
}
$result = array_unique($fontArray);


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
$myfile = fopen("./sbhtml/".$name."/js/lockplus.js", "w") or die("Unable to open file!");
$txt = $devVar .PHP_EOL. $elVar .PHP_EOL. $iconVar .PHP_EOL. $wallpaperVar .PHP_EOL. $overlayVar;
fwrite($myfile, $txt);
fclose($myfile);

foreach ($result as $key) {
    $file = '../css/fonts/user/'. $key. '.otf';
    $newfile = 'sbhtml/'.$name.'/user/'.$key.'.otf';
    copy($file, $newfile);
}


echo '<script>location.href = "http://LockPlus.us/php/sbhtml/download.php?name='.$name.'"</script>'

?>