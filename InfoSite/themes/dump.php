<?php include("parse.php");?>

<?php

function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb");
    $data = explode(',', $base64_string);
    fwrite($ifp, base64_decode($data[1]));
    fclose($ifp);
    return $output_file;
}

if (!function_exists('getimagesizefromstring')) {
      function getimagesizefromstring($string_data)
      {
         $uri = 'data://application/octet-stream;base64,'  . base64_encode($string_data);
         return getimagesize($uri);
      }
}

$dir= 'themes';

$dir2    = 'themepreview';
$list2 = glob("$dir2/*.jpg");

foreach(glob("$dir/*.plist") as $filename) {
    $path = $filename;
    $name = basename($filename, '.plist');
    if(!in_array('themepreview/'.$name.'.jpg', $list2)){
    $plistDocument = new DOMDocument();
    $plistDocument -> load($path);
    $array = parsePlist($plistDocument);
    $wall = $array['ThemePreview'];
        if (!strlen($wall) < 10) {
            $filename_path = $name.
            ".jpg";
            $data = explode(',', $wall);
            if (!file_exists('themepreview/'.$filename_path)) {
                $decoded = base64_decode($data[1]);
                $src_size = getimagesizefromstring($decoded);
                if ($src_size === false){ //if not an image
                    die('This is not an image boss');
                }
                $thumb_height = 355;
                $thumb_width = 200;
                $src = imagecreatefromstring($decoded);
                $src_aspect = round(($src_size[0] / $src_size[1]), 1);
                $thumb_aspect = round(($thumb_width / $thumb_height), 1);
                if ($src_aspect < $thumb_aspect){
                    $new_size = array($thumb_width,($thumb_width / $src_size[0]) * $src_size[1]);
                    $src_pos = array(0,(($new_size[1] - $thumb_height)* ($src_size[1] / $new_size[1])) / 2);
                }else if($src_aspect > $thumb_aspect){
                    $new_size = array(($thumb_width / $src_size[1] * $src_size[0]),$thumb_height);
                    $src_pos = array(0,($new_size[0] - $thumb_width) / 2, 0);
                }else{
                    $new_size = array($thumb_width, $thumb_height);
                    $src_pos = array(0, 0);
                }
                if ($new_size[0] < 1) $new_size[0] = 1;
                if ($new_size[1] < 1) $new_size[1] = 1;
                $thumb = imagecreatetruecolor($thumb_width, $thumb_height);
                imagecopyresampled($thumb, $src, 0, 0, $src_pos[0], $src_pos[1], $new_size[0], $new_size[1], $src_size[0], $src_size[1]);
                imagejpeg($thumb, "themepreview/".$filename_path);

                //file_put_contents("themepreview/".$filename_path, $decoded);
            }
        }
    }
}

$themes = glob("$dir/*.plist");
file_put_contents('themes.bin', serialize($themes));

?>