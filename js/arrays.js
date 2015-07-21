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
        title: "Clock Elements",
        clocks: {
            title: "Clock",
            clock: "12:00",
            clockline: "12|00",
            zclock: "01:00",
            clockpm: "12:00am",
            ttext: "Five Thirty"
        },
        hours: {
            title: "Hour",
            zhour: "05",
            hour: "12",
            htext: "Five"
        },
        minutes: {
            title: "Minute",
            min: "30",
            mtext: "Thirty"
        },
        pm: {
            title: "PM",
            pm: "PM"
        },
        dates: {
            title: "Date",
            date: "10",
            dateplus: "10th",
            datetext: "Tenth"
        },
        prevdates: {
            title: "Previous Date",
            prevdate: "9"
        },
        nextdates: {
            title: "Next Date",
            nextdate: "10"
        },
        days: {
            title: "Day",
            day: "Monday",
            sday: "Mon",
        },
        prevdays: {
            title: "Previous Day",
            prevday: "Sunday",
            sprevday: "Sun"
        },
        nextdays: {
            title: "Next Day",
            nextday: "Tuesday",
            snextday: "Tue"
        },
        months: {
            title: "Month",
            month: "Feburary",
            smonth: "Feb",
        },
        prevmonths: {
            title: "Previous Month",
            prevmonth: "January",
            sprevmonth: "Jan",
        },
        nextmonths: {
            title: "Next Month",
            nextmonth: "March",
            snextmonth: "Mar"
        },
        years: {
            title: "Year",
            year: "2015"
        },
        strings: {
            title: "Strings",
            datestring: "Day, Month Date",
            datedotmonth: "5.June",
            dateslashmonth: "5/June",
            datedash: "day-month-date",
            datemonth: "20 July",
            monthdot: "January.30",
            monthline: "Month|Date|Year",
            mdy: "5/10/2015"
        }
    },
    weatherElements: {
        title: "Weather Elements",
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
            title: "Low/High",
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
        title: "System Elements",
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
        title: "Misc Elements",
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


