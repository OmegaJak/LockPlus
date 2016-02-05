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

menu.updatePosition = function (left,top) {


    $('.topInput').val(top);
    $('.leftInput').val(left);
};

menu.createButtons = function(id,name){
    var button = document.createElement('div');
        button.innerHTML = 'Open';
        button.className = 'openButtons';
        if(name == 'color'){
            button.onclick = function () {
                action.cgcolor(false,'color', 'bottomMenu');
            };
        }else if(name == 'fonts'){
            button.onclick = function () {
                action.cgfont();
            };
        }
    document.getElementById(id).appendChild(button);
};

menu.createPositionInputs = function (name, does) {
    if(does === 'top-left'){
        var first = does.split('-')[0]; //top
        var second = does.split('-')[1]; //left
    }

    var startVal1 = $('#' + action.selectedItem).css(first).replace(/[^-\d\.]/g, ''); //top
    var startVal2 = $('#' + action.selectedItem).css(second).replace(/[^-\d\.]/g, ''); //left
    //var startVal2 =

    var inputContainer = document.createElement('div'),
        inputContainer2 = document.createElement('div'),
        input1 = document.createElement('input'),
        increment = document.createElement('div'),
        decrement = document.createElement('div'),
        input2 = document.createElement('input'),
        increment1 = document.createElement('div'),
        label1 = document.createElement('div'),
        label2 = document.createElement('div'),
        decrement1 = document.createElement('div');

    inputContainer.className = 'inputContainer';
    inputContainer2.className = 'inputContainer2';

    label1.innerHTML = 'top';
    label1.className = 'topLabel';
    label2.innerHTML = 'left';
    label2.className = 'leftLabel';
    //top
    input1.type = 'text';
    input1.value = startVal1;
    input1.id = 'manual' + name;
    input1.className = 'manualInput topInput';
    //left
    input2.type = 'text';
    input2.value = startVal2;
    input2.id = 'manual' + name;
    input2.className = 'manualInput leftInput';
    //top
    increment.className = 'incs inButton';
    increment.onclick = function () {
        menu.inputClickTop($(this),first);
    };
    increment.innerHTML = '+';
    //left
    increment1.className = 'incs inButton';
    increment1.onclick = function () {
        menu.inputClickTop($(this),second);
    };
    increment1.innerHTML = '+';
    //top
    decrement.className = 'decs inButton';
    decrement.onclick = function () {
        menu.inputClickTop($(this),first);
    }
    decrement.innerHTML = '-';
    //left
    decrement1.className = 'decs inButton';
    decrement1.onclick = function () {
        menu.inputClickTop($(this),second);
    }
    decrement1.innerHTML = '-';
    //top
    inputContainer.appendChild(label1);
    inputContainer.appendChild(increment);
    inputContainer.appendChild(decrement);
    inputContainer.appendChild(input1);
    //left
    inputContainer2.appendChild(label2);
    inputContainer2.appendChild(increment1);
    inputContainer2.appendChild(decrement1);
    inputContainer2.appendChild(input2);

    document.getElementById(name).appendChild(inputContainer);
    document.getElementById(name).appendChild(inputContainer2);


};

menu.inputClickTop = function(button,css){
    var oldValue = button.parent().find("input").val(),
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
    if (newVal > 568) {
        newVal = 568;
    }
    button.parent().find("input").val(newVal);
    this.adjust(css,newVal,true);
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
            switch(adjustItem) {
                case 'BMsize':
                    action.setCss(action.selectedItem, 'font-size', value + 'px');
                    break;
                case 'BMwidth':
                    action.setCss(action.selectedItem, 'width', value + 'px');
                case 'top':
                    action.setCss(action.selectedItem, 'top', value + 'px');
                    break;
                case 'left':
                    action.setCss(action.selectedItem, 'left', value + 'px');
                default:
                    'null';
            }
        } else {
            var value = document.getElementById('range' + adjustItem).value;
            if (adjustItem === 'BMsize') {
                action.setCss(action.selectedItem, 'font-size', value + 'px');
            } else if (adjustItem === 'BMwidth') {
                action.setCss(action.selectedItem, 'width', value + 'px');
            }else if (adjustItem === 'BMtop'){
                action.setCss(action.selectedItem, 'top', value + 'px');
            }
        }
    }
};

menu.createTriButtons = function(name,one,two,three){
var triContain = document.createElement('div'),
    first = document.createElement('div'),
    second = document.createElement('div'),
    third = document.createElement('div');

    triContain.className = 'triContain';

    first.className = 'firstTri';
    first.innerHTML = one;

    second.className = 'secondTri';
    second.innerHTML = two;

    third.className = 'thirdTri';
    third.innerHTML = three;

    first.onclick = function () {
        $('#' + action.selectedItem).css('text-align', 'left');
        action.savedElements.placedElements[action.selectedItem]['text-align'] = 'left';
        action.saveStorage();
        //menu.inputClick($(this));
    }
    second.onclick = function () {
        $('#' + action.selectedItem).css('text-align', 'center');
        action.savedElements.placedElements[action.selectedItem]['text-align'] = 'center';
        action.saveStorage();
    }
    third.onclick = function () {
        $('#' + action.selectedItem).css('text-align', 'right');
        action.savedElements.placedElements[action.selectedItem]['text-align'] = 'right';
        action.saveStorage();
    }

    triContain.appendChild(first);
    triContain.appendChild(second);
    triContain.appendChild(third);
    document.getElementById(name).appendChild(triContain);
};

menu.createWhat = function(liName, does, id){
    switch(liName) {
        case 'size':
        case 'width':
            menu.createRange(id, does);
            break;
        case 'position':
            menu.createPositionInputs(id,does);
            break;
        case 'color':
            menu.createButtons(id,liName);
            break;
        case 'fonts':
            menu.createButtons(id,liName);
            break;
        case 'align':
            menu.createTriButtons(id,'left','center','right');
            break;
        default:
            'null';
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
    menu.createWhat(liName, does, li.id);
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