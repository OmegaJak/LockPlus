<?php
require_once "pages/Paginated.php";
require_once "pages/DoubleBarLayout.php";
?>

<?php
if($_GET["name"]){
$entered = $_GET["name"];
error_reporting(0);
echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
echo '<link rel="stylesheet" href="../php/preview.css" type="text/css">';
echo '<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>';
echo '  <style>body {text-align:center;background-color: #21b9b0;}</style>';
$dir    = '../php/themes';

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
$pagedResults = new Paginated($reversed, 10000, $page);

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

  for (
    $node = $dictNode->firstChild;
    $node != null;
    $node = $node->nextSibling
  ) {
    if ( $node->nodeName == "key" ) {
      $key = $node->textContent;
      $valueNode = $node->nextSibling;
      while ( $valueNode->nodeType == XML_TEXT_NODE ) {
        $valueNode = $valueNode->nextSibling;
      }
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
  while ( $root->nodeName == "#text" ) {
    $root = $root->nextSibling;
  }
  return parseValue($root);
}

while($row = $pagedResults->fetchPagedRow()) {  //when $row is false loop terminates


if (file_exists($row)) {
    $xml = simplexml_load_file($row);
    $dev = $xml->dict->string[0];
	$artist = preg_replace("/[^A-Za-z0-9 ]/", '', $dev);
    $entered =  preg_replace("/[^A-Za-z0-9 ]/", '', $entered);
    if(strtolower($entered) === strtolower($artist)){
    	$name = $xml->dict->string;
    	$preview = $xml->dict->string[2];
    	echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $preview . '"/><span class="themeName">'.$name.'</span></div>';
  	}
} else {
    exit('Failed to open');
}

   /* $path = $row;
    $name = basename($row,'.plist');
    $plistDocument = new DOMDocument();
    $plistDocument->load($path);
    $array = parsePlist($plistDocument);
    $artist = preg_replace("/[^A-Za-z0-9 ]/", '', $array["DevName"]);
    $entered =  preg_replace("/[^A-Za-z0-9 ]/", '', $entered);
    if($entered === $artist){
    	echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
  	}*/
  }
  $pagedResults->setLayout(new DoubleBarLayout());
}
