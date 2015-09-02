<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<script>
function viewtheme(d){
    window.location.href = "http://lockplus.us/preview?" + d;
}
</script>
<form action="search.php" method="GET">
    <h3>Search Themes</h3>
    <input type="text" name="name"><br>
    <input type="submit">
</form>
<a id="themers" href="http://LockPlus.us/themer">Top Themers</a>
<a style="margin-top:10px;"id="themers" href="theme.php">Show All</a>


<?php
error_reporting(0);
$array = unserialize(file_get_contents('count/dlcount.bin'));

foreach ($array as $key => $value) {
    $name = basename($key,'.plist');
    $count = $value;
    if($count > 20){
        $imgSrc = basename($key,'.plist');
         if(file_exists('themepreview/'.$imgSrc)){
        }else{
            $imgSrc = $name.'.jpg';
        }
        echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="themepreview/' . $imgSrc . '"/>
        <span class="themeName">'.$name.'</span>
        <span class="themeName">Est Downloads: '.$count.'</span>
        </div>';
    }
}

?>