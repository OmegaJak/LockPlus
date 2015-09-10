function Weather(options) {
    'use strict';
    var wkday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shrtday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (options.gps) {
        var url = 'file:///var/mobile/Documents/widgetweather.xml',
        //var url = 'http://junesiphone.com/widgetweather.xml', //uncomment to show WW debug mode
            callAjax = function (url) {
                var xmlhttp;
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4) {
                        var weather = {},
                            i,
                            wwxml = xmlhttp.responseXML.documentElement,
                            cc = wwxml.getElementsByTagName('currentcondition')[0],
                            d = wwxml.getElementsByTagName('day')[0],
                            df = wwxml.getElementsByTagName('dayforcast')[0],
                            day = df.getElementsByTagName('day'),
                            date = new Date();
                        weather.city = cc.getElementsByTagName('city')[0].textContent;
                        weather.country = cc.getElementsByTagName('extraLocCountry')[0].textContent;
                        weather.lat = cc.getElementsByTagName('latitude')[0].textContent;
                        weather.long = cc.getElementsByTagName('longitude')[0].textContent;
                        weather.temp = cc.getElementsByTagName('temp')[0].textContent;
                        weather.dew = cc.getElementsByTagName('dewpt')[0].textContent;
                        weather.feelslike = cc.getElementsByTagName('chill')[0].textContent;
                        weather.humid = cc.getElementsByTagName('humidity')[0].textContent;
                        weather.icon = cc.getElementsByTagName('code')[0].textContent;
                        weather.uv = cc.getElementsByTagName('uvindex')[0].textContent;
                        weather.condition = cc.getElementsByTagName('description')[0].textContent;
                        weather.winddir = cc.getElementsByTagName('cardinal')[0].textContent;
                        weather.windspd = cc.getElementsByTagName('speed')[0].textContent;
                        weather.high = (d.getElementsByTagName('high')[0].textContent === '') ? cc.getElementsByTagName('temp')[0].textContent : d.getElementsByTagName('high')[0].textContent;
                        weather.low = d.getElementsByTagName('low')[0].textContent;
                        weather.update = date;
                        weather.fDesc = [];
                        weather.fHigh = [];
                        weather.fLow = [];
                        weather.fDay = [];
                        weather.fDaytext = [];
                        weather.fDayshort = [];
                        weather.fIcon = [];
                        for (i = 0; i < day.length; i += 1) {
                            weather.fDesc.push((day[i].getElementsByTagName('description')[0].textContent === '') ? cc.getElementsByTagName('description')[0].textContent : day[i].getElementsByTagName('description')[0].textContent);
                            weather.fHigh.push((day[i].getElementsByTagName('high')[0].textContent === '') ? cc.getElementsByTagName('temp')[0].textContent : day[i].getElementsByTagName('high')[0].textContent);
                            weather.fLow.push(day[i].getElementsByTagName('low')[0].textContent);
                            //weather['day'+i] = new Date(day[i].getElementsByTagName('daydate')[0].textContent * 1000).getDay();
                            weather.fDay.push(day[i].getElementsByTagName('dayofweek')[0].textContent);
                            weather.fDaytext.push(wkday[day[i].getElementsByTagName('dayofweek')[0].textContent - 1]);
                            weather.fDayshort.push(shrtday[day[i].getElementsByTagName('dayofweek')[0].textContent - 1]);
                            weather.fIcon.push((day[i].getElementsByTagName('code')[0].textContent === '') ? cc.getElementsByTagName('code')[0].textContent : day[i].getElementsByTagName('code')[0].textContent);
                        }
                        options.success(weather);
                        //console.log(wwxml);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
                setTimeout(function () {
                    callAjax(url);
                }, 60000 * options.refresh);
            };
        callAjax(url);
    } else {
        var url = 'http://wxdata.weather.com/wxdata/mobile/mobagg/' + options.code + '.js?key=2227ef4c-dfa4-11e0-80d5-0022198344f4&units=' + (options.temp ? 'c' : 'f') + '&locale=' + options.lang,
            callAjax = function (url) {
                var xmlhttp;
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4) {
                        var weather = {},
                            i,
                            x = JSON.parse(xmlhttp.responseText)[0],
                            tday = x.HourlyForecasts[0],
                            dday = x.DailyForecasts[0],
                            df = x.DailyForecasts,
                            date = new Date();
                        weather.city = x.Location.city;
                        weather.country = x.Location.country;
                        weather.lat = x.Location.lat;
                        weather.long = x.Location.lng;
                        weather.dew = tday.dew;
                        weather.feelslike = tday.feelsLike;
                        weather.humid = tday.humid;
                        weather.icon = tday.icon;
                        weather.uv = tday.uv;
                        weather.condition = tday.wDesc;
                        weather.winddir = tday.wDirText;
                        weather.windspd = tday.wSpeed;
                        if (options.temp === true) {
                            weather.temp = Math.round((Number(tday.temp) - 32) * 5 / 9);
                            weather.low = Math.round((Number(dday.minTemp) - 32) * 5 / 9);
                            weather.high = Math.round((Number(dday.maxTemp || tday.temp) - 32) * 5 / 9);
                        } else {
                            weather.temp = tday.temp;
                            weather.low = dday.minTemp;
                            weather.high = dday.maxTemp || tday.temp;
                        }
                        weather.update = date;
                        weather.fDesc = [];
                        weather.fHigh = [];
                        weather.fLow = [];
                        weather.fDay = [];
                        weather.fDaytext = [];
                        weather.fDayshort = [];
                        weather.fIcon = [];
                        for (i = 0; i < df.length; i += 1) {
                            weather.fDesc.push((df[i].day) ? df[i].day.phrase : df[i].night.phrase);
                            weather.fDay.push(new Date(df[i].validDate * 1000).getDay());
                            weather.fDaytext.push(wkday[new Date(df[i].validDate * 1000).getDay()]);
                            weather.fDayshort.push(shrtday[new Date(df[i].validDate * 1000).getDay()]);
                            weather.fIcon.push((df[i].day) ? df[i].day.icon : tday.icon);
                            if (options.temp === true) {
                                weather.fHigh.push(Math.round((df[i].maxTemp || tday.temp - 32) * 5 / 9));
                                weather.fLow.push(Math.round((Number(df[i].minTemp) - 32) * 5 / 9));
                            } else {
                                weather.fHigh.push((df[i].maxTemp) || tday.temp);
                                weather.fLow.push(df[i].minTemp);
                            }
                        }

                        options.success(weather);
                       // console.log(x);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
                setTimeout(function () {
                    callAjax(url);
                }, 60000 * options.refresh);
            };
        callAjax(url);
    }
}

Weather({
  code : weathercode,
  temp : celsius,
  lang : lang,
  gps : gps, //must use WidgetWeather xml if set to true
  refresh : weatherrefresh, // in minutes
  success: function(w){
    var weatherArray = ['temp','tempdeg','tempdegplus','high','highdeg','highdegplus','low','lowdeg','lowdegplus','highdashlow','highslashlow','highdashlowdeg','highslashlowdeg','city','condition','humidity','windchill','wind','winddirection','visibility','rain','dewpoint','feelslike','feelslikedeg','sunrise','sunset','update','icon','tempcon','tempcon1','tempcon2','windstr'];
    var tcf = (celsius === true) ? 'c' : 'f';
    var spd = (celsius === true) ? 'kph' : 'mph';
    for (var i = 0; i < weatherArray.length; i++) {
        var div = checkDiv(weatherArray[i]);
        if (div) {
            var value;
            switch (div.id) {
              case 'tempcon':
                    value = w.temp + " " + w.condition;
                    break;
              case 'tempcon1':
                    value = w.temp + "&deg;" + tcf + " " + w.condition;
                    break;
              case 'tempcon2':
                    value = w.temp + "&deg; " + w.condition;
                    break;
              case 'windstr':
                    value = w.windspd + " " + w.winddir;
                    break;
                case 'temp':
                    value = w.temp;
                    break;
                case 'tempdeg':
                    value = w.temp + '&deg;';
                    break;
                case 'tempdegplus':
                    value = w.temp + '&deg;' + tcf;
                    break;
                case 'high':
                    value = w.high;
                    break;
                case 'highdeg':
                    value = w.high + '&deg;';
                    break;
                case 'highdegplus':
                    value = w.high + '&deg;' + tcf;
                    break;
                case 'low':
                    value = w.low;
                    break;
                case 'lowdeg':
                    value = w.low + '&deg;';
                    break;
                case 'lowdegplus':
                    value = w.low + '&deg;' + tcf;
                    break;
                case 'highdashlow':
                    value = w.high + '-' + w.low;
                    break;
                case 'highslashlow':
                    value = w.high + '/' + w.low;
                    break;
                case 'highdashlowdeg':
                    value = w.high + '&deg;-' + w.low + '&deg;';
                    break;
                case 'highslashlowdeg':
                    value = w.high + '&deg;/' + w.low + '&deg;';
                    break;
                case 'city':
                    value = w.city;
                    break;
                case 'condition':
                    value = w.condition;
                    break;
                case 'humidity':
                    value = w.humid;
                    break;
                case 'windchill':
                    value = w.feelslike + '&deg';
                    break;
                case 'wind':
                    value = w.windspd + spd;
                    break;
                case 'winddirection':
                    value = w.winddir;
                    break;
                case 'visibility':
                    value = w.uv;
                    break;
                case 'rain':
                    value = 'na';
                    break;
                case 'dewpoint':
                    value = w.uv + '&deg';
                    break;
                case 'feelslike':
                    value = w.feelslike;
                    break;
                case 'feelslikedeg':
                    value = w.feelslike + '&deg';
                    break;
                case 'sunrise':
                    value = weather.sunrise();
                    break;
                case 'sunset':
                    value = 'na';
                    break;
                case 'update':
                    value = w.update;
                    break;
                case 'icon':
                    var icon = w.icon;
                    value = icon;
                    break;
            }

            if (div.id === 'icon') {
                if(wIcon === null){
                     wIcon = 'simply';
                }
                if(document.getElementById('iconDiv').src != 'http://junesiphone.com/weather/IconSets/' + wIcon + '/' + icon + '.png'){
                    document.getElementById('iconDiv').src = 'http://junesiphone.com/weather/IconSets/' + wIcon + '/' + icon + '.png';
                }
            } else {
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


  }
});




