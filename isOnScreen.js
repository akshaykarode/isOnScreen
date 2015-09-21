(function($){
	var $w = $(window);
	var _meta = {
		isOptionProvided : false
	}
	var defaults = {
		visibleTrigger: 0,
		scrollTimeout: 500,
		onDone : function(){return true},
		onBackStage : function(){return true}
	}
	$.fn.isOnScreen = function(options) {
		var $elem = $(this)
		$elem.options = $elem._meta = {}
		overrideDefaults($elem,options)

		$w.scroll(debounce(init, $elem.options.scrollTimeout));
		init();
		
		function init(){
			var scene = getScene($elem),
					done  = processResult(scene,$elem)
			$elem.options.onDone(done,scene)
			if(!done && $elem.options.onBackStage){ // fires when element is backstage
				$elem.options.onBackStage(done,scene)
			}
		}
	}
	
	function getScene(element) {
		return {
			docViewTop:   $w.scrollTop(),
			docViewBottom:$w.scrollTop() + $w.height(),
			elemTop:      element.offset().top,
			elemBottom:   element.offset().top + element.height()
		}
	}
	function overrideDefaults(element,options){
		element._meta = _meta;
		element._meta.isOptionProvided  = (element.options) ? true:false;
		if(element._meta.isOptionProvided)
			for (key in defaults){
				element.options[key] = options[key] || defaults[key]
			}
	}
	function processResult(scene,element){
		if(!element._meta.isOptionProvided || element.options.visibleTrigger==0){ // if no options then return default 
			return ((scene.elemBottom <= scene.docViewBottom) && (scene.elemTop >= scene.docViewTop)); 
		}
		if(element.options.visibleTrigger!=0){ // if visibleTrigger then return truth
			var canvasY = scene.elemTop - scene.docViewTop,
					paintY = scene.docViewBottom - scene.elemTop,
					percent = (paintY*100)/(canvasY+paintY);
			if(percent>=element.options.visibleTrigger && (scene.elemBottom > scene.docViewTop)){
				return true; // return if element is visible
			}else{  // return false if element gone away - (scene.elemBottom <= scene.docViewTop) || (scene.elemTop >= scene.docViewBottom)
				return false
			}

		}
	}
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
})(jQuery);