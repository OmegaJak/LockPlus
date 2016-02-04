action.toolPanel = function (evt) {
	action.uploadSelection = evt.target.id;
    switch (evt.target.id) {
    	case 'cgOverlay':
    	case 'cgBackground':
    		$('#bgInput').click();
            break;
    	case 'overlay':
    		this.showIconMenu(constants.overlayArray, -1);
            break;
    	case 'clearOverlay':
    		$('.screenoverlay').css('background-image', '');
    		action.savedElements.overlay = '';
        	action.saveStorage();
            break;
        case 'background':
        	this.showIconMenu(constants.backgroundArray, -1);
            break;
        case 'openBackground':
        	this.openBackground('original');
            break;
        case 'backgroundBlur':
        	this.cgSize('backgroundBlur', constants.backgroundArray[2], '', 0, 100, 'backBlur', 'backBlur', action.backgroundBlur, false, false, 'Background Blur');
            break;
        case 'openBlurryBackground':
        	this.openBackground('blurry');
            break;
        case 'clearBackground':
        	this.setBG('');
            break;
        case 'backToTools':
        	this.showIconMenu(constants.toolArray, -1);
            break;
        case 'clear':
        	action.clearTheme(-1);
            break;
        case 'save':
        	this.saveTheme();
            break;
        case 'load':
        	location.href = "http://lockplus.us/creator/load/mobile.php";
            break;
        case 'element':
        	action.elementIconClick();
        	showElementPanel();
            break;
        case 'size':
        	this.cgSize('fontSize', constants.editArray[0], 'px', 5, 300, 'font-size', 'font-size', action.updateSize);
            break;
        case 'width':
        	this.cgSize('widthSize', constants.editArray[1], 'px', 1, $('.screen').width(), 'width', 'width', action.updateSize);
            break;
        case 'height':
        	this.cgSize('heightSize', constants.boxEditArray[1], 'px', 1, $('.screen').height(), 'height', 'height', action.updateSize);
            break;
        case 'position':
        	this.cgPosition();
            break;
        case 'align':
        	this.cgalign();
            break;
        case 'fonts':
        	this.cgfont();
            break;
        case 'uppercase':
        	this.cguppercase();
            break;
        case 'style':
        	this.cgStyle();
            break;
        case 'weight':
        	this.cgweight();
            break;
        case 'shadow':
        	action.showIconMenu(constants.shadowArray, -1);
            break;
        case 'boxShadow':
        	action.showIconMenu(constants.boxShadowArray, -1);
            break;
        case 'hShadow':
        	this.cgSize('hShadow', constants.shadowArray[0], 'px', -100, 100, 'hShadow', 'hShadow', action.updateShadow, false, false, 'Horizontal');
            break;
        case 'vShadow':
        	this.cgSize('vShadow', constants.shadowArray[1], 'px', -100, 100, 'vShadow', 'vShadow', action.updateShadow, false, false, 'Vertical');
            break;
        case 'blur':
        	this.cgSize('blur', constants.shadowArray[2], 'px', 0, 50, 'blur', 'blur', action.updateShadow, false, false, 'Blur Radius');
            break;
        case 'radius':
        	this.cgSize('radiusSize', constants.boxEditArray[3], 'px', 0, $('#' + action.selectedItem).width() / 2, 'border-radius', 'border-radius', action.updateSize, false, false, 'Box Radius');
            break;
        case 'transform':
        	action.showIconMenu(constants.transformArray, -1);
            break;
        case 'rotation':
        	this.cgSize('rotationAngle', constants.transformArray[0], 'deg', 0, 360, 'rotate', 'rotate', action.updateTransform, false, false, 'Rotation Angle');
            break;
        case 'skeyX':
        	this.cgSize('skewXAngle', constants.transformArray[1], 'deg', 0, 360, 'skewX', 'skewX', action.updateTransform, false, false, 'X Skew Angle');
            break;
        case 'skewY':
        	this.cgSize('skewYAngle', constants.transformArray[2], 'deg', 0, 360, 'skewY', 'skewY', action.updateTransform, false, false, 'Y Skew Angle');
            break;
        case 'clearTransform':
        	action.updateTransform('', '', '', '', 'clear');
            break;
        case 'shadowColor':
        	this.cgShadowColor();
            break;
        case 'clearShadow':
        	this.updateShadow('', '', '', '', 'clear');
            break;
        case 'backToEdit':
        	action.showEditMenu();
        	break;
        case 'boxhShadow':
        	this.cgSize('boxhShadow', constants.boxShadowArray[0], 'px', -100, 100, 'boxhShadow', 'boxhShadow', action.updateShadow, false, false, 'Horizontal');
            break;
        case 'boxvShadow':
        	this.cgSize('boxvShadow', constants.boxShadowArray[1], 'px', -100, 100, 'boxvShadow', 'boxvShadow', action.updateShadow, false, false, 'Vertical');
            break;
        case 'boxblur':
        	this.cgSize('boxblur', constants.boxShadowArray[2], 'px', 0, 50, 'boxblur', 'boxblur', action.updateShadow, false, false, 'Blur Radius');
            break;
        case 'boxshadowColor':
        	this.cgShadowColor(true);
            break;
        case 'boxclearShadow':
        	this.updateShadow('', '', '', '', 'clear');
            break;
        case 'color':
        	this.cgcolor(false, 'color', 'colorDiv');
            break;
        case 'boxColor':
        	this.cgcolor(false, 'background-color', 'boxColorDiv');
            break;
        case 'customText':
        	this.cgCustomText();
            break;
        case 'delete':
        	action.delete();
            break;
        case 'iconsize':
        	this.cgSize('iconSize', constants.iconArray[0], 'px', 5, $('.screen').width(), 'width', 'width', action.updateSize);
            break;
        case 'changeicon':
        	this.populateIcons();
            break;
        case 'affixes':
        	this.showIconMenu(constants.affixArray, -1);
            break;
        case 'customPrefix':
        	this.cgAffix('prefix');
            break;
        case 'customSuffix':
        	this.cgAffix('suffix');
            break;
        case 'clearAffixes':
        	this.cgAffix('clear');
            break;
        case 'border':
        	this.showIconMenu(constants.borderArray, -1);
            break;
        case 'borderStyle':
        	this.cgBorderStyle();
            break;
        case 'borderWidth':
        	this.cgSize('borderWidth', constants.borderArray[1], 'px', 0, 200, 'border-width', 'borderWidth', action.updateSize);
            break;
        case 'border-color':
        	this.cgcolor(false, 'border-color', 'border-colorDiv');
            break;
        case 'clearBorder':
        	this.setCss(action.selectedItem, 'border', '');
            break;
        case 'posSystem':
        	this.cgPosSystem();
            break;
        case 'multiPos':
        	this.cgMultiPosition();
            break;
        case 'linearBoxGradient':
        	this.showIconMenu(constants.linearBoxGradientArray, -1);
            break;
        case 'linearGradient':
        	this.showIconMenu(constants.linearGradientArray, -1);
            break;
        case 'gradientType':
        	this.cgGradientPurpose();
            break;
        case 'linearGradientAngle':
        	this.cgSize('rotateLinearGradient', constants.linearGradientArray[1], 'deg', 0, 360, 'rotate', 'rotate', action.updateGradient, false, false, 'Rotate Gradient');
            break;
        case 'linearGradientStartColor':
        	this.cgLinearGradientColor(constants.linearGradientArray[2], 'color~0.5');
            break;
        case 'linearGradientStopColorOne':
        	this.cgLinearGradientColor(constants.linearGradientArray[3], 'color~1');
        	this.cgSize('linGradientStopOnePercent', constants.linearGradientArray[3], '%', 0, 100, 'pos~1', 'pos~1', action.updateGradient, false, false, 'Stop 1 Distance');
            break;
        case 'linearGradientStopColorTwo':
        	this.cgLinearGradientColor(constants.linearGradientArray[4], 'color~2');
        	this.cgSize('linGradientStopTwoPercent', constants.linearGradientArray[4], '%', 0, 100, 'pos~2', 'pos~2', action.updateGradient, false, false, 'Stop 2 Distance');
            break;
        case 'clearGradient':
        	this.updateGradient('', '', '', '', 'clear');
    	default: '';
    }
    if (action.selectedItem != null && evt.target.id.toLowerCase().match(/gradient/gmi) != null && document.getElementById(action.selectedItem).style.background.substring(0, 3) != 'lin' && id != 'linearGradient' && id != 'linearBoxGradient' && id != 'linearTextGradientDiv') {
        action.setCss(action.selectedItem, 'background', 'linear-gradient(rgb(255,0,0),rgb(255,255,0) 50%,rgb(0,0,255) 90%)');
    }
};
