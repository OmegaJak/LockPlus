<?php
$dir    = '../themepreview';
$list = glob("$dir/*.jpg");

foreach ($list as $key) {
        $name = basename($key,'.jpg');
    //if(!file_exists('../../phone/'.$name.'.png')){
        $dest = imagecreatefrompng('phone.png');
        $src = imagecreatefromjpeg($key);
        imagealphablending($dest, false);
        imagesavealpha($dest, true);
        imagecopymerge($dest, $src, 220, 392, 0, 0, 200, 355, 100);
        header('Content-Type: image/png');
        imagepng($dest,'../../phone/'.$name.'.png');
        imagedestroy($dest);
        imagedestroy($src);
   // }
}
 ?>