(function () {
    var div = document.createElement("div"),
        bottomBack = document.createElement('div'),
        bottomInside = document.createElement('div'),
        top = document.createElement('div'),
        getVBattery;

    div.id = 'VBattery';
    div.style.cssText = 'width:38px;height:73px;position:absolute;top:0;left:0;background-color:transparent;font-family:helvetica;';

    bottomBack.style.cssText = 'pointer-events:none;position:absolute;top:20px;left:3px;width:30px;height:50px;background-color:transparent;border:1px solid white;';
    bottomInside.style.cssText = 'pointer-events:none;position:absolute;top:51px;left:6px;width:26px;height:1px;background-color:white;';
    bottomInside.id = 'VBatteryInner';
    top.style.cssText = 'pointer-events:none;position:absolute;top:14px;left:9px;width:18px;height:6px;background-color:transparent;border:1px solid white;border-bottom:none;';

    div.appendChild(bottomInside);
    div.appendChild(bottomBack);
    div.appendChild(top);

    document.getElementById('screenElements').appendChild(div);

    getVBattery = function () {
        if (typeof globalBattery !== 'undefined') {
            document.getElementById('VBatteryInner').style.height = Math.round((globalBattery.percent / 100) * 46);
        } else {
            document.getElementById('VBatteryInner').style.height = Math.round((40 / 100) * 46);
        }
        setTimeout(getVBattery, 10000);
    };
    getVBattery();

}());