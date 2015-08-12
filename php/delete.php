<?php
$dir    = 'themes';
$dir2    = 'themepreview';
$list = glob("$dir/*.plist");
$list2 = glob("$dir2/*.jpg");

foreach ($list as $fileinfo) {
    if (stripos($fileinfo,'test') !== false){
      echo $fileinfo . '<br>';
      unlink($fileinfo);
    }
}

foreach ($list2 as $fileinfo2) {
    if (stripos($fileinfo2,'test') !== false){
      echo $fileinfo2 . '<br>';
      unlink($fileinfo2);
    }
    //delete theme images that plist do not exist
    $filename = preg_replace('"\.jpg$"', '.plist', $fileinfo2);
    $filename = preg_replace('"themepreview"', 'themes', $filename);
    if(!in_array($filename, $list)){
    	 unlink($fileinfo2);
    	 echo $fileinfo2 . '<br>';
    }
}




?>
