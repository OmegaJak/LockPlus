function checkDiv(div) { //check if element is placed
    'use strict';
     var keys = Object.keys(elements),
          loc = keys.indexOf(div);
     if (loc !== -1){
        return document.getElementById(keys[loc]);
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
    nl:{
      weekday: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
      sday: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
      month: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
      smonth: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      condition: ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"]
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
    },
    he: {
      weekday: ["שבת", "שישי", "חמיש", "רביעי", "שלישי", "שני", "ראשון"],
      sday: ["ז’", "ו’", "ה", "ד’", "ג’", "ב’", "א’"],
      month: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
      smonth: ["ינו", "פבר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוג", "ספט", "אוקט", "נוב", "דצמ"],
      condition: ["טורנדו", "סופה טרופית", "הוריקן", "סופת-רעמים", "סופת-רעמים", "שלג", "ברד קל", "ברד קל", "ברד", "טפטוף", "טפטוף", "מקלחת", "מקלחת", "משב רוח", "שלג", "שלג", "שלג", "ברד", "ברד קל", "Dust", "ערפל", "אובך", "אובך", "סוער", "סוער", "קר", "מעונן", "מעונן", "מעונן", "מעונן", "מעונן", "בהיר", "שמשי", "נאה", "נאה", "ברד קל", "חם", "סופת-רעמים", "סופת-רעמים", "סופת-רעמים", "מקלחת", "שלג כבד", "שלג קל", "שלג כבד", "מעונן חלקית", "סופת-רעמים", "שלג", "סופת-רעמים", "ריק"]
    }

};

if(!translate[lang]){
  lang = 'en';
}
function convertTOWord(num){
    var onesText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tensText = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        aboveText = ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion '],
        generatedArray = [],
        converted = '',
        i = 0;
        while(num){
            generatedArray.push( num % 1000 );
            num = parseInt( num / 1000, 10 );
        }
        while (generatedArray.length) {
            converted = (function( a ) {
                var x = Math.floor( a / 100 ),
                    y = Math.floor( a / 10 ) % 10,
                    z = a % 10;
                return ( x > 0 ? onesText[x] + ' hundred ' : '' ) +
                       ( y >= 2 ? tensText[y] + ' ' + onesText[z] : onesText[10*y + z] );
            })( generatedArray.shift() ) + aboveText[i++] + converted;
        }
        return converted;
}
function clock(options) {
    'use strict';
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
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
                    second: function () {
                        return (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();
                    },
                    rawminute: function () {
                        return d.getMinutes();
                    },
                    am: function () {
                        return (d.getHours() > 11) ? "pm" : "am";
                    },
                    tod: function () {
                        return (d.getHours() > 11) ? "Afternoon" : "Morning";
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
                    smyear: function () {
                        return d.getFullYear() % 1000;
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
                    minuteonetextdot: function () {
                        var minuteone = ["", "one", "o.two", "o.three", "o.four", "o.five", "o.six", "o.seven", "o.eight", "o.nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
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












function loadClock() { //clock
    clock({
        twentyfour: twentyfour,
        refresh: clockrefresh,
        success: function(clock) {
            'use strict';
            var clockArray = ['clock', 'zclock', 'clockline', 'clockpm', 'zhour', 'hour', 'minute', 'second', 'pm', 'tod', 'ttext', 'htext', 'mtext', 'date', 'prevdate', 'nextdate', 'dateplus', 'datetext', 'day', 'nextday', 'yestday', 'sday', 'snextday', 'sprevday', 'month', 'nextmonth', 'prevmonth', 'monthstring', 'datedotmonth', 'dateslashmonth', 'datemonth', 'smonth', 'snextmonth', 'sprevmonth', 'monthdot', 'monthline', 'mdy', 'datestring', 'datedash', 'year', 'datemonthrev', 'monthlinespace', 'daydate', 'datestringrev', 'datespace', 'daydotdate','hrmin','hrmintx','daydatemonth', 'daydatesmonth', 'daydatescommamonth', 'yeartext','hrnsmin', 'clocksmush', 'datebar', 'datesnslash', 'datesingled', 'hrsmush', 'dayabdatemonth', 'daycommadatemonth'];
            for (var i = 0; i < clockArray.length; i++) {
                var div = checkDiv(clockArray[i]);
                if (div) {
                    var value;
                    switch (div.id) {
                      case 'datemonthrev':
                            value = clock.monthtext() + " " + clock.date();
                            break;
                      case 'monthlinespace':
                            value = clock.monthtext() + " | " + clock.date() + " | " + clock.year();
                            break;
                      case 'daydate':
                            value = clock.daytext() + " " + clock.date();
                            break;
                      case 'datespace':
                            value = clock.daytext() + " " + clock.monthtext() + " " + clock.date();
                            break;
                      case 'daydotdate':
                            value = clock.daytext() + "." + clock.date();
                            break;
                       case 'datestringrev':
                            value = clock.monthtext() + " " + clock.date() + ", " + clock.daytext();
                            break;
                      case 'hrmintx':
                            value = (clock.minutetwotext() !== "") ? clock.hourtext() + '.' + clock.minuteonetextdot() +  '.' + clock.minutetwotext() : clock.hourtext() + '.' + clock.minuteonetextdot() + clock.minutetwotext();
                            break;
                      case 'hrmin':
                            value = clock.hourtext() + '.' + clock.minute();
                            break;
                      case 'daydatemonth':
                            value = clock.daytext() + " | " + clock.date() + " " + clock.monthtext();
                            break;
                        case 'clock':
                            value = clock.hour() + ":" + clock.minute();
                            break;
                        case 'zclock':
                            value = clock.zhour() + ":" + clock.minute();
                            break;
                        case 'clockline':
                            value = clock.hour() + "|" + clock.minute();
                            break;
                        case 'clockpm':
                            value = clock.hour() + ":" + clock.minute() + clock.am();
                            break;
                        case 'zhour':
                            value = clock.zhour();
                            break;
                        case 'hour':
                            value = clock.hour();
                            break;
                        case 'minute':
                            value = clock.minute();
                            break;
                        case 'second':
                            value = clock.second();
                            break;
                        case 'pm':
                            value = clock.am();
                            break;
                        case 'tod':
                            value = clock.tod();
                            break;
                        case 'ttext':
                            value = clock.hourtext() + " " + clock.minuteonetext() + ' ' + clock.minutetwotext();
                            break;
                        case 'htext':
                            value = clock.hourtext();
                            break;
                        case 'mtext':
                            value = clock.minuteonetext() + ' ' + clock.minutetwotext();
                            break;
                        case 'date':
                            value = clock.date();
                            break;
                        case 'prevdate':
                            value = clock.prevdate();
                            break;
                        case 'nextdate':
                            value = clock.nextdate();
                            break;
                        case 'dateplus':
                            value = clock.dateplus();
                            break;
                        case 'datetext':
                            value = clock.datetext();
                            break;
                        case 'day':
                            value = clock.daytext();
                            break;
                        case 'nextday':
                            value = clock.nextdaytext();
                            break;
                        case 'yestday':
                            value = clock.yesterdaydaytext();
                            break;
                        case 'sday':
                            value = clock.sdaytext();
                            break;
                        case 'snextday':
                            value = clock.snextday();
                            break;
                        case 'sprevday':
                            value = clock.sprevday();
                            break;
                        case 'month':
                            value = clock.monthtext();
                            break;
                        case 'nextmonth':
                            value = clock.nextmonthtext();
                            break;
                        case 'prevmonth':
                            value = clock.prevmonthtext();
                            break;
                        case 'monthstring':
                            value = clock.monthtext() + " the " + clock.dateplus();
                            break;
                        case 'datedotmonth':
                            value = clock.date() + '.' + clock.monthtext();
                            break;
                        case 'dateslashmonth':
                            value = clock.date() + "/" + clock.monthtext();
                            break;
                        case 'datemonth':
                            value = clock.date() + " " + clock.monthtext();
                            break;
                        case 'smonth':
                            value = clock.smonthtext();
                            break;
                        case 'snextmonth':
                            value = clock.snextmonth();
                            break;
                        case 'sprevmonth':
                            value = clock.sprevmonth();
                            break;
                        case 'monthdot':
                            value = clock.monthtext() + "." + clock.date();
                            break;
                        case 'monthline':
                            value = clock.monthtext() + "|" + clock.date() + "|" + clock.year();
                            break;
                        case 'mdy':
                            value = (clock.month() + 1) + "/" + clock.date() + "/" + clock.year();
                            break;
                        case 'datestring':
                            value = clock.daytext() + ", " + clock.monthtext() + " " + clock.date();
                            break;
                        case 'datedash':
                            value = clock.daytext() + "-" + clock.monthtext() + "-" + clock.date();
                            break;
                        case 'year':
                            value = clock.year();
                            break;
                        case 'daydatesmonth':
                            value = clock.daytext() + ' ' + clock.date() + ' ' + clock.smonthtext();
                            break;
                        case 'daydatescommamonth':
                            value = clock.daytext() + ', ' + clock.date() + ' ' + clock.smonthtext();
                            break;
                        case 'yeartext':
                            value = convertTOWord(clock.year());
                            break;
                        case 'datebar':
                            value = clock.month() + '|' + clock.date() + '|' + clock.smyear();
                            break;
                        case 'datesnslash':
                            value = clock.month() + '/' + clock.date() + '/' + clock.smyear();
                            break;
                        case 'datesingled':
                            value = clock.month() + '-' + clock.date() + '-' + clock.smyear();
                            break;
                        case 'hrsmush':
                            value = clock.hourtext() + '' + clock.minute();
                            break;
                        case 'dayabdatemonth':
                            value = clock.sdaytext() + ' ' + clock.date() + ' ' + clock.smonthtext();
                            break;
                        case 'daycommadatemonth':
                            value = clock.sdaytext() + ', ' + clock.date() + ' ' + clock.smonthtext();
                            break;
                        case 'hrnsmin':
                            value = clock.hourtext() + ' ' + clock.minute();
                            break;
                        case 'clocksmush':
                            value = clock.hour() + "" + clock.minute();
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
            };
        }
    });
} //end clock