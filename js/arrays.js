var fontArray = ['android'
				,'ailerons'
                ,'alpine'
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
                ,'canter'
                ,'clemente'
				,'codebold'
				,'codelight'
                ,'din'
				,'dense'
                ,'gasaltreg'
                ,'gasaltthin'
                ,'gasaltbold'
				,'higher'
                ,'huxlee'
				,'fabfelt'
				,'futura'
				,'ikaros'
				,'infinity'
				,'kanji'
				,'lg'
                ,'manbow'
				,'nexabold'
				,'nexabolder'
				,'nexalight'
				,'manifesto'
				,'makhina'
                ,'penelope'
				,'poplar'
				,'reckoner'
				,'robotobold'
				,'robotolight'
				,'robotoregular'
				,'samster'
				,'samsunglight'
				,'samsungregular'
                ,'sanfranlight'
                ,'sanfranthin'
                ,'sanfranreg'
                ,'sanfranbold'
                ,'sanfranheavy'
                ,'signer'
                ,'scriptina'
                ,'tiza'];

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
        icon:{
            title: "Icon",
            icon: "Weather"
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
            title: "High and Low",
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
            boxTwo: "Custom Box 2",
            boxThree: "Custom Box 3",
            boxFour: "Custom Box 4",
            boxFive: "Custom Box 5"
        },
		circle: {
			title: "Circles",
			boxCircleOne: "Custom Circle 1",
			boxCircleTwo: "Custom Circle 2",
			boxCircleThree: "Custom Circle 3",
			boxCircleFour: "Custom Circle 4",
			boxCircleFive: "Custom Circle 5"
		}
    }
};
