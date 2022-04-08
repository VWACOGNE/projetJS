(function($) {

    $(function() {

        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 2200) {
                    width = width / 6;
                }  else if (width >=1200) {
                    width = width / 3;
                }   else if (width >= 700) {
                    width = width / 2;
                }   else if (width >= 600) {
                    width = width / 1;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
        $('.jcarousel').jcarouselAutoscroll({
            target: '+=1'
        });
    });

})(jQuery);
