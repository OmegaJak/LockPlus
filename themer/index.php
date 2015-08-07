<html>
<head>
  <title></title>
  <meta name=viewport content="width=device-width, initial-scale=1">
  <style type="text/css">
  body {
   text-align: center;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 200; -webkit-font-smoothing: antialiased;
 }
  #container { display: inline-block; }
  li{
    list-style-type: none;
    text-align: left;
    background-color: #21b9b0;
    padding: 5px;
    margin: 5px;
    text-align: center;
    border-radius: 5px;
  }
  li:hover{
    cursor: pointer;
  }
  </style>
</head>
<body>
  <div id="container">
    <ul id="list">
      Top Themers
      <li>JunesiPhone</li>
      <li>JokerG7</li>
      <li>Frenchitouch</li>
      <li>AbdulMuksith</li>
      <li>Wardever</li>
      <li>MrTh3m3s</li>
      <li>OmegaJak</li>
      <li>Keith424</li>
      <li>ziggy7</li>
      <li>AestheticMartian</li>
    </ul>
  </div>
      <center>
      <form action="themer.php" method="GET">
      Enter Themer: <input type="text" name="name"><br>
      <input type="submit">
    </form>
  </center>
  <script type="text/javascript">
  document.getElementById('list').addEventListener('click',function(el){
    location.href = 'http://LockPlus.us/themer/themer.php?name=' + el.target.innerHTML;
  });
  </script>
</body>
</html>