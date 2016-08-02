(function () {
    'use strict';

    function divMaker(type, id, clas, cssText, innerHTML) {
        var d = document.createElement(type);
        d.id = id;
        d.className = clas;
        d.style.cssText += cssText;
        d.innerHTML = innerHTML;
        return d;
    }

    var div = divMaker('div', 'Map', '', 'width:270px;height:160px;position:absolute;top:0;left:0;font-family:helvetica;', ''),
        mapImage = divMaker('div', '', 'mapImage', 'position: absolute;top:0px;left:0px;width: 256px;height: 246px;background-image: url("http://lockplus.us/creator/widgets/resources/map.png");background-size: 256px;background-position: 5px 35px;background-repeat: no-repeat;', ''),
        pinImage = divMaker('div', 'pin', '', 'position: absolute;width: 30px;height: 30px;background-image: url("http://lockplus.us/creator/widgets/resources/pin.png");background-size: cover;opacity: 0.9;', ''),
        locationI = divMaker('span', 'locationI', 'location', 'margin-left: 30px;color:white;font-size:10px;white-space: nowrap;', ''),
        coords,
        miniMap;

    pinImage.appendChild(locationI);
    mapImage.appendChild(pinImage);
    div.appendChild(mapImage);

    document.getElementById('screenElements').appendChild(div);
    document.getElementById('locationI').innerHTML = InfoStats.currentLocation();

    coords = [InfoStats.currentLatitude(), InfoStats.currentLongitude()];
    miniMap = {
        width: 256,
        height: 246,
        radius: 6378137,
        max: 85.0511287798,
        radians: Math.PI / 180,
        bounds: {
            xMin: -20037508.342789244,
            xMax: 20037508.342789244,
            yMin: -20037508.342780735,
            yMax: 18295677.409824163
        },
        mercator: function (latitude, longitude) {
            var point = {};
            point.x = this.radius * longitude * this.radians;
            point.y = Math.max(Math.min(this.max, latitude), -this.max) * this.radians;
            point.y = this.radius * Math.log(Math.tan((Math.PI / 4) + (point.y / 2)));
            return point;
        },
        marker: function (point) {
            var center = this.coordinateToPoint(point[0], point[1]);
            return center;
        },
        coordinateToPoint: function (latitude, longitude) {
            var point = this.mercator(latitude, longitude),
                xScale = this.width / Math.abs(this.bounds.xMax - this.bounds.xMin),
                yScale = this.height / Math.abs(this.bounds.yMax - this.bounds.yMin),
                scale = xScale < yScale ? xScale : yScale;
            return {
                x: (point.x - this.bounds.xMin) * scale,
                y: (this.bounds.yMax - point.y) * scale
            };
        }
    };
    document.getElementById('pin').style.left = miniMap.marker(coords).x - 30 / 2 + 'px';
    document.getElementById('pin').style.top = miniMap.marker(coords).y - 30 + 'px';

}());