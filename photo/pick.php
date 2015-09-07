<style type="text/css">
body{
    font-family: helvetica;
}
.preview div{
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
}
span{
    width: 100%;
    text-align: center;
    display: block;
}
a{
    color: black;
    text-decoration: none;
}
</style>

<?php
$url = $_GET['url'];
echo '<div class="preview">';

echo '<div><a href=""><img src="type/original.png" width="200"/><br><span>Original</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/light.php?url='.$url.'"><img src="type/light.png" width="200"/><br><span>Light</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/vintage.php?url='.$url.'"><img src="type/vintage.png" width="200"/><br><span>Vintage</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/out.php?url='.$url.'"><img src="type/out.png" width="200"/><br><span>Out</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/edge.php?url='.$url.'"><img src="type/edge.png" width="200"/><br><span>Edge (slow)</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/edgesmooth.php?url='.$url.'"><img src="type/edgesmooth.png" width="200"/><br><span>Edge Smooth (slow)</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/bw.php?url='.$url.'"><img src="type/bw.png" width="200"/><br><span>Black & White</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/sepia.php?url='.$url.'"><img src="type/sepia.png" width="200"/><br><span>Sepia</span></a></div>';
echo '<div><a href="http://LockPlus.us/filters/type/emboss.php?url='.$url.'"><img src="type/emboss.png" width="200"/><br><span>Emboss</span></a></div>';

echo '</div>';
?>