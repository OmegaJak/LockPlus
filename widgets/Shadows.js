var div = document.createElement("div");
var clockdiv = document.createElement("div");
var clockShadow = document.createElement("div");
div.id = 'Shadows';


div.style.cssText = 'width:200px;height:110px;position:absolute;top:0;left:0;background-color:transparent;font-family:helvetica;';

clockdiv.id = "clockWid";
clockdiv.innerHTML = "10:50";
clockdiv.style.cssText = 'position:absolute;left:0;top:0;font-size:75px;font-weight:100;letter-spacing:-1px;color:white;pointer-events:none;';
clockShadow.innerHTML = "10:50";
clockShadow.id = 'clockShadow';
div.appendChild(clockShadow);
div.appendChild(clockdiv);

document.getElementById('screenElements').appendChild(div);

var size = [];
    var shadow = '';
    var feather = 240;
    var dark = 20;
    var howlong = 25; //geez
    for (var i = 0; i < howlong; i++) {
        size.push(i);
        size.push (i+".5");
        shadow += i + 'px ' + i +'px rgba(0,0,0,' + (dark - i) / feather + '), ';
    }
    shadow = shadow.substr(0, shadow.length - 2);
    document.getElementById('clockShadow').setAttribute("style", "pointer-events:none;position:absolute;left:0;top:0;font-size:75px;letter-spacing:-1px;opacity:0.4;font-weight:100;color:#fff;text-shadow: " + shadow);

function lTime(){
    var Adate = new Date();
        hour = (Adate.getHours() + 11) % 12 + 1,
        hour = hour < 10 ? "0" + hour : " " + hour,
        minute = (Adate.getMinutes() < 10) ? "0" + Adate.getMinutes() : Adate.getMinutes();
    document.getElementById('clockWid').innerHTML = hour + ':' + minute;
    document.getElementById('clockShadow').innerHTML = hour + ':' + minute;
    setTimeout(lTime,3000);
}
lTime();