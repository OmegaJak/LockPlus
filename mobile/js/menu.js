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

menu.createRange = function (name,does) {

    var slideCon = document.createElement('div'),
        input = document.createElement('input'),
        range = document.createElement('div');

    slideCon.className = 'slider-wrapper';
    slideCon.id = 'sliderContainer'+name;

    document.getElementById(name).appendChild(slideCon);

    input.type = 'text';
    input.className = name + 'js-opacity';
    input.id = 'range' + name;


    document.getElementById('sliderContainer'+name).appendChild(input);

    range.className = 'powerranger js-change-opacity';
    document.getElementById('sliderContainer'+name).appendChild(range);

    var opct = document.querySelector('.' + name + 'js-opacity');

    console.log($('#'+action.selectedItem).css(does));
    console.log(does);

    var startVal = $('#'+action.selectedItem).css(does).replace(/[^-\d\.]/g, '');




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
    input2.id = 'manual'+name;
    input2.className = 'manualInput';
    var increment = document.createElement('div');
    var decrement = document.createElement('div');
        increment.className = 'incs inButton';
        increment.innerHTML = '+';
        decrement.className = 'decs inButton';
        decrement.innerHTML = '-';
    input2.onchange = function(){
        menu.adjustManual(name,this.value);
    }
    inputContainer.appendChild(increment);
    inputContainer.appendChild(decrement);
    inputContainer.appendChild(input2);
    document.getElementById(name).appendChild(inputContainer);



$(".inButton").on("click", function() {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  var clas = $button.parent().find("input")[0].id.replace('manual','');;

  if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  if(newVal > 320){
        newVal = 320;
    }

  $button.parent().find("input").val(newVal);
    menu.adjustManual(clas,newVal);
});


};


menu.adjustManual = function(name,value){
        //should change powerange here, but it's being a bitch
    this.adjust(name,value,true);

};
menu.adjust = function (adjustItem,value,manual) {
    if(!manual){
        $('#manual' + adjustItem).val(document.getElementById('range' + adjustItem).value);
    }
    if (action.selectedItem.length > 0) {
        if(value){
            if(adjustItem === 'BMsize'){
                action.setCss(action.selectedItem, 'font-size', value + 'px');
            }else if(adjustItem === 'BMwidth'){
                action.setCss(action.selectedItem, 'width', value + 'px');
            }
        }else{
            var value = document.getElementById('range' + adjustItem).value;
            if (adjustItem === 'BMsize') {
                action.setCss(action.selectedItem, 'font-size', value + 'px');
            }else if(adjustItem === 'BMwidth'){
                action.setCss(action.selectedItem, 'width', value + 'px');
            }
        }
    }
};

menu.createList = function (liName,does) {
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
        this.createRange(li.id,does);
    } else if (liName === 'width') {
        this.createRange(li.id,does);
    }
};

menu.createEdits = function () {
    for (var i = 0; i < constants.editArray.length; i++) {
        menu.createList(constants.editArray[i].split('~')[0],constants.editArray[i].split('~')[4]);
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












action.removeItemFromScreen = function(id){

    var parent = document.getElementById('screenElements'),
        div = document.getElementById(id);
    parent.removeChild(div); //remove element from dom
    delete this.movedElements[id];
    this.savedElements.placedElements = this.movedElements; //since the element was removed from movedElements, this also removes from placedElements
    this.saveStorage();
}

var elPanel = {};

elPanel.scrollTop = function(item){
    $('#elPanel').animate({
     scrollTop: $(item).position().top
    }, 'fast');
}

elPanel.clicker = function(){

$("#accordion > li > div").click(function(event){
    console.log('click');

    if(false == $(this).next().is(':visible')) {
        $('#accordion ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
    elPanel.scrollTop(this);
});

$(".accordionInner > li > div").click(function(){
    if(false == $(this).next().is(':visible')) {
        $('#accordionInner ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
    elPanel.scrollTop(this);
});

$(".accordionInner").click(function(event){
    if(event.target.title.length > 1){
        console.log(event.target.title);
        var div = $('#'+event.target.title);
        console.log(div.length);
        if(div.length !== 0){
            console.log('remove');
            action.removeItemFromScreen(event.target.title);
            if(event.target.className == 'liSelected'){
                event.target.className = '';
            }
        }else{
            if(event.target.className == ''){
                event.target.className = 'liSelected';
            }
            action.addtoScreen(event.target.title);
            console.log('apply');
        }
    }
});
}

//create third level
elPanel.subsubLI = function(name,k){
    Object.keys(elementPanel[name][k]).forEach(function (key) {
        if(key !== 'title'){
            var li = document.createElement('li');
            li.title = key;
            li.innerHTML = elementPanel[name][k][key];

            //onload if item is on page change background
            if($('#' + key).length > 0){
                li.className = 'liSelected';
            }
            document.getElementById('sub' + k).appendChild(li);
        }
    });
}

//create second level
elPanel.subLI = function(name){
    Object.keys(elementPanel[name]).forEach(function (key) {
        var li = document.createElement('li');
            li.id = 'li' + key;
        var ul = document.createElement('ul');
        ul.id = 'sub' + key;
        var div = document.createElement('div');
            div.innerHTML = key;
            document.getElementById(name).appendChild(li);
            document.getElementById('li' + key).appendChild(div);
            document.getElementById('li' + key).appendChild(ul);
             elPanel.subsubLI(name,key);
    });
}

//create main options
elPanel.li = function(name){
    var li = document.createElement('li');
    var div = document.createElement('div');
    var ul = document.createElement('ul');
        ul.id = name;
        ul.className = 'accordionInner';
        div.innerHTML = name;
        li.id = 'elPanelMain' + name;
        li.class = 'elPanelMain';
        document.getElementById('accordion').appendChild(li);
        document.getElementById('elPanelMain' + name).appendChild(div);
        document.getElementById('elPanelMain' + name).appendChild(ul);
        elPanel.subLI(name);
}

elPanel.create = function(){
    console.log(elementPanel);
    Object.keys(elementPanel).forEach(function (key) {
        elPanel.li(key);
    });
    elPanel.clicker();
}

elPanel.toggle = function(){
    $('#elPanel').toggle();
    $('#elPanelDragger').toggle();
}

elPanel.init = function(){
    var elementPanel = document.createElement('div');
    elementPanel.id = 'elPanel';
    document.body.appendChild(elementPanel);

    var dragger = document.createElement('div');
        dragger.id = 'elPanelDragger';
        dragger.innerHTML = '&#8597;';
        document.body.appendChild(dragger);

    var closer = document.createElement('div');
        closer.id = 'elPanelCloser';
        closer.innerHTML = '&#xd7;';
        closer.onclick = function(){
            elPanel.toggle();
        };
        document.getElementById('elPanel').appendChild(closer);

        $('#elPanelDragger').draggable({
            axis: "y",
             drag: function(event,ui){
                if(ui.position.top > screen.height - $('#elPanel').height()){
                    ui.position.top = screen.height- $('#elPanel').height();
                }else if(ui.position.top < 0){
                    ui.position.top = 0;
                }
                $('#elPanel').css('top',ui.position.top);
             } });

    var ul = document.createElement('ul');
        ul.id = "accordion";
    document.getElementById('elPanel').appendChild(ul);
    elPanel.create();
}

setTimeout(function(){
    elPanel.init();
},10);


