<?php
/*
    Created to dump a list of theme names with the user, before this was done on page load, which takes forever. This is cached to make pages load faster for users.
    http://LockPlus.us/login/mythemes.php loads from the user/userList.bin created here.
*/

error_reporting(-1);

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

    $time = count($fileContents);

    //$time = 50;

    for ($i=0; $i < $time ; $i++) {
        $str = utf8_encode(file_get_contents($fileContents[$i]));
        $xml = simplexml_load_string($str);
        $dev = $xml->dict->string[1];
        array_push($devThemes, (string)$dev.'~'.$fileContents[$i]);
        $xml = null;
        $str = null;

        //echo $dev.$fileContents[$i].'<br>';
        $name = "creators/".trim(stripcslashes((string)$dev)).".txt";

        if(file_exists($name)){
            file_put_contents($name, $fileContents[$i]."\n",FILE_APPEND);
        }else{
            $themerFile = fopen($name, "w") or die($name);
            $txt = $fileContents[$i]."\n";
            fwrite($themerFile, $txt);
            fclose($themerFile);
        }

    }

    //$lines = file("creators/DDLL.txt", FILE_IGNORE_NEW_LINES);

    //print_r($lines);


   // echo 'Dev count: ' . count($devThemes) . '<br>';
    //file_put_contents('user/userList.bin', serialize($devThemes));
    //echo "Go back to the mythemes page and refresh:)";
?>
