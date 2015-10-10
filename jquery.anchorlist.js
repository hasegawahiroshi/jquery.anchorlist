/* jQuery Anchor List v1.0 - hasegawahiroshi.jp */

(function($) {
	$.fn.anchorlist = function(options){

		var defaults = {
			content : $('body'),
			header  : 'h2',
			classname  : 'anchorlist'
		};
		var setting = $.extend(defaults, options);

		var obj = $(this);
		var list = $('<ul class="' + setting.classname + '">');
		
		setting.content.find(setting.header).each(function(i){
			var num = i + 1;
			$(this).attr( 'id', 'content' + num );
			list.append('<li><a href="#content' + num + '">'
				+ $(this).text() + '</a></li>');
		});

		obj.append(list);

	};
})(jQuery);

