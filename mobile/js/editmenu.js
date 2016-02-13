/*jslint browser: true*/
/*global  $*/
/*global  action*/
/*global  elementPanel*/
'use strict';
var menu = {};

menu.screenClick = function (event) {
    $('#externalMenu').remove();
    $('#widgetlist').remove();
    if (action.selectedItem !== '') {
        $('#bottomMenu').remove();
        menu.bottomMenu();
        $('#editDragger').css('display','block');
        if ($('#bottomMenu').hasClass(action.selectedItem + "Menu")) {
            $('#bottomMenu').css('display', 'block');
        } else {
            $('#editDragger').css('display','block');
            $('#bottomMenu').remove();
            menu.bottomMenu();
        }
    } else {
        $('#editDragger').css('display','none');
        $('#bottomMenu').remove();
    }
};


menu.toggle = function () {
    var display = $('.sidePanel').css('display');
    if (display === 'none') {
        $('.sidePanel').css('display', 'block');
    } else {
        $('.sidePanel').css('display', 'none');
    }
};
menu.button = function () {
    var rMenu = $('<div id="roundmenu"></div>');
    $('#container').append(rMenu);
    rMenu.draggable({
        stop: function(event, ui) {
            var halfWidth = $('#roundmenu').width() / 2; // These are probably the same but you never know

            var horizontalCenter = ui.position.left + halfWidth;
            var newLeft = $('#roundmenu').position().left;
            var newTop = $('#roundmenu').position().top;

            var smallestDistance = screen.width - horizontalCenter; // Distance to right
            newLeft = screen.width - halfWidth;
            if (horizontalCenter < smallestDistance) { // Distance to left
                smallestDistance = horizontalCenter;
                newLeft = 0 - halfWidth;
            }

            $('#roundmenu').animate({
                left: newLeft,
                top: newTop
            }, 700, 'easeOutElastic');
        }
    });

    rMenu.click(function () {
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

menu.updatePosition = function (left, top) {
    $('.topInput').val(top);
    $('.leftInput').val(left);
};

menu.createButtons = function (id, name) {
    var button = document.createElement('div');
    button.innerHTML = 'Open';
    button.className = 'openButtons';
    if (name === 'color' || name === 'boxColor') {
        button.onclick = function () {
            if (action.selectedItem.substring(0, 3) === 'box') {
                action.cgcolor(false, 'background-color', 'BMboxColor');
            } else {
                action.cgcolor(false, 'color', 'bottomMenu');
            }
        };
    } else if (name === 'fonts') {
        button.onclick = function () {
            action.cgfont();
        };
    } else if (name === 'delete') {
        button.innerHTML = 'Delete';
        button.onclick = function () {
            action.removeItemFromScreen(action.selectedItem);
            $('#bottomMenu').remove();
            $("#accordion").find("li[title='" + action.selectedItem + "']").removeClass();
        };
    } else if (name === 'changeicon') {
        button.innerHTML = 'Change Icon';
        button.onclick = function () {
            action.populateIcons();
        };
    } else if (name === 'shadow') {
        button.innerHTML = "Open Shadow";
        button.onclick = function () {
            menu.externalMenu('text-shadow', 3 , ['x', 'y', 'blur'],action.selectedItem);
            $('#bottomMenu').remove();
            $('#editDragger').css('display','none');
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
    input1.value = Math.round(startVal1);
    input1.id = 'manual' + name;
    input1.className = 'manualInput topInput';
    //left
    input2.type = 'text';
    input2.value = Math.round(startVal2);
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


        if(name == 'BMiconsize'){
            var startVal = $('#iconImg').css(does).replace(/[^-\d\.]/g, '');
        }else{
            var startVal = $('#' + action.selectedItem).css(does).replace(/[^-\d\.]/g, '');
        }

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
    this.adjust(name, String(value), true);

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
                    break;
                case 'BMheight':
                    action.setCss(action.selectedItem, 'height', value + 'px');
                    break;
                case 'BMradius':
                    action.setCss(action.selectedItem, 'border-radius', value + 'px');
                    break;
                case 'BMiconsize':
                    action.setCss(action.selectedItem, 'width', value + 'px');
                    $('#iconImg').css('width', value + 'px');
                    //action.setCss('iconImg', 'width', value + 'px');
                    break;
                case 'BMborder':
                   action.setCss(action.selectedItem, 'border-width', value + 'px');
                    break;
                case 'top':
                    action.setCss(action.selectedItem, 'top', value + 'px');
                    break;
                case 'left':
                    action.setCss(action.selectedItem, 'left', value + 'px');
                    break;
                default:
                    'null';
            }
        } else {
            var value = document.getElementById('range' + adjustItem).value;
            if (adjustItem === 'BMsize') {
                action.setCss(action.selectedItem, 'font-size', value + 'px');
            } else if (adjustItem === 'BMwidth') {
                action.setCss(action.selectedItem, 'width', value + 'px');
            }else if (adjustItem === 'BMheight') {
                action.setCss(action.selectedItem, 'height', value + 'px');
            }else if (adjustItem === 'BMtop'){
                action.setCss(action.selectedItem, 'top', value + 'px');
            }else if (adjustItem === 'BMradius'){
                action.setCss(action.selectedItem, 'border-radius', value + 'px');
            }else if (adjustItem === 'BMiconsize'){
                action.setCss(action.selectedItem, 'width', value + 'px');
                $('#iconImg').css('width', value + 'px');
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
    if(name === 'BMalign'){
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
    }else if(name === 'BMuppercase'){
        first.onclick = function () {
            $('#' + action.selectedItem).css('text-transform', 'uppercase');
            action.savedElements.placedElements[action.selectedItem]['text-transform'] = 'uppercase';
            action.saveStorage();
            //menu.inputClick($(this));
        }
        second.onclick = function () {
            $('#' + action.selectedItem).css('text-transform', 'capitalize');
            action.savedElements.placedElements[action.selectedItem]['text-transform'] = 'capitalize';
            action.saveStorage();
        }
        third.onclick = function () {
            $('#' + action.selectedItem).css('text-transform', 'lowercase');
            action.savedElements.placedElements[action.selectedItem]['text-transform'] = 'lowercase';
            action.saveStorage();
        }
    }else if(name === 'BMstyle'){
        first.onclick = function () {
            $('#' + action.selectedItem).css('font-style', 'italic');
            action.savedElements.placedElements[action.selectedItem]['font-style'] = 'italic';
            action.saveStorage();
            //menu.inputClick($(this));
        }
        second.onclick = function () {
            $('#' + action.selectedItem).css('font-style', 'oblique');
            action.savedElements.placedElements[action.selectedItem]['font-style'] = 'oblique';
            action.saveStorage();
        }
        third.onclick = function () {
            $('#' + action.selectedItem).css('font-style', 'initial');
            action.savedElements.placedElements[action.selectedItem]['font-style'] = 'initial';
            action.saveStorage();
        }
    }
    triContain.appendChild(first);
    triContain.appendChild(second);
    triContain.appendChild(third);
    document.getElementById(name).appendChild(triContain);
};

menu.createBorderButton = function (id) {
    var button = document.createElement('div');
    button.innerHTML = 'Color';
    button.className = 'borderButton';
    button.onclick = function () {
            action.cgcolor(false,'border-color','BMborder');
        };
    document.getElementById(id).appendChild(button);


    var inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer2';
    var input2 = document.createElement('input');
    input2.type = 'text';
    input2.value = $('#' + action.selectedItem).css('border-width');
    input2.id = 'manual' + id;
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
    document.getElementById(id).appendChild(inputContainer);
};

menu.createWhat = function(liName, does, id){
    switch(liName) {
        case 'size':
        case 'width':
            menu.createRange(id, does);
            break;
        case 'height':
            menu.createRange(id, does);
            break;
        case 'radius':
            menu.createRange(id, does);
            break;
        case 'iconsize':
            menu.createRange(id, does);
            break;
        case 'position':
            menu.createPositionInputs(id,does);
            break;
        case 'boxColor':
        case 'color':
            menu.createButtons(id,liName);
            break;
        case 'changeicon':
            menu.createButtons(id,liName);
            break;
        case 'fonts':
            menu.createButtons(id,liName);
            break;
         case 'shadow':
            menu.createButtons(id,liName);
            break;
        case 'align':
            menu.createTriButtons(id,'left','center','right');
            break;
        case 'delete':
            menu.createButtons(id,liName);
            break;
        case 'uppercase':
            menu.createTriButtons(id,'Upper','Cap','Lower');
            break;
        case 'style':
            menu.createTriButtons(id,'Italic','Oblique','Initial');
            break;
        case 'border':
            menu.createBorderButton(id);
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
     var names;
    if(action.selectedItem.substring(0, 3) === 'box'){
        for (var i = 0; i < constants.boxEditArray.length; i++) {
            names = constants.boxEditArray[i].split('~')[0];
            if(names === 'boxShadow' || names === 'transform' || names === 'linearBoxGradient'){ //temp disable
                //do nothing
            }else{
                menu.createList(constants.boxEditArray[i].split('~')[0], constants.boxEditArray[i].split('~')[4]);
            }
        };
    }else if (action.selectedItem === 'icon'){
        for (var i = 0; i < constants.iconArray.length; i++) {
            names = constants.iconArray[i].split('~')[0];
            if(names === 'transform'){

            }else{
                menu.createList(constants.iconArray[i].split('~')[0], constants.iconArray[i].split('~')[4]);
            }
        }
    }else{
        for (var i = 0; i < constants.editArray.length; i++) {
            names = constants.editArray[i].split('~')[0];
            if(names === 'transform' || names === 'weight' || names === 'affixes' || names === 'linearGradient' ){ //tmp disable
            }else{
                menu.createList(constants.editArray[i].split('~')[0], constants.editArray[i].split('~')[4]);
            }
        }
    }
};
menu.bottomMenu = function () {
    var bMenu = document.createElement('div'),
        dragger = document.createElement('div');
    bMenu.id = 'bottomMenu';
    bMenu.className = action.selectedItem + "Menu";
    document.body.appendChild(bMenu);

    var bM = document.getElementById('bottomMenu');
    var bMenuUL = document.createElement('ul');
    bMenuUL.id = "bottomMenuUL";
    bM.appendChild(bMenuUL);

    dragger.id = 'editDragger';
    dragger.innerHTML = '&#8597;';
    document.body.appendChild(dragger);

    $('#editDragger').draggable({
        axis: "y",
        drag: function (event, ui) {
            if (ui.position.top > screen.height - $('#bottomMenu').height()) {
                ui.position.top = screen.height - $('#bottomMenu').height();
            } else if (ui.position.top < 0) {
                ui.position.top = 0;
            }
            $('#bottomMenu').css('top', ui.position.top);
        }
    });

    $('#bottomMenu').css('top', $('#editDragger').css('top'));

    $('#bottomMenu').on('touchmove',function(){
        action.isScrollingEdit = true;
    });
    $('#bottomMenu').on('touchend',function(){
        action.isScrollingEdit = false;
    });

    // $("#bottomMenu").draggable({ axis: "y", scroll: true });

    this.createEdits();
    //this.createRange();
};

//button is the div of the increment/decrement
//type is css value
menu.externalClick = function (button, type) {

    var title = button.context.title, //returns 0, 1, 2 (0 for x, 1 for y, 2 for blur);
        position,
        result = $('#' + action.selectedItem).css(type).match(/(-?\d+px)|(rgb\(.+\))/g),
        color, y, x, blur, oldValue, newVal;

    if (result) {
        color = result[0];
        y = result[1];
        x = result[2];
        blur = result[3];
    } else {
        color = 'rgb(0,0,0)';
        y = '0px';
        x = '0px';
        blur = '0px';
    }

    oldValue = button.parent().find("input").val();
    if (button.text() === "+") {
        newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    button.parent().find("input").val(newVal);

    switch (title) {
    case '0':
        y = newVal + 'px';
        break;
    case '1':
        x = newVal + 'px';
        break;
    case '2':
        blur = newVal + 'px';
        break;
    }
    newVal = y + ' ' + x + ' ' + blur + ' ' + color;
    action.setCss(action.selectedItem, type, newVal);
};
//type == text-shadow
//count == number of inputs
//names == array of names
//id == id of selected item
menu.externalMenu = function (type, count, names, id) {
    var eMenu = document.createElement('div'),
        eButton = document.createElement('div'),
        old = $('#' + id).css('text-shadow');

    eMenu.id = 'externalMenu';
    eButton.className = 'exColorButton';
    eButton.innerHTML = 'Color';
    eButton.onclick = function () {
        action.cgShadowColor('#externalMenu');
    };
    document.body.appendChild(eMenu);
    $(eMenu).draggable({
        axis: 'y'
    });

    for (var i = 0; i < count; i++) {
        var result = $('#' + action.selectedItem).css('text-shadow').match(/(-?\d+px)|(rgb\(.+\))/g);
        if (!result) {
            result = ['rgb(0,0,0)', '0px', '0px', '0px'];
        }
        var externalInputContainer = document.createElement('div'),
            input = document.createElement('input'),
            increment = document.createElement('div'),
            decrement = document.createElement('div'),
            label = document.createElement('div');

        label.innerHTML = names[i];
        input.value = parseInt(result[i + 1], 10);
        increment.innerHTML = '+';
        increment.title = i;
        increment.onclick = function () {
            menu.externalClick($(this), type);
        };
        decrement.innerHTML = '-';
        decrement.title = i;
        decrement.onclick = function () {
            menu.externalClick($(this), type);
        };

        externalInputContainer.className = 'exInput' + i;
        label.className = 'exTopLabel';
        increment.className = 'exInc exButton';
        decrement.className = 'exDec exButton';
        input.className = 'exInput';

        externalInputContainer.appendChild(input);
        externalInputContainer.appendChild(increment);
        externalInputContainer.appendChild(decrement);
        externalInputContainer.appendChild(label);
        eMenu.appendChild(externalInputContainer);

    };
    eMenu.appendChild(eButton);

};


menu.init = function () {
    this.button();
};

function showElementPanel() {
    $('.sidePanel').css('opacity', '0');
}

menu.init();
