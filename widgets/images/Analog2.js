var div = document.createElement("div"),
    Aclock = document.createElement('div'),
    Ahours = document.createElement('div'),
    sphr = document.createElement('span'),
    Amins = document.createElement('div'),
    spmn = document.createElement('span'),
    Asec = document.createElement('div'),
    spsec = document.createElement('span');

div.id = 'Analog2';
div.style.cssText = 'width:122px;height:122px;position:absolute;top:0;left:0;background-color:transparent;';

var containCSS = 'pointer-events:none;width: 100px;height: 100px;position: absolute;top: 50%;left: 50%;margin: -50px 0 0 -50px;border-radius: 50%;';
var spanCSS = 'pointer-events:none;width: 10px;height: 10px;border-radius: 50%;display: block;position: absolute;left: 50%;margin-left: -15px;top: 10px;';

Aclock.id = "Aclock";
Aclock.style.cssText = containCSS + "pointer-events:none;border: 2px solid white;";
Ahours.id = "Ahours";
Ahours.style.cssText = containCSS;
sphr.style.cssText = spanCSS + "pointer-events:none;top:-5px;background-color:white;";
Amins.id = "Amins";
Amins.style.cssText = containCSS;
spmn.style.cssText = spanCSS + "pointer-events:none;top:-5px;background-color:white;";
Asec.id = "Asec";
Asec.style.cssText = containCSS;
spsec.style.cssText = spanCSS + "pointer-events:none;top:-5px;background-color:white;";

Ahours.appendChild(sphr);
Amins.appendChild(spmn);
Asec.appendChild(spsec);
Aclock.appendChild(Ahours);
Aclock.appendChild(Amins);
Aclock.appendChild(Asec);
div.appendChild(Aclock);

document.getElementById('screenElements').appendChild(div);

function updClock() {
    var d = new Date();
    var h = d.getHours();
    if (h > 11) h = h - 12;
    rh = 360 / 12 * h;
    document.getElementById('Ahours').style.webkitTransform = "rotate(" + rh + "deg)";
    var m = d.getMinutes();
    rm = 360 / 60 * m;
    document.getElementById('Amins').style.webkitTransform = "rotate(" + rm + "deg)";
    var s = d.getSeconds();
    rs = (360 / 60) * s
    document.getElementById('Asec').style.webkitTransform = "rotate(" + rs + "deg)";
    setTimeout(updClock, 500);
}

updClock();