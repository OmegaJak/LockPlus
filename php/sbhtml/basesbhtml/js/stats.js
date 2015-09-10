
function batteryStats(options) {
    'use strict';
    var url = 'file:///private/var/mobile/Library/BatteryStats.txt',
        callAjax = function (url) {
            var txt;
            var rq;
            txt = new XMLHttpRequest();
            txt.onreadystatechange = function () {
                var stats = {};
                if(txt.readyState === 3){
                    rq = 3;
                }
                if (txt.readyState === 4 && rq === 3) {
                    var response = txt.responseText.split('\n');
                    stats.percent = Number(response[0].split(':')[1]);
                    stats.charging = response[1].split(':')[1];
                    options.success(stats);
                }else{
                    stats.percent = "Install InfoStats";
                    stats.charging = "Install InfoStats";
                    options.success(stats);
                }
            };
            txt.open("GET", url, true);
            txt.send();
            setTimeout(function () {
                callAjax(url);
            }, options.refresh);
        };
    callAjax(url);
}

batteryStats({
  refresh : 60000 * batteryrefresh, // in milliseconds
  success: function(battery){
    var sysArray = ['name', 'firmware', 'battery', 'batterypercent', 'chargingtxt', 'chargingstate', 'unlock', 'signal', 'signalpercent', 'alarm24', 'alarm', 'alarmpm', 'wifi', 'wifipercent', 'notifymail', 'notifysms', 'notifyphone', 'notifywhats', 'notifytelegram'];
    var signalArray = ["0%","20%","40%","60%","80%","100%"];
    for (var i = 0; i < sysArray.length; i++) {
        var div = checkDiv(sysArray[i]);
        if (div) {
            var value;
            switch (div.id) {
                case 'name':
                    value = ' ';
                    break;
                case 'firmware':
                    value = ' ';
                    break;
                case 'battery':
                    value = battery.percent;
                    break;
                case 'batterypercent':
                    value = battery.percent + "%";
                    break;
                case 'chargingtxt':
                    value = battery.charging;
                    break;
                case 'chargingstate':
                    value = battery.charging;
                    break;
                case 'unlock':
                    value = " ";
                    break;
                case 'signal':
                    value = ' ';
                    break;
                case 'signalpercent':
                    value = ' ';
                    break;
                case 'alarm24':
                    value = ' ';
                    break;
                case 'alarm':
                    value = ' ';
                    break;
                case 'alarmpm':
                    value = ' ';
                    break;
                case 'wifi':
                    value = ' ';
                    break;
                case 'wifipercent':
                    value = ' ';
                    break;
                case 'notifymail':
                    value = ' ';
                    break;
                case 'notifysms':
                    value = ' ';
                    break;
                case 'notifyphone':
                    value = ' ';
                    break;
                case 'notifywhats':
                    value = ' ';
                    break;
                case 'notifytelegram':
                    value = ' ';
                    break;
            }
            var prefix, suffix;
            if(div.getAttribute('data-prefix') !== null){
              prefix = div.getAttribute('data-prefix');
            }else{
              prefix = '';
            }
            if(div.getAttribute('data-suffix') !== null){
              suffix = div.getAttribute('data-suffix');
            }else{
              suffix = '';
            }
            div.innerHTML = prefix + value + suffix;

        }
    }
  }
});