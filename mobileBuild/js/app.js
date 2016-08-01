//functions for the app to retrieve info to create a plist
var getIconName = function(){ return action.savedElements.iconName; },
getWallpaper = function (){ return (action.wallpaper) ? action.wallpaper : ''; },
getOverlay = function(){ return (action.savedElements.overlay) ? action.savedElements.overlay : ''; },
getElements = function(){ return JSON.stringify(action.savedElements.placedElements) || ''; };
