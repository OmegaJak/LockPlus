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
 $wall = $array['Overlay'];
 if(strlen($wall) < 10){
 	$wall = 'none.png';
 }else{
  echo '<div class="theme"><img title="'.$name.'" download="'.$name.'.png" onclick="opentheme(this.src)" class="themeImage" src="' . $wall . '" /><span class="themeName">'.$name.'</span></div>';
 }
 //echo '<div class="themelist" title="'.$name.'">'.$name.'</div>';
  //echo '<div class="theme"><img title="'.$name.'" download="'.$name.'.png" onclick="opentheme(this.src)" class="themeImage" src="' . $wall . '" /><span class="themeName">'.$name.'</span></div>';
}
echo "</div>";


?>
</body>
</html>