<?php
include('phpgraphlib.php');
include('phpgraphlib_pie.php');
$graph = new PHPGraphLibPie(400, 200);

$dir    = '../php/themes';
$list = glob("$dir/*.plist");

$july = array();
$aug = array();
$month = "August";

foreach ($list as $key) {
   $time =  filemtime($key);
   $monthuploaded = date ("F", filemtime($key));
   //echo $month.'<br>';
   if($monthuploaded === 'July'){
    array_push($july, '1');
   }
   if($monthuploaded === 'August'){
    array_push($aug, '1');
   }

}

$J = count($july);
$A = count($aug);

$data = array("July" => $J, "August" => $A);
$graph->addData($data);
$graph->setTitle('Theme Uploads by Month');
$graph->setLabelTextColor('50, 50, 50');
$graph->setLegendTextColor('50, 50, 50');
$graph->setTitleColor('black');
$graph->createGraph();
