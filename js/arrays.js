var weatherEl = ['temp~76'//
				, 'tempdeg~76°'//
				, 'tempdegplus~76°F'//
				, 'icon~Icon'
				, 'high~80 "high"'//
				, 'highdeg~80° "high"'//
				, 'highdegplus~80°F "high"'//
				, 'low~70 "low"'//
				, 'lowdeg~70° "low"'//
				, 'lowdegplus~70°F "low"'//
				, 'highdashlow~80-70'//
				, 'highslashlow~80/70'//
				, 'highdashlowdeg~80°-70°'//
				, 'highslashlowdeg~80°/70°'//
				, 'city~Current City'//
				, 'condition~Cloudy'//
				, 'humidity~60 "humidity"'//
				, 'windchill~20° "windchill"'//
				, 'wind~25mph "wind"'//
				, 'winddirection~N "wind direction"'//
				, 'visibility~20miles "visibility"'
				, 'rain~20% "rain"'
				, 'dewpoint~40° "dewpoint"'
				, 'feelslike~90 "feelslike"'
				, 'feelslikedeg~90° "feelslike"'
				, 'sunrise~5:00 "sunrise"'
				, 'sunset~7:00 "sunset"'
				, 'update~Last Updated'];
var clockEl = ['clock~12:00' //
				, 'clockline~12|00' //
				, 'zclock~01:00'//
				, 'clockpm~12:00am'//
				, 'zhour~05 "hr"'//
				, 'hour~12 "hr"'//
				, 'minute~30 "min"'//
				, 'pm~pm'//
				, 'ttext~Five Thirty'//
				, 'htext~Five "hr"'//
				, 'mtext~Thirty "min"'//
				, 'date~10 "date"'//
				, 'prevdate~9 "date before"'//
				, 'nextdate~11 "date after"'//
				, 'dateplus~10th "date"'//
				, 'day~Sunday "day"'//
				, 'nextday~Monday "nextday"'//
				, 'yestday~Saturday "prevday"'//
				, 'sday~Sun "day"'//
				, 'snextday~Mon "nextday"'//
				, 'sprevday~Sat "prevday"'//
				, 'datetext~Tenth "date"'//
				, 'datestring~Day, Month Date'//
				, 'datedotmonth~5.June'//
				, 'dateslashmonth~5/June'//
				, 'datedash~day-month-date'//
				, 'datemonth~20 July'//
				, 'monthstring~January the 5th'
				, 'month~Feburary "month"'//
				, 'nextmonth~March "month after"'//
				, 'prevmonth~January "month before"'//
				, 'monthdot~January.30'//
				, 'monthline~Month|Date|Year'//
				, 'smonth~Jan'//
				, 'snextmonth~Feb'//
				, 'sprevmonth~Dec'//
				, 'mdy~5/10/2015'//
				, 'year~2015'];//
var systemEl = ['name~My iPhone'
				, 'firmware~Version 8.3'
				, 'battery~85 "battery"'
				, 'batterypercent~85% "battery"'
				, 'unlock~Unlock'
				, 'chargingtxt~Charging'];
var miscEl = ['textOne~Custom Text 1'
				, 'textTwo~Custom Text 2'
				, 'textThree~Custom Text 3'
				, 'textFour~Custom Text 4'
				, 'textFive~Custom Text 5'
				,'boxOne~Custom Box 1'
				,'boxTwo~Custom Box 2'
				,'boxThree~Custom Box 3'
				,'boxFour~Custom Box 4'
				,'boxFive~Custom Box 5'];
var fontArray = ['android'
				,'ailerons'
				,'anders'
				,'aventura'
				,'azedobold'
				,'azedolight'
				,'bikoblack'
				,'bikoregular'
				,'bikobold'
				,'bebasbold'
				,'bebaslight'
				,'bebasneue'
				,'bebasneueregular'
				,'building'
				,'codebold'
				,'codelight'
				,'dense'
				,'higher'
				,'fabfelt'
				,'futura'
				,'ikaros'
				,'infinity'
				,'kanji'
				,'lg'
				,'nexabold'
				,'nexabolder'
				,'nexalight'
				,'manifesto'
				,'makhina'
				,'poplar'
				,'reckoner'
				,'robotobold'
				,'robotolight'
				,'robotoregular'
				,'samster'
				, 'samsunglight'
				, 'samsungregular'];

var elementPanel = {
    clockElements: {
        clocks: {
            title: "Clock",
            clock: cF.hour() + ":" + cF.minute(),
            clockline: cF.hour() + "|" + cF.minute(),
            zclock: cF.zhour() + ":" + cF.minute(),
            clockpm: cF.hour() + ":" + cF.minute() + cF.am(),
            ttext: cF.hourtext() + " " + cF.minuteonetext() + ' ' + cF.minutetwotext()
        },
        hours: {
            title: "Hour",
            zhour: cF.zhour(),
            hour: cF.hour(),
            htext: cF.hourtext()
        },
        minutes: {
            title: "Minute",
            minute: cF.minute(),
            mtext: cF.minuteonetext() + ' ' + cF.minutetwotext()
        },
        pm: {
            title: "PM",
            pm: cF.am()
        },
        dates: {
            title: "Date",
            date: cF.date(),
            dateplus: cF.dateplus(),
            datetext: cF.datetext()
        },
        prevdates: {
            title: "Previous Date",
            prevdate: cF.prevdate()
        },
        nextdates: {
            title: "Next Date",
            nextdate: cF.nextdate()
        },
        days: {
            title: "Day",
            day: cF.daytext(),
            sday: cF.sdaytext(),
        },
        prevdays: {
            title: "Previous Day",
            prevday: cF.prevdate(),
            sprevday: cF.sprevday()
        },
        nextdays: {
            title: "Next Day",
            nextday: cF.nextdaytext(),
            snextday: cF.snextday()
        },
        months: {
            title: "Month",
            month: cF.monthtext(),
            smonth: cF.smonthtext(),
        },
        prevmonths: {
            title: "Previous Month",
            prevmonth: cF.prevmonthtext(),
            sprevmonth: cF.sprevmonth(),
        },
        nextmonths: {
            title: "Next Month",
            nextmonth: cF.nextmonthtext(),
            snextmonth: cF.snextmonth()
        },
        years: {
            title: "Year",
            year: cF.year()
        },
        strings: {
            title: "Strings",
            datestring: cF.daytext() + ", " + cF.monthtext() + " " + cF.date(),
            datedotmonth: cF.date() + '.' + cF.monthtext(),
            dateslashmonth: cF.date() + "/" + cF.monthtext(),
            datedash: cF.daytext() + "-" + cF.monthtext() + "-" + cF.date(),
            datemonth: cF.date() + " " + cF.monthtext(),
            monthdot: cF.monthtext() + "." + cF.date(),
            monthline: cF.monthtext() + "|" + cF.date() + "|" + cF.year(),
            mdy: cF.month() + "/" + cF.date() + "/" + cF.year()
        }
    },
    weatherElements: {
        temps: {
            title: "Temp",
            temp: "76",
            tempdeg: "76°",
            tempdegplus: "76°F"
        },
        highs: {
            title: "High",
            high: "80",
            highdeg: "80°",
            highdegplus: "80°F"
        },
        lows: {
            title: "Low",
            low: "70",
            lowdeg: "70°",
            lowdegplus: "70°F"
        },
        lowhigh: {
            title: "Low+High",
            highdashlow: "80-70",
            highdashlowdeg: "80°-70°",
            highslashlow: "80/70",
            highslashlowdeg: "80°/70°"
        },
        city: {
            title: "City",
            city: "Current City"
        },
        condition: {
            title: "Condition",
            condition: "Cloudy"
        },
        humidity: {
            title: "Humidity",
            humidity: "60"
        },
        windchill: {
            title: "Wind Chill",
            windchill: "20°"
        },
        wind: {
            title: "Wind",
            wind: "25mph",
            winddirection: "N"
        },
        visibility: {
            title: "Visibility",
            visibility: "20miles"
        },
        rain: {
            title: "Rain",
            rain: "20%"
        },
        dewpoint: {
            title: "Dewpoint",
            dewpoint: "40°"
        },
        feelslike: {
            title: "FeelsLike",
            feelslike: "90",
            feelslikedeg: "90°"
        },
        suntime: {
            title: "Sun",
            sunrise: "5:00 (sunset)",
            sunset: "7:00 (sunrise)"
        },
        update: {
            title: "Last Updated",
            update: "Last Updated"
        }

    },
    systemElements: {
        phone: {
            title: "Phone name",
            name: "My iPhone"
        },
        firmware: {
            title: "Firmware",
            firmware: "Version 8.3"
        },
        battery: {
            title: "Battery",
            battery: "85",
            batterypercent: "85%",
            chargingtxt: "Charging"
        },
        unlock: {
            title: "Unlock",
            unlock: "Unlock"
        }
    },
    miscElements: {
        text: {
            title: "Text Elements",
            textOne: "Custom Text 1",
            textTwo: "Custom Text 2",
            textThree: "Custom Text 3",
            textFour: "Custom Text 4",
            textFive: "Custom Text 5"
        },
        box: {
            title: "Squares",
            boxOne: "Custom Box 1",
            boxTwp: "Custom Box 2",
            boxThree: "Custom Box 3",
            boxFour: "Custom Box 4",
            boxFive: "Custom Box 5"
        }
    }
};
