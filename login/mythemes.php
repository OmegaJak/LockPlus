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
	var newName = prompt('Enter new name');
	location.href = 'rename.php?name=' + newName + '&old='+old;
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
	//echo "Site is currently under maintenance.<br>";
	echo "<div class='refreshList'><a class='link' href='http://lockplus.us/php/user.php' target='_blank'>Refresh Theme List (takes awhile)</a></div>";
	$dir    = '../php/themes';
	$list = glob("$dir/*.plist");
	$name = $fgmembersite->UserFullName(); //username
	$dlCount = unserialize(file_get_contents('../php/count/dlcount.bin'));
	$themeDev = unserialize(file_get_contents('../php/user/userList.bin'));
	foreach ($themeDev as $key) {
		$split = explode("~", $key);
		$dev = $split[0];
		$count = 0;
		if(stripos($dev, $name)){
			$baseName = basename($split[1],'.plist');
			$pname = basename($split[1]);
				if(file_exists('../php/themepreview/'.$baseName.'.jpg')){ //if preview exists use it
			      $preview = '../php/themepreview/'.$baseName.'.jpg';
			    }else{
			      $preview = 'none';
			    }
			    if(array_key_exists($split[1], $dlCount)){ //if count exists for theme
			      $count = $dlCount[$split[1]];
			    }
			echo '<div class="theme">
			    	<img title="'.$baseName.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $preview . '"/>
			    	<span class="themeName">'.$pname.'<br> Downloads:' . $count . '</span>
			    	<center><a href="delete.php?name='.$pname.'" class="delete">DELETE</a>
			    	<a title="'.$key.'" onclick="rename(this.title)" class="rename">RENAME</a>
			    	<a title="'.$baseName.'" onclick="load(this.title)" class="edit">EDIT</a></center>
			    	</div>';
		}
	}
?>
</p>
<br>
<br>

</div>
</body>
</html>
