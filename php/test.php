<?php

$str = '{"datedotmonth":{"z-index":2,"color":"white","font-family":"bariol","position":"absolute","font-size":"30px","top":247,"left":76},"monthline":{"z-index":2,"color":"rgb(240, 17, 17)","font-family":"helvetica","position":"absolute","font-size":"30px","top":316,"left":50}}';

echo $str;

$manage = (array) json_decode($str);

$fontArray = array();

foreach ($manage as $key => $value) {
    foreach ($value as $key => $value) {
        if($key === 'font-family'){
            if($value !== 'helvetica'){
                echo $value;
                array_push($fontArray, $value);
            }
        }
    }
}

 ?>