var lang = (window.navigator.language.length >= 2) ? window.navigator.language.split('-')[0] : 'en';
var celsius = false;

function checkDiv(div) {
    'use strict';
    if (document.getElementById(div)) {
        return document.getElementById(div);
    }
    return;
}

var translate = {
    en: {
        weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        sday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        smonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        condition : ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"]
    },
    cz: {
        weekday: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        sday: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        month: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        smonth: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"]
    },
    it: {
        weekday: ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'],
        sday: ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"],
        month: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        smonth: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
    },
    sp: {
        weekday: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        sday: ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"],
        month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        smonth: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"]
    },
    de: {
        weekday: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        sday: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
        month: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"],
        smonth: ["Jan", "Feb", "Mä", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "]
    },
    fr: {
        weekday: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        sday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        month: ["Janvie", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        smonth: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"]
    },
    zh: {
        weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        sday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        smonth: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    }
};

function clock(options) {
    'use strict';
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    hour: function () {
                        var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                        return hour;
                    },
                    zhour : function () {
                        var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                        hour = hour < 10 ? "0" + hour : " " + hour;
                        return hour;
                    },
                    rawhour: function () {
                        return d.getHours();
                    },
                    minute: function () {
                        return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
                    },
                    rawminute: function () {
                        return d.getMinutes();
                    },
                    am: function () {
                        return (d.getHours() > 11) ? "pm" : "am";
                    },
                    date: function () {
                        return d.getDate();
                    },
                    day: function () {
                        return d.getDay();
                    },
                    month: function () {
                        return d.getMonth();
                    },
                    year: function () {
                        return d.getFullYear();
                    },
                    hourtext: function () {
                        var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
                        return hourtxt[this.rawhour()];
                    },
                    minuteonetext: function () {
                        var minuteone = ["o' clock", "o' one", "o' two", "o' three", "o' four", "o' five", "o' six", "o' seven", "o' eight", "o' nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
                        if (minuteone[this.rawminute()] !== undefined) {
                            return minuteone[this.rawminute()];
                        }
                        return "";
                    },
                    minutetwotext: function () {
                        var minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
                        if (minutetwo[this.rawminute()] !== undefined) {
                            return minutetwo[this.rawminute()];
                        }
                        return "";
                    },
                    daytext: function () {
                        return translate[lang].weekday[this.day()];
                    },
                    sdaytext: function () {
                        return translate[lang].sday[this.day()];
                    },
                    monthtext: function () {
                        return translate[lang].month[this.month()];
                    },
                    smonthtext: function () {
                        return translate[lang].smonth[this.month()];
                    },
                    datetext: function () {
                        var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentyith", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
                        return textdate[this.date() - 1];
                    },
                    nth: function (d) {
                        if (d > 3 && d < 21) {
                            return 'th';
                        }
                        switch (d % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                        }
                    },
                    dateplus: function () {
                        return this.date() + this.nth(Number(this.date()));
                    }
                };
            options.success(funcs);
            setTimeout(function () {
                getTimes();
            }, options.refresh);
        };
    getTimes();
}


//clock
function loadClock() {
    clock({
        twentyfour: false,
        refresh: 1000,
        success: function (clock) {
            'use strict';
            var clockElements = {
                clock: clock.hour() + ":" + clock.minute(),
                zclock: clock.zhour() + ":" + clock.minute(),
                clockline : clock.hour() + "|" + clock.minute(),
                clockpm : clock.hour() + ":" + clock.minute() + clock.am(),
                zhour: clock.zhour(),
                hour: clock.hour(),
                minute: clock.minute(),
                pm: clock.am(),
                ttext: clock.hourtext() + " " + clock.minuteonetext() + ' ' + clock.minutetwotext(),
                htext: clock.hourtext(),
                mtext: clock.minuteonetext() + ' ' + clock.minutetwotext(),
                date: clock.date(),
                dateplus: clock.dateplus(),
                datetext: clock.datetext(),
                day: clock.daytext(),
                sday: clock.sdaytext(),
                month: clock.monthtext(),
                monthstring: clock.monthtext() + " the " + clock.dateplus(),
                datedotmonth: clock.date() + '.' + clock.monthtext(),
                dateslashmonth : clock.date() + "/" + clock.monthtext(),
                datemonth : clock.date() + " " + clock.monthtext(),
                smonth: clock.smonthtext(),
                monthdot : clock.monthtext() + "." + clock.date(),
                monthline : clock.monthtext() + "|" + clock.date() + "|" + clock.year(),
                mdy : clock.month() + "/" + clock.date() + "/" + clock.year(),
                datestring : clock.daytext() + ", " + clock.monthtext() + " " + clock.date(),
                datedash : clock.daytext() + "-" + clock.monthtext() + "-" + clock.date(),
                year: clock.year()
            };
            Object.keys(clockElements).forEach(function (key) {
                var value = clockElements[key],
                    div = checkDiv(key);
                if (div) {
                        div.innerHTML = value;
                }
            });
        }
    });
}
loadClock();
//endclock
var weatherdivs = function () {
    'use strict';
    var tcf = (celsius === true) ? 'c' : 'f',
        spd = (celsius === true) ? 'kph' : 'mph',
        weatherElements = {
            temp : '76',
            tempdeg : '76&deg;',
            tempdegplus : '76&degF',
            high : '80',
            highdeg : '80&deg',
            highdegplus : '80&degF',
            low : '70',
            lowdeg : '70&deg;',
            lowdegplus : '70&deg;F',
            highdashlow : '80-70',
            highslashlow : '80/70',
            highdashlowdeg : '80&deg;-70&deg;',
            highslashlowdeg : '80&deg;/70&deg;',
            city : 'Current City',
            condition : 'Cloudy',
            humidity : '60',
            windchill : '20&deg;',
            wind : '25mph',
            winddirection : 'N',
            visibility : '20miles',
            rain : '20%',
            dewpoint : '40&deg;',
            feelslike: '90',
            feelslikedeg: '90&deg;',
            sunrise: '5:00',
            sunset: '7:00',
            update: '7/11/15 8:05',
            icon: 'weather/simply.png'
    };
    Object.keys(weatherElements).forEach(function (key) {
        var value = weatherElements[key],
            div = checkDiv(key);
        if (div) {
            if (key === 'icon') {
                var img = document.createElement('img');
                img.src = value;
                img.className = 'icon';
                div.appendChild(img);
            } else {
                div.innerHTML = value;
            }
        }
    });
};
weatherdivs();
//systemEl: ['name~Displays name of the phone', 'firmware~Current firmware', 'battery~Current battery', 'batterypercent~Current battery plus percent', 'unlock~text when tapped unlocks device'],
var systemdivs = function () {
    'use strict';
    var systemEl = {
        name: 'JunesiPhone', //[[UIDevice currentDevice] name];
        firmware: 'Version 8.3 (Build 12F70)', //[NSProcessInfo processInfo].operatingSystemVersionString;
        battery: '85', //Math.round([[UIDevice currentDevice]batteryLevel] * 100);
        batterypercent: '85%',
        unlock: 'Unlock'
    };
    Object.keys(systemEl).forEach(function (key) {
        var value = systemEl[key],
            div = checkDiv(key);
        if (div) {
            div.innerHTML = value;
        }
    });
};
systemdivs();
