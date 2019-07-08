(function( $ ) {
    var clicked = false;
    $('#thinkbig-navmenu').on('click',function(){
        if(clicked) {
            $('.thinkbig-navmenu-item').css({"display": "none"});
            $('#thinkbig-navmenu-label').css({"display": "inline-block"});
            $('#thinkbig-navmenu-button').html("+");
            clicked = false;
        }
        else {
            $('.thinkbig-navmenu-item').css({
                "display": "block",
                "float": "none",
                "clear": "both"});
            clicked = true;
            $('#thinkbig-navmenu-label').css({"display": "none"});
            $('#thinkbig-navmenu-button').html("x");
        }
    });

    $('.thinkbig-navmenu-item').on('click',function(){
      clicked = false;
    });

    $(window).resize(function(){
        $('.thinkbig-navmenu-item').each(function() {
                var item = $(this);
                if($(item).css("display") != "none") {
                    $(item).css({"display":"none"});
                }
        });
        $('#thinkbig-navmenu-label').css({"display": "inline-block"});
        $('#thinkbig-navmenu-button').html("+");
        clicked = false;
    });
})(window.jQuery);
