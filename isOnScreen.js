(function($){
	var $w = $(window);
	var _meta = {
		isOptionProvided : false
	}
	var defaults = {
		visibleTill: 0,
		autoScroll : false
	}
	$.fn.isOnScreen = function(options) {
		var $elem = $(this)
		overrideDefaults(options)
		var scene = getScene($elem)
		return processResult(scene,$elem)
	}
	function getScene(element) {
		return {
			docViewTop:   $w.scrollTop(),
			docViewBottom:$w.scrollTop() + $w.height(),
			elemTop:      element.offset().top,
			elemBottom:   element.offset().top + element.height()
		}
	}
	function overrideDefaults(options){
		_meta.isOptionProvided  = (options) ? true:false;
		if(options)
			for (key in options){
				defaults[key] = options[key]
			}
	}
	function processResult(scene,element){
		if(!_meta.isOptionProvided){ // if no options then return default 
			return ((scene.elemBottom <= scene.docViewBottom) && (scene.elemTop >= scene.docViewTop)); 
		}
		if(defaults.visibleTill!=0){ // if visibleTill then return truth
			var canvasY = scene.elemTop - scene.docViewTop,
					paintY = scene.docViewBottom - scene.elemTop,
					percent = (paintY*100)/(canvasY+paintY);
			return (defaults.visibleTill<=percent)
		}
	}
})(jQuery);