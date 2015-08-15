<html>
<head>
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="preview.css" type="text/css">
  <script src='../js/prefixfree.min.js'></script>
  <?php
    include("parse.php");
    function isMobile() {
      return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
    }
    $dir    = '../php/themes';
    $query = $_SERVER['QUERY_STRING'];
    $path = "$dir/$query.plist";
    $name = basename($path,'.plist');
    $plistDocument = new DOMDocument();
    $plistDocument->load($path);
    $array = parsePlist($plistDocument);
    $dlCount = unserialize(file_get_contents('../php/count/dlcount.bin'));
    $themN = 'themepreview/'.urlencode($name).'.jpg';
    $downloads = 'NA';
    if(array_key_exists($themN, $dlCount)){
      $downloads = $dlCount[$themN];
    }
    if(file_exists('../php/themepreview/'.$query.'.jpg')){
      $previewImage = '../php/themepreview/'.$query.'.jpg';
    }else{
      $previewImage = $array['ThemePreview'];
    }
  ?>
</head>
<body>
 <?php echo '<div title="'.$name.'"  class="bgImage" style="background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(' . $previewImage . ');"></div>' ?>
<div class="preview">
  <div class="imgpreview">
    <img class="bg" src="phone.png" width="290"/>
    <div class="theme">
      <?php echo '<img title="'.$name.'" class="themeImage" src="' . $previewImage . '"/>' ?>
    </div>
  </div>
  <div class="creator">
     <!--<span style="font-size:10px;"><span style="position:relative;font-size:20px;top:4px;">&#9888;</span> Gradients do not render on text</span></br></br>-->
    <?php echo '<div id="name">Creator: <a style="text-decoration:underline;" href="http://lockplus.us/themer/themer.php?name='.$array["DevName"].'">'. $array['DevName'] . '</a></div>'?>
    <?php echo '<div id="theme">Theme: '. str_replace("%20"," ",$name) . '</div>'?>
    <?php echo '<div id="size">Filesize: '. formatSizeUnits(filesize(str_replace("%20"," ",$path))) . '</div>'?>
    <?php echo '<div id="size">Downloads: '. $downloads . '</div>'?>
  </div>
  <a href="http://lockplus.us"><div class='btn'>Create your own</div></a>
<?php
  if(isMobile()){
    echo '<a href="cydia://package/com.macciti.lockplus"><div class="btn">Download LockPlus</div></a>';
  }else{
    echo '<a href="http://cydia.saurik.com/package/com.macciti.lockplus/"><div class="btn">Download LockPlus</div></a>';
  }
  if(file_exists('../phone/'.urlencode($name).'.png')){
      echo '<a href="https://twitter.com/intent/tweet?url=http%3A%2F%2FLockPlus.us/preview?'.urlencode($name).'&text=Check%20out%20this%20theme%20'.str_replace("%20"," ",$name).'%20for%20LockPlus.%20http://LockPlus.us/phone/'.urlencode($name).'.png&hashtags=LockPlus"><div class="btn">Share Theme</div></a>';
  }else{
    echo '<a href="https://twitter.com/intent/tweet?url=http%3A%2F%2FLockPlus.us/preview?'.urlencode($name).'&text=Check%20out%20this%20theme%20'.str_replace("%20"," ",$name).'%20for%20LockPlus.&hashtags=LockPlus"><div class="btn">Share Theme</div></a>';
  }
?>
<footer></footer>
</div>
</body>
</html>