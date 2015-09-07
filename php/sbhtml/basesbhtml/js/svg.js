(function() { //svg parsing
    "use strict";
    var desvg = function(selector, removeInlineCss) {
        removeInlineCss = removeInlineCss || false;
        var images,
            imagesLength,
            sortImages = {},
            loadSvg = function (imgURL, replaceImages) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', imgURL, true);
                xhr.onload = function() {
                    var xml,
                        svg,
                        paths,
                        replaceImagesLength;
                    xml = xhr.responseXML;
                    replaceImagesLength = replaceImages.length;
                    if (!xml) {
                        return;
                    }
                    svg = xml.documentElement;
                    paths = svg.querySelectorAll('path');
                    if (removeInlineCss) {
                        for (var i = 0; i < paths.length; i++) {
                            paths[i].removeAttribute('style');
                        }
                    }
                    svg.removeAttribute('xmlns:a');
                    while(replaceImagesLength--) {
                        replaceImgWithSvg(replaceImages[replaceImagesLength], svg.cloneNode(true));
                    }
                };
                xhr.send();
            },
            replaceImgWithSvg = function (img, svg) {
                var imgID = img.id,
                    imgClasses = img.getAttribute('class');
                if (imgID) {
                    svg.id = imgID;
                }
                if (imgClasses) {
                    svg.setAttribute('class', imgClasses + ' replaced-svg');
                }
                img.parentNode.replaceChild(svg, img);
            };
        images = document.querySelectorAll(selector);
        imagesLength = images.length;
        while (imagesLength--) {
            var _img = images[imagesLength],
                _imgURL = _img.getAttribute('src');
            if(sortImages[_imgURL]) {
                sortImages[_imgURL].push(_img);
            } else {
                sortImages[_imgURL] = [_img];
            }
        }
        for (var key in sortImages) {
            if (sortImages.hasOwnProperty(key)) {
                loadSvg(key, sortImages[key]);
            }
        }
    };
    window.showSVG = desvg;
})();