<?php
/*
//check files
$dir    = '../../tmp/awstats/';
$files1 = scandir($dir);
foreach ($files1 as $key => $value) {
  echo $value.'<br>';
}
//get all directories
function listFolderFiles($dir){
    $ffs = scandir($dir);
    echo '<ol>';
    foreach($ffs as $ff){
        if($ff != '.' && $ff != '..'){
            echo '<li>'.$ff;
            if(is_dir($dir.'/'.$ff)) listFolderFiles($dir.'/'.$ff);
            echo '</li>';
        }
    }
    echo '</ol>';
}

listFolderFiles('../../');
*/
?>


<?php

$themeArray = array();
$parser = new awstatsDataParser('../../tmp/awstats/awstats082015.lockplus.us.txt'); //first
$parser2 = new awstatsDataParser('../../tmp/awstats/awstats072015.lockplus.us.txt'); //second

//$n = $parser->info['SIDER_404'];
//$o = $parser2->info['SIDER_404'];

$n = $parser->info;
foreach ($n as $key => $value) { //list of available stats from aw
  echo $key.'<br>';
}

$s= $parser->info['SIDER'];
$e= $parser2->info['SIDER'];
//print_r($s);

foreach ($s as $key => $value) { //first
  $d = split('[.]', $key);
  if($d[1] === 'plist'){ //check if has plist
   // if($key === '/php/themes/Outlook.plist'){
        if(is_numeric($value[0])){ //only get numbers
          $themeArray[$key] = $value[0] = array($value[0]);
        }
   // }
  }
}

foreach ($e as $key => $value) { //second
  $d = split('[.]', $key);
  if($d[1] === 'plist'){ //check if has plist
    //if($key === '/php/themes/Outlook.plist'){
        if(is_numeric($value[0])){
          if(in_array($themeArray[$key], $themeArray)){
            array_push($themeArray[$key], $value[0]);
          }else{
            $themeArray[$key] = $value[0];
          }
        }
    //}
  }
}

$final = array();
foreach ($themeArray as $key => $value) {
  array_push($final, $key.'~'.array_sum($value)); //push into a single line
}
file_put_contents('count/dl.bin', serialize($final)); //write to bin so all other files can read these stats

class awstatsDataParser {
  function __construct($filename) {
    $this->filename = $filename;
    $this->parse();
  }

public $info = array();


public function parse() { //parse through text file
  $part = '';
  $log = file($this->filename);
  foreach ($log as $line) {
    $line = trim($line);

    $pos = $this->findPart($line, 'BEGIN_');
    if ($pos!==false) {
      $part = $pos;
    } else {
      $pos = $this->findPart($line, 'END_');
      if ($pos!==false) {
        $part = '';
      }
    }

    if ($pos===false) {

      if (!isset($this->info[$part])) {
        $this->info[$part] = array();
      }

      switch ($part) {
        case '':
        case 'MAP':
        case 'MISC':
          break;
        case 'GENERAL':
          $this->parseGeneral($line, $part);
          break;
        case 'TIME':
          $this->parseHour($line, $part);
          break;
        case 'DAY':
          $this->parseDay($line, $part);
          break;
        case 'VISITOR':
//          $this->parseVisitor($line, $part);
          break;
        case 'DOWNLOADS':
          $this->parseDownloads($line, $part);
          break;
        case 'OS':
          $this->parseOS($line, $part);
          break;
        case 'PAGEREFS':
          $this->parsePageRefs($line, $part);
          break;
        case 'UNKNOWNREFERERBROWSER':
        case 'UNKNOWNREFERER':
        case 'BROWSER':
          $this->parseBrowser($line, $part);
          break;
        default:
          $this->parseDefault($line, $part);
      }



    }
  }
}

function parseGeneral($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  if ($key=='FirstTime' || $key=='LastTime') {
    $this->info[$part][$key] = $value[0];
  }
}

function parseHour($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  $this->info[$part][$key] = array(
                    'Pages'=> $value[0],
                    'Hits'=> $value[1],
                    'Bandwidth'=> $value[2],
                  );
}

function parseDay($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  $this->info[$part][$key] = array(
                    'Pages'=> $value[0],
                    'Hits'=> $value[1],
                    'Bandwidth'=> $value[2],
                  );
}

function parsePageRefs($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  $this->info[$part][$key] = array(
                    'Pages'=> $value[0],
                    'Hits'=> $value[1],
                  );
}

function parseVisitor($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  $this->info[$part][$key] = array(
                    'Pages'=> $value[0],
                    'Hits'=> $value[1],
                    'Bandwidth'=> $value[2],
                  );
}

function parseDownloads($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  $this->info[$part][$key] = array(
                    'Downloads'=> $value[0],
                    'Hits'=> $value[1],
                    'Bandwidth'=> $value[2],
                  );
}

function parseOS($line, $part) {
  $value = explode(' ', $line);
  $this->info[$part][$value[0]] = $value[1];
}

function parseBrowser($line, $part) {
  $value = explode(' ', $line);
  if (isset($value[1])) {
    $this->info[$part][$value[0]] = $value[1];
  }
}

function parseDefault($line, $part) {
  $value = explode(' ', $line);
  $key = array_shift($value);
  $this->info[$part][$key] = $value;
}

public function findPart($line, $key) {
  $pos = strpos($line, $key);
  if ($pos!==false && $pos==0) {
    $keyLength = strlen($key);
    $pos2 = strpos($line, ' ');
    if ($pos2===false) $pos2 = strlen($line);
    $part = substr($line, strlen($key), $pos2-$keyLength);
    return $part;
  }
  return false;
}

}

?>

