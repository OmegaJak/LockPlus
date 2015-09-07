<?php
  $url = $_GET['url'];
  error_reporting(E_ALL);
  ini_set( 'display_errors','1');
  $image = imagecreatefrompng('../'.$url);
  //imagefilter($image, IMG_FILTER_GAUSSIAN_BLUR);
  imagefilter($image, IMG_FILTER_EDGEDETECT);
  //imagefilter($image, IMG_FILTER_EMBOSS);

// GD images can be true-color or indexed color. This makes a difference for getting
// and setting pixels so we'll take note of each image.
// Load the base image. For overlays, this should be the template ("overlay.png" in source)
$baseImage = imagecreatefrompng('../'.$url);
$baseIsTrueColor = imageistruecolor($baseImage);
// Load the image to blend on top.
$topImage = $image;
$topIsTrueColor = imageistruecolor($topImage);

// Get image dimensions
$baseWidth  = imagesx($baseImage);
$baseHeight = imagesy($baseImage);
$topWidth   = imagesx($topImage);
$topHeight  = imagesy($topImage);

// Destination X and Y - these values will center $topImage within $baseImage:
$destX = ($baseWidth - $topWidth) / 2;
$destY = ($baseHeight - $topHeight) / 2;

// OVERLAY MODE {
  // This line causes all GD operations to use the overlay algorithm
  // when blending pixels together.
  imagelayereffect($baseImage, IMG_EFFECT_OVERLAY);
  // Blend the top image onto the base image.
  imagecopy(
    $baseImage, // destination
    $topImage, // source
    // destination x and y
    $destX, $destY,
    // x, y, width, and height of the area of the source to copy
    0, 0, $topWidth, $topHeight);
// } OVERLAY

// MULTIPLY MODE {
  // Because we can't just use imagecopy, we have to iterate over all the pixels in
  // the entire image in order to apply the multiply algorithm to each individual pixel.
  // There is probably an easier way to handle true-color vs. indexed color in this
  // section but without testing the code this was the most likely to work. Depending on
  // how `imagecolorsforindex` and `imagecolorclosestalpha` work this section might work
  // a lot simpler.
  for ($x = 0; $x < $topWidth; ++$x) {
    for ($y = 0; $y < $topHeight; ++$y) {
      // First get the colors for the base and top pixels.
      $color = imagecolorat($baseImage, $x + $destX, $y + $destY);
      // If the image is true-color, we simply use bitwise operations to separate out
      // red, green, blue, and alpha from the result of imagecolorat above.
      if ($baseIsTrueColor) {
        $baseColor = array(
          'red'   => ($color >> 16) & 0xFF,
          'green' => ($color >> 8) & 0xFF,
          'blue'  => $color & 0xFF,
          'alpha' => ($color & 0x7F000000) >> 24,
        );
      }
      // If the image uses indexed color, we can get the color components by looking up
      // the color index in the image's color table.
      else {
        $baseColor = imagecolorsforindex($baseImage, $color);
      }

      $color = imagecolorat($topImage, $x, $y);
      // If the image is true-color, we simply use bitwise operations to separate out
      // red, green, blue, and alpha from the result of imagecolorat above.
      if ($topIsTrueColor) {
        $topColor = array(
          'red'   => ($color >> 16) & 0xFF,
          'green' => ($color >> 8) & 0xFF,
          'blue'  => $color & 0xFF,
          'alpha' => ($color & 0x7F000000) >> 24,
        );
      }
      // If the image uses indexed color, we can get the color components by looking up
      // the color index in the image's color table.
      else {
        $topColor = imagecolorsforindex($topImage, $color);
      }

      // Now perform the multiply algorithm.
      $destColor = array(
        'red'   => intval($baseColor['red']   * ($topColor['red']   / 255.0)),
        'green' => intval($baseColor['green'] * ($topColor['green'] / 255.0)),
        'blue'  => intval($baseColor['blue']  * ($topColor['blue']  / 255.0)),
        'alpha' => intval($baseColor['alpha'] * ($topColor['alpha'] / 127.0)),
      );

      // Now set the destination pixel.
      $colorIndex = imagecolorallocatealpha($baseImage, $destColor['red'], $destColor['green'], $destColor['blue'], $destColor['alpha']);
      // If we failed to allocate the color, try to find the already allocated color
      // that is closest to what we want.
      if ($colorIndex === FALSE) {
        $colorIndex = imagecolorclosestalpha($baseImage, $destColor['red'], $destColor['green'], $destColor['blue'], $destColor['alpha']);
      }
      // Now that we have a valid color index, set the pixel to that color.
      imagesetpixel($baseImage, $x + $destX, $y + $destY, $colorIndex);
    }
  }
// } MULTIPLY

// Set type of image and send the output
header("Content-type: image/png");
imagepng($baseImage);

// Release memory
imagedestroy($baseImage);
imagedestroy($topImage);

?>