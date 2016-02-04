/*jslint browser: true*/
/*global  $*/
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
menu.createRange = function (name) {

    var slideCon = document.createElement('div'),
        input = document.createElement('input'),
        range = document.createElement('div');

    slideCon.className = 'slider-wrapper';
    slideCon.id = 'sliderContainer';
    document.getElementById(name).appendChild(slideCon);

    input.type = 'text';
    input.className = name + 'js-opacity';
    input.id = 'range' + name;


    document.getElementById(name).appendChild(input);

    range.className = 'powerranger js-change-opacity';
    document.getElementById(name).appendChild(range);

    var opct = document.querySelector('.' + name + 'js-opacity');

    var initOpct = new Powerange(opct, {
        callback: function () {
            menu.adjust(name);
        },
        decimal: false,
        min: 0,
        max: 100,
        start: 1,
        hideRange: true
    });

};
menu.adjust = function (adjustItem) {
    console.log(adjustItem);
    console.log(document.getElementById('range' + adjustItem).value);
};

menu.createList = function (liName) {
    var UL = document.getElementById('bottomMenuUL');
    var li = document.createElement('li');
    li.id = 'BM' + liName;
    li.className = 'bottomMenuLI';
    li.innerHTML = liName;
    UL.appendChild(li);

    if (liName === 'size') {
        this.createRange(li.id);
    } else if (liName === 'width') {
        this.createRange(li.id);
    }
};

menu.createEdits = function () {
    for (var i = 0; i < constants.editArray.length; i++) {
        menu.createList(constants.editArray[i].split('~')[0]);
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
    this.bottomMenu();
};

function showElementPanel() {
    $('.sidePanel').css('opacity', '0');
}


menu.init();