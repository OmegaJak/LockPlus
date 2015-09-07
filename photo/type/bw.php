<?php
  $url = $_GET['url'];
  error_reporting(E_ALL);
  ini_set( 'display_errors','1');
  $image = imagecreatefrompng('../'.$url);
  imagefilter($image, IMG_FILTER_GRAYSCALE);
  header("content-type: image/png");
  imagepng($image);
  imagedestroy($image);
?>