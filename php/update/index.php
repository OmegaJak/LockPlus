<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://lockplus.us/php/delete.php');
curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
curl_setopt($ch, CURLOPT_TIMEOUT_MS, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 1);
curl_exec($ch);
curl_close($ch);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://lockplus.us/walls/save.php');
curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
curl_setopt($ch, CURLOPT_TIMEOUT_MS, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 1);
curl_exec($ch);
curl_close($ch);

?>