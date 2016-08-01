var constants = {
    //left panel array format: li.id~title~li.class the optionally ~divId if surroundingDiv is true
    notSoConstantArray: [],
    toolArray: ['background~Background~fa fa-photo~backgroundDiv'
                    ,'overlay~Overlay~fa fa-clipboard~overlayDiv'
                    ,'element~Show Elements Panel~fa fa-flask~elementDiv'
                    ,'save~Save Theme~fa fa-upload~saveDiv'
                    ,'load~Load Theme~fa fa-download~loadDiv'
                    ,'clear~Clear Theme~fa fa-eraser~clearDiv'],
    backgroundArray: ['cgBackground~Change Background~fa fa-photo~cgBackgroundDiv'
                     ,'openBackground~View Background in New Tab~fa fa-external-link-square~openBackgroundDiv'
                     ,'backgroundBlur~Change Background Blur~fa fa-bullseye~backgroundBlurDiv'
                     ,'openBlurryBackground~View Blurred Background in New Tab~fa fa-external-link~openBlurryBackgroundDiv'
                     ,'backToTools~Back~fa fa-arrow-left~backToToolsDiv'
                     ,'clearBackground~Clear Background~fa fa-trash~clearBackgroundDiv'],
    overlayArray: ['cgOverlay~Change Overlay~fa fa-clipboard'
                    ,'backToTools~Back~fa fa-arrow-left'
                    ,'clearOverlay~Clear Overlay~fa fa-trash'],
    editArray: ['size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'color~Change Color~fa fa-eyedropper~colorDiv' //added
                    ,'align~Change Alignment~fa fa-align-center~alignDiv'
                    ,'fonts~Change Font~ fa fa-language~fontsDiv'
                    ,'transform~Change Transformations~fa fa-level-up~transformDiv'
                    ,'uppercase~Change Uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change Font Weight~fa fa-text-width~weightDiv' //added
                    ,'style~Change Font Style~fa fa-italic~styleDiv'
                    ,'affixes~Change Prefix/Suffix~fa fa-edit~affixesDiv'
                    ,'shadow~Edit Text Shadow~sa ctextshadow~shadowDiv'
                    ,'linearGradient~Edit Linear Text Color Gradient~fa fa-barcode~linearTextGradientDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    customTextArray: ['customText~Change Text~fa fa-pencil~textDiv'
                    ,'size~Change Font Size~fa fa-font~sizeDiv'
                    ,'width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'color~Change Color~fa fa-eyedropper~colorDiv' //added
                    ,'align~Change Alignment~fa fa-align-center~alignDiv'
                    ,'fonts~Change Font~ fa fa-language~fontsDiv'
                    ,'transform~Change Transformations~fa fa-level-up~transformDiv'
                    ,'uppercase~Change Uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change Font Weight~fa fa-text-width~weightDiv' //added
                    ,'style~Change Font Style~fa fa-italic~styleDiv'
                    ,'shadow~Edit Text Shadow~sa ctextshadow~shadowDiv'
                    ,'linearGradient~Edit Linear Text Color Gradient~fa fa-barcode~linearTextGradientDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    affixArray: ['customPrefix~Change Prefix~fa fa-long-arrow-left~prefixDiv'
                    ,'customSuffix~Change Suffix~fa fa-long-arrow-right~suffixDiv'
                    ,'backToEdit~Back~fa fa-arrow-left~backToEditDiv'
                    ,'clearAffixes~Clear Prefix and Suffix~fa fa-trash~clearAffixesDiv'],
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
    transformArray: ['rotation~Change Rotation Angle~fa fa-repeat~rotationDiv'
                    ,'skewX~Change X Skew~sa cskewx~skewXDiv'
                    ,'skewY~Change Y Skew~sa cskewy~skewYDiv'
                    ,'backToEdit~Back~fa fa-arrow-left~backToEditDiv'
                    ,'clearTransform~Clear Transformations~fa fa-trash~clearTransformsDiv'],
    linearGradientArray: ['gradientType~Gradient Type~fa fa-square~gradientTypeDiv'
                    ,'linearGradientAngle~Change Gradient Angle~fa fa-repeat~linearGradientAngleDiv'
                    ,'linearGradientStartColor~Change Start Color~fa fa-eyedropper~linearGradientStartColorDiv'
                    ,'linearGradientStopColorOne~Change Color Stop 1~fa fa-eyedropper~linearGradientStopColorOneDiv'
                    ,'linearGradientStopColorTwo~Change Color Stop 2~fa fa-eyedropper~linearGradientStopColorTwoDiv'
                    ,'backToEdit~Back~fa fa-arrow-left~backToEditDiv'
                    ,'clearGradient~Clear Gradient~fa fa-trash~clearGradientDiv'],
    linearBoxGradientArray: ['linearGradientAngle~Change Gradient Angle~fa fa-repeat~linearGradientAngleDiv'
                    ,'linearGradientStartColor~Change Start Color~fa fa-eyedropper~linearGradientStartColorDiv'
                    ,'linearGradientStopColorOne~Change Color Stop 1~fa fa-eyedropper~linearGradientStopColorOneDiv'
                    ,'linearGradientStopColorTwo~Change Color Stop 2~fa fa-eyedropper~linearGradientStopColorTwoDiv'
                    ,'backToEdit~Back~fa fa-arrow-left~backToEditDiv'
                    ,'clearGradient~Clear Gradient~fa fa-trash~clearGradientDiv'],
    boxEditArray: ['width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'height~Change Height~fa fa-arrows-v~heightDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'radius~Change Radius~fa fa-circle~radiusDiv'
                    ,'boxShadow~Edit Box Shadow~fa fa-cube~boxShadowDiv'
                    ,'transform~Change Transformations~fa fa-level-up~transformDiv'
                    ,'boxColor~Change Color~fa fa-eyedropper~boxColorDiv'
                    ,'border~Edit Box Border~fa fa-square-o~borderDiv'
                    ,'linearBoxGradient~Edit Linear Box Color Gradient~fa fa-barcode~linearTextGradientDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    circleEditArray: ['width~Change Width~fa fa-arrows-h~widthDiv'
                    ,'position~Change Position~fa fa-arrows~positionDiv'
                    ,'boxShadow~Edit Circle Shadow~fa fa-cube~boxShadowDiv'
                    ,'transform~Change Transformations~fa fa-level-up~transformDiv'
                    ,'boxColor~Change Color~fa fa-eyedropper~boxColorDiv'
                    ,'border~Edit Box Border~fa fa-square-o~borderDiv'
                    ,'linearBoxGradient~Edit Linear Box Color Gradient~fa fa-barcode~linearTextGradientDiv'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv'],
    borderArray: ['borderStyle~Border Style~fa fa-ellipsis-v~borderStyleDiv'
                    ,'borderWidth~Border Width~fa fa-arrows-h~borderWidthDiv'
                    ,'border-color~Border Color~fa fa-eyedropper~border-colorDiv'
                    ,'backToEdit~Back~fa fa-arrow-left'
                    ,'clearBorder~Clear Border~fa fa-trash'],
    iconArray: ['iconsize~Change Icon Size~fa fa-expand~changeIconDiv'
                ,'position~Change Position~fa fa-arrows~positionDiv'
                , 'changeicon~Change Icon~fa fa-code-fork~changeIconDiv'
                ,'transform~Change Transformations~fa fa-level-up~transformDiv'
                , 'delete~Delete item~fa fa-trash-o~deleteDiv'],
                gridSizeTop: 160,
                gridSizeLeft: 284,
    //preloadBlacklist: {color:'', fonts:'',transform:'',shadow:'',linearGradient:'',linearBoxGradient:'',backToEdit:'',boxShadow:'',boxColor:'',changeicon:'',affixes:''}, /*//If it shouldn't be opened when the menu is opened, the id needs to be here. 'delete', 'clear', and 'color' are already taken care of*/
    preloadWhitelist: {'size':'','width':'', 'position':'','align':'','uppercase':'','weight':'','style':'','customPrefix':'','customSuffix':'','hShadow':'','vShadow':'','blur':'','boxhShadow':'','boxvShadow':''
                        ,'boxblur':'','rotation':'','skewX':'','skewY':'','gradientType':'','linearGradientAngle':'','height':'','radius':'','iconsize':'','customText':'','borderStyle':'','borderWidth':'', 'posSystem':'', 'multiPos':''},
    iconList: ['MonolyphDark','MonolyphFlat','MonolyphLight','city','blue', 'clima', 'deep', 'plex', 'Flex', 'GlowWhite', 'june', 'Klear', 'lines', 'mauri', 'mauri2', 'MNMLB', 'MNMLBW', 'MNMLW', 'mw', 'nude', 'plastic', 'playful', 'primusweather', 'Purcy', 'realicons', 'reddock', 'round', 'round2', 'shadow', 'shiny', 'simple', 'simply', 'six', 'sixtynine', 'Sk37ch', 'smash', 'stardock', 'swhite', 'toon', 'toon2', 'topaz', 'weathercom', 'wetter', 'yahoo','black', 'BlackOrange','blacky','bbl','blackd','cleard', 'flt', 'kelly','climacut'],
    positioningSystemOption : 'posSystem~Change Positioning System~fa fa-arrows-alt~posSystemDiv',
    multiPosition : 'multiPos~Change Position~fa fa-arrows~multiPosDiv'
};
var action = {
    savedElements : {}, //object to save elements placed
    movedElements : {}, //elements that are placed and moved
    wallpaper : '',
    uploadSelection : '', //save type of upload selection (overlay or background)
    selectedItem : '',
    selectedItems : [], // Only used for multi-selection
    multiPositioningSystem : 'relative',
    actionQueue : [], //Queue of actions for undo/redo
    queuePosition : -1, //The current position within this ↑ queue, which action was most recently done
    isUndoingRedoing : false, //True while it's either undoing or redoing, prevents more from being added to the stack while it's processing the stack
    sizeQueueTimeout : {
        timeout : null,
        isTimeoutRunning: false,
        previousCssKey : '',
        previousAction : null,
        initialValue : ''
    },
    isEditingText : false, // Whether a custom text input is currently focused. Used for delete key stuff
    toolPanel: function (evt) { //handle clicks from toolpanel
        var id = evt.target.id;
            action.uploadSelection = id;
        if (id === 'cgOverlay' || id === 'cgBackground') { $('#bgInput').click(); }
        if (id === 'overlay') { this.showIconMenu(constants.overlayArray, -1); }
        if (id === 'clearOverlay') { $('.screenoverlay').css('background-image',''); action.savedElements.overlay = ''; action.saveStorage(); }
        if (id === 'background') { this.showIconMenu(constants.backgroundArray, -1); }
        if (id === 'openBackground') { this.openBackground('original'); }
        if (id === 'backgroundBlur') { this.cgSize('backgroundBlur', constants.backgroundArray[2], '', 0, 100, 'backBlur', 'backBlur', action.backgroundBlur, false, false, 'Background Blur'); }
        if (id === 'openBlurryBackground') { this.openBackground('blurry'); }
        if (id === 'clearBackground') { this.setBG(''); }
        if (id === 'backToTools') { this.showIconMenu(constants.toolArray, -1); }
        if (id === 'clear') { action.clearTheme(-1) }
        if (id === 'save') {this.saveTheme(); }
        if (id === 'load') { window.open(location.href.replace('#', '') + 'load'); window.close();  } //load php stuff
        if (id === 'element') { action.elementIconClick(); }
        if (id === 'size') { this.cgSize('fontSize', constants.editArray[0], 'px', 5, 300, 'font-size', 'font-size', action.updateSize);}
        if (id === 'width') { this.cgSize('widthSize', constants.editArray[1], 'px', 1, $('.screen').width(), 'width', 'width', action.updateSize); }
        if (id === 'height') { this.cgSize('heightSize', constants.boxEditArray[1], 'px', 1, $('.screen').height(), 'height', 'height', action.updateSize); }
        if (id === 'position') { this.cgPosition(); }
        if (id === 'align') { this.cgalign(); /*action.setHelpText('Select left, right or center. Requires width to be set.');*/}
        if (id === 'fonts') { this.cgfont(); /*action.setHelpText('View live preview, tap font to select.');*/}
        if (id === 'uppercase') {this.cguppercase();/* action.setHelpText('Choose uppercase, capitalize, or lowercase.');*/}
        if (id === 'style') { this.cgStyle(); }
        if (id === 'weight') {this.cgweight(); /*action.setHelpText('Press + and - buttons, or choose bold or normal.');*/}
        if (id === 'shadow') { action.showIconMenu(constants.shadowArray, -1); /*action.setHelpText('New menu opened (shadow menu)');*/}
        if (id === 'boxShadow') { action.showIconMenu(constants.boxShadowArray, -1);  /*action.setHelpText('New menu opened (box-shadow menu)');*/}
        if (id === 'hShadow') { this.cgSize('hShadow', constants.shadowArray[0], 'px', -100, 100, 'hShadow', 'hShadow', action.updateShadow, false, false, 'Horizontal'); }
        if (id === 'vShadow') { this.cgSize('vShadow', constants.shadowArray[1], 'px', -100, 100, 'vShadow', 'vShadow', action.updateShadow, false, false, 'Vertical'); }
        if (id === 'blur') { this.cgSize('blur', constants.shadowArray[2], 'px', 0, 50, 'blur', 'blur', action.updateShadow, false, false, 'Blur Radius'); }
        if (id === 'radius') { this.cgSize('radiusSize', constants.boxEditArray[3], 'px', 0, $('#' + action.selectedItem).width() / 2, 'border-radius', 'border-radius', action.updateSize, false, false, 'Box Radius'); }
        if (id === 'transform') { action.showIconMenu(constants.transformArray, -1); }
        if (id === 'rotation') { this.cgSize('rotationAngle', constants.transformArray[0], 'deg', 0, 360, 'rotate', 'rotate', action.updateTransform, false, false, 'Rotation Angle'); }
        if (id === 'skewX') { this.cgSize('skewXAngle', constants.transformArray[1], 'deg', 0, 360, 'skewX', 'skewX', action.updateTransform, false, false, 'X Skew Angle'); }
        if (id === 'skewY') { this.cgSize('skewYAngle', constants.transformArray[2], 'deg', 0, 360, 'skewY', 'skewY', action.updateTransform, false, false, 'Y Skew Angle'); }
        if (id === 'clearTransform') { action.updateTransform('','','','','clear'); }
        if (id === 'shadowColor') { this.cgShadowColor(); }
        if (id === 'clearShadow') { this.updateShadow('','','','','clear'); }
        if (id === 'backToEdit') { action.showMultiSelectionMenu(); }
        if (id === 'boxhShadow') { this.cgSize('boxhShadow', constants.boxShadowArray[0], 'px', -100, 100, 'boxhShadow', 'boxhShadow', action.updateShadow, false, false, 'Horizontal'); }
        if (id === 'boxvShadow') { this.cgSize('boxvShadow', constants.boxShadowArray[1], 'px', -100, 100, 'boxvShadow', 'boxvShadow', action.updateShadow, false, false, 'Vertical'); }
        if (id === 'boxblur') { this.cgSize('boxblur', constants.boxShadowArray[2], 'px', 0, 50, 'boxblur', 'boxblur', action.updateShadow, false, false, 'Blur Radius'); }
        if (id === 'boxshadowColor') { this.cgShadowColor(true); }
        if (id === 'boxclearShadow') { this.updateShadow('','','','','clear'); }
        if (id === 'color') {this.cgcolor(false, 'color', 'colorDiv');}
        if (id === 'boxColor') { this.cgcolor(false, 'background-color', 'boxColorDiv'); }
        if (id === 'customText') { this.cgCustomText(); }
        if (id === 'delete') { action.delete(); }
        if (id === 'iconsize') { this.cgSize('iconSize', constants.iconArray[0], 'px', 5, $('.screen').width(), 'width', 'width', action.updateSize);}
        if (id === 'changeicon') { this.populateIcons(); }
        if (id === 'affixes') { this.showIconMenu(constants.affixArray, -1); }
        if (id === 'customPrefix') { this.cgAffix('prefix'); }
        if (id === 'customSuffix') { this.cgAffix('suffix'); }
        if (id === 'clearAffixes') { this.cgAffix('clear'); }
        if (id === 'border') { this.showIconMenu(constants.borderArray, -1); }
        if (id === 'borderStyle') { this.cgBorderStyle(); }
        if (id === 'borderWidth') { this.cgSize('borderWidth', constants.borderArray[1], 'px', 0, 200, 'border-width', 'borderWidth', action.updateSize); }
        if (id === 'border-color') { this.cgcolor(false, 'border-color', 'border-colorDiv'); }
        if (id === 'clearBorder') { this.setCss(action.selectedItem, 'border',''); }
        if (id === 'posSystem') { this.cgPosSystem(); }
        if (id === 'multiPos') { this.cgMultiPosition(); }

        //Gradients
        if (action.selectedItem != null && id.toLowerCase().match(/gradient/gmi) != null && document.getElementById(action.selectedItem).style.background.substring(0,3) != 'lin' && id != 'linearGradient' && id != 'linearBoxGradient' && id != 'linearTextGradientDiv') {
            action.setCss(action.selectedItem, 'background', 'linear-gradient(rgb(255,0,0),rgb(255,255,0) 50%,rgb(0,0,255) 90%)'); }
        if (id === 'linearBoxGradient') { this.showIconMenu(constants.linearBoxGradientArray, -1); }
        if (id === 'linearGradient') { this.showIconMenu(constants.linearGradientArray, -1); }
        if (id === 'gradientType') { this.cgGradientPurpose(); }
        if (id === 'linearGradientAngle') { this.cgSize('rotateLinearGradient', constants.linearGradientArray[1], 'deg', 0, 360, 'rotate', 'rotate', action.updateGradient, false, false, 'Rotate Gradient'); }
        if (id === 'linearGradientStartColor') { this.cgLinearGradientColor(constants.linearGradientArray[2], 'color~0.5'); }
        if (id === 'linearGradientStopColorOne') { this.cgLinearGradientColor(constants.linearGradientArray[3], 'color~1'); this.cgSize('linGradientStopOnePercent', constants.linearGradientArray[3], '%', 0, 100, 'pos~1', 'pos~1', action.updateGradient, false, false, 'Stop 1 Distance'); }
        if (id === 'linearGradientStopColorTwo') { this.cgLinearGradientColor(constants.linearGradientArray[4], 'color~2'); this.cgSize('linGradientStopTwoPercent', constants.linearGradientArray[4], '%', 0, 100, 'pos~2', 'pos~2', action.updateGradient, false, false, 'Stop 2 Distance'); }
        if (id === 'clearGradient') { this.updateGradient('','','','','clear'); }
    },
    elementIconClick: function() {
        if(!$('.elementPanel').is(":visible")) {
            action.setHelpText('Choose item from right panel');

            if (!$('.elementPanel').attr('data-shown')) {
                action.toggleAllElementPanels();
                $('.elementPanel').attr('data-shown', 'Congratulations, curious one. You are the millionth visitor!');
            }
        }

        /* show/hide text and smooth animation */
        if ($('.elementPanel').is(":visible")) {
            $('#elementDiv').children('a:first')[0].title = "Show Elements Panel";
            $(".elementPanel").animate({
                opacity: 0,
                marginTop: '-300px'
            }, {
                duration: 200,
                specialEasing: {
                    opacity: "linear",
                    marginTop: "easeInOutCirc"
                },
                complete: function() {
                    $('.elementPanel').toggle();
                }
            });
        } else {
            $('#elementDiv').children('a:first')[0].title = "Hide Elements Panel";
            $('.elementPanel').css({
                opacity: '0',
                //left: '53%',
                marginTop: '-300px'
            });
            $('.elementPanel').toggle();
            $(".elementPanel").animate({
                opacity: 1,
                marginTop: 0
            }, {
                duration: 200,
                specialEasing: {
                    opacity: "linear",
                    marginTop: "easeInOutCirc"
                },
                complete: function() {}
            });
        }
    },
    setFont: function (fontName) {
        action.setCss(action.selectedItem, 'font-family', fontName);
        $('#fList').toggle('display');
    },
    setCss: function (elementId, cssKey, cssValue) { //[[elementName, cssKey, cssValue], [elementName, [cssKey, cssKey], [cssValue, cssValue]]]
        // The special case here after the && is for when we're doing relative positioning and we're setting position. In that case, each is called individually
        if (action.selectedItems.length > 0 && !(action.multiPositioningSystem === 'relative' && (cssKey === 'left' || cssKey === 'top'))) {
            function isAlreadyInArr(arr, toTest) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i][0] === toTest) {
                        return true;
                    }
                }
                return false;
            }

            if (typeof elementId === 'string') {
                elementId = [[elementId, cssKey, cssValue]];
            }

            for (var i = 0; i < action.selectedItems.length; i++) {
                if (!isAlreadyInArr(elementId, action.selectedItems[i])) {
                    var arr = [action.selectedItems[i], elementId[0][1], elementId[0][2]];
                    elementId.push(arr);
                }
            }
        }
        if (typeof elementId === 'string') {
            if (cssKey === '-webkit-transform') {
                try { var initialValue = document.getElementById(elementId).style.webkitTransform; } catch (e) {alert("Sorry, please use chrome or safari for transforms.")}
            } else { // What it'll usually do
                var initialValue = document.getElementById(elementId).style[cssKey]; // Woud've used .css, but Jquery's a bitch about some things, returning things it shouldn't and breaking everything
            }

            $('#' + elementId).css(cssKey, cssValue);
            action.savedElements.placedElements[elementId][cssKey] = cssValue;
            action.saveStorage();

            clearTimeout(action.sizeQueueTimeout.timeout); // Always clear the old timeout when trying to override
            if (action.sizeQueueTimeout.initialValue === '') { // If it's empty, that means it's been used and is no longer needed
                action.sizeQueueTimeout.initialValue = initialValue; // So set the new one, because this is a new set
            }

            if (cssKey === '-webkit-transform') {
                try { var newValue = document.getElementById(elementId).style.webkitTransform; } catch (e) {alert("Sorry, please use chrome or safari for transforms.")}
            } else {
                var newValue = document.getElementById(elementId).style[cssKey];
            }
            var currentAction = ['setCss', [elementId, cssKey, action.sizeQueueTimeout.initialValue, newValue]]; // The value stored in the actual undo/redo queue
            if (cssKey === action.sizeQueueTimeout.previousCssKey || action.sizeQueueTimeout.previousCssKey === '') { // If we're continuing the setting of the same css key
                action.sizeQueueTimeout.previousAction = currentAction;
            } else { // We've moved on to a differnt css key
                if (action.sizeQueueTimeout.isTimeoutRunning) { // Really should be wasTimeoutRunning
                    action.addAction(action.sizeQueueTimeout.previousAction); // Add the old action to the undo/redo queue
                    action.sizeQueueTimeout.initialValue = initialValue; // Take after-the-fact action, because the timeout never finished, this was never set to '', therefore the if statement above never ran
                }
                action.sizeQueueTimeout.previousAction = currentAction;
            }
            action.sizeQueueTimeout.timeout = setTimeout(function() { // If this method is called with the same cssKey within the 1.5 seconds, then the timeout is reset
                action.addAction(action.sizeQueueTimeout.previousAction);
                action.sizeQueueTimeout.initialValue = '';
                action.sizeQueueTimeout.isTimeoutRunning = false;
            }, 400);
            action.sizeQueueTimeout.isTimeoutRunning = true;
            action.sizeQueueTimeout.previousCssKey = cssKey;
        } else if (typeof elementId === 'object') { // We're dealing with an array here. [[elementName, cssKey, cssValue], [elementName, [cssKey, cssKey], [cssValue, cssValue]]]
            var initialValue = []; // [initialValue, [initialValue, initialValue], initialValue]
            var currentAction = ['setCss', []]; // ['setCss', [elementName, cssKey, previousCssValue, newCssValue], [elementName, [cssKey, cssKey], [previousCssValue, previousCssValue], [newCssValue, newCssValue]]]
            var allCssKeys = []; //[cssKey, [cssKey, cssKey]]
            for (var i = 0;  i < elementId.length; i++) {
                if (typeof elementId[i][1] === 'string') { // We're only setting one cssKey here
                    initialValue.push(document.getElementById(elementId[i][0]).style[elementId[i][1]]); // Push the element's current value to the array of initialValues
                    allCssKeys.push(elementId[i][1]); // Push the current cssKey to the array of all cssKeys

                    // 0 = elementName, 1 = cssKey, 2 = cssValue
                    $('#' + elementId[i][0]).css(elementId[i][1], elementId[i][2]);
                    action.savedElements.placedElements[elementId[i][0]][elementId[i][1]] = elementId[i][2];

                    currentAction[1].push([elementId[i][0], elementId[i][1], '', elementId[i][2]]);
                } else { // We're gonna assume the cssKeys are an array. There are multiple to set for this element
                    var innerInitial = [];
                    var cssKeys = [];
                    var cssValues = [];
                    for (var k = 0; k < elementId[i][1].length; k++) {
                        innerInitial.push(document.getElementById(elementId[i][0]).style[elementId[i][1][k]]);

                        // elementId[i][0] = elementName, elementId[i][1][k] = cssKey, elementId[i][2][k] = cssValue
                        $('#' + elementId[i][0]).css(elementId[i][1][k], elementId[i][2][k]);
                        if (typeof action.savedElements.placedElements[elementId[i][0]] != 'undefined') // Necessary check to prevent errors, primarily for the weather icon, iconImg isn't actually in placedElements
                            action.savedElements.placedElements[elementId[i][0]][elementId[i][1][k]] = elementId[i][2][k];

                        cssKeys.push(elementId[i][1][k]);
                        cssValues.push(elementId[i][2][k]);
                    }
                    initialValue.push(innerInitial);
                    allCssKeys.push(cssKeys);

                    currentAction[1].push([elementId[i][0], cssKeys, '', cssValues]);
                }
                action.saveStorage();
            }

            // See comments above for other part of if, it's basically the same functionality, just modified slightly
            clearTimeout(action.sizeQueueTimeout.timeout);
            if (action.sizeQueueTimeout.initialValue === '') {
                action.sizeQueueTimeout.initialValue = initialValue;
            }

            // Fill in the currentAction with the initialValue(s)
            for (var i = 0; i < currentAction[1].length; i++) {
                for (var k = 1; k < currentAction[1][i].length; k++) {
                    if (currentAction[1][i][k] === '') {
                        currentAction[1][i][k] = action.sizeQueueTimeout.initialValue[i];
                    }
                }
            }

            if (allCssKeys.toString() === action.sizeQueueTimeout.previousCssKey.toString() || action.sizeQueueTimeout.previousCssKey === '') {
                action.sizeQueueTimeout.previousAction = currentAction;
            } else {
                if (action.sizeQueueTimeout.isTimeoutRunning) {
                    action.addAction(action.sizeQueueTimeout.previousAction);
                    action.sizeQueueTimeout.initialValue = initialValue;
                }
                action.sizeQueueTimeout.previousAction = currentAction;
            }

            action.sizeQueueTimeout.timeout = setTimeout(function() {
                action.addAction(action.sizeQueueTimeout.previousAction);
                action.sizeQueueTimeout.initialValue = '';
                action.sizeQueueTimeout.isTimeoutRunning = false;
            }, 400);
            action.sizeQueueTimeout.isTimeoutRunning = true;
            action.sizeQueueTimeout.previousCssKey = allCssKeys;
        } else {
            console.log("Ya done goofed (setCss)");
        }
    },
    delete: function() {
        if (action.selectedItems.length > 0) {
            for (var i = 0; i < action.selectedItems.length; i++) {
                action.removeFromScreen(action.selectedItems[i], true);
            }
            action.selectedItems = [];
        } else {
            action.removeFromScreen(action.selectedItem, true);
        }
    },
    cgfont: function () {
        $('#fList').empty();
        $('#fList').append('<li>Helvetica</li>');
        for (var i = 0; i < fontArray.length; i++) {
            var li = document.createElement('li');

            if(fontArray[i] === 'NEW FONTS'){
                li.innerHTML = fontArray[i];
                li.style.cssText += 'background-color:white; color:black;';
            }else{
                li.innerHTML = $('#'+action.selectedItem).text() + '-' + fontArray[i];
            }
            li.style.fontFamily = fontArray[i];
            li.title = fontArray[i];
            $('#fList').append(li);
        }
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
        //$('.icon').attr('src', 'http://junesiphone.com/weather/IconSets/'+name+'/39.png');
        $('.icon').attr('src', 'weather/real/'+name+'.png');
        action.savedElements.iconName = name;
        this.saveStorage();
    },
    cgLinearGradientColor: function(gradientString, cssKey) {
        var splitArray = gradientString.split("~");
        var selector = '#' + splitArray[3];

        $(selector).spectrum({
            showInitial: true,
            maxSelectionSize: 66,
            localStorageKey: 'spectrum',
            showAlpha: true,
            showInput: true,
            preferredFormat: "rgb",
            showPalette: true,
            color: action.updateGradient('',cssKey,'','','get'),
            palette: [["black", "white", "#0074d9" , "#2c3e50", "#27ae60", "#e74c3c", "#393939", "#3498db", "#2980b9", "#2ecc71", "#66cc99", "#019875", "#96281b", "#96281b", "#f64747", "#e26a6a", "#f5ab35", "#f39c12", "#f89406", "#f27935", "#6c7a89", "#95a5a6", "#bdc3c7", "#bfbfbf", "#674172", "#663399", "#8e44ad", "#9b59b6", "#db0a5b", "#d2527f", "#f62459", "#16a085", "#d2d7d3", "#4183d7", "#59abe3", "#3a539b"]]
        });
        setTimeout(function () {$(selector).spectrum('show'); }, 0);

        $(selector).on('move.spectrum', function(e, tinycolor) {
            action.updateGradient('', cssKey, '', tinycolor.toRgbString(), 'set');
        });
    },
    updateGradient: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        if (purpose === 'clear') {
            //action.setCss(action.selectedItem, 'background', '');
           if (action.selectedItem.indexOf("box") > -1) { // TODO: Save the box's color before setting the gradient, then restore it to the same color here.
               //action.setCss(action.selectedItem, 'background-color', 'red'); // Without this the box ends up as not showing anything at all
               action.setCss([[action.selectedItem, ['background', 'background-color'], ['', 'red']]]);
           } else {
               //action.setCss([[action.selectedItem, ['-webkit-background-clip', '-webkit-text-fill-color'], ['', '']]]);
               action.setCss([[action.selectedItem, ['background', '-webkit-background-clip', '-webkit-text-fill-color'], ['', '', '']]]);
           }
           return 'nothing';
       }

        var currentGradient = document.getElementById(action.selectedItem).style.background;

        if (currentGradient != '') {
            //Some browsers convert to rgb, but that messes with the splitting done below. So replace rgb with hex.
            currentGradient = currentGradient.replace(/(rgba?\([^)]+\))/gmi, function(match) {
                return match.replace(/[/(]/g,'{').replace(/[,]/g,'!').replace(/[/)]/g,'}').replace(/[ ]/g,'');
            });

            var gradPieces = currentGradient.split('(');
            if (isNaN(gradPieces[1].substring(0, 1))) {
                currentGradient = gradPieces[0] + '(180deg,' + gradPieces[1];
            }

            var splitArray = currentGradient.replace(/deg/g, '').replace(/[%]/g, '').split(/[(), ]/);
        } else {
            var splitArray = ['linear-gradient','179','rgb(255,0,0)','rgb(255,255,0)','50','rgb(0,0,255)','90'];
        }
        // "linear-gradient(179deg,red,yellow 50%,blue 90%)"

        for (var i = 0; i < splitArray.length; i++) {
            if (splitArray[i] === '') {
                splitArray.splice(i, 1);
                i--;
            } else if (splitArray[i].match(/[!]/g) != null) {
                splitArray[i] = splitArray[i].replace(/[{]/g,'(').replace(/[!]/g,',').replace(/[}]/g,')');
            }
        }

        var index = 0;
        var keyArr = cssKey.split("~");

        if ((keyArr[0] === 'pos' || cssKey === 'rotate') && purpose === 'set' ) {
            var max = JSON.parse($(idSelector).attr('max'));
            var min = JSON.parse($(idSelector).attr('min'));
            if (JSON.parse($(idSelector).val()) >= JSON.parse(max)) $(idSelector).val(max);
            if (JSON.parse($(idSelector).val()) <= JSON.parse(min)) $(idSelector).val(min);
        }

        if (cssKey === 'rotate') {
            index = 1;
        } else {
            if (JSON.parse(keyArr[1])*2 + 1 >= splitArray.length) {
                if (purpose === 'set') {
                    if (keyArr[0] === 'pos') {
                        index = splitArray.length - 1;
                    } else {
                        splitArray.push("rgb(0,0,255)");
                        splitArray.push("100");
                        index = splitArray.length - 2;
                    }
                } else if (purpose === 'get') {
                    splitArray.push("rgb(0,0,255)");
                    splitArray.push("100");

                    if (keyArr[0] === 'color') {
                        index = splitArray.length - 2;
                    } else if (keyArr[0] === 'pos') {
                        index = splitArray.length - 1;
                    }
                }
            } else {
                if (keyArr[0] === 'color') {
                    index = JSON.parse(keyArr[1])*2 + 1;
                } else if (keyArr[0] === 'pos') {
                    index = JSON.parse(keyArr[1])*2 + 2;
                }
            }
        }

        if (purpose === 'set') {
            if (index <= 1 || keyArr[0] === 'pos') {
                splitArray[index] = $(idSelector).val();
            } else if (keyArr[0] === 'color') {
                splitArray[index] = jsCssKey;
            }

            var compiledGradient = '';
            for (var i = 0; i < splitArray.length; i++) {
                if (!isNaN(splitArray[i])) {
                    if (i === 1) {
                        splitArray[i] = splitArray[i] + 'deg';
                    } else {
                        splitArray[i] = splitArray[i] + '%';
                    }

                    if (i === splitArray.length - 1 || ((i + 1 === splitArray.length - 1) && splitArray[i + 1] === '')) {
                        splitArray[i] = splitArray[i] + ')';
                    } else {
                        splitArray[i] = splitArray[i] + ',';
                    }
                } else if (i === 0) {
                    splitArray[i] = splitArray[i] + '(';
                } else if (i === 2) {
                    splitArray[i] = splitArray[i] + ',';
                }else if (i > 2) {
                    splitArray[i] = splitArray[i] + ' ';
                }
                compiledGradient += splitArray[i];
            }

            $('#' + action.selectedItem).css('background-image', 'red');
            action.setCss(action.selectedItem, 'background', compiledGradient);

            action.saveStorage();
        } else if (purpose === 'get') {
            return splitArray[index] + unit;
        }
    },
    updateTransform: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        try { var currentTransform = document.getElementById(action.selectedItem).style.webkitTransform; } catch (e) {alert("Sorry, please use chrome or safari for transforms.")}
        if (currentTransform != '') var splitArray = currentTransform.replace(/deg/g, '').split(/[()]/);
            else var splitArray = ['rotate', '0', ' skewX', '0', ' skewY', '0'];
        // "rotate(0) skewX(0) skewY(0)"

        var index = 0;
        switch (cssKey) {
            case "rotate":
                index = 1;
                break;
            case "skewX":
                index = 3;
                break;
            case "skewY":
                index = 5;
                break;
        }

        if (purpose === 'set') {
            splitArray[index] = $(idSelector).val();

            var compiledTransform = '';
            for (var i = 0; i < splitArray.length; i++) {
                if (splitArray[i] != '') {
                    if (isNaN(splitArray[i]))
                        splitArray[i] = splitArray[i] + '('
                    else
                        splitArray[i] = splitArray[i] + 'deg)';

                    compiledTransform += splitArray[i];
                }
            }

            if (compiledTransform === 'rotate(0deg) skewX(0deg) skewY(0deg)') { // Everything's back to the start
                action.updateTransform(idSelector, cssKey, unit, jsCssKey, 'clear'); // So remove transform altogether
            } else {
                action.setCss(action.selectedItem, '-webkit-transform', compiledTransform);
            }
        } else if (purpose === 'get') {
            return splitArray[index] + unit;
        } else if (purpose === 'clear') {
            action.setCss(action.selectedItem, '-webkit-transform', '');
        }
    },
    updateShadow: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        var isForBox = action.selectedItem.indexOf("box") > -1;
        var currentShadow = !isForBox ? $('#' + action.selectedItem).css('text-shadow') : $('#' + action.selectedItem).css('box-shadow');
        if (currentShadow != 'none') var splitShadow = currentShadow.split(' ')
            else var splitShadow = ['#ffffff','0px', '0px', '0px'];

        //Dealing with stupid browser reordering
        if (!splitShadow[0].indexOf('px') > -1 && splitShadow[0].indexOf("rgb") > -1) { //If the first splitShadow index doesn't contain 'px' and does contain 'rgb'
            if (splitShadow[0].indexOf('rgba') > -1) {
                splitShadow[0] = splitShadow[0] + splitShadow[1] + splitShadow[2] + splitShadow[3];
                splitShadow[1] = splitShadow[4];
                splitShadow[2] = splitShadow[5];
                splitShadow[3] = splitShadow[6];
            } else {
                splitShadow[0] = splitShadow[0] + splitShadow[1] + splitShadow[2];
                splitShadow[1] = splitShadow[3];
                splitShadow[2] = splitShadow[4];
                splitShadow[3] = splitShadow[5];
            }
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
                action.setCss(action.selectedItem, 'text-shadow', newShadow);
            } else {
                action.setCss(action.selectedItem, 'box-shadow', newShadow);
            }
        } else if (purpose === 'get') {
            return splitShadow[index];
        } else if (purpose === 'clear') {
            if (!isForBox) {
                action.setCss(action.selectedItem, 'text-shadow', 'none');
            } else {
                action.setCss(action.selectedItem, 'box-shadow', 'none');
            }
        }
    },
    cgShadowColor: function(isForBox) {
        var selector = isForBox ? '#boxshadowColorDiv' : '#shadowColorDiv';
        $(selector).spectrum({
            showInitial: true,
            maxSelectionSize: 66,
            localStorageKey: 'spectrum',
            showAlpha: true,
            showInput: true,
            preferredFormat: "rgb",
            showPalette: true,
            color: action.updateShadow('','','','','get'),
            palette: [["black", "white", "#0074d9" , "#2c3e50", "#27ae60", "#e74c3c", "#393939", "#3498db", "#2980b9", "#2ecc71", "#66cc99", "#019875", "#96281b", "#96281b", "#f64747", "#e26a6a", "#f5ab35", "#f39c12", "#f89406", "#f27935", "#6c7a89", "#95a5a6", "#bdc3c7", "#bfbfbf", "#674172", "#663399", "#8e44ad", "#9b59b6", "#db0a5b", "#d2527f", "#f62459", "#16a085", "#d2d7d3", "#4183d7", "#59abe3", "#3a539b"]]
        });
        setTimeout(function () {$(selector).spectrum('show'); }, 0); //give it time to load.
        $(selector).on('move.spectrum', function(e, tinycolor) {
                action.updateShadow(isForBox ? 'box' : '', tinycolor.toRgbString(), 'px', 'color', 'set'); //Added special case to updateShadow for this
             });
    },
    cgCustomText: function() { //TODO: Undo/Redo for this
        action.cgText(constants.customTextArray[0], 'Custom Text', 'Text', function(idSelector) {
            $('#' + action.selectedItem).html($(idSelector).val()); // Sets the innerHTML of the element
            var newLength = $(idSelector).val().length * 16; // Calculates new length of the input
            $(idSelector).css("width", newLength > 150 ? newLength : 150); //Actually changes the length, which is then animated by -webkit-transition-property in css
            action.savedElements.placedElements[action.selectedItem].innerHTML = $(idSelector).val(); //Saves to localStorage
            action.saveStorage();
        }, function() {
            return $('#' + action.selectedItem).html();
        });
    },
    cgAffix: function(type) {// either 'prefix' or 'suffix'
        if (type === 'prefix') {
            action.cgText(constants.affixArray[0], 'Custom Prefix', 'Prefix', function(idSelector) {
                action.affixCallbacks(idSelector, 'prefix', 'set');
            }, function(idSelector) {
                return action.affixCallbacks(idSelector,'prefix','get');
            });
        } else if (type === 'suffix') {
            action.cgText(constants.affixArray[1], 'Custom Suffix', 'Suffix', function(idSelector) {
                action.affixCallbacks(idSelector, 'suffix', 'set');
            }, function(idSelector) {
                return action.affixCallbacks(idSelector,'suffix','get');
            });
        } else if (type === 'clear') {
            $('#' + action.selectedItem).html($('#' + action.selectedItem).html().replace($('#' + action.selectedItem).attr('data-prefix'),''));
            $('#' + action.selectedItem).html($('#' + action.selectedItem).html().replace($('#' + action.selectedItem).attr('data-suffix'),''));
            $('#' + action.selectedItem).attr('data-prefix', '');
            $('#' + action.selectedItem).attr('data-suffix', '');
            action.savedElements.placedElements[action.selectedItem]['data-suffix'] = '';
            action.savedElements.placedElements[action.selectedItem]['data-prefix'] = '';
            action.saveStorage();
            action.showProperMenuForId(action.selectedItem);
        }
    },
    affixCallbacks: function(idSelector, type, purpose) { //type is 'prefix' or 'suffix'
        var dataString = 'data-' + type;
        if (purpose === 'set') {
            var otherType = type === 'prefix' ? 'suffix' : 'prefix';
            if (type === 'prefix') {
                $('#' + action.selectedItem).html($('#' + action.selectedItem).html().replace($(idSelector).attr('data-last-value'),'')); //Remove the old affix first to get the raw element
                $('#' + action.selectedItem).html($('#' + action.selectedItem).html().replace($('#' + action.selectedItem).attr('data-' + otherType),'')); // Remove the other affix second to prevent issues
                $('#' + action.selectedItem).html($(idSelector).val() + $('#' + action.selectedItem).html()); //Add the new prefix to the element
            } else if (type === 'suffix') {
                $('#' + action.selectedItem).html($('#' + action.selectedItem).html().replace($('#' + action.selectedItem).attr('data-' + otherType),'')); // Remove the other affix first to prevent issues
                $('#' + action.selectedItem).html($('#' + action.selectedItem).html().replace($(idSelector).attr('data-last-value'),'')); //Remove the old affix second to get the raw element
                $('#' + action.selectedItem).html($('#' + action.selectedItem).html() + $(idSelector).val()); //Add the new suffix to the element
            }
            if (typeof $('#' + action.selectedItem).attr('data-' + otherType) != 'undefined') {
                if (otherType === 'prefix') {
                    $('#' + action.selectedItem).html($('#' + action.selectedItem).attr('data-' + otherType) + $('#' + action.selectedItem).html()); //Add the other prefix to the element
                } else if (otherType === 'suffix') {
                    $('#' + action.selectedItem).html($('#' + action.selectedItem).html() + $('#' + action.selectedItem).attr('data-' + otherType)); //Add the other suffix to the element
                }
            }
            $('#' + action.selectedItem).attr(dataString, $(idSelector).val()); //Save to the element, so when it updates the affix isn't overwritten
            $(idSelector).attr('data-last-value', $(idSelector).val()); // Need for above
            action.savedElements.placedElements[action.selectedItem][dataString] = $(idSelector).val(); //Save to localStorage
            action.saveStorage();
        } else if (purpose === 'get') {
            var initial = $('#' + action.selectedItem).attr(dataString);
            $(idSelector).attr('data-last-value',initial);
            return initial;
        }
    },
    cgText: function(nameString, inputTitle, textID, updateCallback, getInitial) {
        var splitArr = nameString.split("~");
        var inputTopPos = $('#' + splitArr[3]).position().top + 11;
        //var textID = action.selectedItem.substring(0, 1).toUpperCase() + action.selectedItem.substring(1); //capitalizes the selected item's id, for nice camel casing later
        var divSelector = '#custom' + textID + 'DivWrapper';
        var idSelector = '#custom' + textID + 'Input';
        var buttonSelector = '#' + splitArr[0];

        if (!$(divSelector).length) {
            var divWrapper = action.getInputWrapper('custom' + textID, 78, inputTopPos, 0, 0, inputTitle, true); //Gets the actual input
            divWrapper.prependTo('#' + splitArr[3]);

            function updateStuff() {
                var newLength = $(idSelector).val().length * 16; // Calculates new length of the input
                $(idSelector).css("width", newLength > 150 ? newLength : 150); //Actually changes the length, which is then animated by -webkit-transition-property in css
                updateCallback(idSelector);
            }

            $(idSelector).val(getInitial(idSelector));
            var width = $(idSelector).val().length * 16; //Sets initial width of the input
            $(idSelector).css('width', width > 150 ? width : 150); //Doesn't let the width go over 150 initially

            $(idSelector).on("change", function() { updateStuff(); });
            $(idSelector).keydown(function() { updateStuff(); });
            $(idSelector).keyup(function() { updateStuff(); });
            $(idSelector).focusin(function() { action.isEditingText = true; });
            $(idSelector).focusout(function() { action.isEditingText = false; });

            $(buttonSelector).parent().toggleClass('leftTooltip'); //Remove the tooltip
            divWrapper.toggle('display'); //Show the input
            $(idSelector).focus(); //Auto focus on the input
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

            $('#' + key + 'Decrement').on('click', function(event) { action.handleInputButtonEvent(idSelector, -1, cssKey, jsCssKey, unit, updateCallback, event) });
            $('#' + key + 'Increment').on('click', function(event) { action.handleInputButtonEvent(idSelector, 1, cssKey, jsCssKey, unit, updateCallback, event) });

            var elSize = updateCallback(idSelector, cssKey, unit, jsCssKey, 'get');
            try { $(idSelector).val(Math.round(JSON.parse(elSize.substring(0,elSize.length - unit.length)))); } catch (e) { console.log("There was an issue with setting the value of the input with idSelector:" + idSelector);}
            $(idSelector).on("focus", function() { action.setHelpText('Try scrolling while hovering over the input text!'); })
            $(idSelector).on("change", function() {
                updateCallback(idSelector, cssKey, unit, jsCssKey, 'set');
            });
            $(idSelector).on("mousewheel", function(event) {
                var increment = 0;
                if (event.deltaY > 0 && !event.shiftKey) increment = event.altKey ? 10 : 1
                    else if (event.deltaY < 0 && !event.shiftKey) increment = event.altKey ? -10 : -1
                    else if (event.deltaX > 0 && event.shiftKey) increment = JSON.parse($(idSelector).attr('min')) - $(idSelector).val()
                    else if (event.deltaX < 0 && event.shiftKey) increment = JSON.parse($(idSelector).attr('max')) - $(idSelector).val();
                $(idSelector).val(Math.round(JSON.parse($(idSelector).val()) + increment));
                updateCallback(idSelector, cssKey, unit, jsCssKey, 'set');
                event.preventDefault();
            });
            $(idSelector).focusin(function() { action.isEditingText = true; });
            $(idSelector).focusout(function() { action.isEditingText = false; });

            $(buttonSelector).parent().attr('class', ''); //just disable the leftToolTip Class? hide tooltip
            $(divSelector).toggle('display');
        } else { //If the input already exists
            $(divSelector).is(':visible') ? $(buttonSelector).parent().attr('class','leftTooltip') : $(buttonSelector).parent().attr('class',''); //enable tooltip again
            $(divSelector).toggle('display');
        }
    },
    handleInputButtonEvent: function(idSelector, toMultiplyBy, cssKey, jsCssKey, unit, updateCallback, event) {
        action.setHelpText('Shift+click to set to max/min. Alt+click to change by 10.');
        event.preventDefault();
        var max = JSON.parse($(idSelector).attr('max'));
        var min = JSON.parse($(idSelector).attr('min'));
        if (event.shiftKey) {
            action.sizeControl(idSelector, (toMultiplyBy > 0 ? max : min) - JSON.parse($(idSelector).val()))
        } else if (event.altKey) {
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
            $('<a href="#" class="fa fa-minus-circle" title="Try shift+clicking and alt+clicking!"></a>').appendTo(decrementButton);
            decrementButton.prependTo(divSelector);
            $('<input type="number" id="' + key + 'Input" min="' + min + '" max="' + max + '" title="Try using the scroll wheel!" style="top: ' + JSON.parse(inputTopPos) + '; right: ' + JSON.parse(inputRightPos) + '">').prependTo(divSelector);
            var incrementButton = $('<div id="' + key + 'Increment" class="sizeControl inputLabel" data-title="' + inputTitle + '" style="top:' + (JSON.parse(inputTopPos)+15) + '; right: ' + (JSON.parse(inputRightPos)+11) + ';"></div>');
            $('<a href="#" class="fa fa-plus-circle" title="Try shift+clicking and alt+clicking!"></a>').appendTo(incrementButton);
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
        var buttonSelector = '#' + splitArr[0]; //The icon button
        if (optionsTop === 0 || !optionsTop)
            optionsTop = $('#' + splitArr[3]).position().top + 11;
        if (!$(divSelector).length) { //If the options haven't been created yet
            $('<div id="' + key + 'DivWrapper" style="display: block;" class="options"></div>').prependTo('#' + splitArr[3]);

            var right = 80;
            var margin = 0;
            for (var i = options.length - 1; i >= 0; i--) {
                var optionDivSelector = '#' + options[i] + 'OptionDiv';
                var optionSelector = '#' + options[i] + 'Option';
                $('<div id="' + options[i] + 'OptionDiv" style="top: ' + optionsTop + 'px;"></div>').appendTo($(divSelector));
                var optionElement = getOptionElement(options[i]);
                optionElement.appendTo($('#' + options[i] + 'OptionDiv'));
                $(optionDivSelector).css({'right': right
                                                        ,'width': $('#' + options[i] + 'Option').width() + 10
                                                        ,'height': $('#' + options[i] + 'Option').height() + 2
                                                    });
                if (typeof optionElement.attr('data-selected') != 'undefined' && JSON.parse(optionElement.attr('data-selected'))) {
                    optionElement.parent().attr('data-selected','true');
                    optionElement.parent().css("background-color","#21b9b0");
                    optionElement.parent().css("border-color","#21b9b0");
                }
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
                $(optionDivSelector).mouseover(function() {
                    $(this).css("background-color","#21b9b0");
                    $(this).css("border-color","#21b9b0");
                }).mouseout(function() {
                    if ($(this).attr('data-selected') === 'false' || typeof $(this).attr('data-selected') === 'undefined') {
                        $(this).css("background-color","#54606e");
                        $(this).css("border-color","#54606e");
                    }
                });
            }

            $(buttonSelector).parent().attr('class',' '); //instead of removing the title, just remove class. hide toolTip
            $(divSelector).css('display', 'none'); // Have to have display set to block before this because sizing depends on the displayed width ↑
            $(divSelector).toggle('display');
        } else { //If the options already exists
            $(divSelector).is(':visible') ? $(buttonSelector).parent().attr('class','leftTooltip') : $(buttonSelector).parent().attr('class',''); //If it's currently visible it will be hidden
        }
    },
    cgPosition: function() {
        this.cgSize('posLeft', constants.editArray[2], 'px', 0, $('.screen').width() - $('#' + action.selectedItem).width(), 'left', 'left', action.updateSize, '', '80', 'Left', 2);
        this.cgSize('posTop', constants.editArray[2], 'px', 0, $('.screen').height() - $('#' + action.selectedItem).height(), 'top', 'top', action.updateSize, '', '208', 'Top', 2);

        $('#' + action.selectedItem).on('drag', function() {
            $('#posLeftInput').val(Math.round(JSON.parse($('#' + action.selectedItem).position().left)));
            $('#posTopInput').val(Math.round(JSON.parse($('#' + action.selectedItem).position().top)));
        });
        $('#' + action.selectedItem).resize(function() {
            alert("test");
            $('#posLeftInput').attr('max', $('.screen').width() - $('#' + action.selectedItem).width());
        });
    },
    cgMultiPosition: function() {
        this.cgSize('multiPosLeft', constants.multiPosition, 'px', 0, 0, 'left', 'left', action.updateMultiPosition, '', '80', 'Left', 2);
        this.cgSize('multiPosTop', constants.multiPosition, 'px', 0, 0, 'top', 'top', action.updateMultiPosition, '', '208', 'Top', 2);

        //cgSize automatically initializes the inputs with values, but in relative mode, we want everything to start at 0
        for (var i = 0; i < 2; i++) {
            var curInputSelector = (i == 0 ? '#multiPosLeftInput' : '#multiPosTopInput');
            if (!$(curInputSelector).attr('initialized')) {
                $(curInputSelector).val(0);
                $(curInputSelector).attr('initialized', 'partial');
                $(curInputSelector).attr('lastVal', 0);
            }
        }

        // Since they were initialized weith maxes/mins of 0, they need to be updated
        action.updateMultiPosInputExtrema();

        $('#' + action.selectedItem).on('drag', function(event, ui) {
            //$('#posLeftInput').val(Math.round(JSON.parse($('#' + action.selectedItem).position().left)));
            //$('#posTopInput').val(Math.round(JSON.parse($('#' + action.selectedItem).position().top)));
            if (!$(ui.helper).attr('lastLeft'))
                $(ui.helper).attr('lastLeft', ui.position.left);
            if (!$(ui.helper).attr('lastTop'))
                $(ui.helper).attr('lastTop', ui.position.top);

            var leftChange = ui.position.left - JSON.parse($(ui.helper).attr('lastLeft'));
            var topChange = ui.position.top - JSON.parse($(ui.helper).attr('lastTop'));
            for (var i = 0; i < action.selectedItems.length; i++) {
                var initialPos = $('#' + action.selectedItems[i]).position();
                $('#' + action.selectedItems[i]).css('left', initialPos.left + leftChange);
                $('#' + action.selectedItems[i]).css('top', initialPos.top + topChange);
            }

            $(ui.helper).attr('lastLeft', ui.position.left);
            $(ui.helper).attr('lastTop', ui.position.top);
        });
    },
    // Sets the maxes and mins for the multipos inputs
    updateMultiPosInputExtrema: function() {
        var maxLeft = 0, minLeft = 0;
        var maxTop = 0, minTop = 0;
        var elName;
        for (var i = 0; i < action.selectedItems.length; i++) { // Go through each selected item and establish the farthest any single one could travel in a direction
            elName = '#' + action.selectedItems[i];


            var curMaxLeft = action.getElementExtreme(elName, 'maxleft', 'rel');
            if (curMaxLeft > maxLeft)
                maxLeft = curMaxLeft;

            var curMaxTop = action.getElementExtreme(elName, 'maxtop', 'rel');
            if (curMaxTop > maxTop)
                maxTop = curMaxTop;

            var curMinLeft = action.getElementExtreme(elName, 'minleft', 'rel');
            if (curMinLeft < minLeft)
                minLeft = curMinLeft;

            var curMinTop = action.getElementExtreme(elName, 'mintop', 'rel');
            if (curMinTop < minTop)
                minTop = curMinTop;
        }

        $('#multiPosLeftInput').attr('max', maxLeft).attr('min', minLeft);
        $('#multiPosTopInput').attr('max', maxTop).attr('min', minTop);
    },
    /**
    * Gets a max/min that a relative movement input is allowed to go to
    * extreme : 'maxleft', 'minleft', 'maxtop', 'mintop'
    * mode : 'rel' for relative or 'abs' for absolute
    */
    getElementExtreme: function(elName, extreme, mode) {
        if (!elName.includes('#')) {
            elName = '#' + elName;
        }

        var pos = $(elName).position();

        switch (extreme) {
            case 'maxleft':
                if (mode == 'rel')
                    return JSON.parse($('#multiPosLeftInput').val()) + ($('.screen').width() - $(elName).width() - pos.left);
                else
                    return $('.screen').width() - $(elName).width();
            case 'minleft':
                if (mode == 'rel')
                    return JSON.parse($('#multiPosLeftInput').val()) + (-1 * pos.left);
                else
                    return 0;
            case 'maxtop':
                if (mode === 'rel')
                    return JSON.parse($('#multiPosTopInput').val()) + ($('.screen').height() - $(elName).height() - pos.top);
                else
                    return $('.screen').height() - $(elName).height();
            case 'mintop':
                if (mode === 'rel')
                    return JSON.parse($('#multiPosTopInput').val()) + (-1 * pos.top);
                else
                    return 0;
            default:
                return 0;
        }
    },
    sizeControl: function(inputSelector, valueToAdd) {
        $(inputSelector).val(JSON.parse($(inputSelector).val()) + valueToAdd);
    },
    blurTimeout: null,
    backgroundBlur: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        if (purpose === 'set') {
            var max = JSON.parse($(idSelector).attr('max'));
            var min = JSON.parse($(idSelector).attr('min'));
            if (JSON.parse($(idSelector).val()) >= JSON.parse(max)) $(idSelector).val(max);
            if (JSON.parse($(idSelector).val()) <= JSON.parse(min)) $(idSelector).val(min);

            $('#miniBlurCanvas').show();
            stackBlurImage('miniWallpaper','miniBlurCanvas',$(idSelector).val(),false);
            if (action.blurTimeout != null) clearTimeout(action.blurTimeout);
            action.blurTimeout = setTimeout(function() {
                //$('#miniBlurCanvas').hide();
                $('#miniBlurCanvas').removeClass('miniBlur');
                $('#miniBlurCanvas').animate({
                    opacity: 0.25,
                    width: 320,
                    height: 568
                }, 1000, function() {
                    $('#miniBlurCanvas').hide();
                    $('#miniBlurCanvas').addClass('miniBlur');
                    $('#miniBlurCanvas').css('opacity','1');
                });
                stackBlurImage('wallpaper','blurcanvas',$(idSelector).val(),false);
                localStorage.setItem('wallpaperBlur',$(idSelector).val());
            }, 400);
        } else if (purpose === 'get') {
            var blur = localStorage.getItem('wallpaperBlur');
            if(blur != null && blur != '0') {
                return blur;
            } else {
                return '0';
            }
        }
    },
    updateSize: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        if (purpose === 'set') {
            var max = JSON.parse($(idSelector).attr('max'));
            var min = JSON.parse($(idSelector).attr('min'));
            if (JSON.parse($(idSelector).val()) >= JSON.parse(max)) $(idSelector).val(max);
            if (JSON.parse($(idSelector).val()) <= JSON.parse(min)) $(idSelector).val(min);

            if (jsCssKey === 'width') {
                 /* Check to see if setting width overflows screen */
                /* While changing the width, and the element bounds goes out of screen, move item left to stop overflow */

                var elWidth = Math.round($(idSelector).val()), //current set width
                    elPos = Math.round($('#' + action.selectedItem).position().left), //element position from the left
                    elDiff = Math.round(elWidth - ($('.screen').width() - elPos)); //check difference in screen width compared to element position + set width

                if(elDiff > 0){
                    //action.setCss(action.selectedItem, 'left', (elPos - elDiff) +'px'); //make adjustments to the element
                    elPos = (elPos - elDiff) +'px';
                }

                $('#posLeftInput').attr('max', $('.screen').width() - $('#' + action.selectedItem).width());
                $('#posTopInput').attr('max', $('.screen').height() - $('#' + action.selectedItem).height());

                if(action.selectedItem.substring(3,9) === 'Circle') { // Special for circles
                    action.setCss([[action.selectedItem, ['height', 'width', 'left'], [$(idSelector).val() + unit, $(idSelector).val() + unit, elPos]]]);
                } else if (idSelector === '#iconSizeInput') { // Special for icon
                    var valuesArr = [ $(idSelector).val() + unit, elPos];
                    action.setCss([['icon', [ 'width', 'left'], valuesArr], ['iconImg', ['width', 'left'], valuesArr]]);
                } else {
                    action.setCss([[action.selectedItem, [cssKey, 'left'], [$(idSelector).val() + unit, elPos]]]);
                }
            } else {
                action.setCss(action.selectedItem, cssKey, $(idSelector).val() + unit);
            }

            action.saveStorage();
        } else if (purpose === 'get') {
            return $('#' + action.selectedItem).css(cssKey);
        }
    },
    updateMultiPosition: function(idSelector, cssKey, unit, jsCssKey, purpose) {
        if (purpose === 'set') {
            var max = JSON.parse($(idSelector).attr('max'));
            var min = JSON.parse($(idSelector).attr('min'));
            var originalDelta = JSON.parse($(idSelector).val()) - JSON.parse($(idSelector).attr('lastVal'));
            if (JSON.parse($(idSelector).val()) >= max) $(idSelector).val(max);
            if (JSON.parse($(idSelector).val()) <= min) $(idSelector).val(min);


            for (var i = 0; i < action.selectedItems.length; i++) { // Save the initial values for each selectedItem
                if ($(idSelector).attr('initialized') === 'partial') { // If this is the first time the element's been moved
                    $('#' + action.selectedItems[i]).attr("initial" + cssKey, $('#' + action.selectedItems[i]).css(cssKey));
                    if (i === action.selectedItems.length - 1)
                        $(idSelector).attr('initialized', 'full');
                }
            }

            //Now we're actually setting things
            var initial = 0;
            var elSelector;
            for (var i = 0; i < action.selectedItems.length; i++) {
                elSelector = '#' + action.selectedItems[i];
                initial = $(elSelector).attr('initial' + cssKey);

                initial = initial.substring(0, initial.length - unit.length); // Remove 'px' from the end
                initial = JSON.parse(initial); // Convert it to a number

                var newValue = initial + JSON.parse($(idSelector).val());
                var curMax, curMin;
                if (cssKey === 'left') {
                    curMax = action.getElementExtreme(elSelector, 'maxleft', 'abs');
                    curMin = action.getElementExtreme(elSelector, 'minleft', 'abs');
                } else if (cssKey === 'top') {
                    curMax = action.getElementExtreme(elSelector, 'maxtop', 'abs');
                    curMin = action.getElementExtreme(elSelector, 'mintop', 'abs');
                } else { // Something's gone wrong
                    curMax = 1000;
                    curMin = -1000;
                }

                var pos = $(elSelector).position()[cssKey];
                var delta = $(idSelector).val() - JSON.parse($(idSelector).attr('lastVal'));
                if (newValue < curMax && newValue > curMin) {
                    if ((pos === curMax - 1 || pos === curMax) && originalDelta > 0) { // If it's at or near the max
                        action.setCss(action.selectedItems[i], cssKey, curMax); // Set it to the max
                        //console.log("SettinG To " + curMax);
                    } else if ((pos === curMin + 1 || pos === curMin) && originalDelta < 0) { // f it's at or near the min
                        action.setCss(action.selectedItems[i], cssKey, curMin); // Set it to the min
                        //console.log("SeTting To " + curMin);
                    } else {
                        action.setCss(action.selectedItems[i], cssKey, newValue);
                        //console.log("Setting to " + newValue);
                    }
                } else { // The stuff below makes it so that when you run into an edge, when later going the opposite direction, their relative positions to each other update
                    if (newValue >= curMax && delta > 0) {
                        if (curMax - pos != 0) delta -= curMax - pos; // This fixes a bug with elements getting off from each other when hitting edges then leaving it
                        action.setCss(action.selectedItems[i], cssKey, curMax);

                        initial -= delta;
                        //console.log("decrementing initial" + cssKey + ' of ' + action.selectedItems[i] + ' by ' + delta);
                        //console.log("Setting To " + curMax);
                    } else if (newValue <= curMin && delta < 0) {
                        if (curMin - pos != 0) delta -= curMin - pos;
                        action.setCss(action.selectedItems[i], cssKey, curMin);

                        initial -= delta;
                        //console.log("incrementing initial" + cssKey + ' of ' + action.selectedItems[i] + ' by ' + delta);
                        //console.log("SEtting to " + curMin);
                    }

                    action.updateMultiPosInputExtrema();
                    $(elSelector).attr('initial' + cssKey, initial + unit);
                }
            }

            $(idSelector).attr('lastVal', $(idSelector).val());

            action.saveStorage();
        } else if (purpose === 'get') {
            return $('#' + action.selectedItem).css(cssKey);
        }
    },
    cgGradientPurpose: function() {
        var lastSelector;
        this.cgOption('gradientType', constants.linearGradientArray[0], ['background', 'text'], 14, true, function(optionSelector) {
            if (optionSelector === '#backgroundOption') {
                action.setCss([[action.selectedItem, ['-webkit-background-clip', '-webkit-text-fill-color'], ['', '']]]);
            } else if (optionSelector === '#textOption') {
                action.setCss([[action.selectedItem, ['-webkit-background-clip', '-webkit-text-fill-color'], ['text', 'transparent']]]);
            }
            action.saveStorage();

            $(optionSelector).parent().css({'background-color' : '#21b9b0', 'border-color' : '#21b9b0'}).attr('data-selected','true');
            if (lastSelector != optionSelector) $(lastSelector).parent().css({'background-color' : '#54606e', 'border-color' : '#54606e'}).attr('data-selected','false');
            lastSelector = optionSelector;
        }, function(optionName) {
            return $('<label id="' + optionName + 'Option" style="text-align: ' + optionName + ';">' + optionName + '</label>');
        });
    },
    cgalign: function () {
        var lastSelector = '#' + $('#' + action.selectedItem).css('text-align') + 'Option';
        this.cgOption('align', constants.editArray[4], ['left', 'center', 'right'], 0, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'text-align', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            /*var optionElement = $('<label id="' + optionName + 'Option" style="text-align: ' + optionName + ';">' + optionName + '</label>');
            if ($('#' + action.selectedItem).css('text-align') === optionName) {
                optionElement.attr('data-selected','true');
            }
            return optionElement;*/
            return action.getBasicOptionElement(optionName, 'text-align: ' + optionName, 'text-align');
        });
    },
    cgPosSystem: function() {
        var lastSelector = '#' + action.multiPositioningSystem + 'Option';
        this.cgOption('posSystem', constants.positioningSystemOption, ['relative', 'absolute'], 0, true, function(optionSelector) {
            lastSelector = action.posSystemSelected(optionSelector, lastSelector);
        }, function(optionName) {
            var el = $('<label id="' + optionName + 'Option">' + optionName + '</label>');
            if (optionName == 'relative')
                el.attr('data-selected', 'true');
            return el;
        })
    },
    posSystemSelected: function(optionSelector, lastSelector) {
        action.multiPositioningSystem = $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6);
        action.showMultiSelectionMenu(); // Update the menu. Changes the positioning inputs
        return action.ultraBasicOptionSelected(optionSelector, lastSelector);
    },
    basicOptionSelected: function(optionSelector, lastSelector, cssKey, setTo) {
        action.setCss(action.selectedItem, cssKey, setTo);
        return action.ultraBasicOptionSelected(optionSelector, lastSelector);
    },
    ultraBasicOptionSelected: function(optionSelector, lastSelector) {
        $(optionSelector).parent().css({'background-color' : '#21b9b0', 'border-color' : '#21b9b0'}).attr('data-selected','true');
        if (lastSelector != optionSelector) $(lastSelector).parent().css({'background-color' : '#54606e', 'border-color' : '#54606e'}).attr('data-selected','false');
        lastSelector = optionSelector;
        return lastSelector;
    },
    getBasicOptionElement: function(optionName, style, cssKey) {
        var optionElement = $('<label id="' + optionName + 'Option" style="' + style + ';">' + optionName + '</label>');
        if ($('#' + action.selectedItem).css(cssKey) === optionName) {
            optionElement.attr('data-selected','true');
        }
        return optionElement;
    },
    cgcolor: function (color, cssKey, div) {
        if (color) {
            action.setCss(action.selectedItem, cssKey, color);
        } else {
            $("#" + div).spectrum({
                showInitial: true,
                maxSelectionSize: 66,
                localStorageKey: 'spectrum',
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
    cgStyle: function() {
        var lastSelector = '#' + $('#' + action.selectedItem).css('font-style') + 'Option';
        this.cgOption('style', constants.editArray[9], ['italic','oblique','initial'], 0, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'font-style', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            return action.getBasicOptionElement(optionName, 'text-align: center; font-style: ' + optionName, 'font-style');
        });
    },
    cgBorderStyle: function() {
        var lastSelector = '#' + $('#' + action.selectedItem).css('border-style') + 'Option';
        this.cgOption('borderStyle', constants.borderArray[0], ['dotted','dashed','solid','double','groove','ridge','inset','outset'], 20, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'border-style', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            return action.getBasicOptionElement(optionName, 'text-align:center; font-size:15px;', 'border-style');
        });
    },
    cguppercase: function () {
        var lastSelector = '#' + $('#' + action.selectedItem).css('text-transform') + 'Option';
        this.cgOption('uppercase', constants.editArray[7], ['uppercase', 'capitalize', 'lowercase'], 0, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'text-transform', $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6));
        }, function(optionName) {
            //return $('<label id="' + optionName + 'Option" style="text-align: center; text-transform: ' + optionName + ';">' + optionName + '</label>');
            return action.getBasicOptionElement(optionName, 'text-align: center; text-transform: ' + optionName, 'text-transform');
        });
    },
    cgweight: function () {
        var lastSelector;
        var selectedFontWeight = $('#' + action.selectedItem).css('font-weight');
        if (selectedFontWeight != '') {
            if (isNaN(selectedFontWeight)) {
                lastSelector = '#' + selectedFontWeight + 'Option';
            } else {
                lastSelector = '#boldnessOption'
            }
        }
        this.cgOption('weight', constants.editArray[8], ['boldness','bold','normal'], 0, true, function(optionSelector) {
            lastSelector = action.basicOptionSelected(optionSelector, lastSelector, 'font-weight',
                optionSelector != '#boldnessOption' ? $(optionSelector).attr('id').substring(0, $(optionSelector).attr('id').length - 6) : $('#boldnessInput').val());
            if (optionSelector === '#boldOption') {
                $('#boldnessInput').val(700);
            } else if (optionSelector === '#normalOption') {
                $('#boldnessInput').val(400);
            }
        }, function(optionName) {
            if (optionName === 'boldness') {
                var wrapper = action.getInputWrapper('boldness', 0, 0, 100, 900, '', false);
                wrapper.css('display', 'block');

                var elSize;
                var fontWeight = $('#' + action.selectedItem).css('font-weight');
                try {
                    elSize = JSON.parse(fontWeight);
                } catch (e) {
                    if (fontWeight === 'bold') {
                        elSize = 700;
                    } else if (fontWeight === 'normal') {
                        elSize = 400;
                    } else {
                        elSize = 100;
                    }
                }

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
                incrementButton.on('click', function(event) { action.handleInputButtonEvent(inputSelector, 100, 'font-weight', 'font-weight', '', action.updateSize, event); });
                decrementButton.on('click', function(event) { action.handleInputButtonEvent(inputSelector, -100, 'font-weight', 'font-weight', '', action.updateSize, event); });

                $(input).on('mousewheel', function(event) {
                    if (event.deltaY > 0)  {
                        $(input).val(Math.round(JSON.parse($(input).val()) + ($(input).val() === $(input).attr('max') ? 0 : 100)));
                    } else {
                        $(input).val(Math.round(JSON.parse($(input).val()) - ($(input).val() === $(input).attr('min') ? 0 : 100)));
                    }
                    event.preventDefault();
                });

                wrapper.attr('id', 'boldnessOption');
                wrapper.appendTo($("#boldnessOptionDiv"));
                wrapper.attr('class', 'noHoverChange');

                if (fontWeight === '400') {
                    $('#normalOptionDiv').attr('data-selected','true');
                    $('#normalOptionDiv').css("background-color","#21b9b0");
                    $('#normalOptionDiv').css("border-color","#21b9b0");
                } else if (fontWeight === '700') {
                    $('#boldOptionDiv').attr('data-selected','true');
                    $('#boldOptionDiv').css("background-color","#21b9b0");
                    $('#boldOptionDiv').css("border-color","#21b9b0");
                } else if (fontWeight === $(input).val()) {
                    wrapper.parent().attr('data-selected','true');
                    wrapper.parent().css("background-color","#21b9b0");
                    wrapper.parent().css("border-color","#21b9b0");
                }

                return wrapper;
            } else {
                var optionElement = $('<label id="' + optionName + 'Option" style="text-align: center; font-weight: ' + optionName + ';">' + optionName + '</label>');
                if ($('#' + action.selectedItem).css('font-weight') === optionName) {
                    $('#' + $(optionElement).attr('id') + 'Div').attr('data-selected','true');
                    $('#' + $(optionElement).attr('id') + 'Div').css("background-color","#21b9b0");
                    $('#' + $(optionElement).attr('id') + 'Div').css("border-color","#21b9b0");
                }
                return optionElement;
            }
        });
        $('#boldnessOptionDiv').css({'height': 29
                                    ,'width': 110});
        $('#boldnessOption').css({'top':-9
                                    ,'left':-12});
        $('#boldnessOption').hover(function() {$(this).css({'background-color': 'rgba(0,0,0,0)', 'border-color':'rgba(0,0,0,0)'})});
        $('#boldnessOption').on("change", function() {
            action.setCss(action.selectedItem, 'font-weight', $('#boldnessInput').val());
        });
        $('#boldnessOption').on("mousewheel", function() {
            action.setCss(action.selectedItem, 'font-weight', $('#boldnessInput').val());
        });
    },
    openBackground: function(purpose) { // either 'original' or 'blurry'
        if ($('#wallpaper').attr('src') != 'none') {
            var newWindow = window.open('');

            if (purpose === 'blurry') {
                var newCanvas = document.getElementById('blurcanvas').cloneNode();
                newCanvas.className = '';
                //newCanvas.getContext('2d').drawImage(document.getElementById('blurcanvas'),0,0);
                stackBlurImage('wallpaper',newCanvas,localStorage.getItem('wallpaperBlur'),false);
                var imageData = newCanvas.toDataURL();
                var image = document.createElement('img');
                image.src = imageData;
                image.style.display = 'block';
            } else if (purpose === 'original') {
                var image = $('#wallpaper').clone();
                image.attr('style','');
                image.attr('width','');
                image.attr('height','');
            }
            $('body', newWindow.document).append(image);
            $('head', newWindow.document).append($('<title>Wallpaper</title>'));

        } else {
            action.setHelpText('No wallpaper set. Click "Change Background" above to set one.');
        }
    },
    showPanel: function(list){
        $('#'+list).css('visibility','visible'); //new function instead of running createLI again.
    },
    showPanelHelpText: function(list) {
        if ($('#'+list).css('display') === 'none') action.setHelpText('Either scroll, use the arrow buttons, or use the arrow keys to navigate the element menu.');
    },
    undo: function() {
        action.isUndoingRedoing = true;
        if (action.queuePosition > -1) { // False when array's either empty or the queue is at the beginning, nothing left to undo
            var editorAction = action.actionQueue[action.queuePosition];
            action.runOppositeAction(editorAction[0], editorAction[1]);
            action.queuePosition--;
        } else {
            action.setHelpText("Nothing left to undo.");
        }
        action.isUndoingRedoing = false;
        console.log('Queue Position: ' + action.queuePosition + ' / ' + (action.actionQueue.length - 1));
    },
    redo: function() {
        action.isUndoingRedoing = true;
        if (action.queuePosition < action.actionQueue.length - 1) { // False when array's either empty or at the end, nothing more to redo
            action.queuePosition++;
            var editorAction = action.actionQueue[action.queuePosition];
            action.runAction(editorAction[0], editorAction[1]);
        } else {
            action.setHelpText("Nothing left to redo.");
        }
        action.isUndoingRedoing = false;
        console.log('Queue Position: ' + action.queuePosition + ' / ' + (action.actionQueue.length - 1));
    },
    addAction: function(editorAction) {
        action.actionQueue.length = action.queuePosition + 1;
        action.actionQueue.push(editorAction);
        action.queuePosition = action.actionQueue.length - 1;
        console.log('Queue Position: ' + action.queuePosition + ' / ' + (action.actionQueue.length - 1));
    },
    runOppositeAction: function(actionName, actionInfo) {
        switch (actionName) {
            case 'addElement':
                if (typeof actionInfo[0] === 'string') {
                    action.removeFromScreen(actionInfo[0], false);
                } else if (typeof actionInfo[0] === 'object'){
                    for (var i = 0; i < actionInfo.length; i++) {
                        action.removeFromScreen(actionInfo[i][0], false);
                    }
                }
                break;
            case 'removeElement':
                action.runAction('addElement', actionInfo);
                break;
            case 'setCss':
                if (typeof actionInfo[0] === 'string') {
                    $('#' + actionInfo[0]).css(actionInfo[1], actionInfo[2]);
                    action.savedElements.placedElements[actionInfo[0]][actionInfo[1]] = actionInfo[2];
                } else {
                    for (var i = 0; i < actionInfo.length; i++) {
                        if (typeof actionInfo[i][1] === 'string') {
                            $('#' + actionInfo[i][0]).css(actionInfo[i][1], actionInfo[i][2]);
                            action.savedElements.placedElements[actionInfo[i][0]][actionInfo[i][1]] = actionInfo[i][2];
                        } else {
                            for (var k = 0; k < actionInfo[i][1].length; k++) {
                                $('#' + actionInfo[i][0]).css(actionInfo[i][1][k], actionInfo[i][2][k]);
                                if (typeof action.savedElements.placedElements[actionInfo[i][0]] != 'undefined')
                                    action.savedElements.placedElements[actionInfo[i][0]][actionInfo[i][1][k]] = actionInfo[i][2][k];
                            }
                        }
                    }
                }
                action.saveStorage();
                break;
        }
    },
    runAction: function(actionName, actionInfo) { // [actionName, actionInfo]
        switch (actionName) {
            case 'addElement': // ['addElement',[elementID,[color:'', font-family:'', etc]]] OR ['addElement',[[elementID,[color:'', font-family:'', etc]],[elementID,[color:'', font-family:'', etc]],...]]
                function addEl(elementId, cssVals) { // Adds given element with css values to screen
                    if ($('#' + elementId + 'Picker').length) {
                        $('#' + elementId + 'Picker').css('background-color','#21B9B0'); //Set the colored background of the relevant list element
                        $('#' + elementId + 'Picker').css('border-color','#21B9B0');
                    }
                    action.savedElements.placedElements[elementId] = cssVals;
                }

                if (typeof actionInfo[0] === 'string') {
                    addEl(actionInfo[0], actionInfo[1]);
                } else if (typeof actionInfo[0] === 'object') {
                    for (var i = 0; i < actionInfo.length; i++) {
                        addEl(actionInfo[i][0], actionInfo[i][1]);
                    }
                }
                $('#screenElements').empty(); // This is VERY important. Without this, replaceElements recreates each of the other elements, but they're these crappy little non-filled things. They cause issues.
                action.replaceElements(); // Refresh the screen elements from the savedElements array
                action.saveStorage();
                break;
            case 'removeElement': // ['removeElement',[elementID,[color:'', font-family:'', etc]]] OR ['removeElement',[[elementID,[color:'', font-family:'', etc]],[elementID,[color:'', font-family:'', etc]],...]]
                action.runOppositeAction('addElement', actionInfo); // Does the opposite of adding an element, removing the element
                break;
            case 'setCss': // ['setCss', [elementID, cssKey, oldValue, newValue]]
                if (typeof actionInfo[0] === 'string') {
                    $('#' + actionInfo[0]).css(actionInfo[1], actionInfo[3]);
                    action.savedElements.placedElements[actionInfo[0]][actionInfo[1]] = actionInfo[3];
                } else {
                    for (var i = 0; i < actionInfo.length; i++) {
                        if (typeof actionInfo[i][1] === 'string') {
                            $('#' + actionInfo[i][0]).css(actionInfo[i][1], actionInfo[i][3]);
                            action.savedElements.placedElements[actionInfo[i][0]][actionInfo[i][1]] = actionInfo[i][3];
                        } else {
                            for (var k = 0; k < actionInfo[i][1].length; k++) {
                                $('#' + actionInfo[i][0]).css(actionInfo[i][1][k], actionInfo[i][3][k]);
                                if (typeof action.savedElements.placedElements[actionInfo[i][0]] != 'undefined')
                                    action.savedElements.placedElements[actionInfo[i][0]][actionInfo[i][1][k]] = actionInfo[i][3][k];
                            }
                        }
                    }
                }
                action.saveStorage();
                break;
        }
    },
    elementPanel: function (id, duration) { //show hide items in element Panel
        var duration = typeof duration != 'undefined' ? duration : 400;
        if (id === 'cl') { $('#clockList').toggle(duration, action.showPanelHelpText('clockList')); /*this.createLI(elementPanel.clockElements, 'clockList');*/ this.showPanel('clockList'); }
        if (id === 'wl') { $('#weatherList').toggle(duration, action.showPanelHelpText('weatherList')); /*this.createLI(elementPanel.weatherElements, 'weatherList');*/ this.showPanel('weatherList') }
        if (id === 'sl') { $('#systemList').toggle(duration, action.showPanelHelpText('systemList')); /*this.createLI(elementPanel.systemElements, 'systemList');*/ this.showPanel('systemList'); }
        if (id === 'ml') { $('#miscList').toggle(duration, action.showPanelHelpText('miscList')); /*this.createLI(elementPanel.miscElements, 'miscList');*/ this.showPanel('miscList'); }
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
            action.hideClearLabel();
            action.setHelpText('Not cleared, click to edit elements. (Also delete)');
        } else if (code === 1) { // definitely clear the theme
            localStorage.removeItem('placedElements');
            action.savedElements = {};
            action.movedElements = {};
            action.selectedItem = '';
            $('#screenElements').empty();
            $('.newSVG').remove();
            $(".svg").remove();
            action.hideClearLabel(); // Avoid showing the help text for not clearing the label, just hiding it
            action.hideElementPanelElements();
            action.setBG(''); //culprit to object is undefined when placed
            $('.screenoverlay').css('background-image','');
            $('.screen').prepend('<img class="svg"/>');

            //Clear undo/redo stuff
            action.actionQueue = [];
            action.queuePosition = -1;
            action.isUndoingRedoing = false;
            action.sizeQueueTimeout = {
                timeout : null,
                isTimeoutRunning: false,
                previousCssKey : '',
                previousAction : null,
                initialValue : ''
            };

            action.setHelpText('Cleared. Click "Show Elements Panel" to place elements.');
        }
    },
    hideClearLabel: function() {
        $('.noClear').remove();
        $('.yesClear').remove();
        $('.clearLabel').remove();
        $('#clear').parent().attr('class','leftTooltip');
    },
    hideElementPanelElements: function() {
        var elementPanelElements = $('.elementPanel').children();
        for (var i = 0; i < elementPanelElements.length; i++) {
            if ($(elementPanelElements[i]).is('div')) {
                if ($(elementPanelElements[i]).is(":visible")) {
                    $(elementPanelElements[i - 1]).click();
                }

                var subcategoryChildren = $($(elementPanelElements[i]).find('div')).find('li');
                for (var j = 0; j < subcategoryChildren.length; j++) {
                    var child = $(subcategoryChildren[j]);
                    if (typeof child.attr('data-element') != 'undefined' && child.css('background-color') != "#54606e" && child.css('background-color') != "rgb(84, 96, 110)") {
                        child.css('background-color','#54606e');
                        child.css('border-color','#54606e');
                    }
                }
            }
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

                var startSlide = 0;
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

                var prevButton = $('<button class="slick-arrow slickNext fa fa-arrow-down" style="display: block;"></button>'); //Create a new button that's not related to the old one at all
                $($('#' + div).find('.slick-next')[0]).remove(); // Remove the old, slick-made button. It does things we don't want
                $(prevButton).html('');
                $(prevButton).click(function() {action.slickProgress('next', div);}); // Send it through our own custom handler
                $('#' + div).append(prevButton); // Actually add the new button

                var nextButton = $('<button class="slick-arrow slickPrev fa fa-arrow-up" style="display: block;"></button>');
                $($('#' + div).find('.slick-prev')[0]).remove();
                $(nextButton).html('');
                $(nextButton).click(function() {action.slickProgress('prev', div);});
                $('#' + div).append(nextButton);

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
                    if (action.shouldSlickProgress(div)) {
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
                        if (action.shouldSlickProgress(div)) {
                            $('#' + div).slick('slickNext');
                        }
                    }
                    action.setCarouselOpacity(div);
                });
            }, function() {
                $(document).unbind("keyup");
            });
            if ($('#' + div + ":hover").length) $('#' + div).mouseenter(); // Check if the mouse is already hovering over it when it loads
    },
    slickProgress: function(key, div) {
        switch (key) {
            case 'prev':
                $('#' + div).slick('slickPrev');
                action.setCarouselOpacity(div);
                break;
            case 'next':
                if (action.shouldSlickProgress(div)) {
                    $('#' + div).slick('slickNext');
                }
                break;
        }
        action.setCarouselOpacity(div);
    },
    shouldSlickProgress: function(div) {
        // This nastiness is to check whether or not we want to go to the next thing. So it's either if it's got less than or equal to 5 items in the list
        //      or if the next element in the list isn't dummyOne
        return $($('#' + div).find('.slick-track')[0]).children().length <= 5 || $($('#' + div).find("[data-slick-index=" + (JSON.parse($('#' + div).find('.slick-center').attr('data-slick-index')) + 1) + "]")[0]).attr('id') != 'dummyOne';
    },
    parseElementsArray: function(array, divSelector) {
        Object.keys(array).forEach(function (key) {
            if (array[key].constructor === Object) { // if this is another array
                action.parseElementsArray(array[key], divSelector);
            } else if (key === 'title') { // Create the parent category li item
                var baseName = array[key].toLowerCase().replace(/\s/g, ''); //Lowercase and remove spaces
                var parentId =  baseName + 'Category';
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
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) - 2) + ']').css({'opacity': 0.07, 'font-size':'16px', 'height': 'auto','border':'1px solid transparent'});
        $(lastEl).css({'opacity': 0.5, 'font-size':'16px', 'height': 'auto','border':'1px solid transparent'});
        $(lastEl).removeClass("elementPanelPreview");
        $(centerEl).css({'opacity': 1, 'pointer-events':'auto', 'font-size':'30px','border':'2px solid #21b9b0'});
        $(centerEl).addClass("elementPanelPreview");
        $(nextEl).css({'opacity': 0.5, 'font-size':'16px', 'height': 'auto','border':'1px solid transparent'});
        $(nextEl).removeClass("elementPanelPreview");
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) + 2) + ']').css({'opacity': 0.07, 'font-size':'16px', 'height': 'auto','border':'1px solid transparent'});

        // Subcategory showing/hiding //
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) - 2) + ']').find('ul').first().hide();
        lastEl.find('ul').first().hide(); // Make sure the other ones are hidden

        var centerUl = $(centerEl).find('ul').first();
        //centerUl.css('top', '-' + (((numLis * 32 + (5*(numLis - 1))) / 2) - 13) + 'px');
        centerUl.show(); // Show the subcategory for the center ul

        nextEl.find('ul').first().hide(); // Make sure the other ones are hidden
        $('#' + div).find('[data-slick-index=' + (JSON.parse(centerIndex) + 2) + ']').find('ul').first().hide();
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
    saveTheme:function () { //saves info to divs and sends form to create plist
        //----Wallpaper stuff----//
        if (action.wallpaper !== null && action.wallpaper !== 'null') {
            $('#wallpaper').hide();
            var canvas = document.getElementById('blurcanvas');
            canvas.style.display = 'none';
            canvas.className = '';
            var imageData = canvas.toDataURL();
            if(imageData.length > 7){ //if canvas contains data
                $('.screen').css('background-image','url(' + imageData + ')');
                action.wallpaper = imageData;
                action.saveStorage();
            }else{ // no data
                $('.screen').css('background-image','url(' + action.wallpaper + ')');
            }

            $('#blurcanvas').remove();
            $('#wallpaper').remove();
            $('miniWallpaper').remove();
            $('miniBlurCanvas').remove();
        }
        //----End Wallpaper ----//

        $('.toolPanel').css('display','none');
        $('.elementPanel').css('display','none');
        $('#tips').css('display','none');


//fix for rotated elements

        var children = document.getElementById('screenElements').children;
        for (var i = 0; i < children.length; i++) {
           var transform =  $(children[i]).css('transform');
            if(transform !== 'none'){
                //var id = children[i].id;
                var Tp = $(children[i]).css('top').replace(/[^-\d\.]/g, '');
                var Lf = $(children[i]).css('left').replace(/[^-\d\.]/g, '');
                $(children[i]).css({
                    'top' : Tp - 350 + 'px',
                    'left' : Lf - 175 + 'px'
                });
            }
        }

           if($('.newSVG')[0]){
            var svg = document.querySelector('.newSVG');
            var transform = $(svg.children[0]).css('transform');
            if(transform != "none"){
                $(svg.children[0]).css({
                    'position' :'absolute',
                    'top' : '-350px',
                    'left' : '-170px'
                });
                console.log('LockPlus changed svg position for save.');
            }
           }
//end fix rotated elements

        html2canvas(document.querySelector('.screen')).then(function(canvas) {
            document.getElementById('previewCanvas').appendChild(canvas);
            setTimeout(function(){
                var ca=document.getElementById('previewCanvas');
                    ca.setAttribute('title',"Theme saved, refresh the page");
                    ca.className = 'pCanvas';
                    ca = ca.children[0];
                //var context = ca.getContext('2d');
                var dataURL = ca.toDataURL();
            $('.phone').css('display','none'); //dont hide until html2canvas has rendered it.
            $('.newSVG').empty(); //remove svg
            //Fixing what html2canvas breaks
            $("body").append('<form id="saveForm"><h3>Enter theme details</h3><label class="flabel">Your Name</label><input type="text" name="fdevname" id="fdevname" placeholder="Your Name"/><label class="flabel">Your Email</label><input type="text" name="femail" id="femail" placeholder="Email@email.com"/><label class="flabel">Theme Name</label><input type="text" name="fthemename" id="fthemename" placeholder="Theme Name"/><div class="fsubmit">Submit</div><label class="errorlabel">*must fill in all inputs</label></form>');
            //end fixing what html2canvas broke
            $('.fsubmit').on('click',function(){
                   var devname = $('#fdevname').val();
                   var themename = $('#fthemename').val();
                   var email = $('#femail').val();
                   var emTest = /\S+@\S+\.\S+/.test(email);
                   if(emTest !== true){
                    document.querySelector('.errorlabel').innerHTML = "* Enter a valid Email";
                    $('.errorlabel').css('display','block');
                   }else{
                   if(themename !== '' && devname !== '' && /^[a-zA-Z0-9- ]*$/.test(themename) == true && /^[a-zA-Z0-9- ]*$/.test(devname) && devname !== 'Frank'){
                    if(!/\d/.test(themename)){
                        $('#fileName').val(themename);
                        $('#email').val(email);
                        $('#devname').val(devname);
                        $('#Tpreview').val(dataURL);
                        $('#Ticon').val(action.savedElements.iconName || '');
                        $('#Twallpaper').val((action.wallpaper) ? action.wallpaper : '');
                        $('#Toverlay').val((action.savedElements.overlay) ? action.savedElements.overlay : '');
                        $('#Telements').val(JSON.stringify(action.savedElements.placedElements) || '');
                        $('#myform').submit();
                        $('#saveForm').css('display','none');
                        $('.loader').toggle('display');
                    }else{
                        $('.errorlabel').css('display','block');
                        document.querySelector('.errorlabel').innerHTML = "* Numbers are not allowed.If you want to EDIT or DELETE your theme name create an account here. <a href='http://www.lockplus.us/login/' target='_blank' style='color:black;'>LockPlus Members</a> or let us know here <a target='_blank' style='color:black;' href='http://lockplus.info/forum/index/topic/deleting-themes/'>LockPlus Forum</a>";
                        //alert('Numbers are not allowed due to people spamming v1, v2, v3, etc. Name your theme with test somewhere in the title. Example myTest or TestJune (these get purged from the server automatically). Then when you get it as you want, name it the name intented. If a theme needs deleted/changed let us know on http://LockPlus.info/forum');
                    }


                   }else{
                    if(/^[a-zA-Z0-9- ]*$/.test(themename) == false){
                        document.querySelector('.errorlabel').innerHTML = "* Please remove symbols from theme name.";
                    }
                    if(/^[a-zA-Z0-9- ]*$/.test(devname) == false){
                        document.querySelector('.errorlabel').innerHTML = "* Please remove symbols from dev name.";
                    }
                    if(devname === 'Frank'){
                        document.querySelector('.errorlabel').innerHTML = "* PORN is not allowed Frank!!";
                    }
                    $('.errorlabel').css('display','block');
                   }
               }
                });
            },1000);
        });

    },
    setBG: function (img) { //apply background to screen
        if (img != '') {
            $('#wallpaper').attr('src',img);
            $('#wallpaper').css('display','initial');
            action.wallpaper = img;

            var blur = localStorage.getItem('wallpaperBlur');
            if (blur === null || blur === '' || blur === 'null')
                blur = 0;
            stackBlurImage('wallpaper','blurcanvas',blur,false);
            //action.isBlurred = true;

            var wallpaper = document.getElementById('wallpaper');
            var canvas = document.createElement('canvas');
            canvas.style.display = 'none';
            canvas.width = wallpaper.width / 2;
            canvas.height = wallpaper.height / 2;
            canvas.getContext('2d').drawImage(wallpaper, 0, 0, wallpaper.width / 2, wallpaper.height / 2);

            $('#miniWallpaper').attr('src', canvas.toDataURL());
        } else {
            $('#wallpaper').attr('src','');
            $('#wallpaper').hide();
            var canvas = document.getElementById('blurcanvas');
            if (canvas) canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
            action.wallpaper = null;
            localStorage.setItem('wallpaperBlur','0');
            action.showIconMenu(constants.toolArray, -1);
            $('#bgInput').after($('#bgInput').clone(true)).remove();
        }
        action.saveStorage('wallpaper'); //we only need to set the wallpaper action.saveStorage would save everything.
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
        action.saveStorage();
    },
    saveStorage: function (specialPurpose) { //save savedElements object to localStorage
        if (specialPurpose === 'wallpaper') {
            localStorage.setItem('wallpaper', action.wallpaper);
        }else{
            localStorage.setItem('placedElements', JSON.stringify(action.savedElements));
        }
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

                if(key === 'icon'){ //#icon has an inner img element, it also needs height/width changed.
                    $('#icon').css(skey,styleVal);
                    if(skey === 'width' || skey === 'height'){
                        $('.icon').css(skey,styleVal);
                    }
                } else if (key.substring(0, 4) === 'text' && skey === 'innerHTML') {
                    $('#' + key).html(styleVal);
                } else if (skey === 'data-prefix') {
                    $('#' + key).attr('data-prefix',styleVal);
                    $('#' + key).html(styleVal + $('#' + key).html());
                } else if (skey === 'data-suffix') {
                    $('#' + key).attr('data-suffix',styleVal);
                    $('#' + key).html($('#' + key).html() + styleVal);
                } else {
                    $('#' + key).css(skey, styleVal);
                }
            });
        });
    },
    loadFromStorage: function () { //reload elements onload
        if(localStorage.placedElements){
            if (localStorage.placedElements.length > 2) { //maybe it was set to a string of {} and it breaks everything
                 action.setHelpText('Click elements to adjust styles.');
                this.savedElements = JSON.parse(localStorage.placedElements);
                this.movedElements = this.savedElements.placedElements; //keep moved elements up to date too
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
        }
        //fix for if a theme is loaded
        if(this.savedElements.wallpaper && this.savedElements.wallpaper.length > 10){ //if theme is loaded
            localStorage.setItem('wallpaper',this.savedElements.wallpaper); //transfer to storage
            this.savedElements.wallpaper = ''; //clear here for performance
        }
        action.wallpaper = localStorage.getItem('wallpaper');
        if (action.wallpaper != '' && action.wallpaper != null && action.wallpaper != "null") { //set wallpaper
            this.setBG(action.wallpaper);
        }
    },
    addDraggable: function(id){
        var contain;
        if(id === 'icon'){
            contain = '';
        }else{
            contain = $('.screen');
        }
        /*var startX;
        var startY;*/
        $('#'+id).draggable({
            containment: contain,
            start: function(event, ui) {
                /* if dLine class has title the same as id remove it */
                /* remove it on start to not mess with it's own movement */
                /* it will snap to itself this solves that issue */
                $(".dLine[title='"+id+"']").remove();
                if (action.selectedItem != id)//$('#' + id).click();
                    handleScreenClick(event);

                action.sizeQueueTimeout.initialValue = [$('#'+id).position().top, $('#'+id).position().left]; //Just borrowing it, nothing else will need this while you're moving an element
            },
            stop: function(event, ui){
                var position = $('#'+id).position();
                action.addAction(['setCss',[[id, ['top', 'left'], action.sizeQueueTimeout.initialValue ,[position.top, position.left]]]]);
                action.sizeQueueTimeout.initialValue = '';

                // Since we're not going through setCss, it's never saved to localStorage. Gotta do it manually
                action.savedElements.placedElements[id].left = position.left;
                action.savedElements.placedElements[id].top = position.top;
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
        action.setHelpText('Click element to adjust style. (Also delete)');
        var div = document.createElement('div');
        div.id = id;
        if (id.substring(0,3) === 'box') {
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.backgroundColor = 'red';
            //div.style.display = 'gray';
            div.style.zIndex = 1;
            div.style.borderColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '0px';
            if (id.substring(3, 9) === 'Circle') {
                div.style.borderRadius = '999px';
            }
        } else {
            div.style.zIndex = 2;
        }
        document.getElementById('screenElements').appendChild(div);
        this.addDraggable(id);
        this.movedElements[id] = {};
        this.savedElements.placedElements = this.movedElements;
        $('#'+id).css('position','absolute'); //fix for html2canvas
        $('#'+id).css('font-size','30px'); //fix for html2canvas
        $('#'+id).css('color','white'); //fix for html2canvas
        $('#'+id).css('font-family','helvetica');
        if (id.substring(0,3) === 'box') {
            this.savedElements.placedElements[id].width = '50px';
            this.savedElements.placedElements[id].height = '50px';
            this.savedElements.placedElements[id]['background-color'] = 'red';
            //this.savedElements.placedElements[id].display = 'gray';
            this.savedElements.placedElements[id]['z-index'] = 1;
            this.savedElements.placedElements[id]['border-color'] = 'red';
            this.savedElements.placedElements[id]['border-style'] = 'solid';
            this.savedElements.placedElements[id]['border-width'] = '0px';
            this.savedElements.placedElements[id]['position'] = 'absolute';
            this.savedElements.placedElements[id]['top'] = '248px';
            this.savedElements.placedElements[id]['left'] = '130px';
            if (id.substring(3, 9) === 'Circle') {
                this.savedElements.placedElements[id]['border-radius'] = '999px';
            }
        } else {
              if(id === 'icon'){
                this.savedElements.placedElements[id]['position'] = 'absolute';
                this.savedElements.placedElements[id]['top'] = '248px';
                this.savedElements.placedElements[id]['left'] = '130px';
                this.savedElements.placedElements[id]['width'] = '40px';
                //this.savedElements.placedElements[id]['height'] = '40px';
                 //$('#'+id).css('height','40px');
                 $('#'+id).css('width','40px');

              }else{
                this.savedElements.placedElements[id]['z-index'] = 2;
                this.savedElements.placedElements[id]['color'] = 'white';
                this.savedElements.placedElements[id]['font-family'] = 'helvetica';
                this.savedElements.placedElements[id]['position'] = 'absolute';
                this.savedElements.placedElements[id]['font-size'] = '30px';
                this.savedElements.placedElements[id]['top'] = '248px';
                this.savedElements.placedElements[id]['left'] = '130px';
            }
        }
        loadClock(); //in clock.js
        weatherdivs();
        systemdivs();
        miscDivs();

        //For elements that are too long
        var divSelected = $(div)
        var leftPos = divSelected.position().left
        var rightPos = leftPos + divSelected.width();
        if (rightPos > 320) {
            var newLeftPos = leftPos - (rightPos - 320);
            divSelected.css('left', newLeftPos > 0 ? newLeftPos : 0);
            this.savedElements.placedElements[id]['left'] = newLeftPos > 0 ? newLeftPos : 0;
        }
        this.saveStorage();

        if (!action.isUndoingRedoing) {
            action.addAction(['addElement',[id]]);
        }

        document.getElementById(id + 'Picker').style.backgroundColor = "#21b9b0"; //Add colored background to list element
        document.getElementById(id + 'Picker').style.borderColor = "#21b9b0";
    },
    removeFromScreen: function(id, toggleElementPanel) { //when trash for item is clicked or item is re-clicked in element menu
        if (action.selectedItems.length === 0) { // If it >0, then removeSelectedFromScreen handles the queueing
            if (!action.isUndoingRedoing) {
                    action.addAction(['removeElement',[id, action.savedElements.placedElements[id]]]);
            } else {
                action.actionQueue[action.queuePosition][1] = [id, action.savedElements.placedElements[id]];
            }
        }

        var parent = document.getElementById('screenElements'),
        div = document.getElementById(id);
        parent.removeChild(div); //remove element from dom
        delete this.movedElements[id];
        this.savedElements.placedElements = this.movedElements; //since the element was removed from movedElements, this also removes from placedElements
        this.saveStorage(); //save localStorage
        this.showIconMenu(constants.toolArray, -1);
        if (document.getElementById(id + 'Picker')) {
            document.getElementById(id + 'Picker').style.backgroundColor = "#54606e"; //Remove colored background from list element
            document.getElementById(id + 'Picker').style.borderColor = "#54606e";
        }
        action.selectedItem = '';
    },
    removeSelectedFromScreen: function(toggleElementPanel) {
        if (action.selectedItems.length === 0) {
            action.removeFromScreen(action.selectedItem, toggleElementPanel);
        } else {
            var actionArr = ['removeElement', []];
            for (var i = 0; i < action.selectedItems.length; i++) {
                actionArr[1].push([action.selectedItems[i], action.savedElements.placedElements[action.selectedItems[i]]]);
                action.removeFromScreen(action.selectedItems[i], i === action.selectedItems.length - 1); // Only toggle elPanel if we're on the last item
            }
            action.addAction(actionArr);
        }
    },
    showIconMenu: function(menuArray, indexesToSurround){ //indexesToSurround: -2 means surround none with div, -1 means surround all, otherwise number is index to surround
        $('#icons').empty();
        $('.elementPanel').scrollTop(0);
        $('#logo').attr('title', 'Now Showing: ' + action.getTitleForArray(menuArray)); // Updating the title of the menu
        for (var i = 0; i < menuArray.length; i++) {
           var div = document.createElement('div');
           div.id = "Test";
           var a = document.createElement('a');
           var li = document.createElement('li');
           a.href = 'javascript:void(0)';
           a.className = 'leftTooltip';
           var splitArray = menuArray[i].split('~');
           if (splitArray[0] === "element") {
                if ($('.elementPanel').is(":visible"))
                    a.title = "Hide Elements Panel"
                else
                    a.title = "Show Elements Panel";
           } else {
               a.title = splitArray[1];
           }
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
        }
        action.setEditMenuInputsState(-2, false, menuArray);
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
            case constants.circleEditArray:
                return "Circle Styles Menu";
            case constants.iconArray:
                return "Icon Styles Menu";
            case constants.linearGradientArray:
                return "Linear Gradient Menu";
            case constants.linearBoxGradientArray:
                return "Linear Box Gradient Menu";
            case constants.backgroundArray:
                return "Background Menu";
            case constants.transformArray:
                return "Transform Menu";
            case constants.affixArray:
                return "Suffix/Prefix Menu";
            case constants.borderArray:
                return "Border Menu";
        }
        if (menuArray.toString() === constants.notSoConstantArray.toString()) return "Custom Combination Menu";
    },
    showMultiSelectionMenu: function() {
        if (action.selectedItems.length > 0) { // Pretty imperative for what we're doing

            var megaMenu = []; // ['editMenu~bla~bla','otherMenu~bla~bla','etcMenu~bla~bla']
            var curMenu = action.getProperMenuForId(action.selectedItems[0]);
            for (var i = 0; i < curMenu.length; i++) { // Go through each menu item for the base selection item
                if (curMenu[i] === constants.editArray[2] && action.multiPositioningSystem === 'relative') {
                    megaMenu.push(constants.multiPosition);
                } else {
                    megaMenu.push(curMenu[i]); // Add it to the mega array
                }
            }

            for (var i = 1; i < action.selectedItems.length; i++) { // Go through each of the other selection items
                curMenu = action.getProperMenuForId(action.selectedItems[i]);
                for (var k = 0; k < megaMenu.length; k++) { // Compare each item of the megaMenu to check if it's in this item's menu
                    if (megaMenu[k].split('~')[0].substring(0,5) != 'multi' && curMenu.indexOf(megaMenu[k]) === -1) {// If the item's in megaMenu but not in this item's menu
                        megaMenu.splice(k, 1); // Remove the item from megaMenu
                        k--;
                    }
                }
            }

            megaMenu.unshift(constants.positioningSystemOption); // Weird function name. Just puts it at the front.

            constants.notSoConstantArray = megaMenu;
            action.showIconMenu(megaMenu, -1);
        } else {
            if (action.selectedItem != "") {
                action.showProperMenuForId(action.selectedItem);
            } else {
                action.showIconMenu(constants.toolArray, -1);
            }
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
        } else if (id.substring(0, 9) === 'boxCircle') {
            return constants.circleEditArray;
        } else if (id.substring(0, 3) === 'box') {
            return constants.boxEditArray;
        } else{ // Normal element, show edit menu
            return constants.editArray;
        }
    },
    timeout: '',
    lastNotificationTime: false,
    animateHelp: function(text, opacity, time){
        $( "#tips" ).animate({
            opacity: opacity,
            top: 'toggle'
        }, time, function() { // Called when it's done animating
            if (text) {
                action.setHelpText(text); // This is what does the 'queuing effect' kinda
            }
        });
    },
    setHelpText: function(text) {
        var isStillShowing = $('#tips').is(":visible");
        clearTimeout(action.timeout);
        if (!$('#tips').is(':animated')) { // Don't do anything if it's animating
            if (isStillShowing) { //If it's already showing, hide the old help text
                if ($('#helpinfo').text() != text) {
                    var now = Date.now();
                    if (action.lastNotificationTime && now - action.lastNotificationTime > 50) { //If it's a person clicking things, not backend calls
                        action.lastNotificationTime = Date.now(); //Since it's changing the tip shown, update when it was last called, the current time
                        action.animateHelp(text, 1, 300); // Show the new text
                    }
                } else { // If it's the same tip, and it's already showing, reset the countdown to hiding the tip
                    action.timeout = setTimeout(function() {
                        action.animateHelp(false, 0, 200);
                    }, 5000);
                }
            } else { // Show a new tip
                $('#helpinfo').text(text); // Actually set the text
                action.lastNotificationTime = Date.now(); // For spam checking purposes
                action.animateHelp(false, 1, 300); // Show the tip
                action.timeout = setTimeout(function() { // In 5 seconds, hide the tip
                    action.animateHelp(false, 0, 200);
                }, 5000);
            }
        }
    },
    setEditMenuInputsState: function(state, maxIndex, id) { //state: -2 means show all, -1 means hide all, other numbers means toggle that index
        if(!id) var id = '';
        if (typeof id === 'string')
            var menuArray = action.getProperMenuForId(id)
        else
            var menuArray = id;
        if (!maxIndex) var maxIndex = constants.editArray.length;
        if (state <= -1) {
            for (var i = 0; i < maxIndex && i < menuArray.length; i++) {
                var splitArray = menuArray[i].split("~");

                //Only preloads things that are specified in the whitelist array
                var shouldPreload = (constants.preloadWhitelist[splitArray[0]] === '');

                if (shouldPreload && ((state === -2 && $('#' + splitArray[3]).children().length < 2) || (state === -1 && $('#' + splitArray[3]).children().length > 1))) {
                    $('#' + splitArray[0]).trigger('click');
                }
            }
        } else if (state > -1 && state < menuArray.length) {
            $('#' + constants.editArray[0].split("~")[state]).trigger('click');
        } else {
            console.log("That's not a valid index. The state should be between (inclusive) -2 and " + (constants.editArray.length - 1));
        }
    },
    arrowKey: function(key, capitalizedCssKey, event) {
        var selectedItem = $('#' + action.selectedItem); //The currently selected item
        var increment = event.altKey ? 10 : 1; // Move by 10 if the alt key is pressed
        if (key === 'left') {
            var newPos = selectedItem.position().left - increment;
            if (event.shiftKey) newPos = 0; // Forcibly trigger the else statement in the ternary below
            newPos = newPos > 0 ? newPos : 0; // Check to ensure it's still within the screen
        } else if (key === 'right') {
            var newPos = selectedItem.position().left + increment;
            if (event.shiftKey) newPos = 320;
            newPos = newPos + selectedItem.width() < 320 ? newPos : 320 - selectedItem.width();
        } else if (key === 'up') {
            var newPos = selectedItem.position().top - increment;
            if (event.shiftKey) newPos = 0;
            newPos = newPos > 0 ? newPos : 0;
        } else if (key === 'down') {
            var newPos = selectedItem.position().top + increment;
            if (event.shiftKey) newPos = 568;
            newPos = newPos + selectedItem.height() < 568 ? newPos : 568 - selectedItem.height();
        }

        var lowercaseCssKey = capitalizedCssKey.toLowerCase();
        action.setCss(action.selectedItem, lowercaseCssKey, newPos); // Actually move the item

        var input = $('#pos' + capitalizedCssKey + 'Input');
        if (input.length > 0) { // Verify the relevant input exists
            input.val(newPos); // If it does, update it to reflect the new position
        }
    },
    isASelectedItem: function(itemName) { // Determines whether an iten with the name itemName is in action.selectedItems already
        for (var i = 0; i < action.selectedItems.length; i++) {
            if (action.selectedItems[i] === itemName)
                return true;
        }
        return false;
    },
    removeFromMultiSelection: function(itemName) {
        action.selectedItems.forEach(function(item, index) {
            if (item === itemName)
                action.selectedItems.splice(index, 1);
        });
    }
};
function resizeWall(img, width, height) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL();
}

var tempWall;
function chooseWallSize(size){
var iPhone = size, newWidth, newHeight;

switch(iPhone) {
    case 'i5':
        newWidth = 640;
        newHeight = 1136;
        break;
    case 'i6':
        newWidth = 750;
        newHeight = 1334;
        break;
    case '6Plus':
        newWidth = 1080;
        newHeight = 1920;
        break;
}
 var img = new Image();
    img.onload = resize;
    img.src = tempWall;
    function resize() {
        var newWall = resizeWall(this, newWidth, newHeight);
        localStorage.setItem('wallpaperBlur',null);
    try{
            action.setBG(newWall);
    }catch(err){
        alert("Wallpaper too big! This file will not save to the theme! Please compress this wallpaper. Browser " + err);
    }
        $('#wallSelector').css('display','none');
    }
}
//upload images should implement into action OBJ. (TODO)
function uploadedImage(e) {
    var input = e.currentTarget, //added to provide alert if png is used
        tw = e.target.files,
        ncount,
        rd,
        us;
    for (ncount = 0, us; us = tw[ncount]; ncount++) {
        rd = new FileReader();
        rd.onload = function (e) {
            return function (e) {
                if(action.uploadSelection === 'cgBackground') {
                    $('#wallSelector').css('display','block');
                    tempWall = e.target.result;
                    //action.setBG(e.target.result);
                } else if (action.uploadSelection === 'cgOverlay') {
                    action.setOverlay(e.target.result);
                }
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

$(document).on('keydown', function(event) {
    if (action.selectedItem != '') {
        switch (event.keyCode) {
            case 37: //Left arrow
                if (!action.isEditingText)
                    action.arrowKey('left','Left', event);
                break;
            case 38: //Up arrow
                if (!action.isEditingText)
                    action.arrowKey('up','Top', event);
                break;
            case 39: //Right arrow
                if (!action.isEditingText)
                    action.arrowKey('right','Left', event);
                break;
            case 40: //Down arrow
                if (!action.isEditingText)
                    action.arrowKey('down','Top', event);
                break;
            case 46: //Delete key
                if (!action.isEditingText)
                    action.removeSelectedFromScreen(true);
                break;
        }
    }
    switch (event.keyCode) {
        case 89: //Y
            if (event.ctrlKey) action.redo();
            break;
        case 90: //Z
            if (event.ctrlKey) action.undo();
            break;
    }

});

$('.toolPanel').on('click', function (event) { //grab clicks from toolpanel
    action.toolPanel(event);
});
$('#font').on('click', function (event) {
    if ($(event.target).is('li')) {
        action.setFont(event.target.title);
    } else {
        action.cgfont();
    }
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
        //action.setHelpText('Either scroll, use the arrow buttons, or use the arrow keys to navigate the element menu.');
        action.elementPanel(event.target.id);
        var elementChildren = $('.elementPanel').children();
        for (var i = 0; i < elementChildren.length; i++) {
            if ($(elementChildren[i]).attr('id') != event.target.id
                && $(action.getElementPanelIdSelector($(elementChildren[i]).attr('id'))).children().length > 1
                && $(action.getElementPanelIdSelector($(elementChildren[i]).attr('id'))).is(':visible'))
                    action.elementPanel($(elementChildren[i]).attr('id'));
        }
    } else if ($(event.target).parent().hasClass('subCategory')) {
        var id = $(event.target).attr('data-element');
        if (document.getElementById(id)) {
            action.removeFromScreen(id, false);
        } else {
           action.addtoScreen(id);
        }
    } else if ($(event.target).hasClass('categoryTitle')) {
        if (!$(event.target).hasClass('slick-center')) {
            var div = $(event.target).parent().parent().parent();
            div.slick('slickGoTo', JSON.parse($(event.target).attr('data-slick-index')), false);
            action.setCarouselOpacity(div.attr('id'));
        }
    }
});

$('.screen').click(function(event){
    handleScreenClick(event);
});
function handleScreenClick(event) { // Had to move everything to this function so it could be manually called
    function deselectElement(item, fullClear) {
        $('#' + item).css('outline', '0px solid transparent'); // Remove the highlight
        action.removeFromMultiSelection(item);
        if (fullClear) {
            action.showIconMenu(constants.toolArray, -1); // Show the base toolArray
            action.selectedItem = ""; // Clear the selected item

            if ($('#fList').length > 0 && $('#fList').is(':visible')) { // If the font list has been initialized and is showing
                action.cgfont(); // Hide the font list
            }
        }
    }

    if (event.target.id === '' && action.selectedItem != '') { // Clicked on the empty screen
        if (action.selectedItems.length > 0) {
            for (var i = 0; i < action.selectedItems.length; i++) {
                deselectElement(action.selectedItems[i], false);
                i--;
            }
        }
        deselectElement(action.selectedItem, true); //Doesn't hurt to do this once more, to do the full deselect
        action.setHelpText('Clicking off an element de-selects it. Click back on it to re-select.');
    } else if (event.target.id != 'screen' && event.target.id != '') { //If you clicked on something...
        if (event.target.id === action.selectedItem) { // If they clicked the centrally highlighted item
            if (action.selectedItems.length > 0) { // If we should consider multi-selection
                if (event.shiftKey) { // If someone shift-clicked the centrally selected item
                    action.selectedItems.forEach(function(item, index, arr) { // Deselect the central item, name a new one
                        if (item === action.selectedItem) {
                            deselectElement(item, false); // Automatically removed from multiselection arr

                            if (action.selectedItems.length > 0) // If there are still some left
                                action.selectedItem = action.selectedItems[0]; // Change the centrally located one

                            if (action.selectedItems.length === 1) { // The one we just made central is the only one left apparently
                                action.selectedItems.splice(0, 1); // So clear out multi-selection entirely
                            }

                            action.showMultiSelectionMenu();
                        }
                    });
                } else {
                    console.log(event.type);
                    for (var i = 0; i < action.selectedItems.length; i++) {// Deselect eveything else, clear multiselection array
                        var item = action.selectedItems[i];
                        if (item != action.selectedItem) {
                            deselectElement(item, false); // Deselect all multi-selected items, except the centrally selected one
                        }
                        action.selectedItems.splice(i, 1); // No matter what, remove this item from multi-selection. We're clearing out
                        i--;
                    }

                    action.showMultiSelectionMenu();
                }

            } else {
                deselectElement(action.selectedItem, true);
            }
        } else if (event.shiftKey && action.isASelectedItem(event.target.id)) { // If the shift-clicked item is an already-highlighted item
            if (action.selectedItems.length > 0) {
                for (var i = 0; i < action.selectedItems.length; i++) {
                    if (action.selectedItems[i] === event.target.id) {
                        action.selectedItems.splice(i, 1); // Remove the item from selectedItems
                        break;
                    }
                }
                deselectElement(event.target.id, false);
            }

            action.showMultiSelectionMenu();
        } else { // User either clicked on another element, or on a new element to highlight
            if (event.shiftKey && action.selectedItem != "") {
                if (!action.isASelectedItem(action.selectedItem)) // Check if the 'centrally selected' item is a part of multi-selection
                    action.selectedItems.push(action.selectedItem); // Add it if it isn't already

                action.selectedItems.push(event.target.id);

                $('#'+event.target.id).css('outline', '1px solid #21b9b0'); // Highlight new element

                action.showMultiSelectionMenu();
            } else {
                if (!(event.type === "dragstart" && action.selectedItems.length > 0)) {
                    deselectElement(action.selectedItem, false); // Unhighlight the old element
                    for (var i = 0; i < action.selectedItems.length; i++) {
                        deselectElement(action.selectedItems[i], false);
                        i--;
                    }

                    if(event.target.id.substring(0,3) === 'box' || event.target.id === 'icon') //show different text for box and icon
                        action.setHelpText('Pick a style adjustment from the left menu.')
                    else
                        action.setHelpText('Pick a style adjustment from the left menu, scroll for more options.');

                    action.selectedItem = event.target.id; // Set the selected item to the new element
                    $('#'+event.target.id).css('outline', '1px solid #21b9b0'); // Highlight new element

                    if (action.selectedItem === '') $('.elementPanel').data('prevHiddenState', $('.elementPanel').is(':visible')); // Save the panel's previous state, but only if switching to a new element

                    action.showMultiSelectionMenu();
                }
            }
        }
    }
}

$('.screen').on('mousewheel', function(event) {
    var selected = $('#' + action.selectedItem);
    if (selected.length > 0 && $('#' + action.selectedItem + ':hover').length > 0) { // Tried using .is(':hover'), but it always returned false. This works
        if (event.deltaY > 0) var increment = event.altKey ? 10 : 1;
            else var increment = event.altKey ? -10 : -1;

        if (action.selectedItem.substring(0, 3) === 'box' || action.selectedItem === 'icon') { // Special case for boxes and circles (also icons), change both height and width
            var newHeight = selected.height() + increment;
            newHeight = newHeight > 0 ? newHeight : 1; // Floor at 1
            //newHeight = newHeight < 568 ? newHeight : 568; // Ceiling at 568 (height of screen) TODO: Fix the interesting quirks introduced by using this (circles → ovals)
            var newWidth = selected.width() + increment;
            newWidth = newWidth > 0 ? newWidth : 1; // Floor at 1
            //newWidth = newWidth < 320 ? newWidth : 320; // Ceiling at 320 (width of screen)
            action.setCss([[action.selectedItem, ['height', 'width'], [newHeight + 'px', newWidth + 'px']]]);

            if (action.selectedItem === 'icon') {
                //Special case for icons. It's child img's height and width must also be updated
                var iconChild = $(selected.children()[0]);
                iconChild.css('height', newHeight).css('width', newHeight); // Icons should always be squares

                var input = $('#iconSizeInput');
                if (input.length > 0) { // Verify the relevant input exists
                    input.val(newHeight); // If it does, update it to reflect the new position
                }
            } else { // It's either a box or a circle
                var input = $('#widthSizeInput'); // Both boxes and circles need their width updated
                if (input.length > 0) {
                    input.val(newWidth);
                }
                if (action.selectedItem.substring(3, 9) != 'Circle') { // Only boxes, not circles, have height to be updated
                    var inputTwo = $('#heightSizeInput');
                    if (inputTwo.length > 0) {
                        inputTwo.val(newHeight);
                    }
                }
            }
        } else { // Otherwise, it's normal text, change font size
            var oldSize = selected.css('font-size');
            oldSize = JSON.parse(oldSize.substring(0,oldSize.length - 2)); // Remove the 'px' from the end, turn it into a number
            var newSize = oldSize + increment;
            newSize = newSize > 5 ? newSize : 5; // Set a floor at 5
            action.setCss(action.selectedItem, 'font-size', newSize + 'px');

            // Update the font size input
            var input = $('#fontSizeInput');
            if (input.length > 0) {
                input.val(newSize);
            }
        }
        action.saveStorage();
        event.preventDefault();
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
