/*jslint browser: true*/
/*global  $*/
/*global  action*/
'use strict';
var menu = {};
menu.toggle = function () {
    var display = $('.sidePanel').css('display');
    if (display === 'none') {
        $('.sidePanel').css('display', 'block');
    } else {
        $('.sidePanel').css('display', 'none');
    }
};
menu.button = function () {
    var rMenu = document.createElement('div');
    rMenu.id = 'roundMenu';
    document.body.appendChild(rMenu);
    $("#roundMenu").draggable();

    $("#roundMenu").click(function () {
        menu.toggle();
    });
};
//end round menu button

//start edit menu crap
menu.inputClick = function (button) {
    var oldValue = button.parent().find("input").val(),
        clas = button.parent().find("input")[0].id.replace('manual', ''),
        newVal;
    if (button.text() === "+") {
        newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    if (newVal > 320) {
        newVal = 320;
    }
    button.parent().find("input").val(newVal);
    menu.adjustManual(clas, newVal);
};

menu.createRange = function (name, does) {
    var slideCon = document.createElement('div'),
        input = document.createElement('input'),
        range = document.createElement('div');

    slideCon.className = 'slider-wrapper';
    slideCon.id = 'sliderContainer' + name;

    document.getElementById(name).appendChild(slideCon);

    input.type = 'text';
    input.className = name + 'js-opacity';
    input.id = 'range' + name;


    document.getElementById('sliderContainer' + name).appendChild(input);

    range.className = 'powerranger js-change-opacity';
    document.getElementById('sliderContainer' + name).appendChild(range);

    var opct = document.querySelector('.' + name + 'js-opacity');

    console.log($('#' + action.selectedItem).css(does));
    console.log(does);

    var startVal = $('#' + action.selectedItem).css(does).replace(/[^-\d\.]/g, '');




    var initOpct = new Powerange(opct, {
        callback: function () {
            menu.adjust(name);

        },
        decimal: false,
        min: 0,
        max: 320,
        start: startVal,
        hideRange: true
    });

    var inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';
    var input2 = document.createElement('input');
    input2.type = 'text';
    input2.value = startVal;
    input2.id = 'manual' + name;
    input2.className = 'manualInput';
    var increment = document.createElement('div');
    var decrement = document.createElement('div');
    increment.className = 'incs inButton';
    increment.onclick = function () {
        menu.inputClick($(this));
    }
    increment.innerHTML = '+';
    decrement.className = 'decs inButton';
    decrement.onclick = function () {
        menu.inputClick($(this));
    }
    decrement.innerHTML = '-';
    input2.onchange = function () {
        menu.adjustManual(name, this.value);
    }
    inputContainer.appendChild(increment);
    inputContainer.appendChild(decrement);
    inputContainer.appendChild(input2);
    document.getElementById(name).appendChild(inputContainer);

};

menu.adjustManual = function (name, value) {
    //should change powerange here, but it's being a bitch
    this.adjust(name, value, true);

};
menu.adjust = function (adjustItem, value, manual) {
    if (!manual) {
        $('#manual' + adjustItem).val(document.getElementById('range' + adjustItem).value);
    }
    if (action.selectedItem.length > 0) {
        if (value) {
            if (adjustItem === 'BMsize') {
                action.setCss(action.selectedItem, 'font-size', value + 'px');
            } else if (adjustItem === 'BMwidth') {
                action.setCss(action.selectedItem, 'width', value + 'px');
            }
        } else {
            var value = document.getElementById('range' + adjustItem).value;
            if (adjustItem === 'BMsize') {
                action.setCss(action.selectedItem, 'font-size', value + 'px');
            } else if (adjustItem === 'BMwidth') {
                action.setCss(action.selectedItem, 'width', value + 'px');
            }
        }
    }
};

menu.createList = function (liName, does) {
    var UL = document.getElementById('bottomMenuUL');
    var li = document.createElement('li');
    var div = document.createElement('div');
    div.innerHTML = liName;
    div.className = 'liText';
    li.id = 'BM' + liName;
    li.className = 'bottomMenuLI';


    li.appendChild(div);
    UL.appendChild(li);

    if (liName === 'size') {
        this.createRange(li.id, does);
    } else if (liName === 'width') {
        this.createRange(li.id, does);
    }
};

menu.createEdits = function () {
    for (var i = 0; i < constants.editArray.length; i++) {
        menu.createList(constants.editArray[i].split('~')[0], constants.editArray[i].split('~')[4]);
    };
};
menu.bottomMenu = function () {
    var bMenu = document.createElement('div');
    bMenu.id = 'bottomMenu';
    document.body.appendChild(bMenu);

    var bM = document.getElementById('bottomMenu');
    var bMenuUL = document.createElement('ul');
    bMenuUL.id = "bottomMenuUL";
    bM.appendChild(bMenuUL)

    // $("#bottomMenu").draggable({ axis: "y", scroll: true });

    this.createEdits();
    //this.createRange();
};

menu.init = function () {
    this.button();
    //this.bottomMenu();
};



function showElementPanel() {
    $('.sidePanel').css('opacity', '0');
}


menu.init();