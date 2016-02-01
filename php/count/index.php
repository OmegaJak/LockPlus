<?php
$array = unserialize(file_get_contents('dl.bin'));
foreach ($array as $key) {
	$pieces = explode("~", $key);
	echo $pieces[0] . '   - ' . $pieces[1] . '<br>';
}
 ?>