(function($){
	$(document).ready(function() {
	    $(document).scroll(function () {
	        var viewportY = $(window).scrollTop();
	        if($('#thinkbig-topnavbar').length){
		        var navpos = $("#thinkbig-topnavbar").position();
		        if (viewportY > navpos.top) {
		            $("#thinkbig-topnavbar").css({"transition":"opacity 1s ease","position":"fixed","top":"0","box-shadow":"rgba(0, 0, 0, 0.03) 0 1px 3px"});
		            $(".thinkbig-navigation a").css({"font-size":"2rem"});
		        } else {
		            $("#thinkbig-topnavbar").css({"position":"static","top":"auto","box-shadow":"none"});
		            $(".thinkbig-navigation a").css({"font-size":"1.5rem"});
		        }
		    }
	    });
	});
})(window.jQuery);
