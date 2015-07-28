<html>
<head>
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="preview.css" type="text/css">
  <script src='../js/prefixfree.min.js'></script>
  <?php include("parse.php");?>
</head>
<body>
  <?php echo '<img title="'.$name.'"  class="bgImage" src="' . $array['ThemePreview'] . '"/>' ?>
<div class="preview">
  <div class="imgpreview">
    <img class="bg" src="phone.png" width="290"/>
    <div class="theme">
      <?php echo '<img title="'.$name.'" class="themeImage" src="' . $array['ThemePreview'] . '"/>' ?>
    </div>
  </div>
  <div class="creator">
    <?php echo '<div id="name">Creator: '. $array['DevName'] . '</div>'?>
    <?php echo '<div id="theme">Theme: '. str_replace("%20"," ",$name) . '</div>'?>
    <?php echo '<div id="size">Filesize: '. formatSizeUnits(filesize(str_replace("%20"," ",$path))) . '</div>'?>
  </div>
  <a href="http://lockplus.us"><div class='btn'>Create your own</div></a>
  <a href="http://lockplus.info"><div class='btn'>Learn about LockPlus</div></a>
  <?php echo '<a href="https://twitter.com/intent/tweet?url=http%3A%2F%2FLockPlus.us/preview?'.urlencode($name).'&text=Check%20out%20this%20theme%20for%20LockPlus.&hashtags=LockPlus"><div class="btn">Share Theme</div></a>' ?>


  <footer></footer>
</div>
</body>
</html>