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

    }, 800);
	});

	function adjustWindow(){
    $(".scroller").on("click", function( e ) {

      e.preventDefault();

      $("body, html").animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);

    });
	}

} )( jQuery );
