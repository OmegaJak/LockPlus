<?php
$dir = "files";
$checksums = array();
$deletedArray = array();
if ($h = opendir($dir)) {
    while (($file = readdir($h)) !== false) {
        if(is_dir($_="{$dir}/{$file}")) continue;
        $hash = hash_file('md5', $_);
        if (in_array($hash, $checksums)) {
            unlink($_);
            array_push($deletedArray, $_);
        }
        else {
            $checksums[] = $hash;
        }
    }
    closedir($h);
}
echo 'Deleted ' . count($deletedArray);
?>