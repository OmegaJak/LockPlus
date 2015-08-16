<html>
<head>
  <title></title>
  <meta name=viewport content="width=device-width, initial-scale=1">
  <style type="text/css">
  body {
   text-align: center;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 200; -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: rgba(0,0,0,0);
 }
  #container { display: inline-block; }
  h3 {
      left: 18px;
      position: relative;
  }
  body {
      background-color: #21b9b0;
      color: white;
  }
  input {
      border-radius: 20px;
      padding: 5px;
      border: 1px solid transparent;
      position: relative;
      left: 16px;
      color: gray;
  }
  input:focus {
      outline: 0;
  }
  input[type=submit] {
      text-align: center;
      width: 100px;
      display: block;
      margin: 10px auto;
      border-radius: 20px;
      padding: 5px;
      border: 1px solid transparent;
      background-color: #54606e;
      color: white;
      cursor: pointer;
      position: relative;
      left: 16px;
  }
  input[type=submit]:hover {
      background-color: #39414A;
  }
  li{
    list-style-type: none;
    text-align: left;
    background-color: #54606e;
    padding: 5px;
    margin: 5px;
    text-align: center;
    border-radius: 5px;
    color:white;
  }
  li:hover{
    cursor: pointer;
    background-color: #39414A;
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
      <li>JasonM</li>
      <li>Max_Pa1n</li>
      <li>OtisHuff</li>
      <li>Andorri</li>
      <li>Greg Wolff</li>
      <li>id3viant</li>
      <li>Kamilli0n</li>
      <li>justin</li>
    </ul>
  </div>
      <center>
      <form action="themer.php" method="GET">
          <h3>Enter Themer:</h3>
          <input type="text" name="name"><br>
      <input type="submit">
    </form>
  </center>
  <script type="text/javascript">
  document.getElementById('list').addEventListener('click',function(el){
    var inside = el.target.innerHTML.replace(/ /g,"%20");
    location.href = 'http://LockPlus.us/themer/themer.php?name=' + inside;
  });
  </script>
</body>
</html>