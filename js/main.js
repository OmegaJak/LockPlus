'use strict';
var constants = {
    //left panel array format: li.id~title~li.class the optionally ~divId if surroundingDiv is true
    toolArray: ['background~Change Background~fa fa-photo'
                    ,'overlay~Change Overlay~fa fa-clipboard'
                    ,'element~Add Elements~fa fa-flask'
                    ,'save~Save Theme~fa fa-upload'
                    ,'clear~Clear Theme~fa fa-eraser~clearDiv'],
    editArray: ['size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change width~fa fa-arrows-h~widthDiv'
                    ,'align~Change alignment~fa fa-align-center~alignDiv'
                    ,'uppercase~Change uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change font weight~fa fa-text-width~weightDiv' //added
                    ,'color~Change color~fa fa-eyedropper~colorDiv' //added
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    iconArray: ['iconsize~Change Icon Size~fa fa-expand'
                , 'changeicon~Change Icon~fa fa-code-fork'
                , 'delete~Delete item~fa fa-trash-o~deleteDiv'],
    iconList: ['blue', 'clima', 'deep', 'Flex', 'GlowWhite', 'june', 'Klear', 'lines', 'mauri', 'mauri2', 'MNMLB', 'MNMLBW', 'MNMLW', 'mw', 'nude', 'plastic', 'playful', 'primusweather', 'Purcy', 'realicons', 'reddock', 'round', 'round2', 'shadow', 'shiny', 'simple', 'simply', 'six', 'sixtynine', 'Sk37ch', 'smash', 'stardock', 'swhite', 'toon', 'toon2', 'topaz', 'weathercom', 'wetter', 'yahoo']
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
        if (id === 'clear') { action.clearTheme(-1) }
        if (id === 'save') {this.saveTheme(); }
        if (id === 'element') { $('.elementPanel').toggle(); }
        if (id === 'size') { this.cgSize('fontSize', constants.editArray[0], 'px', 1, 140, 'font-size', 'fontSize'); }
        if (id === 'width') { this.cgSize('widthSize', constants.editArray[1], 'px', 1, $('.screen').css('width').substring(0, $('.screen').css('width').length - 2), 'width', 'width'); }
        if (id === 'align') { this.cgalign(); }
        if (id === 'uppercase') {this.cguppercase();}
        if (id === 'weight') {this.cgweight();}
        if (id === 'color') {this.cgcolor();}
        if (id === 'delete') { action.removeFromScreen(action.selectedItem, true)}
        if (id === 'iconsize') { this.cgiconSize();}
        if (id === 'changeicon') { this.populateIcons(); }
    },
    populateIcons: function () {
        $('.iconList').toggle('display');
        for (var i = 0; i < constants.iconList.length; i++) {
            var img = document.createElement('img');
            img.src = 'weather/' + constants.iconList[i] + '.png';
            img.id = constants.iconList[i];
            $('.iconList').append(img);
        }
    },
    setNewIcon: function(name,val){
        if(!val){
            $('.iconList').toggle('display');
        }
        $('.icon').attr('src', 'weather/'+name+'.png');
        action.savedElements.iconName = name;
        this.saveStorage();
    },
    cgiconSize: function(){
        var prmt = window.prompt('enter size','');
        $('#' + action.selectedItem+', .icon').css('width',prmt+'px');
        $('#' + action.selectedItem+', .icon').css('height',prmt+'px');
        action.savedElements.placedElements[action.selectedItem].width = prmt + 'px';
        action.savedElements.placedElements[action.selectedItem].height = prmt + 'px';
        action.saveStorage();
    },
    cgSize: function(key, nameString, unit, min, max, cssKey, jsCssKey) {
        var splitArr = nameString.split("~");
        var divSelector = '#' + splitArr[3];
        var idSelector = '#' + key + 'Input';
        var buttonSelector = '#' + splitArr[0];
        if ($(divSelector).children().length < 2) {
            $('<div id="' + key + 'Decrement" class="sizeControl"></div>').prependTo(divSelector);
            $('<a href="#" class="fa fa-minus-circle"></a>').appendTo('#' + key + 'Decrement');
            $('#' + key + 'Decrement').on('click', function() {
                                                    action.sizeControl('#' + key + 'Input', -1);
                                                    action.updateSize(idSelector, max, cssKey, unit, jsCssKey);
                                                   });
            $('<input type="number" id="' + key + 'Input" min="' + min + '" max="' + max + '">').prependTo(divSelector);
            $('<div id="' + key + 'Increment" class="sizeControl"></div>').prependTo(divSelector);
            $('<a href="#" class="fa fa-plus-circle"></a>').appendTo('#' + key + 'Increment');
            $('#' + key + 'Increment').on('click', function() {
                                                    action.sizeControl('#' + key + 'Input', 1);
                                                    action.updateSize(idSelector, max, cssKey, unit, jsCssKey);
                                                   });

            var elSize = $('#' + this.selectedItem).css(cssKey);
            $(idSelector).val(elSize.substring(0,elSize.length - unit.length));
            $(idSelector).on("change", function() {
                action.updateSize(idSelector, max, cssKey, unit, jsCssKey);
            });
            $(buttonSelector).parent().attr('title', ''); //Not the greatest solution for hiding the tooltip (It works -J)
        } else if ($(divSelector).children().length >= 2) {
            $('#' + key + 'Decrement').remove();
            $(idSelector).remove();
            $('#' + key + 'Increment').remove();
            $(buttonSelector).parent().attr('title', splitArr[1]);
        }
    },
    sizeControl: function(inputSelector, valueToAdd) {
        $(inputSelector).val(JSON.parse($(inputSelector).val()) + valueToAdd);
    },
    updateSize: function(idSelector, max, cssKey, unit, jsCssKey) {
        if (JSON.parse($(idSelector).val()) >= JSON.parse(max)) $(idSelector).val(max);
        $('#' + action.selectedItem).css(cssKey, $(idSelector).val() + unit);
        action.savedElements.placedElements[action.selectedItem][jsCssKey] = $(idSelector).val() + unit;
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
                showInput: true,
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
    clearTheme: function(code) { // -1 is to check, 0 doesn't clear theme, 1 clears theme
        if (code === -1) { // check what to do
            if ($('.yesClear').length || $('.noClear').length || $('.clearLabel').length) { // Check to make confirmation isn't alreay showing
                action.clearTheme(0);
            } else {
                $('#clear').parent().attr('title', ''); // Hide the tooltip
                $('<button type="button" class="noClear">No</button>').prependTo('#clearDiv');
                $('<button type="button" class="yesClear">Yes</button>').prependTo('#clearDiv');
                $('<label class="clearLabel">Are you sure?</label>').prependTo('#clearDiv');

                $('.yesClear').click(function() {
                    action.clearTheme(1);
                });
                $('.noClear').click(function() {
                    action.clearTheme(0);
                });
            }
        } else if (code === 0) { // hide confirmation
            $('.noClear').remove();
            $('.yesClear').remove();
            $('.clearLabel').remove();
            $('#clear').parent().attr('title', 'Clear Theme');
        } else if (code === 1) { // definitely clear the theme
            localStorage.removeItem('placedElements');
            action.savedElements = {};
            action.movedElements = {};
            action.selectedItem = '';
            action.doubleClicked = false;
            $('#screenElements').empty();
            action.clearTheme(0);
            action.hideElementPanelElements();
            $('.screen').css('background-image', '');
            $('.screenoverlay').css('background-image','');
        }
    },
    hideElementPanelElements: function() {
        var elementPanelElements = $('.elementPanel').find($('ul'));
        for (var i = 0; i < elementPanelElements.length; i++) {
            elementPanelElements[i].style.display = "none";
        }
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
            if (document.getElementById(label)) li.style.backgroundColor = "rgba(0,0,0,0.2)"; // Color already-added elements
            $('#' + div).append(li);
        }
    },
    saveTheme:function () { //saves info to divs and sends form to create plist

        html2canvas(document.querySelector('.screen')).then(function(canvas) {
            document.getElementById('previewCanvas').appendChild(canvas);
        });
        setTimeout(function(){
            var ca=document.getElementById('previewCanvas');
                ca.setAttribute('title',"Theme saved, refresh the page");
                ca.className = 'pCanvas';
                ca = ca.children[0];
            var context = ca.getContext('2d');
            var dataURL = ca.toDataURL();
        //document.getElementById('image').src = dataURL;
        //alert(dataURL)
        var devname = window.prompt('Enter your name', '');
        var themename = window.prompt('Enter the theme name', '');
        $('#fileName').val(themename);
        $('#devname').val(devname);
        $('#Tpreview').val(dataURL);
        $('#Twallpaper').val((action.savedElements.wallpaper) ? action.savedElements.wallpaper : '');
        $('#Toverlay').val((action.savedElements.overlay) ? action.savedElements.overlay : '');
        $('#Telements').val(JSON.stringify(action.savedElements.placedElements) || '');
        $('#myform').submit();
            },1000);
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
        div.style.position = 'absolute';
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
               // console.log(key + skey + styleVal)
                //document.getElementById(key).style.cssText += skey + ":" + styleVal; //use jquery instead?
                $('#' + key).css(skey, styleVal);
                if(key === 'icon'){ //#icon has an inner img element, it also needs height/width changed.
                    $('.icon').css(skey,styleVal);
                }
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
            if(this.savedElements.iconName){
                this.setNewIcon(this.savedElements.iconName,1); //if second paramenter dont show list
            }
        }
    },
    addDraggable: function(id){
        var contain;
        if(id === 'icon'){
            contain = '';
        }else{
            contain = $('.screen');
        }
            $('#'+id).draggable({
                containment: contain,
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
        document.getElementById('p' + id).style.backgroundColor = "rgba(0,0,0,0.2)"; //Add colored background to list element
    },
    removeFromScreen: function(id, toggleElementPanel) { //when trash for item is clicked or item is re-clicked in element menu
        var parent = document.getElementById('screenElements'),
        div = document.getElementById(id),
        index;
        parent.removeChild(div); //remove element from dom
        delete this.movedElements[id];
        this.savedElements.placedElements = this.movedElements; //since the element was removed from movedElements, this also removes from placedElements
        this.saveStorage(); //save localStorage
        this.showIconMenu(constants.toolArray, 4);
        if (toggleElementPanel) this.revertElementPanel();
        document.getElementById('p' + id).style.backgroundColor = "rgba(0,0,0,0)"; //Remove colored background from list element
    },
    showIconMenu: function(menuArray, indexesToSurround){ //indexesToSurround: -2 means surround none with div, -1 means surround all, otherwise number is index to surround
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
           if (indexesToSurround > -2) {
              if (indexesToSurround === -1 || i === indexesToSurround) {
                div.id = splitArray[3];
                div.appendChild(a);
                $('#icons').append(div);
              } else {
                $('#icons').append(a);
              }
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
    },
    setEditMenuInputsState: function(state, maxIndex) { //state: -2 means show all, -1 means hide all, other numbers means toggle that index
        if (state <= -1) {
            for (var i = 0; i < maxIndex && i < constants.editArray.length; i++) {
                var splitArray = constants.editArray[i].split("~");
                if ((state === -2 && $('#' + splitArray[3]).children().length < 2) || (state === -1 && $('#' + splitArray[3]).children().length > 1)) {
                    $('#' + splitArray[0]).trigger('click');
                }
            }
        } else if (state > -1 && state < constants.editArray.length) {
            $('#' + constants.editArray[0].split("~")[state]).trigger('click');
        } else {
            console.log("That's not a valid index. The state should be between (inclusive) -2 and " + (constants.editArray.length - 1));
        }
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
    action.showIconMenu(constants.toolArray, 4);
    action.loadFromStorage(); //load elements that are stored
    console.log(action.savedElements);
    console.log(action.placedElements);
}

$('.toolPanel').on('click', function (event) { //grab clicks from toolpanel
    action.toolPanel(event);
});
$('.iconList').on('click', function (event) { //grab clicks from toolpanel
    action.setNewIcon(event.target.id);

});
$('.elementPanel').on('click', function (event) { //grab clicks from elementPanel
    if(event.target.id){
        action.elementPanel(event.target.id);
    }
    if(event.target.tagName === "LABEL"){
        if (document.getElementById(event.target.innerHTML)) {
            action.removeFromScreen(event.target.innerHTML, false);
        } else {
           action.addtoScreen(event.target.innerHTML);
        }
    }
});
$('.screen').on('dblclick',function(event){
    if(event.target.id != 'screen' && event.target.id != ''){
        if(this.doubleClicked){ // Toggle edit menu off
            if (event.target.id === action.selectedItem) {
                this.doubleClicked = false; //Not sure if this is necessary
                action.showIconMenu(constants.toolArray, 4);
                action.selectedItem = "";
                $('#'+event.target.id).css('background', 'rgba(0,0,0,0)');
                action.revertElementPanel();
            } else {
                $('#'+action.selectedItem).css('background', 'rgba(0,0,0,0)');
                action.selectedItem = event.target.id;
                $('#'+event.target.id).css('background', 'rgba(0,0,0,0.2)');
                action.setEditMenuInputsState(-1, 2);
            }
        } else { // Toggle edit menu on
            if(event.target.id === 'icon'){
                action.showIconMenu(constants.iconArray, -1);
            }else{
                action.showIconMenu(constants.editArray, -1);
            }
            this.doubleClicked = true;
            action.selectedItem = event.target.id;
            $('#'+event.target.id).css('background', 'rgba(0,0,0,0.2)');
            $('.elementPanel').data('prevHiddenState', $('.elementPanel').is(':visible')); // Save the element panel's visibility state
            $('.elementPanel').hide(); //Hide the element panel

        }
    }
});

$('#bgInput').on('change', uploadedImage);

