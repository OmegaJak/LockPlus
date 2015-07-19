<html>
<head>
	<title>LockPlus Saved</title>
<style type="text/css">
html{
    background: url(../css/bg.jpg) no-repeat center center fixed ;
    background-size: cover;
}
body{
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 200;
	-webkit-font-smoothing: antialiased;
}
#refresh{
    position: absolute;
    width: 100%;
    text-align: center;
    top:50%;
    color:white;
    font-size: 30px;
    -webkit-transform: translate(0% -50%);
}
.img{
	position: absolute;
	top:13%;
	left:43%;
	-webkit-transform: translate(-50% -50%);
}
.buttons{
	position: absolute;
	top:60%;
	left:50%;
    -webkit-transform: translate(-50%);
}
.btn{
    position: relative;
    text-align: center;
    background-color: #21b9b0;
    padding: 10px;
    border-radius: 9999px;
    text-decoration: none;
    color:white;
    font-size: 19px;
    margin-left:10px;
}
.btn:hover{
  background-color: #54606e;
}
</style>
</head>
<body>

	<?php
	$query = $_SERVER['QUERY_STRING'];
	echo '<img class="img" src="thumb.png" width="200"/>';
	echo '<div id="refresh">Great job! <b>'.$query.'</b> lockscreen has been saved.</div>';
	echo '<div class="buttons"><a id="twitterShare" class="twitter-share-button btn" href="https://twitter.com/intent/tweet?url=http%3A%2F%2FLockPlus.us/preview?'.$query.'&text=I%20just%20created%20a%20lockscreen%20named%20'.$query.',%20check%20it%20out%20here.&hashtags=LockPlus">Share via Twitter</a>';
	echo '<a id="viewTheme" class="btn" href="http://lockplus.us/preview?'.$query.'">View theme page</a>';
	echo '<a id="makeAnother" class="btn" href="http://lockplus.us">Create another</a></div>'
	?>

</body>
</html>