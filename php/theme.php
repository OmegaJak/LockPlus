<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>
<form action="search.php" method="GET">
    <h3>Search Themes</h3>
    <input type="text" name="name"><br>
    <input type="submit">
</form>
<a id="themers" href="http://LockPlus.us/themer">Top Themers</a>
<a style="margin-top:10px;"id="themers" href="popular.php">Top Downloaded</a>


<?php
error_reporting(0);


require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";

$array = unserialize(file_get_contents('http://LockPlus.us/php/count/dl.bin'));

$dir    = 'themepreview';
$list = glob("$dir/*.jpg");
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
while($row = $pagedResults->fetchPagedRow()) {


    $path = $row;
    $count = "NA";
    $name = basename($row,'.jpg');

    foreach ($array as $keys) {
        $pieces = explode("~", $keys);
        if($pieces[0] === '/php/themes/'.rawurlencode($name).'.plist'){
            $count = $pieces[1];

        }
        //echo '..'.$pieces[0];
    }



    echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $row . '"/>
    <span class="themeName">'.$name.'</span>
    <span class="themeName">Est Downloads: '.$count.'</span>
    </div>';
  }
$pagedResults->setLayout(new DoubleBarLayout());
echo $pagedResults->fetchPagedNavigation();
?>