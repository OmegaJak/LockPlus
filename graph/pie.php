<?php
  include 'jpgraph.php';
  require_once ('jpgraph_pie.php');

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

$array = array();
array_push($array, count($july), count($aug));

// Some data
$data = $array;

// Create the Pie Graph.
$graph = new PieGraph(200,300);
$graph->SetShadow();

// Set A title for the plot
$graph->title->Set("Uploads");
$graph->title->SetFont(FF_FONT1,FS_BOLD);

// Create
$p1 = new PiePlot($data);
$p1->SetLegends(array("July","August","September","October","November","December","January"));
$graph->Add($p1);
$graph->Stroke();

?>