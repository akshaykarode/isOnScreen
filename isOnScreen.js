(function($){
	var $w = $(window);
	$.fn.isOnScreen = function(options) {
		var $elem = $(this)
		var s = getScene($elem)
		return ((s.elemBottom <= s.docViewBottom) && (s.elemTop >= s.docViewTop)); 
	}
	function getScene(element) {
		return {
			docViewTop:   $w.scrollTop(),
			docViewBottom:$w.scrollTop() + $w.height(),
			elemTop:      element.offset().top,
			elemBottom:   element.offset().top + element.height()
		}
	}
})(jQuery);

