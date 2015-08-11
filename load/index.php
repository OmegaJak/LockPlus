<html>
<head>
  <title></title>
  <?php
require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";
?>

  <?php include("parse.php");?>
  <link rel="stylesheet" type="text/css" href="../css/preview.css">
</head>
<body>
<?php
echo '<script type="text/javascript" src="func.js"></script>';
echo '<style>.nav{position: absolute;text-align: center;top: 10px;margin: 0 auto;width: 100%;}#load{position:absolute;z-index:999;right:25px;background-color:#21b9b0; border-radius:2px;padding:5px;color:white;}</style>';
echo '<div id="load" onclick="loadtheme()">Enter Theme</div>';
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
$reversed = array_reverse($list);

$page = $_GET['page'];
$pagedResults = new Paginated($reversed, 24, $page);

echo "<div id='themelist'>";


while($row = $pagedResults->fetchPagedRow()) {  //when $row is false loop terminates
    $path = $row;
    $name = basename($row,'.plist');
    $plistDocument = new DOMDocument();
    $plistDocument->load($path);
    $array = parsePlist($plistDocument);
    echo '<div class="theme"><img title="'.$name.'" onclick="opentheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
  }

  $pagedResults->setLayout(new DoubleBarLayout());
  echo $pagedResults->fetchPagedNavigation();

/*foreach (glob("$dir/*.plist") as $filename) {
 //echo $filename;
 $path = $filename;
 $name = basename($filename,'.plist');
 $plistDocument = new DOMDocument();
 $plistDocument->load($path);
 $array = parsePlist($plistDocument);
 //echo '<div class="themelist" title="'.$name.'">'.$name.'</div>';
  echo '<div class="theme"><img title="'.$name.'" onclick="opentheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
}*/
echo "</div>";

?>
</body>
</html>