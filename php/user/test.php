<?php

	$userList = unserialize(file_get_contents('userList.bin'));
	$userName = 'JunesiPhone';

	foreach ($userList as $key => $value) {
		if(stripos($value, $userName)){
			echo $value . '<br>';
		}
	}

 ?>