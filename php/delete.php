<?php
$dir    = 'themes';
$list = glob("$dir/*.plist");
foreach ($list as $fileinfo) {
    if (stripos($fileinfo,'test') !== false){
      echo $fileinfo . '<br>';
      unlink($fileinfo);
    }
}
?>
