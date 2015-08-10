<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/preview.css" type="text/css">
<script>function viewtheme(d){window.location.href = "http://lockplus.us/preview?" + d;}</script>

<?php
error_reporting(0);
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


$devs = array();
$counts = array();
$themes = array();
foreach ($reversed as $filename) {
	$path = $filename;
	$name = basename($filename,'.plist');
	$plistDocument = new DOMDocument();
	$plistDocument->load($path);
	$array = parsePlist($plistDocument);
  $tname = $array['ThemeName'];
  $artist = $array['DevName'];
  if(!isset($devs[$artist])) {
        $devs[$artist] = array();
    }
    $devs[$artist][] = $tname;

  //$devs[$array['DevName']] = $tname;
  array_push($counts, $array['DevName']);
  array_push($themes, $array['ThemeName']);
//print_r($devs);
  //echo $array['DevName'] . '<br>';
  //echo '<div class="theme"><img title="'.$name.'" onclick="viewtheme(this.title)" class="themeImage" src="' . $array['ThemePreview'] . '"/><span class="themeName">'.$name.'</span></div>';
}

//print_r($devs);

$result = array_unique($counts);
$total = count($result);
echo '<span style="color:white;">Total Creators: '. $total . '</span><br/>';

$resulttheme = array_unique($themes);
$totalthemes = count($resulttheme);
echo '<span style="color:white;">Total Themes: '. $totalthemes . '</span><br/>';


foreach($devs as $key=>$subarray)
{
    echo '<section><div class="themerstat"><b>'.$key.'</b><span class="countstat">  ('.count($subarray).') themes</span></div>';
    foreach($devs[$key] as $subarray)
    {
        echo '<span><a class="liststat" href="http://LockPlus.us/preview/?'.$subarray.'"><br><div class="themestat"><img class="themeimg" src="themepreview/'.$subarray.'.jpg" width="40"/></div></a>  ';
    }
    echo '<br></section>';
}




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
