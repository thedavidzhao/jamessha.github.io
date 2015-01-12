( function( $ ) {
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
    setTimeout(function() {

    // Resize sections
    adjustWindow();

    // Fade in sections
    $body.removeClass('loading').addClass('loaded');

    }, 800);
	});

	function adjustWindow(){

		// Init Skrollr
    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
      var s = skrollr.init();
      s.refresh($('.homeSlide'));
    }

    // Get window size
    winH = $window.height();

    // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    }

    // Resize our slides
    $slide.height(winH);

    // Refresh Skrollr after resizing our sections

    $rheader = $('.right-header');
    $rheader.height(winH);
    $lheader = $('.left-header');
    $lheader.height(winH);
    $highlight = $('.highlight');
    $highlight.height(winH);

    $(".scroller").on("click", function( e ) {

      e.preventDefault();
      e.setScrollTop(0);

      $("body, html").animate({ 
          scrollTop: $( $(this).attr('href') ).offset().top 
      }, 1000);

    });
	}

} )( jQuery );
