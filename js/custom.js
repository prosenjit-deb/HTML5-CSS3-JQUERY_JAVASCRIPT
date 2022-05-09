$(document).ready(function () {
// Sticky navbar
// ================================================================================================================
	// Custom function which toggles between sticky class (is-sticky)
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
		var stickyHeight = sticky.outerHeight();
		var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop) {
			stickyWrapper.height(stickyHeight);
			sticky.addClass("is-sticky");
		}
		else {
			sticky.removeClass("is-sticky");
			stickyWrapper.height('auto');
		}
	};

	// Find all data-toggle="sticky-onscroll" elements
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');

		// Scroll & resize events
		$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			stickyToggle(sticky, stickyWrapper, $(this));
		});

		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
	});
	
// =============================================================================================================
// alert danger height
// =============================================================================================================
	currentHeight = $('#h-alert').outerHeight();
    //console.log("set current height on load = " + currentHeight);
	
	if( $('#h-alert').length ) {
		$("#header").css({"padding-bottom": currentHeight });
	} else {
	  $("#header").css({"padding-bottom": 0 });
	}
	
	// alert box close
	$('.close-ico').click(function(){
		$('.alert-danger').slideToggle();	
		$("#header").css({"padding-bottom": 0 });
	});
// =============================================================================================================
// My account open onclick on mobile
// =============================================================================================================
	$('.user-ico-img').click(function(e){
		e.stopPropagation();
		$('#navbar-account').stop(true,true).show('slide', {direction: 'left'}, 400);
		$(this).removeClass('user-ico-img');
		$(this).addClass('user-ico-img-click');
		e.stopPropagation();
		//$('#navbar').css({"display": "none" });
	});
	$('.user-ico-img-click').click(function(e){
		
		e.preventDefault();
		$('#navbar-account').stop(true,true).hide('slide', {direction: 'left'}, 400);
		$(this).removeClass('user-ico-img-click');
		$(this).addClass('user-ico-img');
	});
	$('#back').click(function(){
		$('#navbar-account').stop(true,true).hide('slide', {direction: 'left'}, 400);
		$('.user-ico-img-click').addClass('user-ico-img');
		$('.user-ico-img').removeClass('user-ico-img-click');
	});
	
	
	$('#navbar ul li a').click(function(e){
		console.log('hello1');
		e.stopPropagation();
		e.preventDefault();
		$(this).find('.wpmm-strees-row-and-content-container').stop(true,true).show('slide', {direction: 'right'}, 400);
		console.log('hello2');
	});
// =============================================================================================================
// Add smooth scrolling to all links
// =============================================================================================================
  $("#top-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
// =============================================================================================================
	
});

// =============================================================================================================
// Modal with large image
// =============================================================================================================
$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

// =============================================================================================================
// append and prepand any section on mobile
// =============================================================================================================
if ($(window).width() < 960) {
	$('#navbar').append($('#h-alert'));
	$('.g-ad-sec').append($('#widget-1'));
	$('.g-ad-sec').append($('#widget-4'));	
	$('.g-ad-sec').append($('#widget-3'));
} else {
	$('#header').append($('#h-alert'));
	$('#sidebar').prepend($('#widget-1'));
	$('#widget-2').after($('#widget-3'));	
	$('#widget-3').prepend($('#widget-4'));
}
// =============================================================================================================
// window resize function
// =============================================================================================================

$(window).resize(function() {
// =============================================================================================================
// append and prepand any section on mobile
// =============================================================================================================
	if ($(window).width() < 960) {
		$('#navbar').append($('#h-alert'));
		$('.g-ad-sec').append($('#widget-1'));
		$('.g-ad-sec').append($('#widget-4'));	
		$('.g-ad-sec').append($('#widget-3'));
	} else {
		$('#header').append($('#h-alert'));
		$('#sidebar').prepend($('#widget-1'));
		$('#widget-2').after($('#widget-3'));	
		$('#widget-3').prepend($('#widget-4'));
	}
	

	if ($(window).width() < 991) {
		$('.topicslink').append("<span>Appended text</span>");
	} else {
		$('.topicslink').prepend("<span>Appended text</span>");
	}

// =============================================================================================================
// alert danger height
// =============================================================================================================
	currentHeight = $('#h-alert').outerHeight();
    console.log("set current height on load = " + currentHeight); 
	$("#header").css({"padding-bottom": currentHeight });
	
	// alert box close
	$('.close-ico').click(function(){
		$('.alert-danger').slideToggle();	
		$("#header").css({"padding-bottom": 0 });
	});
});


