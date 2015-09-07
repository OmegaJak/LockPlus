<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<div><a class="themerBack" href="http://LockPlus.us/themer">Back to list</a></div></br>
<script>
function viewtheme(d){
  window.location.href = "http://lockplus.us/preview?" + d;
}
</script>
<?php

set_time_limit(0);
$dir    = '../php/themes';
$list = glob("$dir/*.plist");

$dlCount = unserialize(file_get_contents('../php/count/dlcount.bin'));
$themeDev = unserialize(file_get_contents('../php/user/userList.bin'));

if ($_GET["name"]) {
  $entered = $_GET["name"];
   echo '<a class="themerName">' . $entered . '</a><br />';
  foreach ($themeDev as $key) {
    $split = explode("~", $key);
    $dev = $split[0];
    if(stripos($dev, $entered)){
      $baseName = basename($split[1],'.plist');
      $pname = basename($split[1]);
        if(file_exists('../php/themepreview/'.$baseName.'.jpg')){ //if preview exists use it
            $preview = '../php/themepreview/'.$baseName.'.jpg';
          }else{
            $preview = 'none';
          }
      echo '<div class="theme">
            <img title="'.$baseName.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $preview . '"/>
            <span class="themeName">'.$pname.'</span>
            </div>';
    }
  }
}else{
  exit('Themer does not exist');
}

?>
