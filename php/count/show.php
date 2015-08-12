<?php

$elements = $_POST['elements'];
$ex = explode(',', $elements);
file_put_contents('dl.bin', serialize($ex));

 ?>