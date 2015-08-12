<html>
<head>
    <title></title>
</head>
<body onload="check()">

<?php include 'table.html'; ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
var array = [];
function check(){
    var rows = $('.aws_data > tbody > tr');

    for (var i = 1; i < rows.length; i++) {
        var ed = $(rows[i]).children();
        var theme = ed[0].textContent;
        var stat = ed[1].textContent;
        array.push(theme+'~'+stat);

    }


elements = array.join(',')
$.post('show.php', {elements: elements})
}

</script>

</body>
</html>