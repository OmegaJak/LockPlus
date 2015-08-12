<?php
include('phpgraphlib.php');
$graph = new PHPGraphLib(500, 350);
  $dir    = '../php/themes';
$list = glob("$dir/*.plist");

$array = array();
$a01 = array();
$a02 = array();
$a03 = array();
$a04 = array();
$a05 = array();
$a06 = array();
$a07 = array();
$a08 = array();
$a09 = array();
$a10 = array();
$a11 = array();
$a12 = array();
$a13 = array();
$a14 = array();
$a15 = array();
$a16 = array();
$a17 = array();
$a18 = array();
$a19 = array();
$a20 = array();
$a21 = array();
$a22 = array();
$a23 = array();
$a24 = array();
$a25 = array();
$a26 = array();
$a27 = array();
$a28 = array();
$a29 = array();
$a30 = array();

$month = "August";

foreach ($list as $key) {
   $time =  filemtime($key);
   $monthuploaded = date ("F", filemtime($key));
   //echo $month.'<br>';
   if($monthuploaded === $month){
   $date = date ("d", filemtime($key)) . '<br>';

   //array_push($$did, $date);

   if($date == 01){
    array_push($a01, $date);
   }
   if($date == 02){
    array_push($a02, $date);
   }
   if($date == 03){
    array_push($a03, $date);
   }
   if($date == 04){
    array_push($a04, $date);
   }
   if($date == 05){
    array_push($a05, $date);
   }
   if($date == 06){
    array_push($a06, $date);
   }
   if($date == 07){
    array_push($a07, $date);
   }
   if($date == 08){
    array_push($a08, $date);
   }
   if($date == 09){
    array_push($a09, $date);
   }
   if($date == 10){
    array_push($a10, $date);
   }
   if($date == 11){
    array_push($a11, $date);
   }
   if($date == 12){
    array_push($a12, $date);
   }
   if($date == 13){
    array_push($a13, $date);
   }
   if($date == 14){
    array_push($a14, $date);
   }
   if($date == 15){
    array_push($a15, $date);
   }
   if($date == 16){
    array_push($a16, $date);
   }
   if($date == 17){
    array_push($a17, $date);
   }
   if($date == 18){
    array_push($a18, $date);
   }
   if($date == 19){
    array_push($a19, $date);
   }
   if($date == 20){
    array_push($a20, $date);
   }
   if($date == 21){
    array_push($a21, $date);
   }
   if($date == 22){
    array_push($a22, $date);
   }
   if($date == 23){
    array_push($a23, $date);
   }
   if($date == 24){
    array_push($a24, $date);
   }
   if($date == 25){
    array_push($a25, $date);
   }
   if($date == 26){
    array_push($a26, $date);
   }
   if($date == 27){
    array_push($a27, $date);
   }
   if($date == 28){
    array_push($a28, $date);
   }
   if($date == 29){
    array_push($a29, $date);
   }
   if($date == 30){
    array_push($a30, $date);
   }
}

}

$arr = get_defined_vars();

foreach ($arr as $key => $value) {
    if($key[0] === 'a'){

        array_push($array, count($value));

    }
    # code...
}




$graph->addData($array);
$graph->setTitle('Widgets Produced');
$graph->setTitleColor('yellow');
$graph->setupYAxis(0, 'yellow');
$graph->setupXAxis(0, 'yellow');
$graph->setBarOutlineColor('blue');
$graph->setDataPoints(true);
$graph->setDataPointColor('teal');
$graph->setLine(true);
$graph->setLineColor('yellow');
$graph->setLegend(true);
$graph->setLegendOutlineColor('white');
$graph->setLegendTitle('Week-37', 'Week-38');

//$graph->setDataFormat('degrees');
//$graph->setTitleLocation('left');
//$graph->setXValuesHorizontal(true);
//$graph->setBackgroundColor("green");
//$graph->setGradient('blue', 'black');
//$graph->setGrid(false);

$graph->setLegendTextColor('red');


$graph->setBars(false);
$graph->setGridColor('153,204,255');
$graph->setDataValues(true);
$graph->setDataValueColor('navy');
$graph->setGoalLine('4');
$graph->setGoalLineColor('red');
$graph->setTextColor('red');
$graph->setBarColor('0,0,0');
$graph->setXAxisTextColor ('purple');
$graph->createGraph();






