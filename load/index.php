<html>
<head>
  <title></title>
  <?php include("parse.php");?>
  <link rel="stylesheet" type="text/css" href="../php/preview.css">
</head>
<body>
<?php
$dir    = '../php/themes';
echo '<script type="text/javascript" src="func.js"></script>';
echo "<div id='themelist'>";
foreach (glob("$dir/*.plist") as $filename) {
 //echo $filename;
 $path = $filename;
 $name = basename($filename,'.plist');
 $plistDocument = new DOMDocument();
 $plistDocument->load($path);
 $array = parsePlist($plistDocument);
 //echo '<div class="themelist" title="'.$name.'">'.$name.'</div>';
  echo '<div class="theme"><img title="'.$name.'" onclick="opentheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
}
echo "</div>";

?>
</body>
</html>