
action.removeItemFromScreen = function (id) {
    var parent = document.getElementById('screenElements'),
        div = document.getElementById(id);
    parent.removeChild(div); //remove element from dom
    delete this.movedElements[id];
    this.savedElements.placedElements = this.movedElements; //since the element was removed from movedElements, this also removes from placedElements
    this.saveStorage();
};

var elPanel = {};

//remove all selected items in the panel (this is done when clear theme is pressed).
elPanel.removeSelected = function () {
    $('#accordion li ul li ul li.liSelected').each(function (index) {
        $(this).removeClass();
    });
};

elPanel.screenClick = function () {
    if($('#elPanel').css('display') === 'block'){
        $('#elPanel').scrollTop(0);

       $("#accordion li").children('ul').hide();
    }

};

elPanel.scrollTop = function (item) {
    $('#elPanel').animate({
        scrollTop: $(item).position().top
    }, 'fast');
};

elPanel.clicker = function () {
    $("#accordion > li > div").click(function () {
        if (false === $(this).next().is(':visible')) {
            $('#accordion ul').slideUp(100);
        }
        $(this).next().slideToggle(100);
        elPanel.scrollTop(this);
    });

    $(".accordionInner > li > div").click(function () {
        if (false === $(this).next().is(':visible')) {
            $('#accordionInner ul').slideUp(100);
        }
        $(this).next().slideToggle(100);
        elPanel.scrollTop(this);
    });

    $(".accordionInner").click(function (event) {
        if (event.target.title.length > 1) {
            console.log(event.target.title);
            var div = $('#' + event.target.title);
            console.log(div.length);
            if (div.length !== 0) {
                console.log('remove');
                action.removeItemFromScreen(event.target.title);
                if (event.target.className === 'liSelected') {
                    event.target.className = '';
                }
            } else {
                if (event.target.className === '') {
                    event.target.className = 'liSelected';
                }
                action.addtoScreen(event.target.title);
                console.log('apply');
            }
        }
    });
};

//create third level
elPanel.subsubLI = function (name, k) {
    Object.keys(elementPanel[name][k]).forEach(function (key) {
        if (key !== 'title') {
            var li = document.createElement('li');
            li.title = key;
            li.innerHTML = elementPanel[name][k][key];

            //onload if item is on page change background
            if ($('#' + key).length > 0) {
                li.className = 'liSelected';
            }
            document.getElementById('sub' + k).appendChild(li);
        }
    });
};

//create second level
elPanel.subLI = function (name) {
    Object.keys(elementPanel[name]).forEach(function (key) {
        var li = document.createElement('li'),
            ul = document.createElement('ul'),
            div = document.createElement('div');
        li.id = 'li' + key;
        ul.id = 'sub' + key;
        div.innerHTML = key;
        document.getElementById(name).appendChild(li);
        document.getElementById('li' + key).appendChild(div);
        document.getElementById('li' + key).appendChild(ul);
        elPanel.subsubLI(name, key);
    });
};

//create main options
elPanel.li = function (name) {
    var li = document.createElement('li'),
        div = document.createElement('div'),
        ul = document.createElement('ul');
    ul.id = name;
    ul.className = 'accordionInner';
    div.innerHTML = name;
    li.id = 'elPanelMain' + name;
    li.class = 'elPanelMain';
    document.getElementById('accordion').appendChild(li);
    document.getElementById('elPanelMain' + name).appendChild(div);
    document.getElementById('elPanelMain' + name).appendChild(ul);
    elPanel.subLI(name);
};

elPanel.create = function () {
    console.log(elementPanel);
    Object.keys(elementPanel).forEach(function (key) {
        elPanel.li(key);
    });
    elPanel.clicker();
};

elPanel.toggle = function () {
    $('#elPanel').toggle();
    $('#elPanelDragger').toggle();
};

elPanel.init = function () {
    var elementPanel = document.createElement('div'),
        dragger = document.createElement('div'),
        closer = document.createElement('div'),
        ul = document.createElement('ul');
    elementPanel.id = 'elPanel';
    document.body.appendChild(elementPanel);
    dragger.id = 'elPanelDragger';
    dragger.innerHTML = '&#8597;';
    document.body.appendChild(dragger);

    closer.id = 'elPanelCloser';
    closer.innerHTML = '&#xd7;';
    closer.onclick = function () {
        elPanel.toggle();
    };
    document.getElementById('elPanel').appendChild(closer);

    $('#elPanelDragger').draggable({
        axis: "y",
        drag: function (event, ui) {
            if (ui.position.top > screen.height - $('#elPanel').height()) {
                ui.position.top = screen.height - $('#elPanel').height();
            } else if (ui.position.top < 0) {
                ui.position.top = 0;
            }
            $('#elPanel').css('top', ui.position.top);
        }
    });
    ul.id = "accordion";
    document.getElementById('elPanel').appendChild(ul);
    elPanel.create();
};

setTimeout(function () {
    elPanel.init();
}, 10);

