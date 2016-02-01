<html>
<head>
  <title>LockPlus themes</title>
  <link rel="stylesheet" type="text/css" href="../../css/preview.css">
  <script type="text/javascript" src="function.js"></script>
</head>
<body>
  <div id="load" class="loadCreator" onclick="loadtheme()">Enter Theme Name</div>
<?php
  require_once "../../pages/Paginated.php";
  require_once "../../pages/DoubleBarLayout.php";
  $dir    = '../../php/themepreview';
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
  echo "<div id='themelist'>";
  while($row = $pagedResults->fetchPagedRow()) {  //when $row is false loop terminates
      $path = $row;
      $name = basename($row,'.jpg');
      $preview = '../../php/themepreview/'.$name.'.jpg';

      echo '<div class="theme"><img title="'.$name.'" onclick="opentheme(this.title)" class="themeImage" src="' . $preview . '"/><span class="themeName">'.$name.'</span></div>';
    }
  echo "</div>";
  $pagedResults->setLayout(new DoubleBarLayout());
  echo $pagedResults->fetchPagedNavigation();
?>
</body>
</html>
