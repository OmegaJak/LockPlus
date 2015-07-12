'use strict';
var constants = {
    //left panel array format: li.id~title~li.class the optionally ~divId if surroundingDiv is true
    toolArray: ['background~Change Background~fa fa-photo'
                    ,'overlay~Change Overlay~fa fa-connectdevelop'
                    ,'element~Add Elements~fa fa-plus-square-o'
                    ,'save~Save Theme~fa fa-floppy-o'
                    ,'clear~Clear Theme~fa fa-trash-o'],
    editArray: ['size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change width~fa fa-arrows-h~widthDiv'
                    ,'align~Change alignment~fa fa-align-center~alignDiv'
                    ,'uppercase~Change uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change font weight~fa fa-text-width~weightDiv' //added
                    ,'color~Change color~fa fa-eyedropper~colorDiv' //added
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv']
};
var action = {
    savedElements : {}, //object to save elements placed
    movedElements : {}, //elements that are placed and moved
    uploadSelection : '', //save type of upload selection (overlay or background)
    selectedItem : '',
    doubleClicked: false,
    toolPanel: function (evt) { //handle clicks from toolpanel
        var id = evt.target.id;
        this.uploadSelection = id;
        if (id === 'background' || id === 'overlay') { $('#bgInput').click(); }
        if (id === 'clear') {localStorage.removeItem('placedElements'); location.reload(); }
        if (id === 'save') {this.saveTheme(); }
        if (id === 'element') { $('.elementPanel').toggle(); }
        if (id === 'size') { this.cgfontSize(); }
        if (id === 'width') { this.cgwidthSize(); }
        if (id === 'align') { this.cgalign(); }
        if (id === 'uppercase') {this.cguppercase();}
        if (id === 'weight') {this.cgweight();}
        if (id === 'color') {this.cgcolor();}
        if (id === 'delete') { action.removeFromScreen(action.selectedItem)}
    },
    cgfontSize: function () {
        if ($('#sizeDiv').children().length < 2) {
            $('<input type="number" id="fontSizeInput" min="1" max="70" class="sizingInput">').prependTo('#sizeDiv');
            $('#fontSizeInput').val($('#' + this.selectedItem).css('font-size').substring(0,2));
            $('#fontSizeInput').on("change", function() {
                $('#' + action.selectedItem).css('font-size', $('#fontSizeInput').val() + 'px');
                action.savedElements.placedElements[action.selectedItem].fontSize = $('#fontSizeInput').val() + 'px';
                action.saveStorage();
            });
            $('#size').parent().attr('title', ''); //Not the greatest solution for hiding the tooltip (It works -J)
        } else if ($('#sizeDiv').children().length === 2) {
            $('#fontSizeInput').remove();
            $('#size').parent().attr('title', 'Change Font Size');
        }
    },
    cgwidthSize: function () {
        var prmpt = window.prompt('Enter a width', '');
        $('#' + this.selectedItem).css('width', prmpt + 'px');
        action.savedElements.placedElements[this.selectedItem].width = prmpt + 'px';
        action.saveStorage();
    },
    cgalign: function () {
        var prmpt = window.prompt('Enter Left, Center, Right', '');
        $('#' + this.selectedItem).css('text-align', prmpt);
        action.savedElements.placedElements[this.selectedItem]['text-align'] = prmpt;
        action.saveStorage();
    },
    cgcolor: function (color) {
        if (color) {
            $('#' + this.selectedItem).css('color', color);
            action.savedElements.placedElements[this.selectedItem]['color'] = color;
            action.saveStorage();
        } else {
            $("#colorDiv").spectrum({
                showInitial: true,
                showAlpha: true,
                preferredFormat: "rgba",
                showPalette: true,
                color: $('#' + this.selectedItem).css('color'),
                palette: [["black", "white", "rgb(0, 0, 255)"]]
            });
            setTimeout(function () {$('#colorDiv').spectrum('show'); }, 0); //give it time to load.
            $("#colorDiv").on('hide.spectrum', function (e, tinycolor) {
                action.cgcolor(tinycolor.toRgbString());
            });
        }
    },
    cguppercase: function () {
        var prmpt = window.prompt('Enter uppercase, lowercase, capitalize', '');
        $('#' + this.selectedItem).css('text-transform', prmpt);
        action.savedElements.placedElements[this.selectedItem]['text-transform'] = prmpt;
        action.saveStorage();
    },
    cgweight: function () {
        var prmpt = window.prompt('Enter font weight (100-900 or bold, bolder, lighter, normal)', '');
        $('#' + this.selectedItem).css('font-weight', prmpt);
        action.savedElements.placedElements[this.selectedItem]['font-weight'] = prmpt;
        action.saveStorage();
    },
    elementPanel: function (id) { //show hide items in element Panel
        if (id === 'cl') { $('#clockList').toggle('display'); this.createLI(clockEl, 'clockList'); }
        if (id === 'wl') { $('#weatherList').toggle('display'); this.createLI(weatherEl, 'weatherList'); }
        if (id === 'sl') { $('#systemList').toggle('display'); this.createLI(systemEl, 'systemList'); }
    },
    createLI: function(type, div) { //create add menu
        $('#' + div).empty();
        for (var i = 0; i < type.length; i++) {
            var li = document.createElement('li'),
                element = type[i].split('~'),
                label = element[0],
                desc = element[1];
            li.id = 'p' + label;
            li.innerHTML = '<a title="'+desc+'"><label>' + label + '</label></a>';
            $('#' + div).append(li);
        }
    },
    saveTheme:function () { //saves info to divs and sends form to create plist
        var devname = window.prompt('Enter your name', '');
        var themename = window.prompt('Enter the theme name', '');
        $('#fileName').val(themename);
        $('#devname').val(devname);
        $('#Twallpaper').val((action.savedElements.wallpaper) ? action.savedElements.wallpaper : '');
        $('#Toverlay').val((action.savedElements.overlay) ? action.savedElements.overlay : '');
        $('#Telements').val(JSON.stringify(action.savedElements.placedElements) || '');
        $('#myform').submit();
    },
    setBG: function (img) { //apply background to screen
        $('.screen').css('background-image', 'url(' + img + ')');
        action.savedElements.wallpaper = img;
    },
    setOverlay: function (img) { //apply overlay to screenoverlay
        $('.screenoverlay').css('background-image', 'url(' + img + ')');
        action.savedElements.overlay = img;
    },
    saveStorage: function () { //save savedElements object to localStorage
        localStorage.setItem('placedElements', JSON.stringify(action.savedElements));
    },
    remakeDIV: function(id) {
        var div = document.createElement('div');
        div.id = id;
        document.getElementById('screenElements').appendChild(div);
        this.addDraggable(id);
        loadClock(); //in clock.js
        weatherdivs();
        systemdivs();
    },
    replaceElements: function(){
        Object.keys(this.savedElements.placedElements).forEach(function (key) {
            action.remakeDIV(key); //loop object and place items
            var value = action.savedElements.placedElements[key];
            Object.keys(value).forEach(function (skey) { //loop styles on the object
                var styleVal = value[skey];
                if(skey === 'fontSize'){
                    skey = 'font-size';
                } else if (skey === 'textAlign') {
                    skey = 'text-align';
                }
                document.getElementById(key).style.cssText += skey + ":" + styleVal;
            });
        });
    },
    loadFromStorage: function () { //reload elements onload
        if (localStorage.placedElements) {
            this.savedElements = JSON.parse(localStorage.placedElements);
            this.movedElements = this.savedElements.placedElements; //keep moved elements up to date too
            if (this.savedElements.wallpaper) { //set wallpaper
                this.setBG(this.savedElements.wallpaper);
            }
            if (this.savedElements.overlay) { //set overlay
                this.setOverlay(this.savedElements.overlay);
            }
            if (this.savedElements.placedElements){
                this.replaceElements(); //put items back on screen
            }
        }
    },
    addDraggable: function(id){
        $('#'+id).draggable({
            containment: $('.screen'),
            stop: function(event, ui){
                action.savedElements.placedElements[id].left = ui.position.left;
                action.savedElements.placedElements[id].top = ui.position.top;
                action.saveStorage();
                //get left and top postion, save to object.
            }
        });
    },
    addtoScreen: function(id){ //when item is clicked from add panel
        var div = document.createElement('div');
        div.id = id;
        document.getElementById('screenElements').appendChild(div);
        this.addDraggable(id);
        this.movedElements[id] = {};
        this.savedElements.placedElements = this.movedElements;
        this.saveStorage();
        loadClock(); //in clock.js
        weatherdivs();
        systemdivs();
    },
    removeFromScreen: function(id) { //when trash for item is clicked or item is re-clicked in element menu
        var parent = document.getElementById('screenElements'),
        div = document.getElementById(id),
        index;
        parent.removeChild(div); //remove element from dom
        delete this.movedElements[id];
        this.savedElements.placedElements = this.movedElements; //since the element was removed from movedElements, this also removes from placedElements
        this.saveStorage(); //save localStorage
        this.showIconMenu(constants.toolArray, false);
        this.revertElementPanel();
    },
    showIconMenu: function(menuArray, surroundWithDiv){
        $('#icons').empty();
        for (var i = 0; i < menuArray.length; i++) {
           var div = document.createElement('div');
           div.id = "Test";
           var a = document.createElement('a');
           var li = document.createElement('li');
           a.href = '#';
           a.className = 'leftTooltip';
           var splitArray = menuArray[i].split('~');
           a.title = splitArray[1];
           li.className = splitArray[2];
           li.id = splitArray[0];
           a.appendChild(li);
           if (surroundWithDiv) {
              div.id = splitArray[3];
              div.appendChild(a);
              $('#icons').append(div);
           } else {
              $('#icons').append(a);
           }
        };
    },
    revertElementPanel: function() { // Returns the element panel to its previous state
        if($('.elementPanel').data('prevHiddenState'))
            $('.elementPanel').show()
        else
            $('.elementPanel').hide();
    }
};
//upload images should implement into action OBJ. (TODO)
function uploadedImage(e) {
    var input = e.currentTarget, //added to provide alert if png is used
        tw = e.target.files,
        ncount,
        rd,
        us;
    for (ncount = 0, us; us = tw[ncount]; ncount++) {
        rd = new FileReader;
        rd.onload = function (e) {
            return function (e) {
                if(action.uploadSelection === 'background') {
                     if(input.files[0].type === 'image/png'){ //if png is uploaded alert (due to server limitations).
                        alert("It is best to use .jpg for backgrounds, if you have problems saving the plist, try jpg.");
                     }
                    action.setBG(e.target.result);
                } else if (action.uploadSelection === 'overlay') {
                    action.setOverlay(e.target.result);
                }
                action.saveStorage();
            };
        }(us);
        rd.readAsDataURL(us);
    }
}
//end upload images

//event listeners
window.onload = function () {
    action.loadFromStorage(); //load elements that are stored
    console.log(action.savedElements);
    console.log(action.placedElements);
}

$('.toolPanel').on('click', function (event) { //grab clicks from toolpanel
    action.toolPanel(event);
});
$('.elementPanel').on('click', function (event) { //grab clicks from elementPanel
    if(event.target.id){
        action.elementPanel(event.target.id);
    }
    if(event.target.tagName === "LABEL"){
        action.addtoScreen(event.target.innerHTML);
    }
});
$('.screen').on('dblclick',function(event){
    if(event.target.id != 'screen' && event.target.id != ''){
        if(this.doubleClicked){ // Toggle edit menu off
            this.doubleClicked = false; //Not sure if this is necessary
            action.showIconMenu(constants.toolArray, false);
            action.selectedItem = "";
            $('#'+event.target.id).css('background', 'rgba(0,0,0,0)');
            action.revertElementPanel();
        } else { // Toggle edit menu on
            this.doubleClicked = true;
            action.showIconMenu(constants.editArray, true);
            action.selectedItem = event.target.id;
            $('#'+event.target.id).css('background', 'rgba(0,0,0,0.2)');
            $('.elementPanel').data('prevHiddenState', $('.elementPanel').is(':visible')); // Save the element panel's visibility state
            $('.elementPanel').hide(); //Hide the element panel
        }
    }
});

$('#bgInput').on('change', uploadedImage);

