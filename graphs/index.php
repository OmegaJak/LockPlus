<meta name="viewport" content="width=device-width, initial-scale=1">
<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<script src="js/chart.min.js"></script>
<style>
.wrapper {
   display: table;
   padding: 0;
   width: 100%;
   height: 100%;
   position: relative;
}
.container {
   display: table-cell;
   vertical-align: middle;
}
.canvas-container {
   position: relative;
   max-width: 1024px;
   min-width: 320px;
   margin: 0 auto;
}
#canvas {
   width: 100%;
   height: auto;
}
h2,h3{
      color:black;
      font-weight: 700;
      letter-spacing: -.02em;
      font-family: Montserrat, sans-serif;
      text-shadow: 0 1px 2px rgba(0,0,0,.5);
      text-align: center;
}
</style>
<title>LockPlus Stats</title>
<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>

<?php

error_reporting(0);
//theme directory
$themeDirectory= '../php/themes';

//creator directory
$userDirectory = '../php/creators';

//get list of plist files
$themeList = glob("$themeDirectory/*.plist");

//get list of txt files for users
$userList = glob("$userDirectory/*.txt");

//count themes
$totalThemes = count($themeList);

//count users
$totalUsers = count($userList);

//month array
$months = array();

//month array with counts
$monthsCount = array();

// loop over theme list, get the time file was uploaded
foreach ($themeList as $key) {
   $time =  filemtime($key);
   $monthuploaded = date ("F", filemtime($key));

   if(!in_array($monthuploaded, $months)){
    array_push($months, $monthuploaded);
   }

   array_push($monthsCount, $monthuploaded);
}

//remove duplicates from array
$uniqueMonths = array_unique($months);

//sort months (put them in order)
usort($uniqueMonths, "compare_months");

//function to compare months, sorting them.
function compare_months($a, $b) {
    $monthA = date_parse($a);
    $monthB = date_parse($b);
    return $monthA["month"] - $monthB["month"];
}

//sort months
usort($monthsCount, "compare_months");

//get values for each month (theme uploads)
$vals = array_count_values($monthsCount);

//remove key=>value and get only values
foreach($vals as $value) { $final[] = $value;}


?>
<script>
    var months = <?php echo json_encode($uniqueMonths)?>; //get total months
    var tCounts = <?php echo json_encode($final)?>; // get total month counts
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
      labels : months,
      datasets : [
        {
          label: "LockPlus Stats",
          fillColor : "rgba(220,220,220,0.2)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(220,220,220,1)",
          data : tCounts
        }
      ]

    }

  window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
      responsive: false
    });
  }


  </script>

  <div class="wrapper">
  <div class="container">
    <h2>LockPlus Stats</h2>
    <div class="canvas-container">
      <canvas id="canvas" width="1024" height="640"></canvas>
    </div>
    <br>
    <?php
      echo '<h3>Total Themes: '.number_format($totalThemes).'</h3>';
      echo '<h3>Total Creators: '.number_format($totalUsers).'</h3>';
    ?>
  </div>
</div>