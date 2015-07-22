'use strict';
var constants = {
    //left panel array format: li.id~title~li.class the optionally ~divId if surroundingDiv is true
    toolArray: ['background~Change Background~fa fa-photo~backgroundDiv'
                    ,'overlay~Change Overlay~fa fa-clipboard~overlayDiv'
                    ,'element~Show Elements Panel~fa fa-flask~elementDiv'
                    ,'save~Save Theme~fa fa-upload~saveDiv'
                    ,'load~Load Theme~fa fa-download~loadDiv'
                    ,'clear~Clear Theme~fa fa-eraser~clearDiv'],
    editArray: ['size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'color~Change Color~fa fa-eyedropper~colorDiv' //added
                    ,'align~Change Alignment~fa fa-align-center~alignDiv'
                    ,'fonts~Change Font~ fa fa-language~fontsDiv'
                    ,'uppercase~Change Uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change Font Weight~fa fa-text-width~weightDiv' //added
                    ,'shadow~Edit Text Shadow~sa ctextshadow~shadowDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    customTextArray: ['customText~Change Text~fa fa-pencil~textDiv'
                    ,'size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'color~Change Color~fa fa-eyedropper~colorDiv' //added
                    ,'align~Change Alignment~fa fa-align-center~alignDiv'
                    ,'fonts~Change Font~ fa fa-language~fontsDiv'
                    ,'uppercase~Change Uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change Font Weight~fa fa-text-width~weightDiv' //added
                    ,'shadow~Edit Text Shadow~sa ctextshadow~shadowDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    shadowArray: ['hShadow~Horizontal~fa fa-arrows-h~hShadowDiv'
                    ,'vShadow~Vertical~fa fa-arrows-v~vShadowDiv'
                    ,'blur~Blur Radius~fa fa-dot-circle-o~blurDiv'
                    ,'shadowColor~Change Color~fa fa-eyedropper~shadowColorDiv'
                    ,'backToEdit~Back~fa fa-arrow-left~backToEditDiv'
                    ,'clearShadow~Clear Shadow~fa fa-trash~clearShadowDiv'],
    boxShadowArray: ['boxhShadow~Horizontal~fa fa-arrows-h~boxhShadowDiv'
                    ,'boxvShadow~Vertical~fa fa-arrows-v~boxvShadowDiv'
                    ,'boxblur~Blur Radius~fa fa-dot-circle-o~boxblurDiv'
                    ,'boxshadowColor~Change Color~fa fa-eyedropper~boxshadowColorDiv'
                    ,'backToEdit~Back~fa fa-arrow-left~backToEditDiv'
                    ,'boxclearShadow~Clear Shadow~fa fa-trash~boxclearShadowDiv'],
    boxEditArray: ['width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'height~Change Height~fa fa-arrows-v~heightDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'boxShadow~Edit Box Shadow~fa fa-cube~boxShadowDiv'
                    ,'boxColor~Change Color~fa fa-eyedropper~boxColorDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    iconArray: ['iconsize~Change Icon Size~fa fa-expand~changeIconDiv'
                ,'position~Change Position~fa fa-arrows~positionDiv'
                , 'changeicon~Change Icon~fa fa-code-fork~changeIconDiv'
                , 'delete~Delete item~fa fa-trash-o~deleteDiv'],
                gridSizeTop: 160,
                gridSizeLeft: 284,
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
            action.uploadSelection = id;
        if (id === 'background' || id === 'overlay') { $('#bgInput').click(); }
        if (id === 'clear') { action.clearTheme(-1) }
        if (id === 'save') {this.saveTheme(); }
        if (id === 'load') { window.open(location.href.replace('#', '') + 'load'); window.close();  } //load php stuff
        if (id === 'element') { action.elementIconClick(); }
        if (id === 'size') { this.cgSize('fontSize', constants.editArray[0], 'px', 5, 140, 'font-size', 'fontSize', action.updateSize);}
        if (id === 'width') { this.cgSize('widthSize', constants.editArray[1], 'px', 10, $('.screen').width(), 'width', 'width', action.updateSize); }
        if (id === 'height') { this.cgSize('heightSize', constants.boxEditArray[1], 'px', 1, $('.screen').height(), 'height', 'height', action.updateSize); }
        if (id === 'position') { this.cgPosition(); }
        if (id === 'align') { this.cgalign(); action.setHelpText('Select left, right or center. Requires width to be set.');}
        if (id === 'fonts') { this.cgfont(); action.setHelpText('View live preview, tap font to select.');}
        if (id === 'uppercase') {this.cguppercase(); action.setHelpText('Choose uppercase, capitalize, or lowercase.');}
        if (id === 'weight') {this.cgweight(); action.setHelpText('Press + and - buttons, or choose bold or normal.');}
        if (id === 'shadow') { action.showIconMenu(constants.shadowArray, -1); action.setHelpText('New menu opened (shadow menu)');}
        if (id === 'boxShadow') { action.showIconMenu(constants.boxShadowArray, -1);  action.setHelpText('New menu opened (box-shadow menu)');}
        if (id === 'hShadow') { this.cgSize('hShadow', constants.shadowArray[0], 'px', -100, 100, 'hShadow', 'hShadow', action.updateShadow, false, false, 'Horizontal'); }
        if (id === 'vShadow') { this.cgSize('vShadow', constants.shadowArray[1], 'px', -100, 100, 'vShadow', 'vShadow', action.updateShadow, false, false, 'Vertical'); }
        if (id === 'blur') { this.cgSize('blur', constants.shadowArray[2], 'px', 0, 50, 'blur', 'blur', action.updateShadow, false, false, 'Blur Radius'); }
        if (id === 'shadowColor') { this.cgShadowColor(); }
        if (id === 'clearShadow') { this.updateShadow('','','','','clear'); }
        if (id === 'backToEdit') { action.showProperMenuForId(this.selectedItem); }
        if (id === 'boxhShadow') { this.cgSize('boxhShadow', constants.boxShadowArray[0], 'px', -100, 100, 'boxhShadow', 'boxhShadow', action.updateShadow, false, false, 'Horizontal'); }
        if (id === 'boxvShadow') { this.cgSize('boxvShadow', constants.boxShadowArray[1], 'px', -100, 100, 'boxvShadow', 'boxvShadow', action.updateShadow, false, false, 'Vertical'); }
        if (id === 'boxblur') { this.cgSize('boxblur', constants.boxShadowArray[2], 'px', 0, 50, 'boxblur', 'boxblur', action.updateShadow, false, false, 'Blur Radius'); }
        if (id === 'boxshadowColor') { this.cgShadowColor(true); }
        if (id === 'boxclearShadow') { this.updateShadow('','','','','clear'); }
        if (id === 'color') {this.cgcolor(false, 'color', 'colorDiv');}
        if (id === 'boxColor') { this.cgcolor(false, 'background-color', 'boxColorDiv'); }
        if (id === 'customText') { this.cgText(); }
        if (id === 'delete') { action.removeFromScreen(action.selectedItem, true);}
        if (id === 'iconsize') { this.cgSize('iconSize', constants.iconArray[0], 'px', 5, $('.screen').width(), 'width', 'width', action.updateSize);}
        if (id === 'changeicon') { this.populateIcons(); }
    },
    elementIconClick: function() {
        if(!$('.elementPanel').is(":visible")) {
            action.setHelpText('Choose item from right panel');

            if (!$('.elementPanel').attr('data-shown')) {
                action.toggleAllElementPanels();
                $('.elementPanel').attr('data-shown', 'Congratulations, curious one. You are the millionth visitor!');
            }
        }

        /* show hide text -> */
        ($('#elementDiv').children('a:first')[0].title === 'Show Elements Panel') ?
            $('#elementDiv').children('a:first')[0].title = 'Hide Elements Panel' :
            $('#elementDiv').children('a:first')[0].title = 'Show Elements Panel';
        $('.elementPanel').toggle('some random text here thatll really just turn into 400');
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
    updateShadow: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        var isForBox = idSelector.indexOf("box") > -1;
        var currentShadow = !isForBox ? $('#' + action.selectedItem).css('text-shadow') : $('#' + action.selectedItem).css('box-shadow');
        if (currentShadow != 'none') var splitShadow = currentShadow.split(' ')
            else var splitShadow = ['#ffffff','0px', '0px', '0px'];

        //Dealing with stupid browser reordering
        if (!splitShadow[0].indexOf('px') > -1 && splitShadow[0].indexOf("rgb") > -1) {
            splitShadow[0] = splitShadow[0] + splitShadow[1] + splitShadow[2];
            splitShadow[1] = splitShadow[3];
            splitShadow[2] = splitShadow[4];
            splitShadow[3] = splitShadow[5];
        }

        var index = 0;
        if (jsCssKey === (!isForBox ? 'hShadow' : 'boxhShadow')) index = 1
            else if (jsCssKey === (!isForBox ? 'vShadow' : 'boxvShadow')) index = 2
            else if (jsCssKey === (!isForBox ? 'blur' : 'boxblur')) index = 3
            else if (jsCssKey === (!isForBox ? 'color' : 'boxcolor')) index = 0;

        if (purpose === 'set') {
            var newShadow = '';

            if (idSelector.charAt(0) === '#') {
                splitShadow[index] = $(idSelector).val() + unit;
            } else {
                splitShadow[index] = cssKey;
            }

            newShadow = splitShadow[0] + ' ' + splitShadow[1] + ' ' + splitShadow[2] + ' ' + splitShadow[3]; // Parse into correct format for css. Could've done a loop, but that's not necessary
            if (!isForBox) {
                $('#' + action.selectedItem).css('text-shadow', newShadow);
                action.savedElements.placedElements[action.selectedItem]['text-shadow'] = newShadow;
            } else {
                $('#' + action.selectedItem).css('box-shadow', newShadow);
                action.savedElements.placedElements[action.selectedItem]['box-shadow'] = newShadow;
            }

            action.saveStorage();
        } else if (purpose === 'get') {
            return splitShadow[index];
        } else if (purpose === 'clear') {
            if (!isForBox) {
                $('#' + action.selectedItem).css('text-shadow', 'none');
                action.savedElements.placedElements[action.selectedItem]['text-shadow'] = 'none';
            } else {
                $('#' + action.selectedItem).css('box-shadow', 'none');
                action.savedElements.placedElements[action.selectedItem]['box-shadow'] = 'none';
            }
            action.saveStorage();
        }
    },
    cgShadowColor: function(isForBox) {
        var selector = isForBox ? '#boxshadowColorDiv' : '#shadowColorDiv';
        $(selector).spectrum({
            showInitial: true,
            showAlpha: true,
            showInput: true,
            preferredFormat: "rgb",
            showPalette: true,
            color: action.updateShadow('','','','','get'),
            palette: [["black", "white", "#0074d9" , "#2c3e50", "#27ae60", "#e74c3c", "#393939", "#3498db", "#2980b9", "#2ecc71", "#66cc99", "#019875", "#96281b", "#96281b", "#f64747", "#e26a6a", "#f5ab35", "#f39c12", "#f89406", "#f27935", "#6c7a89", "#95a5a6", "#bdc3c7", "#bfbfbf", "#674172", "#663399", "#8e44ad", "#9b59b6", "#db0a5b", "#d2527f", "#f62459", "#16a085", "#d2d7d3", "#4183d7", "#59abe3", "#3a539b"]]
        });
        setTimeout(function () {$(selector).spectrum('show'); }, 0); //give it time to load.
        $(selector).on('hide.spectrum', function (e, tinycolor) {
            action.updateShadow(isForBox ? 'box' : '', tinycolor.toRgbString(), 'px', 'color', 'set'); //Added special case to updateShadow for this
        });
        $(selector).on('move.spectrum', function(e, tinycolor) {
                action.updateShadow(isForBox ? 'box' : '', tinycolor.toRgbString(), 'px', 'color', 'set');
             });
    },
    cgText: function() {
        var splitArr = constants.customTextArray[0].split("~");
        var inputTopPos = $('#' + splitArr[3]).position().top + 11;
        var unCappedID = action.selectedItem;
        var textID = unCappedID.substring(0, 1).toUpperCase() + unCappedID.substring(1);
        var divSelector = '#custom' + textID + 'DivWrapper';
        var idSelector = '#custom' + textID + 'Input';
        var buttonSelector = '#customText';

        function updateStuff() {
            $('#' + action.selectedItem).html($(idSelector).val());
            var newLength = $(idSelector).val().length * 16;
            $(idSelector).css("width", newLength > 150 ? newLength : 150);
            action.savedElements.placedElements[action.selectedItem]['innerHTML'] = $(idSelector).val();
            action.saveStorage();
        }

        if (!$(divSelector).length) {
            var divWrapper = action.getInputWrapper('custom' + textID, 78, inputTopPos, 0, 0, 'Custom Text', true);
            divWrapper.prependTo('#textDiv');

            $(idSelector).val($('#' + this.selectedItem).html());
            var width = $(idSelector).val().length * 16;
            $(idSelector).css('width', width > 150 ? width : 150);

            $(idSelector).on("change", function() { updateStuff(); });
            $(idSelector).keydown(function() { updateStuff(); });
            $(idSelector).keyup(function() { updateStuff(); });

            $(buttonSelector).parent().toggleClass('leftTooltip');
            divWrapper.toggle('display');
            $(idSelector).focus();
        } else {
            $(buttonSelector).parent().toggleClass('leftTooltip'); //enable the toolTip Class again.
            $(divSelector).toggle('display');
        }
    },
    /**
    * -----Parameters-----
    * key: The prefix for all elements in this input. Ex: 'fontSize'
    * nameString: The relevant string, seperated by "~", properly formatted, from constants. Ex: constants.editArray[0]
    * unit: The css unit for what you're editing. Ex: 'px'
    * min: The minimum value for the number input. Inclusive. Ex: 0
    * max: The maximum value for the number input. Inclusive. Ex: 50
    * cssKey: The string for the css property to set. Ex:"font-size"
    * jsCssKey: The string for the css property, as referenced from javascript. Ex:"fontSize"
    * updateCallback: The function to call when the input is updated. Must accept the parameters
    *                idSelector, cssKey, unit, jsCssKey, and 'get' versus 'set' to either get the
    *                current value to set the value. Ex: action.updateSize
    * inputTopPos: Optional. The top position of the input. Ex: 120
    * inputRightPos: Optional. The right position of the input. Ex: 70
    * inputTitle: Optional. The text to show above the input. Ex: "Font Size"
    * intendedNumberOfInputs: Optional(ish). Necessary if multiple inputs are going to be shown. Ex: 2
    */
    cgSize: function(key, nameString, unit, min, max, cssKey, jsCssKey, updateCallback, inputTopPos, inputRightPos, inputTitle, intendedNumberOfInputs) {
        var splitArr = nameString.split("~");
        var divSelector = '#' + key + 'DivWrapper';
        var idSelector = '#' + key + 'Input';
        var buttonSelector = '#' + splitArr[0];
        if (inputTopPos === undefined || !inputTopPos)
            var inputTopPos = $('#' + splitArr[3]).position().top + 11;
        if (inputRightPos === undefined || !inputRightPos)
            var inputRightPos =  80;
        if (inputTitle === undefined || !inputTitle)
            var inputTitle = splitArr[1].substring(6, splitArr[1].length);
        if (intendedNumberOfInputs === undefined || !intendedNumberOfInputs)
            var intendedNumberOfInputs = 1;
        if (!$(divSelector).length) { //If the input hasn't been created yet
            action.getInputWrapper(key, inputRightPos, inputTopPos, min, max, inputTitle, false).prependTo('#' + splitArr[3]);

            $('#' + key + 'Decrement').on('click', function() { action.handleInputButtonEvent(idSelector, -1, cssKey, jsCssKey, unit, updateCallback) });
            $('#' + key + 'Increment').on('click', function() { action.handleInputButtonEvent(idSelector, 1, cssKey, jsCssKey, unit, updateCallback) });

            var elSize = updateCallback(idSelector, cssKey, unit, jsCssKey, 'get');
            $(idSelector).val(elSize.substring(0,elSize.length - unit.length));
            $(idSelector).on("focus", function() { action.setHelpText('Try scrolling while hovering over the input text!'); })
            $(idSelector).on("change", function() {
                updateCallback(idSelector, cssKey, unit, jsCssKey, 'set');
            });
            $(idSelector).on("mousewheel", function(event) {
                if (event.deltaY > 0) $(idSelector).val(JSON.parse($(idSelector).val()) + 1)
                    else $(idSelector).val(JSON.parse($(idSelector).val()) - 1);
                updateCallback(idSelector, cssKey, unit, jsCssKey, 'set');
                event.preventDefault();
            });

            $(buttonSelector).parent().attr('class', ''); //just disable the leftToolTip Class? hide tooltip
            $(divSelector).toggle('display');
        } else { //If the input already exists
            $(divSelector).is(':visible') ? $(buttonSelector).parent().attr('class','leftTooltip') : $(buttonSelector).parent().attr('class',''); //enable tooltip again
            $(divSelector).toggle('display');
        }
    },
    handleInputButtonEvent: function(idSelector, toMultiplyBy, cssKey, jsCssKey, unit, updateCallback) {
        action.setHelpText('Ctrl+click to set to max/min. Shift click to change by 10.');
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
        updateCallback(idSelector, cssKey, unit, jsCssKey, 'set');
    },
    getInputWrapper: function(key, inputRightPos, inputTopPos, min, max, inputTitle, isForText) {
        var divSelector = $('<div id="' + key + 'DivWrapper" style="display: none;"></div>');
        if (!isForText) {
            var decrementButton = $('<div id="' + key + 'Decrement" class="sizeControl" style="top: ' + (JSON.parse(inputTopPos)+15) + '; right: ' + (JSON.parse(inputRightPos)+93) + ';"></div>');
            $('<a href="#" class="fa fa-minus-circle" title="Try control+clicking and shift+clicking!"></a>').appendTo(decrementButton);
            decrementButton.prependTo(divSelector);
            $('<input type="number" id="' + key + 'Input" min="' + min + '" max="' + max + '" title="Try using the scroll wheel!" style="top: ' + JSON.parse(inputTopPos) + '; right: ' + JSON.parse(inputRightPos) + '">').prependTo(divSelector);
            var incrementButton = $('<div id="' + key + 'Increment" class="sizeControl inputLabel" data-title="' + inputTitle + '" style="top:' + (JSON.parse(inputTopPos)+15) + '; right: ' + (JSON.parse(inputRightPos)+11) + ';"></div>');
            $('<a href="#" class="fa fa-plus-circle" title="Try control+clicking and shift+clicking!"></a>').appendTo(incrementButton);
            incrementButton.prependTo(divSelector);
        } else {
            $('<input type="text" id="' + key + 'Input" style="top: ' + JSON.parse(inputTopPos) + '; right: ' + JSON.parse(inputRightPos) + '">').prependTo(divSelector);
        }

        return divSelector;
    },
    /**
    * -----Parameters-----
    * key: The prefix for all elements in this input. Ex: 'align'
    * nameString: The relevant string, seperated by "~", properly formatted, from constants. Ex: constants.editArray[3]
    * options: An array of the names of the options. Ex: ['left', 'center', 'right']
    * optionsTop: The top position of the options. Ex: 10
    * adjustWidth: Manually set the width of the options I think? Ex: false
    * optionSelectedCallback: The function to call when an option has been selected. Must take id as a parameter.
    * getOptionElement: The function to call to create the actual element contained in the option div. Must take take optionName.
    */
    cgOption: function(key, nameString, options, optionsTop, adjustWidth, optionSelectedCallback, getOptionElement) {
        var splitArr = nameString.split("~");
        var divSelector = '#' + key + 'DivWrapper';
        var idSelector = '#' + key + 'Input';
        var buttonSelector = '#' + splitArr[0]; //The icon button
        if (optionsTop === 0 || !optionsTop)
            optionsTop = $('#' + splitArr[3]).position().top + 82;
        if (!$(divSelector).length) { //If the options haven't been created yet
            $('<div id="' + key + 'DivWrapper" style="display: block;" class="options"></div>').prependTo('#' + splitArr[3]);

            var right = 80;
            var margin = 0;
            for (var i = options.length - 1; i >= 0; i--) {
                var optionDivSelector = '#' + options[i] + 'OptionDiv';
                var optionSelector = '#' + options[i] + 'Option';
                $('<div id="' + options[i] + 'OptionDiv" style="top: ' + optionsTop + 'px;"></div>').appendTo($(divSelector));
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
            }

            $(buttonSelector).parent().attr('class',' '); //instead of removing the title, just remove class. hide toolTip
            $(divSelector).css('display', 'none'); // Have to have display set to block before this because sizing depends on the displayed width ↑
            $(divSelector).toggle('display');
        } else { //If the options already exists
            $(divSelector).is(':visible') ? $(buttonSelector).parent().attr('class','leftTooltip') : $(buttonSelector).parent().attr('class',''); //If it's currently visible it will be hidden
            var children = $(divSelector).toggle('display');
        }
    },
    cgPosition: function() {
        this.cgSize('posLeft', constants.editArray[2], 'px', 0, $('.screen').width() - $('#' + action.selectedItem).width(), 'left', 'left', action.updateSize, '', '80', 'Left', 2);
        this.cgSize('posTop', constants.editArray[2], 'px', 0, $('.screen').height() - $('#' + action.selectedItem).height(), 'top', 'top', action.updateSize, '', '208', 'Top', 2);

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
    updateSize: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        if (purpose === 'set') {
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
                 /* Check to see if setting width overflows screen */
                /* While changing the width, and the element bounds goes out of screen, move item left to stop overflow */

                var elWidth = $('#' + action.selectedItem).width(), //current set width
                    elPos = $('#' + action.selectedItem).position().left, //element position from the left
                    elDiff = elWidth - ($('.screen').width() - elPos); //check difference in screen width compared to element position + set width

                if(elDiff > 0){
                    $('#' + action.selectedItem).css('left', (elPos - elDiff) +'px'); //make adjustments to the element
                    action.savedElements.placedElements[action.selectedItem].left = elPos - elDiff + 'px'; //updated placedElements obj
                }

                $('#posLeftInput').attr('max', $('.screen').width() - $('#' + action.selectedItem).width());
                $('#posTopInput').attr('max', $('.screen').height() - $('#' + action.selectedItem).height());
            }
            action.saveStorage();
        } else if (purpose === 'get') {
            return $('#' + action.selectedItem).css(cssKey);
        }
    },
    cgalign: function () {
        var lastSelector;
        this.cgOption('align', constants.editArray[3], ['left', 'center', 'right'], 0, true, function(optionSelector) {
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
    cgcolor: function (color, cssKey, div) {
        if (color) {
            $('#' + this.selectedItem).css(cssKey, color);
            action.savedElements.placedElements[this.selectedItem][cssKey] = color;
            action.saveStorage();
        } else {
            $("#" + div).spectrum({
                showInitial: true,
                showAlpha: true,
                showInput: true,
                preferredFormat: "rgba",
                showPalette: true,
                color: $('#' + this.selectedItem).css(cssKey),
                palette: [["black", "white", "#0074d9" , "#2c3e50", "#27ae60", "#e74c3c", "#393939", "#3498db", "#2980b9", "#2ecc71", "#66cc99", "#019875", "#96281b", "#96281b", "#f64747", "#e26a6a", "#f5ab35", "#f39c12", "#f89406", "#f27935", "#6c7a89", "#95a5a6", "#bdc3c7", "#bfbfbf", "#674172", "#663399", "#8e44ad", "#9b59b6", "#db0a5b", "#d2527f", "#f62459", "#16a085", "#d2d7d3", "#4183d7", "#59abe3", "#3a539b"]]
            });
            setTimeout(function () {$('#' + div).spectrum('show'); }, 0); //give it time to load.
            $("#" + div).on('hide.spectrum', function (e, tinycolor) {
                action.cgcolor(tinycolor.toRgbString(), cssKey, div);
            });
            $("#" + div).on('move.spectrum', function(e, tinycolor) {
                action.cgcolor(tinycolor.toRgbString(), cssKey, div);
             });
        }
    },
    cguppercase: function () {
        var lastSelector;
        this.cgOption('uppercase', constants.editArray[5], ['uppercase', 'capitalize', 'lowercase'], 0, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'text-transform', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            return $('<label id="' + optionName + 'Option" style="text-align: center; text-transform: ' + optionName + ';">' + optionName + '</label>');
        });
    },
    cgweight: function () {
        var lastSelector;
        this.cgOption('weight', constants.editArray[6], ['boldness','bold','normal'], 0, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'font-weight',
                optionSelector != '#boldnessOption' ? $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6) : $('#boldnessInput').val());
        }, function(optionName) {
            if (optionName === 'boldness') {
                var wrapper = action.getInputWrapper('boldness', 0, 0, 100, 900, '', false);
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
    showPanel: function(list){
        $('#'+list).css('visibility','visible'); //new function instead of running createLI again.
    },
    elementPanel: function (id, duration) { //show hide items in element Panel
        var duration = typeof duration != 'undefined' ? duration : 400;
        if (id === 'cl') { $('#clockList').toggle(duration); /*this.createLI(elementPanel.clockElements, 'clockList');*/ this.showPanel('clockList'); }
        if (id === 'wl') { $('#weatherList').toggle(duration); /*this.createLI(elementPanel.weatherElements, 'weatherList');*/ this.showPanel('weatherList') }
        if (id === 'sl') { $('#systemList').toggle(duration); /*this.createLI(elementPanel.systemElements, 'systemList');*/ this.showPanel('systemList'); }
        if (id === 'ml') { $('#miscList').toggle(duration); /*this.createLI(elementPanel.miscElements, 'miscList');*/ this.showPanel('miscList'); }
    },
    getElementPanelIdSelector: function(id) { // Sadly I can't put this into that ↑
        if (id === 'cl') return '#clockList'
        else if (id === 'wl') return '#weatherList'
        else if (id === 'sl') return '#systemList'
        else if (id === 'ml') return '#miscList';
    },
    toggleAllElementPanels: function() {
        action.elementPanel('cl', 0);
        action.elementPanel('wl', 0);
        action.elementPanel('sl', 0);
        action.elementPanel('ml', 0);
    },
    clearTheme: function(code) { // -1 is to check, 0 doesn't clear theme, 1 clears theme
        if (code === -1) { // check what to do
            if ($('.yesClear').length || $('.noClear').length || $('.clearLabel').length) { // Check to make confirmation isn't alreay showing
                action.clearTheme(0);
            } else {
                  var label = $('#clearDiv').position().top + 13, //auto align clear label
                     button = label + 4;
                $('#clear').parent().attr('class',' '); //Hide tooltip
                $('<button style="top:'+button+'px" type="button" class="noClear">No</button>').prependTo('#clearDiv');
                $('<button style="top:'+button+'px" type="button" class="yesClear">Yes</button>').prependTo('#clearDiv');
                $('<label style="top:'+label+'px" class="clearLabel">Clear Theme?</label>').prependTo('#clearDiv');


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
            $('#clear').parent().attr('class','leftTooltip');
            action.setHelpText('Not cleared, click to edit elements. (Also delete)');
        } else if (code === 1) { // definitely clear the theme
            localStorage.removeItem('placedElements');
            action.savedElements = {};
            action.movedElements = {};
            action.selectedItem = '';
            action.doubleClicked = false;
            $('#screenElements').empty();
            $('.newSVG').remove();
            $(".svg").remove();
            action.clearTheme(0);
            action.hideElementPanelElements();
            $('#bgInput').after($('#bgInput').clone(true)).remove();
            $('.screen').css('background-image', '');
            $('.screenoverlay').css('background-image','');
            $('.screen').prepend('<img class="svg"/>');
            action.setHelpText('Select Add elements to place elements.');
        }
    },
    hideElementPanelElements: function() {
        var elementPanelElements = $('.elementPanel').children();
        for (var i = 0; i < elementPanelElements.length; i++) {
            if ($(elementPanelElements[i]).is('div') && $(elementPanelElements[i]).is(":visible")) $(elementPanelElements[i - 1]).click();
        }
    },
    createLI: function(type, div) { //create add menu
        $('#' + div).empty();
        action.parseElementsArray(type, '#' + div);
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

                var startSlide = 1;
                $('#' + div).slick({
                    centerMode: true,
                    centerPadding: padding,
                    infinite: false,
                    arrows: true,
                    slide: 'li',
                    speed: 100,
                    vertical: true,
                    initialSlide: startSlide,
                    slidesToShow: numSlides,
                    verticalSwiping: false
                });

                $($('#' + div).find('[aria-live=polite]')).css('width', '500px');
                $('.slick-slide').css('float', 'none');

                var prevButton = $('#' + div).find('.slick-next')[0];
                $(prevButton).attr('class', 'slick-next slick-arrow fa fa-arrow-down');
                $(prevButton).html('');
                $(prevButton).click(function() {action.buttonPress('next', div);});

                var nextButton = $('#' + div).find('.slick-prev')[0];
                $(nextButton).attr('class', 'slick-prev slick-arrow fa fa-arrow-up');
                $(nextButton).html('');
                $(nextButton).click(function() {action.buttonPress('prev', div);});

                if (numDivChildren <= 5)
                    $($('#' + div).find('[aria-live=polite]')).attr('style', 'height: 126px!important; padding: 28px 0px;');

                $('#' + div).slick('slickNext');
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
    },
    parseElementsArray: function(array, divSelector) {
        Object.keys(array).forEach(function (key) {
            if (array[key].constructor === Object) { // if this is another array
                action.parseElementsArray(array[key], divSelector);
            } else if (key === 'title') { // Create the parent category li item
                var baseName = array[key].toLowerCase().replace(/\s/g, ''); //Lowercase and remove spaces
                var parentId =  baseName + 'Category';
                var parentLinkId = baseName + 'CategoryLink';
                var subCategoryId = baseName + 'SubCategory';
                $('<li id="' + parentId + '" class="categoryTitle">' + array[key] + '</li>').appendTo($(divSelector));
                $('<ul style="display: none" id="' + subCategoryId + '" class="subCategory"></ul>').appendTo('#' + parentId);
            } else { //It's an item in the subcategory
                var subCategorySelector = '#' + array['title'].toLowerCase().replace(/\s/g, '') + 'SubCategory';
                $('<li id="' + key + 'Picker" data-element="' + key + '">' + array[key] + '</li>').appendTo($(subCategorySelector));

                if ($('#' + key).length) { //It's already been added to the screen
                    $('#' + key + 'Picker').css('background-color', '#21b9b0');
                    $('#' + key + 'Picker').css('border-color', '#21b9b0');
                }
            }
        });
    },
    setCarouselOpacity: function(div) {
        var centerIndex = $('#' + div).find('.slick-center').attr('data-slick-index');
        var lastEl = $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) - 1) + ']');
        var centerEl = $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex)) + ']');
        var nextEl = $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) + 1) + ']');
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) - 2) + ']').css({'opacity': 0.07, 'font-size':'16px', 'height': 'auto'});
        $(lastEl).css({'opacity': 0.5, 'font-size':'16px', 'height': 'auto','border':'1px solid transparent'});
        $(lastEl).removeClass("elementPanelPreview");
        $(centerEl).css({'opacity': 1, 'pointer-events':'auto', 'font-size':'30px','border':'2px solid #21b9b0'});
        $(centerEl).addClass("elementPanelPreview");
        $(nextEl).css({'opacity': 0.5, 'font-size':'16px', 'height': 'auto','border':'1px solid transparent'});
        $(nextEl).removeClass("elementPanelPreview");
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) + 2) + ']').css({'opacity': 0.07, 'font-size':'16px', 'height': 'auto'});

        // Subcategory showing //
        lastEl.find('ul').first().hide(); // Make sure the other ones are hidden

        var centerUl = $(centerEl).find('ul').first();
        var numLis = centerUl.children().length;
        //centerUl.css('top', '-' + (((numLis * 32 + (5*(numLis - 1))) / 2) - 13) + 'px');
        centerUl.show(); // Show the subcategory for the center ul

        /*if (centerEl.is(":visible") && !($(centerEl).is(":animated")))
            centerEl.animate({'opacity':'0.6'}, {duration: 350});

        action.bounceyTimeout = setTimeout(function() {
            if (centerEl.is(":visible") && !($(centerEl).is(":animated")))
                centerEl.animate({'opacity':'1'}, {duration: 350});
        }, 360);*/

        /*var centerChildren = centerUl.children();
        for (var i = 0; i < centerChildren.length; i++) {
            var currentChild = $(centerChildren[i]);
            if (currentChild.is(":visible") && !($(centerChildren[i]).is(":animated")))
                currentChild.animate({'height':'32px', 'font-size':'21px'}, {duration: 100});
        }
        action.bounceyTimeout = setTimeout(function() {
            for (var i = 0; i < centerChildren.length; i++) {
                var currentChild = $(centerChildren[i]);
                if (currentChild.is(":visible") && !($(centerChildren[i]).is(":animated")))
                    currentChild.animate({'height':'16px', 'font-size':'16px'}, {duration: 100});
            }
        }, 110);*/

        nextEl.find('ul').first().hide(); // Make sure the other ones are hidden
        // ---- //

        var text = centerEl.clone().children().remove().end().text(); // Hooray for StackOverflow
                // clone the element, select the children, remove all children, go back to selected element, get text
        if (text.length >= 10) {
            $(centerEl).css('height', 34); // Make sure the height doesn't change when font size is decreased
            if (text.length > 14) {
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
        $('.toolPanel').css('display','none');
        $('.elementPanel').css('display','none');
        $('#tips').css('display','none');
        html2canvas(document.querySelector('.screen')).then(function(canvas) {
            document.getElementById('previewCanvas').appendChild(canvas);
            setTimeout(function(){
                var ca=document.getElementById('previewCanvas');
                    ca.setAttribute('title',"Theme saved, refresh the page");
                    ca.className = 'pCanvas';
                    ca = ca.children[0];
                var context = ca.getContext('2d');
                var dataURL = ca.toDataURL();
            $('.phone').css('display','none'); //dont hide until html2canvas has rendered it.
            $('.newSVG').empty(); //remove svg
            //Fixing what html2canvas breaks
            $("body").append('<form id="saveForm"><h3>Enter theme details</h3><label class="flabel">Your Name</label><input type="text" name="fdevname" id="fdevname" placeholder="Your Name"/><label class="flabel">Theme Name</label><input type="text" name="fthemename" id="fthemename" placeholder="Theme Name"/><div class="fsubmit">Submit</div><label class="errorlabel">*must fill in all inputs</label></form>');
            //end fixing what html2canvas broke
            $('.fsubmit').on('click',function(){
                $('#saveForm').css('display','none');
                $('.loader').toggle('display');
                   var devname = $('#fdevname').val();
                   var themename = $('#fthemename').val();
                   if(themename !== '' && devname !== ''){
                       $('#fileName').val(themename);
                        $('#devname').val(devname);
                        $('#Tpreview').val(dataURL);
                        $('#Ticon').val(action.savedElements.iconName || '');
                        $('#Twallpaper').val((action.savedElements.wallpaper) ? action.savedElements.wallpaper : '');
                        $('#Toverlay').val((action.savedElements.overlay) ? action.savedElements.overlay : '');
                        $('#Telements').val(JSON.stringify(action.savedElements.placedElements) || '');
                        $('#myform').submit();

                   }else{
                    $('.errorlabel').css('display','block');
                   }
                });
            },1000);
        });

    },
    setBG: function (img) { //apply background to screen
        $('.screen').css('background-image', 'url(' + img + ')');
        action.savedElements.wallpaper = img;
    },
    setOverlay: function (img) { //apply overlay to screenoverlay
        document.querySelector('.svg').src = img;
        $('.screenoverlay').css('background-image', 'url(' + img + ')');
        action.savedElements.overlay = img;
        if(img.split('+')[0] === 'data:image/svg'){
            setTimeout(function(){
                showSVG('.svg', true);
                setTimeout(function(){
                        var inner = document.querySelector('.newSVG').innerHTML;
                        $('.newSVG').empty();
                        var div = document.createElement('div');
                            div.className = 'newSVG';
                            div.innerHTML = inner;
                            document.querySelector('.screen').appendChild(div);
                },0);
            },0);
        }

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
        miscDivs();
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
                $('#' + key).css(skey, styleVal);
                if(key === 'icon'){ //#icon has an inner img element, it also needs height/width changed.
                    $('.icon').css(skey,styleVal);
                } else if (key.substring(0, 4) === 'text' && skey === 'innerHTML') {
                    $('#' + key).html(styleVal);
                }
            });
        });
    },
    loadFromStorage: function () { //reload elements onload
        if (localStorage.placedElements) {
             action.setHelpText('Click elements to adjust styles.');
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
        }else{
            action.setHelpText('Select Add elements to place elements.');
        }
    },
    addDraggable: function(id){
        var contain;
        if(id === 'icon'){
            contain = '';
        }else{
            contain = $('.screen');
        }
        var startX;
        var startY;
        $('#'+id).draggable({
            containment: contain,
            start: function(event, ui) {
                /* if dLine class has title the same as id remove it */
                /* remove it on start to not mess with it's own movement */
                /* it will snap to itself this solves that issue */
                $(".dLine[title='"+id+"']").remove();
                if (action.selectedItem != id)
                    $('#' + id).click();
            },
            stop: function(event, ui){
                action.savedElements.placedElements[id].left = ui.position.left;
                action.savedElements.placedElements[id].top = ui.position.top;
                action.saveStorage();
                /* Create a div around the element which can be used for snapping */
                if(localStorage.snap == 'true'){
                    var snapper = $('<div>',{'class' : 'dLine', 'title' : id}),
                        el = $('#'+id),
                        position = el.position();
                    snapper.insertBefore(el);
                    snapper.css({
                        top: position.top + 'px',
                        left: position.left + 'px',
                        width: el.width(),
                        height: el.height()
                    });
                }
            },
                snap: '.dLine' //snap other items to that div.
        });
    },
    addtoScreen: function(id){ //when item is clicked from add panel
        action.setHelpText('Click element to ajust style. (Also delete)');
        var div = document.createElement('div');
        div.id = id;
        if (id.substring(0,3) === 'box') {
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.backgroundColor = 'red';
            div.style.display = 'gray';
            div.style.zIndex = 1;
        } else {
            div.style.zIndex = 2;
        }
        document.getElementById('screenElements').appendChild(div);
        this.addDraggable(id);
        this.movedElements[id] = {};
        this.savedElements.placedElements = this.movedElements;
        if (id.substring(0,3) === 'box') {
            this.savedElements.placedElements[id].width = '50px';
            this.savedElements.placedElements[id].height = '50px';
            this.savedElements.placedElements[id].backgroundColor = 'red';
            this.savedElements.placedElements[id].display = 'gray';
            this.savedElements.placedElements[id].zIndex = 1;
        } else {
            this.savedElements.placedElements[id].zIndex = 2;
        }
        this.saveStorage();
        loadClock(); //in clock.js
        weatherdivs();
        systemdivs();
        miscDivs();
        document.getElementById(id + 'Picker').style.backgroundColor = "#21b9b0"; //Add colored background to list element
        document.getElementById(id + 'Picker').style.borderColor = "#21b9b0";
    },
    removeFromScreen: function(id, toggleElementPanel) { //when trash for item is clicked or item is re-clicked in element menu
        var parent = document.getElementById('screenElements'),
        div = document.getElementById(id),
        index;
        parent.removeChild(div); //remove element from dom
        delete this.movedElements[id];
        this.savedElements.placedElements = this.movedElements; //since the element was removed from movedElements, this also removes from placedElements
        this.saveStorage(); //save localStorage
        this.showIconMenu(constants.toolArray, -1);
        if (document.getElementById(id + 'Picker')) {
            document.getElementById(id + 'Picker').style.backgroundColor = "#54606e"; //Remove colored background from list element
            document.getElementById(id + 'Picker').style.borderColor = "#54606e";
        }
    },
    showIconMenu: function(menuArray, indexesToSurround){ //indexesToSurround: -2 means surround none with div, -1 means surround all, otherwise number is index to surround
        $('#icons').empty();
        $('#logo').attr('title', 'Now Showing: ' + action.getTitleForArray(menuArray)); // Updating the title of the menu
        for (var i = 0; i < menuArray.length; i++) {
           var div = document.createElement('div');
           div.id = "Test";
           var a = document.createElement('a');
           var li = document.createElement('li');
           a.href = 'javascript:void(0)';
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
    getTitleForArray: function(menuArray) { // Any icon menu that's shown needs to be added here to update its title
        switch (menuArray) {
            case constants.toolArray:
                return "Main Menu";
            case constants.editArray:
                return "Element Styles Menu";
            case constants.customTextArray:
                return "Custom Text Menu";
            case constants.shadowArray:
                return "Element Shadow Menu";
            case constants.boxShadowArray:
                return "Box Shadow Menu";
            case constants.boxEditArray:
                return "Box Styles Menu";
            case constants.iconArray:
                return "Icon Styles Menu";
        }
    },
    showProperMenuForId: function(id) {
            action.showIconMenu(action.getProperMenuForId(id), -1);
    },
    getProperMenuForId: function(id) {
        if(id === 'icon'){ // Special case
            return constants.iconArray;
        } else if (id.substring(0, 4) === 'text') { // Another special case
            return constants.customTextArray;
        } else if (id.substring(0, 3) === 'box') {
            return constants.boxEditArray;
        } else{ // Normal element, show edit menu
            return constants.editArray;
        }
    },
    timeout: '',
    animateHelp: function(text, opacity, time){
        $( "#tips" ).animate({
            opacity: opacity,
            top: 'toggle'
            }, time, function() {
                if(text){
                    action.setHelpText(text)
                }
            });
    },
    setHelpText: function(text) {
        var isStillShowing = $('#tips').is(":visible");
        clearTimeout(action.timeout);
        if (isStillShowing && $('#helpinfo').text() != text) {
            action.animateHelp(text, 1, 300);
        } else {
          $('#helpinfo').text(text);
          action.animateHelp(false, 1, 300);
          action.timeout = setTimeout(function() {
              action.animateHelp(false, 0, 200);
          }, 5000);
        }


    },
    setEditMenuInputsState: function(state, maxIndex, id) { //state: -2 means show all, -1 means hide all, other numbers means toggle that index
        if(!id) var id = '';
        var menuArray = action.getProperMenuForId(id);
        if (state <= -1) {
            for (var i = 0; i < maxIndex && i < constants.editArray.length; i++) {
                var splitArray = menuArray[i].split("~");
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
    setTimeout(function(){
        action.showIconMenu(constants.toolArray, -1);
        $('#clockList').toggle('display'); action.createLI(elementPanel.clockElements, 'clockList');
        $('#weatherList').toggle('display'); action.createLI(elementPanel.weatherElements, 'weatherList');
        $('#systemList').toggle('display'); action.createLI(elementPanel.systemElements, 'systemList');
        $('#miscList').toggle('display'); action.createLI(elementPanel.miscElements, 'miscList');
    },0); //if going to load immediately wait for everything visible to show first.
}

$('.toolPanel').on('click', function (event) { //grab clicks from toolpanel
    action.toolPanel(event);
    var target = event.target.id;
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
    if(event.target.id && event.target.tagName === 'H3'){ //Clicking to show/hide a panel
        action.setHelpText('Either scroll, use the arrow buttons, or use the arrow keys to navigate the element menu.');
        action.elementPanel(event.target.id);
        var elementChildren = $('.elementPanel').children();
        for (var i = 0; i < elementChildren.length; i++) {
            if ($(elementChildren[i]).attr('id') != event.target.id
                && $(action.getElementPanelIdSelector($(elementChildren[i]).attr('id'))).children().length > 1
                && $(action.getElementPanelIdSelector($(elementChildren[i]).attr('id'))).is(':visible'))
                    action.elementPanel($(elementChildren[i]).attr('id'));
        }
    } else if(event.target.tagName === "LABEL"){ //Clicking inside an already-displayed panel
        var title = $(event.target).parent()[0].title; //changed from innerHTML to parent's title
        if ($(event.target).parent().parent().hasClass('slick-center')) {
            if (document.getElementById(title)) {
                action.removeFromScreen(title, false);
            } else {
               action.addtoScreen(title);
            }
        } else {
            var div = $(event.target).parent().parent().parent().parent().parent();
            div.slick('slickGoTo', JSON.parse($(event.target).parent().parent().attr('data-slick-index')), false);
            action.setCarouselOpacity(div.attr('id'));
        }
    } else if ($(event.target).parent().hasClass('subCategory')) {
        var id = $(event.target).attr('data-element');
        if (document.getElementById(id)) {
            action.removeFromScreen(id, false);
        } else {
           action.addtoScreen(id);
        }
    }
});

$('.screen').click(function(event){
    if (event.target.id === '' && action.selectedItem != '') {
        $('#' + action.selectedItem).css('outline', '0px solid transparent');
        action.selectedItem = '';
        action.showIconMenu(constants.toolArray, -1);
        action.setHelpText('Clicking off an element de-selects it. Click back on it to re-select.');
    }
});

$('.screen').on('click',function(event){
    if(event.target.id != 'screen' && event.target.id != ''){
        if(this.doubleClicked){ // Somehwhere on the screen was clicked
            if (event.target.id === action.selectedItem) { // If they clicked the already-highlighted item
                this.doubleClicked = false; //Not sure if this is necessary
                action.showIconMenu(constants.toolArray, -1); // Show the base toolArray
                action.selectedItem = ""; // Clear the selected item
                $('#'+event.target.id).css('outline', '0px solid transparent');
                //action.revertElementPanel(); // Put the elementPanel back to its previous state
            } else { // User either clicked on another element, or on a new element to highlight
                $('#'+action.selectedItem).css('outline', '0px solid transparent'); // Unhighlight the old element
                if(event.target.id.substring(0,3) === 'box' || event.target.id === 'icon'){ //show different text for box and icon
                    action.setHelpText('Pick a style adjustment from the left menu.');
                 }else{
                    action.setHelpText('Pick a style adjustment from the left menu, scroll for more options.');
                }
                if (action.selectedItem === '') $('.elementPanel').data('prevHiddenState', $('.elementPanel').is(':visible')); // Save the panel's previous state, but only if switching to a new element
                action.selectedItem = event.target.id; // Set the selected item to the new element
                $('#'+event.target.id).css('outline', '1px solid #21b9b0'); // Highlight new element
                action.showProperMenuForId(event.target.id);
                action.setEditMenuInputsState(-2, 3, event.target.id);
            }
        } else { // An element was clicked on directly
            action.showProperMenuForId(event.target.id);
            if(event.target.id.substring(0,3) === 'box' || event.target.id === 'icon'){
                action.setHelpText('Pick a style adjustment from the left menu.'); //show different text for box and icon
            }else{
                action.setHelpText('Pick a style adjustment from the left menu, scroll for more options.');
            }
            this.doubleClicked = true;
            action.selectedItem = event.target.id; // Specify selected item
            if (event.target.id.substring(0,3) != 'box'){
                $('#'+event.target.id).css('outline-offset', '-1px');
                $('#'+event.target.id).css('outline', '1px solid #21b9b0');
            } // Highlight specified item
            else{
                $('#'+event.target.id).css('outline-offset', '1px');
                $('#'+event.target.id).css('outline', '1px solid #21b9b0');
            }
            action.setEditMenuInputsState(-2, 2, event.target.id);
            $('.elementPanel').data('prevHiddenState', $('.elementPanel').is(':visible')); // Save the element panel's visibility state
        }
    }
});

var scrollLimitForEditMenu = 120; //one place to change incase any more edits

$('#bgInput').on('change', uploadedImage);

//notification hover
$('#tips').mouseenter(function() {
  clearInterval(action.timeout);
});
$('#tips').mouseleave(function() {
  action.timeout = setTimeout(function() {
      $('#tips').hide('slide', { direction: 'up'});
  }, 1250);
});


/* grid stuff */
function createGrid(sizeleft, sizetop) {
  var i,
  sel = $('.grids'),
      height = sel.height(),
      width = sel.width(),
      ratioW = Math.floor(width / sizeleft),
      ratioH = Math.floor(height / sizetop);

  for (i = 0; i <= ratioW; i++) { // vertical grid lines
    $('<div />').css({
        'top': 0,
        'left': i * sizetop,
        'width': 1,
        'height': height
    })
      .addClass('gridlines')
      .appendTo(sel);
  }

  for (i = 0; i <= ratioH; i++) { // horizontal grid lines
    $('<div />').css({
        'top': i * sizeleft,
        'left': 0,
        'width': width,
        'height': 1
    })
      .addClass('gridlines')
      .appendTo(sel);
    }

  $('.gridlines').show();
}
//createGrid(constants.gridSizeLeft,constants.gridSizeTop);


/* Top right menu */
$('#menutips').on('click',function(){
    if($('#tips').css('top') === "-300px"){
        $('#tips').css('top','100px');
        localStorage.setItem('hideTips',false);
        $(this).attr('title','On');
    }else{
        $('#tips').css('top','-300px');
        localStorage.setItem('hideTips',true);
        $(this).attr('title','Off');
    }
});
$('#gridtips').on('click',function(){
    if($('.gridlines').css('display') === undefined){
        $(this).attr('title','On');
        createGrid(constants.gridSizeLeft,constants.gridSizeTop);
        localStorage.setItem('gridTips',true);
    }else{
        $('.grids').empty();
        $(this).attr('title','Off');
    }
});
$('#snaptips').on('click',function(){
    if(localStorage.snap == 'true'){
        localStorage.snap = 'false';
        $(this).attr('title','Off');
        $(".dLine").remove();
    }else{
        localStorage.snap = 'true';
        $(this).attr('title','On');
    }
});
if(localStorage.snap == 'true'){
    $('#snaptips').attr('title','On');
}

if(localStorage.hideTips === 'true'){
     $('#tips').css('top','-300px');
     $('#menutips').attr('title','Off');
}
$(".select-menu").click(function () {
    $(this).toggleClass("menu-on");
    $('.menulist').toggle();
   // $('.menulist').toggle('display');
});
/* End Top right menu */
