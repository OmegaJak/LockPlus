'use strict';
var constants = {
    //left panel array format: li.id~title~li.class the optionally ~divId if surroundingDiv is true
    toolArray: ['background~Change Background~fa fa-photo'
                    ,'overlay~Change Overlay~fa fa-clipboard'
                    ,'element~Add Elements~fa fa-flask'
                    ,'save~Save Theme~fa fa-upload'
                    ,'clear~Clear Theme~fa fa-eraser~clearDiv'],
    editArray: ['size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'align~Change Alignment~fa fa-align-center~alignDiv'
                    ,'fonts~Change Font~ fa fa-language~fontsDiv'
                    ,'uppercase~Change Uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change Font Weight~fa fa-text-width~weightDiv' //added
                    ,'color~Change Color~fa fa-eyedropper~colorDiv' //added
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    iconArray: ['iconsize~Change Icon Size~fa fa-expand~changeIconDiv'
                ,'position~Change Position~fa fa-arrows~positionDiv'
                , 'changeicon~Change Icon~fa fa-code-fork~changeIconDiv'
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
        if (id === 'element') { $('.elementPanel').toggle('display'); }
        if (id === 'size') { this.cgSize('fontSize', constants.editArray[0], 'px', 5, 140, 'font-size', 'fontSize'); }
        if (id === 'width') { this.cgSize('widthSize', constants.editArray[1], 'px', 10, $('.screen').width(), 'width', 'width'); }
        if (id === 'position') { this.cgPosition(); }
        if (id === 'align') { this.cgalign(); }
        if (id === 'fonts') { this.cgfont();}
        if (id === 'uppercase') {this.cguppercase();}
        if (id === 'weight') {this.cgweight();}
        if (id === 'color') {this.cgcolor();}
        if (id === 'delete') { action.removeFromScreen(action.selectedItem, true);}
        if (id === 'iconsize') { this.cgSize('iconSize', constants.iconArray[0], 'px', 5, $('.screen').width(), 'width', 'width');}
        if (id === 'changeicon') { this.populateIcons(); }
    },
    setFont: function (fontName) {
        action.savedElements.placedElements[action.selectedItem]['font-family'] = fontName;
        this.saveStorage();
        $('#' + action.selectedItem).css('font-family', fontName);
        $('#fList').toggle('display');
    },
    cgfont: function () {
        $('#fList').empty();
        $('#fList').append('<li>helvetica</li>');
        for (var i = 0; i < fontArray.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = $('#'+action.selectedItem).text() + '-' + fontArray[i];
            li.style.fontFamily = fontArray[i];
            li.title = fontArray[i];
            $('#fList').append(li);
        };
        $('#fList').toggle('display');
        setTimeout(function(){
             stroll.bind( '#font ul' );
        },1000);
    },
    populateIcons: function () {
        $('.iconList').empty();
        for (var i = 0; i < constants.iconList.length; i++) {
            var img = document.createElement('img');
            img.src = 'weather/' + constants.iconList[i] + '.png';
            img.id = constants.iconList[i];
            $('.iconList').append(img);
        }
        $('.iconList').toggle('display');
    },
    setNewIcon: function(name,val){
        if(!val){
            $('.iconList').toggle('display');
        }
        $('.icon').attr('src', 'weather/'+name+'.png');
        action.savedElements.iconName = name;
        this.saveStorage();
    },
    cgSize: function(key, nameString, unit, min, max, cssKey, jsCssKey, inputTopPos, inputRightPos, inputTitle, intendedNumberOfInputs) {
        var splitArr = nameString.split("~");
        var divSelector = '#' + key + 'DivWrapper';
        var idSelector = '#' + key + 'Input';
        var buttonSelector = '#' + splitArr[0];
        if (inputTopPos === undefined || !inputTopPos)
            var inputTopPos = $('#' + splitArr[3]).position().top + 11;
        if (inputRightPos === undefined || !inputRightPos)
            var inputRightPos =  58;
        if (inputTitle === undefined || !inputTitle)
            var inputTitle = splitArr[1].substring(6, splitArr[1].length);
        if (intendedNumberOfInputs === undefined || !intendedNumberOfInputs)
            var intendedNumberOfInputs = 1;
        if (!$(divSelector).length) { //If the input hasn't been created yet
            action.getInputWrapper(key, inputRightPos, inputTopPos, min, max, inputTitle).prependTo('#' + splitArr[3]);
            
            $('#' + key + 'Decrement').on('click', function() { action.handleInputButtonEvent(idSelector, -1, cssKey, jsCssKey, unit) });
            $('#' + key + 'Increment').on('click', function() { action.handleInputButtonEvent(idSelector, 1, cssKey, jsCssKey, unit) });

            var elSize = $('#' + this.selectedItem).css(cssKey);
            $(idSelector).val(elSize.substring(0,elSize.length - unit.length));
            $(idSelector).on("change", function() {
                action.updateSize(idSelector, cssKey, unit, jsCssKey);
            });
            $(idSelector).on("mousewheel", function() {
                action.updateSize(idSelector, cssKey, unit, jsCssKey);
            });
            $(buttonSelector).parent().attr('title', ''); //Not the greatest solution for hiding the tooltip (It works -J)
            $(divSelector).toggle('display');
        } else { //If the input already exists
            $(divSelector).is(':visible') ? $(buttonSelector).parent().attr('title', splitArr[1]) : $(buttonSelector).parent().attr('title', ''); //If it's currently visible it will be hidden
            $(divSelector).toggle('display');
        }
    },
    handleInputButtonEvent: function(idSelector, toMultiplyBy, cssKey, jsCssKey, unit) {
        event.preventDefault();
        var max = JSON.parse($(idSelector).attr('max'));
        var min = JSON.parse($(idSelector).attr('min'));
        if (event.ctrlKey) {
            action.sizeControl(idSelector, (toMultiplyBy > 0 ? max : min) - JSON.parse($(idSelector).val()))
        } else if (event.shiftKey) {
            action.sizeControl(idSelector, toMultiplyBy * 10);
        } else {
            action.sizeControl(idSelector, toMultiplyBy * 1);
        }
        action.updateSize(idSelector, cssKey, unit, jsCssKey);
    },
    getInputWrapper: function(key, inputRightPos, inputTopPos, min, max, inputTitle) {
        var divSelector = $('<div id="' + key + 'DivWrapper" style="display: none;"></div>');
        var decrementButton = $('<div id="' + key + 'Decrement" class="sizeControl" style="top: ' + (JSON.parse(inputTopPos)+15) + '; right: ' + (JSON.parse(inputRightPos)+93) + ';"></div>');
        $('<a href="#" class="fa fa-minus-circle" title="Try control+clicking and shift+clicking!"></a>').appendTo(decrementButton);
        decrementButton.prependTo(divSelector);
        $('<input type="number" id="' + key + 'Input" min="' + min + '" max="' + max + '" title="Try using the scroll wheel!" style="top: ' + JSON.parse(inputTopPos) + '; right: ' + JSON.parse(inputRightPos) + '">').prependTo(divSelector);
        var incrementButton = $('<div id="' + key + 'Increment" class="sizeControl inputLabel" data-title="' + inputTitle + '" style="top:' + (JSON.parse(inputTopPos)+15) + '; right: ' + (JSON.parse(inputRightPos)+11) + ';"></div>');
        $('<a href="#" class="fa fa-plus-circle" title="Try control+clicking and shift+clicking!"></a>').appendTo(incrementButton);
        incrementButton.prependTo(divSelector);

        return divSelector;
    },
    cgOption: function(key, nameString, options, optionsTop, adjustWidth, optionSelectedCallback, getOptionElement) {
        var splitArr = nameString.split("~");
        var divSelector = '#' + key + 'DivWrapper';
        var idSelector = '#' + key + 'Input'; 
        var buttonSelector = '#' + splitArr[0]; //The icon button
        if (!$(divSelector).length) { //If the options haven't been created yet
            $('<div id="' + key + 'DivWrapper" style="display: block;" class="options"></div>').prependTo('#' + splitArr[3]);

            var right = 50;
            var margin = 0;
            for (var i = options.length - 1; i >= 0; i--) {
                var optionDivSelector = '#' + options[i] + 'OptionDiv';
                var optionSelector = '#' + options[i] + 'Option';
                $('<div id="' + options[i] + 'OptionDiv" style="top: ' + optionsTop + 'px;"></div>').appendTo($(divSelector));
                //$('<label id="' + options[i] + 'Option">' + options[i] + '</label>').appendTo($('#' + options[i] + 'OptionDiv'));
                getOptionElement(options[i]).appendTo($('#' + options[i] + 'OptionDiv'));
                $(optionDivSelector).css({'right': right
                                                        ,'width': $('#' + options[i] + 'Option').width() + 10
                                                        ,'height': $('#' + options[i] + 'Option').height() + 2
                                                    });
                if (adjustWidth) {
                    $(optionSelector).css({'width' : $('#' + options[i] + 'OptionDiv').css('width')});
                }
                if (i === 0) {
                    $(optionDivSelector).attr('class', 'firstOption')
                } else if (i === options.length - 1) {
                    $(optionDivSelector).attr('class', 'lastOption');
                    right += JSON.parse($(optionDivSelector).css('border-right-width').replace(/\D+$/g, "")) * 2; //Hooray for regexes
                }
                right += ($(optionSelector).width() + margin);

                (function(index){
                    $(optionDivSelector).click(function() {optionSelectedCallback('#' + options[index] + 'Option')});
                })(i);
                /*(function(index){
                    $(optionSelector).click(function() {optionSelectedCallback('#' + options[index] + 'Option')});
                })(i); //Variables passed as references, not values, are a bitch*/
            }

            $(buttonSelector).parent().attr('title', '');
            $(divSelector).css('display', 'none'); // Have to have display set to block before this because sizing depends on the displayed width ↑
            $(divSelector).toggle('display');
        } else { //If the options already exists
            $(divSelector).is(':visible') ? $(buttonSelector).parent().attr('title', splitArr[1]) : $(buttonSelector).parent().attr('title', ''); //If it's currently visible it will be hidden
            var children = $(divSelector).toggle('display');
        }
    },
    cgPosition: function() {
        this.cgSize('posLeft', constants.editArray[2], 'px', 0, $('.screen').width() - $('#' + action.selectedItem).width(), 'left', 'left', '', '58', 'Left', 2);
        this.cgSize('posTop', constants.editArray[2], 'px', 0, $('.screen').height() - $('#' + action.selectedItem).height(), 'top', 'top', '', '198', 'Top', 2);

        $('#' + action.selectedItem).on('drag', function() {
            $('#posLeftInput').val($('#' + action.selectedItem).position().left);
            $('#posTopInput').val($('#' + action.selectedItem).position().top);
        });
        $('#' + action.selectedItem).resize(function() {
            alert("test");
            $('#posLeftInput').attr('max', $('.screen').width() - $('#' + action.selectedItem).width());
        });
    },
    sizeControl: function(inputSelector, valueToAdd) {
        $(inputSelector).val(JSON.parse($(inputSelector).val()) + valueToAdd);
    },
    updateSize: function(idSelector, cssKey, unit, jsCssKey) {
        var max = JSON.parse($(idSelector).attr('max'));
        var min = JSON.parse($(idSelector).attr('min'));
        if (JSON.parse($(idSelector).val()) >= JSON.parse(max)) $(idSelector).val(max);
        if (JSON.parse($(idSelector).val()) <= JSON.parse(min)) $(idSelector).val(min);
        $('#' + action.selectedItem).css(cssKey, $(idSelector).val() + unit);
        action.savedElements.placedElements[action.selectedItem][jsCssKey] = $(idSelector).val() + unit;
        if (idSelector === '#iconSizeInput' && jsCssKey === 'width') { // Special cases
            $('#' + action.selectedItem).css('height', $(idSelector).val() + unit);
            $('.icon').css({'height':$(idSelector).val()+unit, 'width':$(idSelector).val()+unit});
        } 
        if (jsCssKey === 'width') {
            $('#posLeftInput').attr('max', $('.screen').width() - $('#' + action.selectedItem).width());
            $('#posTopInput').attr('max', $('.screen').height() - $('#' + action.selectedItem).height());
        }
        action.saveStorage();
    },
    cgalign: function () {
        var lastSelector;
        this.cgOption('align', constants.editArray[3], ['left', 'center', 'right'], 234, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'text-align', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            return $('<label id="' + optionName + 'Option" style="text-align: ' + optionName + ';">' + optionName + '</label>');
        });
    },
    basicOptionSelected: function(optionSelector, lastSelector, cssKey, setTo) {
        $('#' + action.selectedItem).css(cssKey, setTo);
        action.savedElements.placedElements[action.selectedItem][cssKey] = setTo;
        action.saveStorage();
        $(optionSelector).parent().css({'background-color' : '#21b9b0', 'border-color' : '#21b9b0'});
        if (lastSelector != optionSelector) $(lastSelector).parent().css({'background-color' : '#54606e', 'border-color' : '#54606e'});
        lastSelector = optionSelector;
        return lastSelector;
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
        var lastSelector;
        this.cgOption('uppercase', constants.editArray[5], ['uppercase', 'capitalize', 'lowercase'], 371, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'text-transform', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            return $('<label id="' + optionName + 'Option" style="text-align: center; text-transform: ' + optionName + ';">' + optionName + '</label>');
        });
    },
    cgweight: function () {
        var lastSelector;
        this.cgOption('weight', constants.editArray[6], ['boldness','bold','normal'], 439, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'font-weight', 
                optionSelector != '#boldnessOption' ? $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6) : $('#boldnessInput').val());
        }, function(optionName) {
            if (optionName === 'boldness') {
                var wrapper = action.getInputWrapper('boldness', 0, 0, 100, 900, '');
                wrapper.css('display', 'block');

                var elSize = !isNaN($('#' + action.selectedItem).css('font-weight')) ? JSON.parse($('#' + action.selectedItem).css('font-weight')) : 100;

                var children = $(wrapper).children()
                var incrementButton = $(children[0]);
                var input = $(children[1]);
                var decrementButton = $(children[2]);
                input.val(elSize);
                input.attr('step', 100);
                input.css({'border-top-right-radius':0
                            ,'border-bottom-right-radius':0
                            ,'border-width':0
                            ,'border-color':'rgba(0,0,0,0)'
                            ,'background-color':'rgba(0,0,0,0)'
                            ,'border-style':''});
                wrapper.css({'width':120
                            ,'height':45
                            ,'background-color':'rgba(0,0,0,0)'
                            ,'border-width':0});
                incrementButton.css({'border-width':0});
                decrementButton.css({'border-width':0});

                var inputSelector = '#boldnessInput';
                incrementButton.on('click', function() { action.handleInputButtonEvent(inputSelector, 100, 'font-weight', 'fontWeight', '') });
                decrementButton.on('click', function() { action.handleInputButtonEvent(inputSelector, -100, 'font-weight', 'fontWeight', '') });               

                wrapper.attr('id', 'boldnessOption');
                wrapper.appendTo($("#boldnessOptionDiv"));
                wrapper.attr('class', 'noHoverChange');

                return wrapper;
            } else {
                return $('<label id="' + optionName + 'Option" style="text-align: center; font-weight: ' + optionName + ';">' + optionName + '</label>');
            }
        });
        $('#boldnessOptionDiv').css({'height': 29
                                    ,'width': 110});
        $('#boldnessOption').css({'top':-9
                                    ,'left':-12});
        $('#boldnessOption').hover(function() {$(this).css({'background-color': 'rgba(0,0,0,0)', 'border-color':'rgba(0,0,0,0)'})});
        $('#boldnessOption').on("change", function() {
            $('#' + action.selectedItem).css('font-weight', $('#boldnessInput').val());
            action.savedElements.placedElements[action.selectedItem]['font-weight'] = $('#boldnessInput').val();
            action.saveStorage();
        });
        $('#boldnessOption').on("mousewheel", function() {
            $('#' + action.selectedItem).css('font-weight', $('#boldnessInput').val());
            action.savedElements.placedElements[action.selectedItem]['font-weight'] = $('#boldnessInput').val();
            action.saveStorage();
        });
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

            switch (i) { //This is all to smooth the transition into the slick.js carousel
                case 0:
                    li.style.opacity = 0.07;
                    break;
                case 1:
                    li.style.opacity = 0.5;
                    break;
                case 2:
                    li.style.fontSize = "30px";
                    break;
                case 3:
                    li.style.opacity = 0.5;
                    break;
                case 4:
                    li.style.opacity = 0.07;
            }

            if (document.getElementById(label)) {
                li.style.backgroundColor = "#21b9b0"; // Color already-added elements
                li.style.borderColor = "#21b9b0";
            }
            $('#' + div).append(li);
        }

        setTimeout(function() {
            if ($('#' + div).attr('class') === '' || typeof $('#' + div).attr('class') === typeof undefined) {
                var numSlides = 0;
                var padding = '69px';
                var numDivChildren = $('#' + div).children().length;
                if (numDivChildren > 5) { // This is specifically for "System Elements"
                    numSlides = 5;
                    var dummyLiOne = $('<li id="dummyOne"><a title=""><label></label></a></li>');
                    var dummyLiTwo = $('<li id="dummyTwo"><a title=""><label></label></a></li>');
                    $('#' + div).append(dummyLiOne);
                    $('#' + div).append(dummyLiTwo);
                } else {
                    numSlides = numDivChildren - 1;
                    padding = '28px';
                }
                $('#' + div).slick({
                    centerMode: true,
                    centerPadding: padding,
                    infinite: false,
                    arrows: true,
                    slide: 'li',
                    speed: 100,
                    vertical: true,
                    initialSlide: 2,
                    slidesToShow: numSlides,
                    verticalSwiping: true
                });

                var prevButton = $('#' + div).find('.slick-prev')[0];
                $(prevButton).attr('class', 'slick-prev slick-arrow fa fa-arrow-down');
                $(prevButton).html('');
                $(prevButton).click(function() {action.buttonPress('prev', div);});

                var nextButton = $('#' + div).find('.slick-next')[0];
                $(nextButton).attr('class', 'slick-next slick-arrow fa fa-arrow-up');
                $(nextButton).html('');
                $(nextButton).click(function() {action.buttonPress('next', div);});

                if (numDivChildren <= 5)
                    $($('#' + div).find('[aria-live=polite]')).attr('style', 'height: 126px!important; padding: 28px 0px;');

                action.setCarouselOpacity(div);
            } else {
                $('#' + div).attr('class', '');
            }
            $('#' + div).on('mousewheel', function (e) {
                if (e.deltaY>0) {
                    $('#' + div).slick('slickPrev');
                    action.setCarouselOpacity(div);
                } else {
                    if ($($('#' + div).find('.slick-track')[0]).children().length <= 5 || JSON.parse($('#' + div).find('.slick-center').attr('data-slick-index')) + 1 < $('#' + div).find('li').length - 2) {
                        $('#' + div).slick('slickNext');
                        action.setCarouselOpacity(div);
                    }
                }
                e.preventDefault();
            });
            $('#' + div).hover(function() {
                $(document).keyup(function () {
                    if (event.keyCode === 38) {
                        $('#' + div).slick('slickPrev');
                    } else if (event.keyCode === 40) {
                        if ($($('#' + div).find('.slick-track')[0]).children().length <= 5 || JSON.parse($('#' + div).find('.slick-center').attr('data-slick-index')) + 1 < $('#' + div).find('li').length - 2) {
                            $('#' + div).slick('slickNext');
                        }
                    }
                    action.setCarouselOpacity(div);
                });
            }, function() {
                $(document).unbind("keyup");
            });
            
            if (!!+$('#' + div + ":hover").length) $('#' + div).mouseenter(); // Check if the mouse is already hovering over it when it loads
        }, 401);

    },
    setCarouselOpacity: function(div) {
        var centerIndex = $('#' + div).find('.slick-center').attr('data-slick-index');
        var centerEl = $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex)) + ']');
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) - 2) + ']').css({'opacity': 0.07, 'pointer-events':'none', 'font-size':'16px', 'height': 'auto'});
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) - 1) + ']').css({'opacity': 0.5, 'pointer-events':'none', 'font-size':'16px', 'height': 'auto'});
        $(centerEl).css({'opacity': 1, 'pointer-events':'auto', 'font-size':'30px'});
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) + 1) + ']').css({'opacity': 0.5, 'pointer-events':'none', 'font-size':'16px', 'height': 'auto'});
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) + 2) + ']').css({'opacity': 0.07, 'pointer-events':'none', 'font-size':'16px', 'height': 'auto'});

        var firstChild = $($(centerEl).children()[0]).children()[0]; // not Last Child :(
        if ($(firstChild).html().length >= 10) {
            $(centerEl).css('height', 34); // Make sure the height doesn't change when font size is decreased
            if ($(firstChild).html().length > 14) {
                $(centerEl).css("font-size", 17);
            } else {
                $(centerEl).css("font-size", 20);
            }
        }
    },
    buttonPress: function(key, div) {
        switch (key) {
            case 'prev':
                action.setCarouselOpacity(div);
                break;
            case 'next':
                if ($($('#' + div).find('.slick-track')[0]).children().length <= 5 || JSON.parse($('#' + div).find('.slick-center').attr('data-slick-index')) < $('#' + div).find('li').length - 2) {
                    action.setCarouselOpacity(div);
                } else {
                    $('#' + div).slick('slickPrev');
                }
                break;
        }
    },
    saveTheme:function () { //saves info to divs and sends form to create plist
        $('.loader').toggle('display');
        $('.phone').toggle('display');
        $('.toolPanel').toggle('display');
        $('.elementPanel').css('display','none');
        html2canvas(document.querySelector('.screen')).then(function(canvas) {
            document.getElementById('previewCanvas').appendChild(canvas);
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
            $('#Ticon').val(action.savedElements.iconName || '');
            $('#Twallpaper').val((action.savedElements.wallpaper) ? action.savedElements.wallpaper : '');
            $('#Toverlay').val((action.savedElements.overlay) ? action.savedElements.overlay : '');
            $('#Telements').val(JSON.stringify(action.savedElements.placedElements) || '');
            $('#myform').submit();
            $('.loader').toggle('display');
            var div = document.createElement('div');
                div.id = 'refresh';
                div.innerHTML = 'Awesome ' + devname + '! ' + themename + " lockscreen has been saved, please refresh the page.";
                document.body.appendChild(div);
            },1000);
        });

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
        document.getElementById('p' + id).style.backgroundColor = "#21b9b0"; //Add colored background to list element
        document.getElementById('p' + id).style.borderColor = "#21b9b0";
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
        if (document.getElementById('p' + id)) {
            document.getElementById('p' + id).style.backgroundColor = "#54606e"; //Remove colored background from list element
            document.getElementById('p' + id).style.borderColor = "#54606e";
        }
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
            $('.elementPanel').toggle('display');
        else
            $('.elementPanel').hide();
    }/*, // Turns out this isn't needed at all, they can be hidden just by showing the icon menu again, but it might be useful in the future
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
    }*/
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
    action.showIconMenu(constants.toolArray, -1);
    action.loadFromStorage(); //load elements that are stored
    console.log(action.savedElements);
    console.log(action.placedElements);
}

$('.toolPanel').on('click', function (event) { //grab clicks from toolpanel
    action.toolPanel(event);
});
$('#fList').on('click', function (event) { //grab clicks from toolpanel
    action.setFont(event.target.title);
});
$('.iconList').on('click', function (event) { //grab clicks from toolpanel
    if (event.target.id != "") {
        action.setNewIcon(event.target.id);
    } else {
        $('.iconList').toggle('display');
    }
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

$('.screen').click(function(event){
    if (event.target.id === '') {
        $('#' + action.selectedItem).css('background-color', 'rgba(0,0,0,0)');
        action.selectedItem = '';
        action.showIconMenu(constants.toolArray, -1);
        action.revertElementPanel();
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
                if (event.target.id === 'icon') {
                    action.showIconMenu(constants.iconArray, -1);
                } else {
                    action.showIconMenu(constants.editArray, -1);
                    //action.setEditMenuInputsState(-1, 3); 
                }
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
            if($('.elementPanel').is(':visible')) $('.elementPanel').toggle('display'); //Hide the element panel
        }
    }
});

$('#bgInput').on('change', uploadedImage);

