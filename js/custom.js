/********************************************
 * Custom JavaScript for Sample Parallax
 * DDC Student Server Class Materials
 * bootcamp-coders.cnm.edu/classmaterials
 *
 * @author rlewis37@cnm.edu
 *
 ********************************************/

$(document).ready(function(){

	/********************************************
	 * Initialize stellar.js on window
	 ********************************************/
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	/********************************************
	 * Change nav bar on scroll
	 ********************************************/
	$(window).on('scroll', function() {

		// if the scroll position is greater than 100px
		if($(window).scrollTop() > 100) {
			$('.navbar').css({backgroundColor: '#000', boxShadow: '0 0 50px rgba(0,0,0,0.8)'});
		} else {
			$('.navbar').css({backgroundColor: 'rgba(0,0,0,0.25)', boxShadow: 'none'});
		}
	});

});