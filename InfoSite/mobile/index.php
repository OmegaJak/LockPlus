<?php

$dir    = '../themes/themepreview';
$list = glob("$dir/*.jpg");
$themeNames = array();

function mtimecmp($a, $b) {
        $mt_a = filemtime($a);
        $mt_b = filemtime($b);
        if ($mt_a == $mt_b)
            return 0;
        else if ($mt_a < $mt_b)
            return -1;
        else
            return 1;
    }
usort($list, "mtimecmp");
$reversed = array_reverse($list);

foreach ($reversed as $key => $value) {
  $value = basename($value,'.jpg');
  array_push($themeNames, $value);
  # code...
}


$js_array = json_encode($themeNames);
echo "var theme_array = ". $js_array . ";\n";

file_put_contents("theme.js", "var theme_array = ". $js_array . ";\n");


 ?>