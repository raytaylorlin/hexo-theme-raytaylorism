(function($) {
    var widget = $('.widget-wrapper');
    var isOpened = false;
    var widgetWidth = widget.width();
    widget.css('margin-left', '-' + widgetWidth + 'px');

    $('.category-tag').mouseenter(
        function() {
            if (!isOpened) {
                widget.animate({
                    marginLeft: "+=" + widgetWidth
                }, "normal");
                isOpened = true;
            }
        });
    widget.mouseleave(
        function() {
            if (isOpened) {
                widget.animate({
                    marginLeft: "-=" + widgetWidth
                }, "normal");
                isOpened = false;
            }
        });
})(jQuery);