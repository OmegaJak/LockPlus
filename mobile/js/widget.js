var widgetArray = ['Battery', 'Analog', 'Analog2', 'Forecast', 'Shadows', 'LineDates'];


var replaceWidget = function(key){
    var value = action.savedElements.placedElements[key];
        Object.keys(value).forEach(function (skey) { //loop styles on the object
            var styleVal = value[skey];
                $('#' + key).css(skey, styleVal);
        });
}
var loadexjsfile = function (id,over) {
    var link = 'http://lockplus.us/creator/widgets/images/' + id + '.js';
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute('title','widgetScript');
    fileref.setAttribute("src", link);
    fileref.async = true;
    if (fileref !== "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    fileref.onload = function(){
        if (over) {
            action.addDraggable(id);
            replaceWidget(id);
        }else{
            action.movedElements[id] = {type:'widget'};
            action.savedElements.placedElements = action.movedElements;
            action.addDraggable(id);
            $('#'+id).css('top','200');
        }
    }
};

var addToPage = function(id){
    if (!document.getElementById(id)) { //check to see if it don't already exist.
        loadexjsfile(id,false);
    }
};

var createDisplay = function(){
    var div = document.createElement("div");
        div.id = 'widgetlist';
        document.body.appendChild(div);
    $('#widgetlist').on('click',function(event){
        addToPage(event.target.title);
        $('#widgetlist').remove();
    });
    for (var i = 0; i < widgetArray.length; i++) {
        var divimg = document.createElement('div');
            divimg.className = 'divimg';
        var imgs = document.createElement('img');
            imgs.src = 'http://lockplus.us/creator/widgets/images/' + widgetArray[i] + '.jpg';
            imgs.title = widgetArray[i];
            divimg.appendChild(imgs);
            div.appendChild(divimg);
    };
}

//action.addtoScreen
var showWidgets = function () {
    menu.toggle();
    createDisplay();
}