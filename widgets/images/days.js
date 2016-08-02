(function(){
    var div = document.createElement("div");
    div.id = 'LineDates';
    div.style.cssText = 'width:286px;height:26px;position:absolute;top:0;left:0;font-family:helvetica;';

    var daysOf = ["S", "M", "T", "W", "T", "F", "S"];
    for (var i = 0; i < daysOf.length; i++) {
        var dayw = document.createElement('span');
        dayw.id = daysOf[i];
        dayw.style.cssText = 'position:relative;left:2;font-weight:200;font-size:14px;width:30px;height:30px;line-height:30px;padding-top:2px;display:inline-block;margin-left:2px;top:2px;text-transform:uppercase;text-align:center;color:rgba(255,255,255,0.5);';
        dayw.innerHTML = daysOf[i];
        div.appendChild(dayw);
    }
    document.getElementById('screenElements').appendChild(div);

function setDate(){
    var date = new Date(),
        day = date.getDay();
    document.getElementById(daysOf[day]).style.color = 'white';
    document.getElementById(daysOf[day]).style.border = '1px solid white';
    document.getElementById(daysOf[day]).style.borderRadius = '99px';
    document.getElementById(daysOf[day]).style.fontSize = '16px';
    setTimeout(setDate, 4000);
}setDate();

}());
