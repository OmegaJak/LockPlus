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
                ,'apriolight'
                ,'aprioreg'
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
                ,'braxton'
				,'building'
                ,'canter'
                ,'canarolight'
                ,'clemente'
				,'codebold'
				,'codelight'
                ,'condlight'
                ,'damier'
                ,'din'
                ,'dinerfat'
                ,'disclaimerclassic'
                ,'disclaimerreg'
				,'dense'
                ,'gasaltreg'
                ,'geoman'
                ,'gasaltthin'
                ,'gasaltbold'
                ,'globerreg'
                ,'globerthin'
                ,'gothicregular'
                ,'gothicbold'
                ,'hab'
                ,'high'
				,'higher'
                ,'huxlee'
				,'fabfelt'
				,'futura'
                ,'future'
                ,'fringe'
                ,'geoma'
                ,'gido'
				,'ikaros'
				,'infinity'
                ,'jaapokki'
				,'kanji'
                ,'kaneda'
                ,'krinkles'
                ,'krinklesdecor'
				,'lg'
                ,'lobster'
                ,'loveloblack'
                ,'loveloline'
                ,'lovelolinel'
                ,'manbow'
				,'nexabold'
				,'nexabolder'
				,'nexalight'
                ,'olympic'
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
                ,'perfo'
                ,'plstk'
				,'poplar'
                ,'provisionary'
                ,'qontra'
                ,'ratinfested'
				,'reckoner'
                ,'reboard'
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
            title: "Strings For Clocks",
            hrmin: cF.hourtext() + '.' + cF.minute(),
            hrnsmin: cF.hourtext() + ' ' + cF.minute(),
            hrsmush: cF.hourtext() + '' + cF.minute(),
            hrmintx: (cF.minutetwotext() !== "") ? cF.hourtext() + '.' + cF.minuteonetextdot() +  '.' + cF.minutetwotext() : cF.hourtext() + '.' + cF.minuteonetextdot() + cF.minutetwotext(),
            ttext: cF.hourtext() + " " + cF.minuteonetext() + ' ' + cF.minutetwotext(),
            clock: cF.hour() + ":" + cF.minute(),
            clocksmush: cF.hour() + "" + cF.minute(),
            clockline: cF.hour() + "|" + cF.minute(),
            zclock: cF.zhour() + ":" + cF.minute(),
            clockpm: cF.hour() + ":" + cF.minute() + cF.am(),
            nhrtmin: cF.hourtext() + ':' + cF.minute(),
            nhrtarrowmin: cF.hourtext() + '>>' + cF.minute(),
            nttext: "[" + cF.hourtext() + "]" + "" + cF.minuteonetext() + '' + cF.minutetwotext()
        },
        strings2:{
            title: "Strings For Dates",
            datestring: cF.daytext() + ", " + cF.monthtext() + " " + cF.date(),             // Tuesday, February 9
            datedash: cF.daytext() + "-" + cF.monthtext() + "-" + cF.date(),                // Tuesday-February-9
            datespace: cF.daytext() + " " + cF.monthtext() + " " + cF.date(),               // Tuesday February 9
            datedotmonth: cF.date() + '.' + cF.monthtext(),                                 // 9.February
            monthdot: cF.monthtext() + "." + cF.date(),                                     // February.9
            dateslashmonth: cF.date() + "/" + cF.monthtext(),                               // 9/February
            mdy: cF.month() + "/" + cF.date() + "/" + cF.year(),                            // 1/9/2016
            datemonth: cF.date() + " " + cF.monthtext(),                                    // 9 February
            datemonthrev: cF.monthtext() + " " + cF.date(),                                 // February 9
            monthlinespace: cF.monthtext() + " | " + cF.date() + " | " + cF.year(),         // February | 9 | 2016
            monthline: cF.monthtext() + "|" + cF.date() + "|" + cF.year(),                  // February|9|2016
            daydate: cF.daytext() + " " + cF.date(),                                        // Tuesday 9
            daydotdate: cF.daytext() + "." + cF.date(),                                     // Tuesday.9
            datestringrev: cF.monthtext() + " " + cF.date() + ", " + cF.daytext(),          // February 9, Tuesday
            daydatemonth: cF.daytext() + " | " + cF.date() + " " + cF.monthtext(),          // Tuesday | 9 February
            daydatesmonth: cF.daytext() + ' ' + cF.date() + ' ' + cF.smonthtext(),          // Tuesday 9 Feb
            daydatescommamonth: cF.daytext() + ', ' + cF.date() + ' ' + cF.smonthtext(),    // Tuesday 9 Feb
            dayabdatemonth: cF.sdaytext() + ' ' + cF.date() + ' ' + cF.smonthtext(),        // Tue 9 Feb
            daycommadatemonth: cF.sdaytext() + ', ' + cF.date() + ' ' + cF.smonthtext(),    // Tue, 9 Feb
            datebar: cF.month() + '|' + cF.date() + '|' + cF.smyear(),                      // 1|9|16
            datesnslash: cF.month() + '/' + cF.date() + '/' + cF.smyear(),                  // 1/9/16
            datesingled: cF.month() + '-' + cF.date() + '-' + cF.smyear(),                  // 1-9-16
            nsmd : cF.smonthtext() + " " + cF.date(),                                       // Feb 9
            ndsm : cF.date() + " " + cF.smonthtext(),                                       // 9 Feb
            ndsmd: cF.date() + " " + cF.sdaytext(),                                         // 9 Tue
            nsmdd: cF.sdaytext() + " " + cF.date(),                                         // Tue 9
            ndatedash: cF.daytext() + " - " + cF.monthtext() + " - " + cF.date(),           // Tuesday - February - 9
            nsmmyear: cF.smonthtext() + " " + cF.year(),                                    // Feb 2016
            nmdplusyear: cF.monthtext() + " " + cF.dateplus() + " " + cF.year()             // Febraruary 9th 2016
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
            battery: "100",
            batterypercent: "100%",
            chargingtxt: "Not Charging",
            chargingstate: "Charging"
        },
        unlock: {
            title: "Unlock",
            unlock: "Unlock"
        },
        signal: {
            title: "Signal",
            signal: "3",
            signalpercent: "40%"
        },
        alarm: {
            title: "Alarm",
            alarm24: "15:20",
            alarm: "8:00",
            alarmpm: "8:00am"
        },
        wifi: {
            title: "Wifi",
            wifi: "20",
            wifipercent: "20%"
        },
        notifications:{
            title:"Notifications",
            notifymail: "Mail",
            notifysms: "SMS",
            notifyphone: "Phone",
            notifywhats: "WhatsApp",
            notifytelegram: "Telegram"
        }
    },
    miscElements: {
/*        text: {
            title: "Text Elements",
            textOne: "Custom Text 1",
            textTwo: "Custom Text 2",
            textThree: "Custom Text 3",
            textFour: "Custom Text 4",
            textFive: "Custom Text 5"
        }, */
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
		},
        apps: {
            title: "Apps 1",
            app1: "Mail",
            app2: "SMS",
            app3: "Phone",
            app4: "Twitter",
            app5: "Tweetbot",
            app6: "Telegram"
        },
        apps2:{
            title: "Apps 2",
            app7: "Instagram",
            app8: "Pandora",
            app9: "Spotify",
            app10: "Facebook",
            app11: "Kik",
            app12: "YouTube",
        },
        apps3:{
            title: "Apps 3",
            app13: "WhatsApp",
            app14: "Safari",
            app15: "Weather",
            app16: "Clock",
            app17: "Music",
            app18: "Camera"
        },
        apps4:{
            title: "Apps 4",
            app19: "Reminders",
            app20: "Notes",
            app21: "Maps",
            app22: "Calendar",
            app23: "Calculator",
            app24: "Cydia"
        },
        apps5:{
            title: "Apps 5",
            app25: "YouTube",
            app26: "Settings",
            app27: "AppStore",
            app28: "Health"
        }
    }
};
