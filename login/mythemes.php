<?PHP
require_once("./include/membersite_config.php");

if(!$fgmembersite->CheckLogin())
{
    $fgmembersite->RedirectToURL("login.php");
    exit;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}
function rename(old){
	var usr = document.getElementById('rn').innerHTML; //title lmao
	var newName = prompt('Enter new name');
	location.href = 'rename.php?name=' + newName + '&old='+old + '&user=' + usr;
}
function load(name){
	location.href = 'http://lockplus.us/load/get.php?theme=' + name;
}
</script>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<style>
.delete{
	width:100%;
	text-align: center;
	background-color: #54606e;
	padding: 5px;
	border-radius: 2px;
	color:white;
	text-decoration: none;
}
.rename{
	position: relative;
	top:10px;
	background-color: #54606e;
	padding: 5px;
	border-radius: 2px;
	color:white;
	text-decoration: none;
}
.rename:hover{
	cursor: pointer;
}
.edit{
	position: relative;
	top:20px;
	margin-top:10px;
	background-color: #54606e;
	padding: 5px;
	border-radius: 2px;
	color:white;
	text-decoration: none;
}
.edit:hover{
	cursor: pointer;
}

p{
	color:white;
}
#top{
	background-color: #54606e;
	padding: 5px;
	border-radius: 2px;
}
</style>
<head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
      <title>Theme Editing</title>
      <link rel="STYLESHEET" type="text/css" href="style/fg_membersite.css">
      <style>
      .refreshList{
      	position: relative;
      	top:0;
      	width: 230px;
      	text-align: center;
      	border-radius: 3px;
      	background-color: #54606e;
      	color: white;
      	opacity:0;
      }
      .link{
      	text-decoration: none;
      	color:white;
      }
      </style>
</head>
<body>
<div id='fg_membersite_content'>
<p id="top">
Showing themes for: <?= $fgmembersite->UserFullName() ?>
</p>
<!--<a href='login-home.php'>Home</a>-->

<?php
/*
    Themes now load from user/userList.bin. Updates by http://LockPlus.us/php/user.php
*/
	set_time_limit(0);
	//echo "Site is currently under maintenance. DONT PRESS ANYTHING<br>";
	echo "<div class='refreshList'><a class='link' href='http://lockplus.us/php/user.php' target='_blank'>Refresh Theme List (takes awhile)</a></div>";
	$dir    = '../php/themes';
	$list = glob("$dir/*.plist");
	$name = $fgmembersite->UserFullName(); //username
	$dlCount = unserialize(file_get_contents('../php/count/dlcount.bin'));
	$themeDev = unserialize(file_get_contents('../php/user/userList.bin'));

	$lines = file("../php/creators/".$name.".txt", FILE_IGNORE_NEW_LINES); //get themer .txt file

   foreach ($lines as $key) {
      $theme = basename($key,'.plist');

      if(file_exists('../php/themepreview/'.$theme.'.jpg')){ //if preview exists use it
            $preview = '../php/themepreview/'.$theme.'.jpg';
          }else{
          	//get image from plist (SLOW)
            $str = utf8_encode(file_get_contents('../php/themes/'.$theme.'.plist'));
        	$xml = simplexml_load_string($str);
        	$preview = $xml->dict->string[2];
          }

            $count = 0;

            if(array_key_exists('themes/'.$theme.'.plist', $dlCount)){ //if count exists for theme
			      $count = $dlCount['themes/'.$theme.'.plist'];
			    }

            echo '<div class="theme">
            		<title id="rn">'.$name.'</title>
			    	<img title="'.$theme.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $preview . '"/>
			    	<span class="themeName">'.$theme.'<br> Downloads:' . $count . '</span>
			    	<center><a href="delete.php?name='.$theme.'.plist-'.$name.'" class="delete">DELETE</a>
			    	<a id="rn" title="'.$key.'" onclick="rename(this.title)" class="rename">RENAME</a>
			    	<a title="'.$theme.'" onclick="load(this.title)" class="edit">EDIT</a></center>
			    	</div>';
   }
?>
</p>
<br>
<br>

</div>
</body>
</html>
