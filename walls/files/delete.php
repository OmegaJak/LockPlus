<?php

$name = $_GET['name'];
unlink($name);

header("Location: http://lockplus.us/walls/files/deletewalls.php");
die();

 ?>