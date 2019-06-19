/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//Preloader and page fade

/*setTimeout(function() {
	//After 2000 milliseconds, fade out the overlay. The animation duration is 500 ms.
  $('.preloader').fadeOut(500);
$('body').fadeIn(1000);
}, 1000);*/

function fadeInChildren(parent, base_delay) {
    var elems = $(parent).children();

    $(elems).each(function(index) {
        $(this).css({opacity: 0.0, visibility: "visible"}).delay(base_delay+(500*index)).animate({opacity: 1.0}, 500);
    });
}

$(window).load(function() {
		// Animate loader off screen
		//$('.preloader').fadeOut('slow');
		$('body').fadeIn(500);
		$('.hide1 header .img-responsive').css({opacity: 0.0, visibility: "visible"}).delay(500).animate({opacity: 1.0}, 500);
		$('.hide1 header').css({opacity: 0.0, visibility: "visible"}).delay(500).animate({opacity: 1.0}, 500);	
		fadeInChildren('.hide1 header .intro-text',1000);
		$('.hide2').css({opacity: 0.0, visibility: "visible"}).delay(2300).animate({opacity: 1.0}, 500);
	});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href'))[0].offsetTop
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
