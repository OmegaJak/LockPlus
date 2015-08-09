<?php
require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";
?>

<?php
echo '<style>
  body {

   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 200; -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: rgba(0,0,0,0);
 }
  h3 {
    margin: 0 auto;
    margin-left:30px;
      text-align:center;
      display:block;
      padding-bottom:5px;
      color:#54606e;
  }
  body {
      background-color: #21b9b0;
  }
  input {
      border-radius: 20px;
      padding: 5px;
      border: 1px solid transparent;
      position: relative;
      left: 16px;
      color: gray;

  }
  form{
       text-align: center;
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
  </style>';
error_reporting(0);
echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
echo '<link rel="stylesheet" href="preview.css" type="text/css">';
echo '<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>';
echo '<form action="search.php" method="GET">
</br>
          <h3>Search Themes</h3>
          <input type="text" name="name"><br>
      <input type="submit">
    </form>';

$dir    = 'themes';
$list = glob("$dir/*.plist");
function mtimecmp($a, $b) {
        $mt_a = filemtime($a);
        $mt_b = filemtime($b);
        if ($mt_a == $mt_b)
            return 0;
        else if ($mt_a < $mt_b)
            return -1;
        else
            return 1;
    }
usort($list, "mtimecmp");
$reversed = array_reverse($list);

$page = $_GET['page'];
$pagedResults = new Paginated($reversed, 24, $page);
echo '<div id="contain">';
while($row = $pagedResults->fetchPagedRow()) {  //when $row is false loop terminates
    $path = $row;
    $name = basename($row,'.plist');
    $plistDocument = new DOMDocument();
    $plistDocument->load($path);
    $array = parsePlist($plistDocument);
    echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
  }
echo "</div>";
  $pagedResults->setLayout(new DoubleBarLayout());
  echo $pagedResults->fetchPagedNavigation();

/*foreach ($reversed as $filename) {
	$path = $filename;
	$name = basename($filename,'.plist');
	$plistDocument = new DOMDocument();
	$plistDocument->load($path);
	$array = parsePlist($plistDocument);
  echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
}*/




function parseValue( $valueNode ) {
  $valueType = $valueNode->nodeName;

  $transformerName = "parse_$valueType";

  if ( is_callable($transformerName) ) {
    // there is a transformer function for this node type
    return call_user_func($transformerName, $valueNode);
  }

  // if no transformer was found
  return null;
}
function parse_integer( $integerNode ) {
  return $integerNode->textContent;
}

function parse_string( $stringNode ) {
  return $stringNode->textContent;
}

function parse_date( $dateNode ) {
  return $dateNode->textContent;
}

function parse_true( $trueNode ) {
  return true;
}

function parse_false( $trueNode ) {
  return false;
}
function parse_dict( $dictNode ) {
  $dict = array();

  // for each child of this node
  for (
    $node = $dictNode->firstChild;
    $node != null;
    $node = $node->nextSibling
  ) {
    if ( $node->nodeName == "key" ) {
      $key = $node->textContent;

      $valueNode = $node->nextSibling;

      // skip text nodes
      while ( $valueNode->nodeType == XML_TEXT_NODE ) {
        $valueNode = $valueNode->nextSibling;
      }

      // recursively parse the children
      $value = parseValue($valueNode);

      $dict[$key] = $value;
    }
  }

  return $dict;
}

function parse_array( $arrayNode ) {
  $array = array();

  for (
    $node = $arrayNode->firstChild;
    $node != null;
    $node = $node->nextSibling
  ) {
    if ( $node->nodeType == XML_ELEMENT_NODE ) {
      array_push($array, parseValue($node));
    }
  }

  return $array;
}


$plistDocument = new DOMDocument();
$plistDocument->load($path);

function parsePlist( $document ) {
  $plistNode = $document->documentElement;

  $root = $plistNode->firstChild;

  // skip any text nodes before the first value node
  while ( $root->nodeName == "#text" ) {
    $root = $root->nextSibling;
  }

  return parseValue($root);
}

?>
