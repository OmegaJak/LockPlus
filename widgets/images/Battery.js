var div = document.createElement("div");
div.id = 'Battery';

div.style.cssText = 'width:320px;height:30px;position:absolute;top:0;left:0;';


var batteryholder = document.createElement('div');
batteryholder.style.cssText = "pointer-events:none;position:absolute;top:10px;left:33px;width:250px;height:2px;background-color:#666666;";
var _battery = document.createElement('div');
_battery.id = "batterybar";
_battery.style.cssText = "pointer-events:none;position:absolute;top:10px;left:33px;height:2px;background-color:white;";


div.appendChild(batteryholder);
div.appendChild(_battery);


function setBattery(battery, timeout, count, element, elwidth) {
    var calc, width, interval;
    width = 0; // starting width
    calc = Math.round((battery / 100) * elwidth); //calculate percent of the width
    function animate() {
        width += count; //add count to width every interval
        document.getElementById(element).style.width = width + 'px'; //set width to dom element
        if (width >= calc) {
            clearInterval(interval);
        } // clear interval
    }
    interval = setInterval(animate, timeout);
}
setBattery(30, 1, 3, 'batterybar', 250);

document.getElementById('screenElements').appendChild(div);