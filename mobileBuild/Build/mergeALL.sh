#!/bin/bash

echo "************ Merging CSS ****************"

sh ./mergeCSS.sh

echo "************ Compress CSS ****************"

sh ./compressCSS.sh main ../../mobile/css/main.css

echo "************ Merging/Compress JS Includes ****************"

sh ./mergeJS.sh ../../js/jquery-2.1.4.min.js ../../js/slick.min.js ../../js/jquery.mousewheel.min.js ../../js/jquery-ui.js ../../js/spectrum.js ../../js/prefixfree.min.js ../../js/StackBlur.js ../../mobile/includes.js

echo "************ Merging/Compress JS ****************"

sh ./mergeJS.sh ../../js/arrays.js ../../mobile/compiled/js/app.js ../../mobile/compiled/js/constants.js ../../mobile/compiled/js/main.js ../../mobile/compiled/js/widget.js ../../mobile/compiled/js/toolpanel.js ../../mobile/compiled/js/powerange.js ../../mobile/compiled/js/editmenu.js ../../mobile/compiled/js/elementmenu.js ../../mobile/mobilemain.js
