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

if ($_GET["name"]) {
  $entered = $_GET["name"];
   echo '<a class="themerName">' . $entered . '</a><br />';

   $lines = file("../php/creators/".$entered.".txt", FILE_IGNORE_NEW_LINES); //get themer .txt file

   foreach ($lines as $key) {
      $theme = basename($key,'.plist');

      if(file_exists('../php/themepreview/'.$theme.'.jpg')){ //if preview exists use it
            $preview = '../php/themepreview/'.$theme.'.jpg';
          }else{
            $preview = 'none';
          }

          echo '<div class="theme">
            <img title="'.$theme.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $preview . '"/>
            <span class="themeName">'.$theme.'</span>
            </div>';
   }
}else{
  exit('Themer does not exist');
}

?>
