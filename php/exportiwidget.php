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
$size = strip_tags(trim($_POST['themeType']));

echo '<a href="http://lockplus.us/login/iwidget">Create another</a>';

$email = strip_tags(trim($_POST['email']));


// Catch users who upload porn
$ip = $_SERVER['REMOTE_ADDR'];
$myfile = fopen("catch/".$name.".txt", "w") or die("Unable to open file!");
$txt = $ip.'-'.$email;
fwrite($myfile, $txt);
fclose($myfile);

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

recurse_copy('./iwidget/'.$size.'/','./iwidget/'.$name.'/');
$myfile = fopen("./iwidget/".$name."/js/lockplus.js", "w") or die("Unable to open file!");
$txt = $devVar .PHP_EOL. $elVar .PHP_EOL. $iconVar .PHP_EOL. $wallpaperVar .PHP_EOL. $overlayVar;
fwrite($myfile, $txt);
fclose($myfile);

foreach ($result as $key) {
    $file = '../css/fonts/user/'. $key. '.otf';
    $newfile = 'iwidget/'.$name.'/user/'.$key.'.otf';
    copy($file, $newfile);
}


echo '<script>location.href = "http://LockPlus.us/creator/php/iwidget/download.php?name='.$name.'"</script>'

?>