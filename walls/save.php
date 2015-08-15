<?php
include("parse.php");
function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb");
    $data = explode(',', $base64_string);
    fwrite($ifp, base64_decode($data[1]));
    fclose($ifp);
    return $output_file;
}

$dir    = '../php/themes';
foreach (glob("$dir/*.plist") as $filename) {

$addedArray = array();
$deletedArray = array();

 $path = $filename;
 $name = basename($filename,'.plist');
 $plistDocument = new DOMDocument();
 $plistDocument->load($path);
 $array = parsePlist($plistDocument);
 $wall = $array['Wallpaper'];
 if(!strlen($wall) < 10){
  $name = preg_replace('/[^\p{L}\p{N}\s]/u', '', $name);
  $name = preg_replace('/\s*/', '', $name);
  $filename_path = $name.".jpg";
  $filename_path = strtolower($filename_path);
  $data = explode(',', $wall);
  if(!file_exists('files/'.$filename_path)){
    $decoded=base64_decode($data[1]);
    file_put_contents("files/".$filename_path,$decoded);
    array_push($addedArray, $filename_path);
  }
 }
}

echo 'Added ' . count($addedArray) . '<br>';

$dir = "files";
$checksums = array();
if ($h = opendir($dir)) {
    while (($file = readdir($h)) !== false) {
        if(is_dir($_="{$dir}/{$file}")) continue;
        $hash = hash_file('md5', $_);
        if (in_array($hash, $checksums)) {
          array_push($deletedArray, $_);
            unlink($_);
        }
        else {
            $checksums[] = $hash;
        }
    }
    closedir($h);
}
echo 'Deleted ' . count($deletedArray);
?>


