(function($) {
    var widget = $('.widget-wrapper');
    var widgetWidth = widget.width();
    widget.css('margin-left', '-' + widgetWidth + 'px');

    $('.category-tag').mouseenter(
        function() {
            widget.animate({
                marginLeft: "+=" + widgetWidth
            }, "normal");
        });
    widget.mouseleave(
        function() {
            widget.animate({
                marginLeft: "-=" + widgetWidth
            }, "normal");
        });
})(jQuery);