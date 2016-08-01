var fontArray = ['abeatbykai'
                ,'android'
                ,'aileronlight'
                ,'aileronthin'
                ,'aileronbold'
                ,'aileronthick'
                ,'aileronultra'
                ,'aileronheavy'
                ,'ailerons'
                ,'alpine'
                ,'anders'
                ,'autograf'
                ,'aventura'
                ,'azedobold'
                ,'azedolight'
                ,'bariollight'
                ,'bariolthin'
                ,'bariolbold'
                ,'bikoblack'
                ,'bikoregular'
                ,'bikobold'
                ,'bebasbold'
                ,'bebaslight'
                ,'bebasneue'
                ,'bebasneueregular'
                ,'breaksemi'
                ,'building'
                ,'canter'
                ,'canarolight'
                ,'clemente'
                ,'codebold'
                ,'codelight'
                ,'damier'
                ,'din'
                ,'dinerfat'
                ,'dense'
                ,'gasaltreg'
                ,'gasaltthin'
                ,'gasaltbold'
                ,'gothicregular'
                ,'gothicbold'
                ,'higher'
                ,'huxlee'
                ,'fabfelt'
                ,'futura'
                ,'future'
                ,'fringe'
                ,'geoma'
                ,'ikaros'
                ,'infinity'
                ,'jaapokki'
                ,'kanji'
                ,'kaneda'
                ,'krinkles'
                ,'krinklesdecor'
                ,'lg'
                ,'loveloblack'
                ,'loveloline'
                ,'lovelolinel'
                ,'manbow'
                ,'nexabold'
                ,'nexabolder'
                ,'nexalight'
                ,'manifesto'
                ,'manteka'
                ,'makhina'
                ,'mikadolight'
                ,'mikadoregular'
                ,'mikadobold'
                ,'mikadomedium'
                ,'mikadoultra'
                ,'mikadoblack'
                ,'modernesans'
                ,'moonlight'
                ,'moonbold'
                ,'mostwasted'
                ,'penelope'
                ,'plstk'
                ,'poplar'
                ,'provisionary'
                ,'ratinfested'
                ,'reckoner'
                ,'realtimethin'
                ,'realtimelight'
                ,'realtimeregular'
                ,'realtimesemi'
                ,'realtimebold'
                ,'rexbold'
                ,'robotobold'
                ,'robotolight'
                ,'robotoregular'
                ,'salamat'
                ,'samster'
                ,'samsunglight'
                ,'samsungregular'
                ,'sanfranlight'
                ,'sanfranthin'
                ,'sanfranreg'
                ,'sanfranbold'
                ,'sanfranheavy'
                ,'sciflysans'
                ,'streamster'
                ,'shimes'
                ,'shimestwo'
                ,'signer'
                ,'scriptina'
                ,'superair'
                ,'talldark'
                ,'timber'
                ,'tiza'
                ,'track'
                ,'tresdias'];

var elementPanel = {
    clockElements: {
        strings: {
            title: "Strings",
            datestring: cF.daytext() + ", " + cF.monthtext() + " " + cF.date(),
            datedash: cF.daytext() + "-" + cF.monthtext() + "-" + cF.date(),
            datespace: cF.daytext() + " " + cF.monthtext() + " " + cF.date(),
            datedotmonth: cF.date() + '.' + cF.monthtext(),
            monthdot: cF.monthtext() + "." + cF.date(),
            dateslashmonth: cF.date() + "/" + cF.monthtext(),
            mdy: cF.month() + "/" + cF.date() + "/" + cF.year()
        },
        strings2: {
            title: "Strings2",
            datemonth: cF.date() + " " + cF.monthtext(),
            datemonthrev: cF.monthtext() + " " + cF.date(),
            monthlinespace: cF.monthtext() + " | " + cF.date() + " | " + cF.year(),
            monthline: cF.monthtext() + "|" + cF.date() + "|" + cF.year(),
            daydate: cF.daytext() + " " + cF.date(),
            daydotdate: cF.daytext() + "." + cF.date(),
            datestringrev: cF.monthtext() + " " + cF.date() + ", " + cF.daytext()
        },
        strings3: {
            title: "Strings3",
            daydatemonth: cF.daytext() + " | " + cF.date() + " " + cF.monthtext(),
            daydatesmonth: cF.daytext() + ' ' + cF.date() + ' ' + cF.smonthtext(),
            daydatescommamonth: cF.daytext() + ', ' + cF.date() + ' ' + cF.smonthtext(),
            dayabdatemonth: cF.sdaytext() + ' ' + cF.date() + ' ' + cF.smonthtext(),
            daycommadatemonth: cF.sdaytext() + ', ' + cF.date() + ' ' + cF.smonthtext()
        },
        strings4:{
            title: "Strings4",
            hrmin: cF.hourtext() + '.' + cF.minute(),
            hrnsmin: cF.hourtext() + ' ' + cF.minute(),
            hrsmush: cF.hourtext() + '' + cF.minute(),
            hrmintx: (cF.minutetwotext() !== "") ? cF.hourtext() + '.' + cF.minuteonetextdot() +  '.' + cF.minutetwotext() : cF.hourtext() + '.' + cF.minuteonetextdot() + cF.minutetwotext(),
            ttext: cF.hourtext() + " " + cF.minuteonetext() + ' ' + cF.minutetwotext()
        },
        strings5: {
            title: "Strings5",
            datebar: cF.month() + '|' + cF.date() + '|' + cF.smyear(),
            datesnslash: cF.month() + '/' + cF.date() + '/' + cF.smyear(),
            datesingled: cF.month() + '-' + cF.date() + '-' + cF.smyear(),
            datemonthfirst: cF.date() + ' ' + cF.monthtext()
        },
        clocks: {
            title: "Clock",
            clock: cF.hour() + ":" + cF.minute(),
            clocksmush: cF.hour() + "" + cF.minute(),
            clockline: cF.hour() + "|" + cF.minute(),
            zclock: cF.zhour() + ":" + cF.minute(),
            clockpm: cF.hour() + ":" + cF.minute() + cF.am()
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
        seconds:{
            title: "Seconds",
            second: cF.second()
        },
        pm: {
            title: "PM",
            pm: cF.am()
        },
        tod: {
            title: "TOD",
            tod: cF.tod()
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
            yestday: cF.yesterdaydaytext(),
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
            year: cF.year(),
            yeartext: convertTOWord(cF.year())
        }
    },
    weatherElements: {
        wstring: {
            title: "String",
            tempcon: "76 Cloudy",
            tempcon1: "76°f Cloudy",
            tempcon2: "76° Cloudy",
            windstr: "25mph N"
        },
        temps: {
            title: "Temp",
            temp: "76",
            tempdeg: "76°",
            tempdegplus: "76°f"
        },
        icon:{
            title: "Icon",
            icon: "Weather"
        },
        highs: {
            title: "High",
            high: "80",
            highdeg: "80°",
            highdegplus: "80°f"
        },
        lows: {
            title: "Low",
            low: "70",
            lowdeg: "70°",
            lowdegplus: "70°f"
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
        battery: {
            title: "Battery",
            battery: "100",
            batterypercent: "100%",
            chargingtxt: "Not Charging",
            chargingstate: "Charging"
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
