<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<a class="themerBack" href="http://LockPlus.us/themer">Back to list</a>
<script>
function viewtheme(d){
  window.location.href = "http://lockplus.us/preview?" + d;
}
</script>
<?php
require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";

if ($_GET["name"]) {
  $entered = $_GET["name"];
  error_reporting(0);
  echo '<a class="themerName">' . $entered . '</a><br />';
  $dir = '../php/themes';
  $list = glob("$dir/*.plist");
  function mtimecmp($a, $b){
    $mt_a = filemtime($a);
    $mt_b = filemtime($b);
    if ($mt_a == $mt_b) return 0;
    else
    if ($mt_a < $mt_b) return -1;
    else return 1;
  }
  usort($list, "mtimecmp");
  $reversed = array_reverse($list);

  $page = $_GET['page'];
  $pagedResults = new Paginated($reversed, 10000, $page);
  while ($row = $pagedResults->fetchPagedRow()) { //when $row is false loop terminates
    if (file_exists($row)) {
      $xml = simplexml_load_file($row);
      $dev = $xml->dict->string[1];
      $artist = preg_replace("/[^A-Za-z0-9 ]/", '', $dev);
      $entered = preg_replace("/[^A-Za-z0-9 ]/", '', $entered);
      if (strtolower($entered) === strtolower($artist)) {
        $name = basename($row,'.plist');
        //$name = preg_replace("/[^A-Za-z0-9 ]/", '', $name);
        $url = '../php/themepreview/' . $name . '.jpg';
        if (file_exists($url)) {
          $preview = '../php/themepreview/' . $name . '.jpg';
        }
        else {
          $preview = $xml->dict->string[2];
        }

        echo '<div class="theme"><img title="' . $name . '" onclick="viewtheme(this.title)" class="themeImage" src="' . $preview . '"/><span class="themeName">' . $name . '</span></div>';
      }
    }
    else {
      exit('Failed to open');
    }
  }

  $pagedResults->setLayout(new DoubleBarLayout());
}else{
  exit('Themer does not exist');
}

?>


