$(document).ready(function() {

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

	// tell the validator to validate this form (by id)
	$("#controller").validate({
		// setup the formatting for the errors
		errorClass: "label-danger",
		errorLabelContainer: "#outputArea",

		// rules define what is good/bad input
		rules: {
			// each rule starts with the inputs name (NOT id)
			name: {
				maxlength: 100,
				required: true
			},

			message: {
				maxlength: 5000,
				required: true
			},

			email: {
				maxlength: 200,
				email: true,
				required: true
			}

		},

		// error messages to display to the end user
		messages: {
			name: {
				maxlength: "Your name is really longer than 100 characters? ",
				required: "Please enter a name. "
			},

			message: {
				maxlength: "Don't copy the text of \"Infinite Jest\", please. ",
				required: "Please enter a message. "
			},

			email: {
				maxlength: "Your email is really longer than 200 characters? ",
				email: "Please enter a valid email address. ",
				required: "Please enter an email address. "
			}
		},


		submitHandler: function(form) {
			$(form).ajaxSubmit({
				// GET or POST
				type: "POST",
				// where to submit data
				url: "../index-controller.php",
				// TL; DR: reformat POST data
				data: $(form),
				// success is an event that happens when the server replies
				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#outputArea").css("display", "block");
					// write the server's reply to the output area
					$("#outputArea").html(ajaxOutput);


					// reset the form if it was successful
					// this makes it easier to reuse the form again
					if($(".alert-success").length >= 1) {
						$(form)[0].reset();
					}
				}
			});
		}


	});
});