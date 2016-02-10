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
                     /*,'openBackground~View Background in New Tab~fa fa-external-link-square~openBackgroundDiv'*/
                     ,'backgroundBlur~Change Background Blur~fa fa-bullseye~backgroundBlurDiv'
                    /* ,'openBlurryBackground~View Blurred Background in New Tab~fa fa-external-link~openBlurryBackgroundDiv'*/
                     ,'backToTools~Back~fa fa-arrow-left~backToToolsDiv'
                     ,'clearBackground~Clear Background~fa fa-trash~clearBackgroundDiv'],
    overlayArray: ['cgOverlay~Change Overlay~fa fa-clipboard'
                    ,'backToTools~Back~fa fa-arrow-left'
                    ,'clearOverlay~Clear Overlay~fa fa-trash'],
    editArray: ['size~Change Font Size~fa fa-font~sizeDiv~font-size'
                    ,'width~Change Width~fa fa-arrows-h~widthDiv~width'
                    ,'position~Change Position~fa fa-arrows~positionDiv~top-left'
                    ,'color~Change Color~fa fa-eyedropper~colorDiv' //added
                    ,'align~Change Alignment~fa fa-align-center~alignDiv'
                    ,'fonts~Change Font~ fa fa-language~fontsDiv'
                    ,'transform~Change Transformations~fa fa-level-up~transformDiv'
                    ,'uppercase~Change Uppercase~fa fa-text-height~uppercaseDiv' //added
                    ,'weight~Change Font Weight~fa fa-text-width~weightDiv' //added
                    ,'style~Change Font Style~fa fa-italic~styleDiv'
                    ,'affixes~Change Prefix/Suffix~fa fa-edit~affixesDiv'
                    ,'shadow~Edit Text Shadow~fa fa-underline~shadowDiv'
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
                    ,'shadow~Edit Text Shadow~fa fa-underline~shadowDiv'
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
                    ,'skewX~Change X Skew~fa fa-text-width~skewXDiv'
                    ,'skewY~Change Y Skew~fa fa-text-height~skewYDiv'
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
    boxEditArray: ['width~Change Width~fa fa-arrows-h~widthDiv~width'
                    ,'height~Change Height~fa fa-arrows-v~heightDiv~height'
                    ,'position~Change Position~fa fa-arrows~positionDiv~top-left'
                    ,'radius~Change Radius~fa fa-circle~radiusDiv~border-radius'
                    ,'boxShadow~Edit Box Shadow~fa fa-cube~boxShadowDiv~box-shadow'
                    ,'transform~Change Transformations~fa fa-level-up~transformDiv~transform'
                    ,'boxColor~Change Color~fa fa-eyedropper~boxColorDiv~color'
                    ,'border~Edit Box Border~fa fa-square-o~borderDiv~border'
                    ,'linearBoxGradient~Edit Linear Box Color Gradient~fa fa-barcode~linearTextGradientDiv~shadow'
                    ,'delete~Delete item~fa fa-trash-o~deleteDiv~delete'],
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
    iconArray: ['iconsize~Change Icon Size~fa fa-expand~changeIconDiv~width'
                ,'position~Change Position~fa fa-arrows~positionDiv~top-left'
                , 'changeicon~Change Icon~fa fa-code-fork~changeIconDiv~change'
                ,'transform~Change Transformations~fa fa-level-up~transformDiv~transform'
                , 'delete~Delete item~fa fa-trash-o~deleteDiv~delete'],
                gridSizeTop: 160,
                gridSizeLeft: 284,
    //preloadBlacklist: {color:'', fonts:'',transform:'',shadow:'',linearGradient:'',linearBoxGradient:'',backToEdit:'',boxShadow:'',boxColor:'',changeicon:'',affixes:''}, /*//If it shouldn't be opened when the menu is opened, the id needs to be here. 'delete', 'clear', and 'color' are already taken care of*/
    preloadWhitelist: {'size':'','width':'', 'position':'','align':'','uppercase':'','weight':'','style':'','customPrefix':'','customSuffix':'','hShadow':'','vShadow':'','blur':'','boxhShadow':'','boxvShadow':''
                        ,'boxblur':'','rotation':'','skewX':'','skewY':'','gradientType':'','linearGradientAngle':'','height':'','radius':'','iconsize':'','customText':'','borderStyle':'','borderWidth':'', 'posSystem':'', 'multiPos':''},
    iconList: ['MonolyphDark','MonolyphFlat','MonolyphLight','city','blue', 'clima', 'deep', 'plex', 'Flex', 'GlowWhite', 'june', 'Klear', 'lines', 'mauri', 'mauri2', 'MNMLB', 'MNMLBW', 'MNMLW', 'mw', 'nude', 'plastic', 'playful', 'primusweather', 'Purcy', 'realicons', 'reddock', 'round', 'round2', 'shadow', 'shiny', 'simple', 'simply', 'six', 'sixtynine', 'Sk37ch', 'smash', 'stardock', 'swhite', 'toon', 'toon2', 'topaz', 'weathercom', 'wetter', 'yahoo','black', 'BlackOrange','blacky','bbl', 'blackd', 'cleard', 'flt', 'kelly'],
    positioningSystemOption : 'posSystem~Change Positioning System~fa fa-arrows-alt~posSystemDiv',
    multiPosition : 'multiPos~Change Position~fa fa-arrows~multiPosDiv'
};