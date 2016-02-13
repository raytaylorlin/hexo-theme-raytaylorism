(function($) {
    $(document).ready(function() {
        // 图片缩放效果
        var $imgs = $('img').not('.slider-image').not('.avatar-image').not('.carousel-image').not('.card-cover-image');

        // 给图片加上点击放大效果（materialbox插件）
        $imgs.addClass('materialboxed')
            .each(function(i, el) {
                $(this).attr('data-caption', $(this).attr('alt'));
            }).materialbox();

        // 首页幻灯片
        $('.slider').slider({
            indicators: false,
            full_width: true
        });

        $(".button-collapse").sideNav();
        $(".category-menu").sideNav();

        // 针对gallery post
        $('.carousel').carousel({
            full_width: true
        });
        $('.carousel-control.prev').click(function() {
            $('.carousel').carousel('prev');
        });
        $('.carousel-control.next').click(function() {
            $('.carousel').carousel('next');
        });

        // 文章目录
        $('article').not('.simple-article').find('h1').add('h2').add('h3').add('h4').add('h5').add('h6').scrollSpy();

        // 针对移动端做的优化：FAB按钮点击一下收回
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.fixed-action-btn').addClass('click-to-toggle');
        }
        // 回到顶部
        $('.btn-return-top').click(function() {
            $('body, html').animate({
                scrollTop: 0
            }, 500);
        });

        // 重置读书页面的Tab标签页的颜色
        $('li.tab a').hover(function() {
            $(this).toggleClass('text-lighten-4');
        });
        $('.indicator').addClass('<%= theme.color.tab %> lighten-2');
    });
})(jQuery);
