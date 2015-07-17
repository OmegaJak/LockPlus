document.getElementById('themelist').addEventListener('click',function(el){
	location.href = location.href.replace('#', '') + 'get.php?theme='+el.target.title;
});
