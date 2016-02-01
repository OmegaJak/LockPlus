<?php
        $query = $_SERVER['QUERY_STRING'];
        $dest = imagecreatefrompng('phone.png');
        $src = imagecreatefromjpeg('../themepreview/'.$query.'.jpg');
        imagealphablending($dest, false);
        imagesavealpha($dest, true);
        imagecopymerge($dest, $src, 220, 392, 0, 0, 200, 355, 100);
        header('Content-Type: image/png');
        imagepng($dest,'../../phone/'.$query.'.png');
        imagedestroy($dest);
        imagedestroy($src);

 ?>