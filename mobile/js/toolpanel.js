'use strict';
action.toolPanel = function (evt) {
	action.uploadSelection = evt.target.id;
    switch (evt.target.id) {
    	case 'cgOverlay':
    	case 'cgBackground':
    		$('#bgInput').click();
    	case 'overlay':
    		this.showIconMenu(constants.overlayArray, -1);
    	case 'clearOverlay':
    		$('.screenoverlay').css('background-image', '');
    		action.savedElements.overlay = '';
        	action.saveStorage();
        case 'background':
        	this.showIconMenu(constants.backgroundArray, -1);
        case 'openBackground':
        	this.openBackground('original');
        case 'backgroundBlur':
        	this.cgSize('backgroundBlur', constants.backgroundArray[2], '', 0, 100, 'backBlur', 'backBlur', action.backgroundBlur, false, false, 'Background Blur');
        case 'openBlurryBackground':
        	this.openBackground('blurry');
        case 'clearBackground':
        	this.setBG('');
        case 'backToTools':
        	this.showIconMenu(constants.toolArray, -1);
        case 'clear':
        	action.clearTheme(-1);
        case 'save':
        	this.saveTheme();
        case 'load':
        	location.href = "http://lockplus.us/creator/load/mobile.php";
        case 'element':
        	action.elementIconClick();
        	showElementPanel();
        case 'size':
        	this.cgSize('fontSize', constants.editArray[0], 'px', 5, 300, 'font-size', 'font-size', action.updateSize);
        case 'width':
        	this.cgSize('widthSize', constants.editArray[1], 'px', 1, $('.screen').width(), 'width', 'width', action.updateSize);
        case 'height':
        	this.cgSize('heightSize', constants.boxEditArray[1], 'px', 1, $('.screen').height(), 'height', 'height', action.updateSize);
        case 'position':
        	this.cgPosition();
        case 'align':
        	this.cgalign();
        case 'fonts':
        	this.cgfont();
        case 'uppercase':
        	this.cguppercase();
        case 'style':
        	this.cgStyle();
        case 'weight':
        	this.cgweight();
        case 'shadow':
        	action.showIconMenu(constants.shadowArray, -1);
        case 'boxShadow':
        	action.showIconMenu(constants.boxShadowArray, -1);
        case 'hShadow':
        	this.cgSize('hShadow', constants.shadowArray[0], 'px', -100, 100, 'hShadow', 'hShadow', action.updateShadow, false, false, 'Horizontal');
        case 'vShadow':
        	this.cgSize('vShadow', constants.shadowArray[1], 'px', -100, 100, 'vShadow', 'vShadow', action.updateShadow, false, false, 'Vertical');
        case 'blur':
        	this.cgSize('blur', constants.shadowArray[2], 'px', 0, 50, 'blur', 'blur', action.updateShadow, false, false, 'Blur Radius');
        case 'radius':
        	this.cgSize('radiusSize', constants.boxEditArray[3], 'px', 0, $('#' + action.selectedItem).width() / 2, 'border-radius', 'border-radius', action.updateSize, false, false, 'Box Radius');
        case 'transform':
        	action.showIconMenu(constants.transformArray, -1);
        case 'rotation':
        	this.cgSize('rotationAngle', constants.transformArray[0], 'deg', 0, 360, 'rotate', 'rotate', action.updateTransform, false, false, 'Rotation Angle');
        case 'skeyX':
        	this.cgSize('skewXAngle', constants.transformArray[1], 'deg', 0, 360, 'skewX', 'skewX', action.updateTransform, false, false, 'X Skew Angle');
        case 'skewY':
        	this.cgSize('skewYAngle', constants.transformArray[2], 'deg', 0, 360, 'skewY', 'skewY', action.updateTransform, false, false, 'Y Skew Angle');
        case 'clearTransform':
        	action.updateTransform('', '', '', '', 'clear');
        case 'shadowColor':
        	this.cgShadowColor();
        case 'clearShadow':
        	this.updateShadow('', '', '', '', 'clear');
        case 'backToEdit':
        	action.showMultiSelectionMenu();
        case 'boxhShadow':
        	this.cgSize('boxhShadow', constants.boxShadowArray[0], 'px', -100, 100, 'boxhShadow', 'boxhShadow', action.updateShadow, false, false, 'Horizontal');
        case 'boxvShadow':
        	this.cgSize('boxvShadow', constants.boxShadowArray[1], 'px', -100, 100, 'boxvShadow', 'boxvShadow', action.updateShadow, false, false, 'Vertical');
        case 'boxblur':
        	this.cgSize('boxblur', constants.boxShadowArray[2], 'px', 0, 50, 'boxblur', 'boxblur', action.updateShadow, false, false, 'Blur Radius');
        case 'boxshadowColor':
        	this.cgShadowColor(true);
        case 'boxclearShadow':
        	this.updateShadow('', '', '', '', 'clear');
        case 'color':
        	this.cgcolor(false, 'color', 'colorDiv');
        case 'boxColor':
        	this.cgcolor(false, 'background-color', 'boxColorDiv');
        case 'customText':
        	this.cgCustomText();
        case 'delete':
        	action.delete();
        case 'iconsize':
        	this.cgSize('iconSize', constants.iconArray[0], 'px', 5, $('.screen').width(), 'width', 'width', action.updateSize);
        case 'changeicon':
        	this.populateIcons();
        case 'affixes':
        	this.showIconMenu(constants.affixArray, -1);
        case 'customPrefix':
        	this.cgAffix('prefix');
        case 'customSuffix':
        	this.cgAffix('suffix');
        case 'clearAffixes':
        	this.cgAffix('clear');
        case 'border':
        	this.showIconMenu(constants.borderArray, -1);
        case 'borderStyle':
        	this.cgBorderStyle();
        case 'borderWidth':
        	this.cgSize('borderWidth', constants.borderArray[1], 'px', 0, 200, 'border-width', 'borderWidth', action.updateSize);
        case 'border-color':
        	this.cgcolor(false, 'border-color', 'border-colorDiv');
        case 'clearBorder':
        	this.setCss(action.selectedItem, 'border', '');
        case 'posSystem':
        	this.cgPosSystem();
        case 'multiPos':
        	this.cgMultiPosition();
        case 'linearBoxGradient':
        	this.showIconMenu(constants.linearBoxGradientArray, -1);
        case 'linearGradient':
        	this.showIconMenu(constants.linearGradientArray, -1);
        case 'gradientType':
        	this.cgGradientPurpose();
        case 'linearGradientAngle':
        	this.cgSize('rotateLinearGradient', constants.linearGradientArray[1], 'deg', 0, 360, 'rotate', 'rotate', action.updateGradient, false, false, 'Rotate Gradient');
        case 'linearGradientStartColor':
        	this.cgLinearGradientColor(constants.linearGradientArray[2], 'color~0.5');
        case 'linearGradientStopColorOne':
        	this.cgLinearGradientColor(constants.linearGradientArray[3], 'color~1');
        	this.cgSize('linGradientStopOnePercent', constants.linearGradientArray[3], '%', 0, 100, 'pos~1', 'pos~1', action.updateGradient, false, false, 'Stop 1 Distance');
        case 'linearGradientStopColorTwo':
        	this.cgLinearGradientColor(constants.linearGradientArray[4], 'color~2');
        	this.cgSize('linGradientStopTwoPercent', constants.linearGradientArray[4], '%', 0, 100, 'pos~2', 'pos~2', action.updateGradient, false, false, 'Stop 2 Distance');
        case 'clearGradient':
        	this.updateGradient('', '', '', '', 'clear');
    	default: '';
    }
    if (action.selectedItem != null && evt.target.id.toLowerCase().match(/gradient/gmi) != null && document.getElementById(action.selectedItem).style.background.substring(0, 3) != 'lin' && id != 'linearGradient' && id != 'linearBoxGradient' && id != 'linearTextGradientDiv') {
        action.setCss(action.selectedItem, 'background', 'linear-gradient(rgb(255,0,0),rgb(255,255,0) 50%,rgb(0,0,255) 90%)');
    }
};





