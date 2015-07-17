<html>
<head>
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="preview.css" type="text/css">
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
    <?php echo '<div id="theme">Theme: '. $name . '</div>'?>
    <?php echo '<div id="size">Filesize: '. formatSizeUnits(filesize($path)) . '</div>'?>
  </div>
  <a href="http://lockplus.us"><div class='btn'>Create your own</div></a>
  <a href="http://lockplus.info"><div class='btn'>Learn about LockPlus</div></a>
  <footer></footer>
</div>
</body>
</html>