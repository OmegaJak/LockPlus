<?php
$dir    = 'themes';
$list = glob("$dir/*.plist");
foreach ($list as $fileinfo) {
    if (stripos($fileinfo,'test') !== false){
      echo $fileinfo . '<br>';
      unlink($fileinfo);
    }
}

$numbers = $list;
/*foreach ($list as $fileinfo) {
	$hasNumber = preg_match("/\\d/", $fileinfo);
	if($hasNumber){
		array_push($numbers, $fileinfo);
	}
}*/

$numbers = array_reverse($list);

$delete = array();
$stripped = array();
foreach ($numbers as $file) {
	$name = preg_replace("/[0-9]/", "", $file);
	if(in_array($name, $stripped)){
		array_push($delete, $file);
	}
	array_push($stripped, $name);
}


echo 'Move These<br>';
foreach ($delete as $file) {
	echo $file.'<br>';
}


?>
