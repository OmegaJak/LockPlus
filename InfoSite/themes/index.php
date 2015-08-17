<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="preview.css" type="text/css">
<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>
<form action="http://lockplus.us/php/search.php" method="GET"></br>
    <h3>Search Themes</h3>
    <input type="text" name="name"><br>
    <input type="submit">
</form>
<a id="themers" href="http://LockPlus.us/themer">Top Themers</a>
<a style="margin-top:10px;"id="themers" href="popular">Top Downloaded</a>

<?php
require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";
error_reporting(0);
$array = unserialize(file_get_contents('http://LockPlus.us/php/count/dl.bin'));
$count = 'NA';
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
$reversed = array_reverse($list); //reverse to get latest to oldest
$page = $_GET['page'];
$pagedResults = new Paginated($reversed, 24, $page);

while($row = $pagedResults->fetchPagedRow()) {  //when $row is false loop terminates
  $count = 'NA';
    $path = $row;
    $name = basename($row,'.jpg');
    foreach ($array as $keys) {
        $pieces = explode("~", $keys);
        if($pieces[0] === '/php/themes/'.rawurlencode($name).'.plist'){
            $count = $pieces[1];
        }
    }
    echo '<div class="theme"><img title="'.$name.'" alt="LockPlus Theme" onclick="viewtheme(this.title)" class="themeImage" src="' . $row . '"/>
    <span class="themeName">'.$name.'</span>
    <span class="themeName">Est. Downloads: '.$count.'</span>
    </div>';
  }

  $pagedResults->setLayout(new DoubleBarLayout());
  echo $pagedResults->fetchPagedNavigation();
?>
