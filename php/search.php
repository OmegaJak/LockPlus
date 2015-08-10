<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>
<?php
if($_GET["name"]){
  $entered = $_GET["name"];
  error_reporting(0);
  $dir    = '../php/themes';
  $list = glob("$dir/*.plist");
  function mtimecmp($a, $b) {
          $mt_a = filemtime($a);
          $mt_b = filemtime($b);
          if ($mt_a == $mt_b)
              return 0;
          else if ($mt_a < $mt_b)
              return -1;
          else
              return 1;
      }
  usort($list, "mtimecmp");
  foreach ($list as $plist) {
    $xml = simplexml_load_file($plist);
    $theme = $xml->dict->string[0]; //themename
    //$dev = $xml->dict->string[1]; //devname
    $artist = preg_replace("/[^A-Za-z0-9 ]/", '', $theme);
    $entered =  preg_replace("/[^A-Za-z0-9 ]/", '', $entered);
    if(strtolower($entered) === strtolower($artist)){
      $name = $xml->dict->string;
      $preview = $xml->dict->string[2];
      echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="themepreview/' . $theme . '.jpg"/><span class="themeName">'.$name.'</span></div>';
    }
  }
}
?>