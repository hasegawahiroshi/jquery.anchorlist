/* jQuery Anchor List v1.0 - hasegawahiroshi.jp */

(function($) {
	$.fn.anchorlist = function(options){

		var defaults = {
			anchor     : $('h2'),
			classname  : 'anchorlist'
		};
		var setting = $.extend(defaults, options);

		var obj = $(this);
		var list = $('<ul class="' + setting.classname + '">');
		
		setting.anchor.each(function(i){
			var num = i + 1;
			$(this).attr( 'id', 'content' + num );
			list.append('<li><a href="#content' + num + '">'
				+ $(this).text() + '</a></li>');
		});

		obj.append(list);

	};
})(jQuery);

