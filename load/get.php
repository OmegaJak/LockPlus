<?php
include("theme.php");

$theme = $_GET['theme'];
$path   = '../php/themes/'.$theme.'.plist';
$name = basename($path,'.plist');
$plistDocument = new DOMDocument();
$plistDocument->load($path);
$a = parsePlist($plistDocument);

//echo $array['DevName'];
//echo $array['ThemeName'];
//echo $array['ThemePreview'];
//echo $array['Wallpaper'];
//echo $array['Overlay'];
//echo $array['Elements'];

$b = $a['Elements'];
$iconName =  json_encode(str_replace("\n", "", $a['IconName']));
$overlay = json_encode(str_replace("\n", "", $a['Overlay']));
$wallpaper = json_encode(str_replace("\n", "", $a['Wallpaper']));

echo '<script src="replace.js"></script>';
echo '<script>

var obj = {};
obj.iconName = '.$iconName.';
obj.overlay = '.$overlay.';
obj.wallpaper = '.$wallpaper.';
obj.placedElements = '.$b.';
console.log(obj);

var obj = JSON.stringify(obj);
	obj = replaceAllBackSlash(obj);
localStorage.setItem("placedElements",obj);
window.location.href = "http://LockPlus.us";
</script>';
?>