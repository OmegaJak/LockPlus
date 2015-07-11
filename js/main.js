'use strict';
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
    },
    cgfontSize: function () {
        var prmpt = window.prompt('Enter a font size', '');
        $('#' + this.selectedItem).css('font-size', prmpt + 'px');
        action.savedElements.placedElements[this.selectedItem].fontSize = prmpt + 'px';
        action.saveStorage();
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
    elementPanel: function(id){ //show hide items in element Panel
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
        $('#name').val(themename);
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
    },
    showEditMenu: function(id){
        var editArray = ['size~Change Font Size~fa fa-font','width~Change width~fa fa-arrows-h','align~Change alignment~fa fa-align-center'];
        $('#icons').empty();
        for (var i = 0; i < editArray.length; i++) {
           var a = document.createElement('a');
           var li = document.createElement('li');
           a.href = '#';
           a.className = 'leftTooltip';
           a.title = editArray[i].split('~')[1];
           li.className = editArray[i].split('~')[2];
           li.id = editArray[i].split('~')[0];
           a.appendChild(li);
           $('#icons').append(a);

        };
    }
};
//upload images should implement into action OBJ. (TODO)
function uploadedImage(e) {
    var tw = e.target.files,
        ncount,
        rd,
        us;
    for (ncount = 0, us; us = tw[ncount]; ncount++) {
        rd = new FileReader;
        rd.onload = function (e) {
            return function (e) {
                if(action.uploadSelection === 'background') {
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
        if(this.doubleClicked){
            location.reload();
        } else {
            this.doubleClicked = true;
            action.showEditMenu(event.target.id);
            action.selectedItem = event.target.id;
            $('#'+event.target.id).css('background', 'rgba(0,0,0,0.2)');
        }
    }
});

$('#bgInput').on('change', uploadedImage);
