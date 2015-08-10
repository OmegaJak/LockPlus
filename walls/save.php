<html>
<head>
  <title></title>
  <?php include("parse.php");?>
  <style type="text/css">
html{
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 200; -webkit-font-smoothing: antialiased;
}
.theme{
  position: relative;
 width: 100px;
 float: left;
 margin-top: 10px;
 margin-left: 15px;
}
.theme:after{
  position: absolute;
  top:196px;
  margin-left: -60px;
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid gray;
  display: none;
}
.themeImage{
  position: relative;
  width: 100px;
}
.themeImage:hover{
  cursor: pointer;
}
.themeName{
  position: relative;
  display: inline-block;
  width: 100px;
  text-align: center;
  font-size: 8px;
  white-space: nowrap;
}
.loader{

}
.loader:after{
  content: 'Uploading theme.'
}
  </style>
</head>
<body>
<?php
function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb");

    $data = explode(',', $base64_string);

    fwrite($ifp, base64_decode($data[1]));
    fclose($ifp);

    return $output_file;
}

$dir    = '../php/themes';
echo "<div id='themelist'>";
echo '<script type="text/javascript" src="func.js"></script>';
foreach (glob("$dir/*.plist") as $filename) {
 //echo $filename;
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

 //echo '<div class="themelist" title="'.$name.'">'.$name.'</div>';
  //echo '<div class="theme"><img title="'.$name.'" download="'.$name.'.png" onclick="opentheme(this.src)" class="themeImage" src="' . $wall . '" /><span class="themeName">'.$name.'</span></div>';
}
echo "</div>";


?>
</body>
</html>