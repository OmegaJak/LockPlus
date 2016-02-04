#!/bin/bash

echo "************ Merging CSS ****************"

sh ./mergeCSS.sh

echo "************ Compress CSS ****************"

sh ./compressCSS.sh main ../WebReady/main.css

echo "************ Merging/Compress JS ****************"

sh ./mergeJS.sh ../js/app.js ../js/constants.js ../js/main.js ../js/toolpanel.js ../js/powerange.js ../menu.js ../WebReady/mobilemain.js


