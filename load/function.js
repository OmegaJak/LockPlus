function opentheme(title) {
   location.href =  'http://lockplus.us/creator/load/get.php?theme=' + title;
}

function loadtheme() {
	var name = window.prompt("Enter theme name");
	if(name.length > 0){
		name = encodeURIComponent(name.trim());
		location.href = 'http://lockplus.us/creator/load/get.php?theme=' + name;
	}else{
		alert("You must enter a name.");
	}
}
