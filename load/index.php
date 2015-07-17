<html>
<head>
  <title></title>
  <?php include("parse.php");?>
</head>
<body>
<?php
$dir    = '../php/themes';
echo "<div id='themelist'>";
foreach (glob("$dir/*.plist") as $filename) {
 //echo $filename;
 $path = $filename;
 $name = basename($filename,'.plist');
 $plistDocument = new DOMDocument();
 $plistDocument->load($path);
 $array = parsePlist($plistDocument);
 echo '<div class="themelist" title="'.$name.'">'.$name.'</div>';
  //echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
}
echo "</div>";


echo '<script type="text/javascript" src="func.js"></script>';
?>
</body>
</html>