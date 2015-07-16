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
        condition: ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"]
    },
    ru: {
        weekday: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        sday: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        smonth: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        condition: ["Торнадо", "Тропический шторм", "Ураган", "Гроза", "Гроза", "Снег", "Мокрый снег", "Мокрый снег", "Изморозь", "Морось", "Ледяной дождь", "Ливень", "Ливень", "Сильные порывы ветра", "Снег", "Снег", "Снег", "Град", "Мокрый снег", "Пыль", "Туман", "Легкий туман", "Туманно", "Порывисто", "Ветренно", "Холодно", "Облачно", "Облачно", "Облачно", "Облачно", "Облачно", "Ясно", "Солнечно", "Ясно", "Ясно", "Мокрый снег", "Жарко", "Гроза", "Гроза", "Гроза", "Ливень", "Снегопад", "Небольшой снег", "Снегопад", "Переменная облачность", "Гроза", "Снег", "Гроза", "пусто"]
    },
    cz: {
        weekday: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        sday: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        month: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        smonth: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"],
        condition: ["Tornádo", "Tropická bouře", "Hurikán", "Bouře", "Bouře", "Sněžení", "Déšť a sníh", "Déšť a sníh", "Mrznoucí mrholení", "Mrholení", "Mrznoucí déšť", "Přeháňky", "Přeháňky", "Poryvy větru", "Sněžení", "Sněžení", "Sněžení", "Kroupy", "Déšť a sníh", "Prach", "Mlhy", "Řídké mlhy", "Kouř", "Větrno s bouřkami", "Větrno", "Chladno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Jasno", "Slunečno", "Krásně", "Krásně", "Déšť a sníh", "Horko", "Bouře", "Bouře", "Bouře", "Přeháňky", "Husté sněžení", "Lehké sněžení", "Husté sněžení", "Polojasno", "Bouře", "Sněžení", "Bouře", "prázdné"]
    },
    it: {
        weekday: ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'],
        sday: ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"],
        month: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        smonth: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        condition: ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"]
    },
    sp: {
        weekday: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        sday: ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"],
        month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        smonth: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"],
        condition: ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"]
    },
    de: {
        weekday: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        sday: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
        month: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"],
        smonth: ["Jan", "Feb", "Mä", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "],
        condition: ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegestöber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "Stürmisch", "Windig", "Kalt", "Bewölkt", "Meist Bewölkt", "Meist Bewölkt", "Bewölkt", "Bewölkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Örtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Bewölkt", "Gewitter", "Scheeschauer", "Örtliche Gewitterschauer", "Nicht Verfügbar"]
    },
    fr: {
        weekday: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        sday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        month: ["Janvie", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        smonth: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
        condition: ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃªle", "Neige Fondue", "PoussiÃ©reux", "Brouillard", "Brume", "Brumeux", "TempÃªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃ¨s Nuageux", "TrÃ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃªles", "Temps Chaud", "Orages IsolÃ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃ©s", "Non Disponible"]
    },
    zh: {
        weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        sday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        smonth: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        condition: ["龙卷风", "热带风暴", "飓风", "雷暴", "雷暴", "雪", "雨雪", "雨雪", "冻毛毛雨", "细雨", "冻雨", "淋浴", "淋浴", "飘雪", "雪", "雪", "雪", "Hail", "雨雪", "尘", "牙齿", "阴霾", "烟", "风起云涌", "有风", "冷", "多云", "多云", "多云", "多云", "多云", "明确", "晴朗", "公平", "公平", "雨雪", "Hot", "雷暴", "雷暴", "雷暴", "淋浴", "大雪", "小雪", "大雪", "半 多云", "雷暴", "雪", "雷暴", "空白"]
    }
};

function clock(options) {
    'use strict';
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    daysInMonth: [31,0,31,30,31,30,31,31,30,31,30,31],
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
                    prevdate: function () {
                        var pd = (this.date() === 0) ? this.daysInMonth[this.month() - 1] : this.date() - 1;
                        return pd;
                    },
                    nextdate: function () {
                        var nd = (this.date() === 0) ? this.daysInMonth[this.month() + 1] : this.date() + 1;
                        return nd;
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
                    yesterdaydaytext: function () {
                        return (this.day() === 0) ? translate[lang].weekday[6] : translate[lang].weekday[this.day() - 1];
                    },
                    nextdaytext: function () {
                        return (this.day() === 6) ? translate[lang].weekday[0] : translate[lang].weekday[this.day() + 1];
                    },
                    sdaytext: function () {
                        return translate[lang].sday[this.day()];
                    },
                    snextday: function () {
                        return (this.day() === 6) ? translate[lang].sday[0] : translate[lang].sday[this.day() + 1];
                    },
                    sprevday: function () {
                        return (this.day() === 0) ? translate[lang].sday[6] : translate[lang].sday[this.day() - 1];
                    },
                    monthtext: function () {
                        return translate[lang].month[this.month()];
                    },
                    nextmonthtext: function () {
                        return (this.month() === 11) ? translate[lang].month[0] : translate[lang].month[this.month() + 1];
                    },
                    prevmonthtext: function () {
                        return (this.month() === 0) ? translate[lang].month[11] : translate[lang].month[this.month() - 1];
                    },
                    smonthtext: function () {
                        return translate[lang].smonth[this.month()];
                    },
                    snextmonth: function () {
                        return (this.month() === 11) ? translate[lang].smonth[0] : translate[lang].smonth[this.month() + 1];
                    },
                    sprevmonth: function () {
                        return (this.month() === 0) ? translate[lang].smonth[11] : translate[lang].smonth[this.month() - 1];
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
                prevdate: clock.prevdate(),
                nextdate: clock.nextdate(),
                dateplus: clock.dateplus(),
                datetext: clock.datetext(),
                day: clock.daytext(),
                nextday: clock.nextdaytext(),
                yestday: clock.yesterdaydaytext(),
                sday: clock.sdaytext(),
                snextday: clock.snextday(),
                sprevday: clock.sprevday(),
                month: clock.monthtext(),
                nextmonth: clock.nextmonthtext(),
                prevmonth: clock.prevmonthtext(),
                monthstring: clock.monthtext() + " the " + clock.dateplus(),
                datedotmonth: clock.date() + '.' + clock.monthtext(),
                dateslashmonth : clock.date() + "/" + clock.monthtext(),
                datemonth : clock.date() + " " + clock.monthtext(),
                smonth: clock.smonthtext(),
                snextmonth: clock.snextmonth(),
                sprevmonth: clock.sprevmonth(),
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
                if (!document.getElementById(key).innerHTML.length > 0) {
                    var img = document.createElement('img');
                    img.src = value;
                    img.className = 'icon';
                    div.appendChild(img);
                }
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
        chargingtxt: 'Charging',
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
