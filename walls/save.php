<?php include("parse.php");?>
<?php
function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb");
    $data = explode(',', $base64_string);
    fwrite($ifp, base64_decode($data[1]));
    fclose($ifp);
    return $output_file;
}

$dir    = '../php/themes';
foreach (glob("$dir/*.plist") as $filename) {

 $path = $filename;
 $name = basename($filename,'.plist');
 $plistDocument = new DOMDocument();
 $plistDocument->load($path);
 $array = parsePlist($plistDocument);
 $wall = $array['Wallpaper'];
 if(strlen($wall) < 10){
 	$wall = 'none.png';
 }else{
  $name = preg_replace('/[^\p{L}\p{N}\s]/u', '', $name);
  $name = preg_replace('/\s*/', '', $name);
  $filename_path = $name.".jpg";
  $filename_path = strtolower($filename_path);
  $data = explode(',', $wall);
  if(!file_exists('files/'.$filename_path)){
    $decoded=base64_decode($data[1]);
    file_put_contents("files/".$filename_path,$decoded);
  }
 }
}

$dir = "files";
$checksums = array();
if ($h = opendir($dir)) {
    while (($file = readdir($h)) !== false) {
        if(is_dir($_="{$dir}/{$file}")) continue;
        $hash = hash_file('md5', $_);
        if (in_array($hash, $checksums)) {
          echo $_.'<br>';
            unlink($_);
        }
        else {
            $checksums[] = $hash;
        }
    }
    closedir($h);
}
?>
