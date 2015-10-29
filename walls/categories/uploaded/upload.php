<?php

function  makeFileName($size=6, $path="/", $extension=".gif"){
    //if you give a path, don't forget the slash at end
    $root = $_SERVER["DOCUMENT_ROOT"];
    $name = rand(0, str_repeat(9, $size));
    $name = $root.$path.str_pad($name, 8,  0, STR_PAD_LEFT).$extension;
    while(is_file($name)){
        makeFileName();
    }
    return $path.$name;
}


$target_dir = "";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        //echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        //echo "File is not an image.";
        $uploadOk = 0;
    }
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {

	$extension = pathinfo($target_file, PATHINFO_EXTENSION);
	$random = uniqid();
	$newName =  $random.'.'.$extension;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $newName)) {
        //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        //echo "Sorry, there was an error uploading your file.";
    }
}

echo '<script> location.href = "http://lockplus.us/walls/categories/uploaded";</script>';
?>