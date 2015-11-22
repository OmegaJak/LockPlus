<?php

set_time_limit(0);
ignore_user_abort(1);

$dir = 'creators';
$list = glob("$dir/*.txt");

foreach ($list as $key) {
    $lines = file($key);
    $lines = array_unique($lines);
    file_put_contents($key, implode($lines));
}

    echo "Done";
?>
