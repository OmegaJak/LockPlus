<?php
/*
    Created to dump a list of theme names with the user, before this was done on page load, which takes forever. This is cached to make pages load faster for users.
    http://LockPlus.us/login/mythemes.php loads from the user/userList.bin created here.
*/
    $directory = 'themes';
    $fileContents = glob("$directory/*.plist");
    $devThemes = array();
    echo 'Theme Count: '.count($fileContents).'<br>';
    /* //why does this fail? for loop it is.
    foreach ($fileContents as $key) {
        $str = utf8_encode(file_get_contents($key));
        $xml = simplexml_load_string($str);
        $dev = $xml->dict->string[1];
        saveTheme($key,$dev);
        //echo $dev.'<br>';
        //array_push($devThemes, (string)$dev.'~'.$key);
    }
    */
    for ($i=0; $i < count($fileContents) ; $i++) {
        $str = utf8_encode(file_get_contents($fileContents[$i]));
        $xml = simplexml_load_string($str);
        $dev = $xml->dict->string[1];
        array_push($devThemes, (string)$dev.'~'.$fileContents[$i]);
        $xml = null;
        $str = null;
    }
    echo 'Dev count: ' . count($devThemes) . '<br>';
    file_put_contents('user/userList.bin', serialize($devThemes));
    echo "Go back to the mythemes page and refresh:)";
?>
