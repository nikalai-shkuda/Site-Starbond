/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  
$(document).ready(function() {
(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(20).fadeOut("slow");

      });       

  	})

   /*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 100 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');	      
	   }
      else {
         if (y < h + 100) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});

  	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'>Menu</span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop' : $target.offset().top - 66
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 300,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */  	 
	$('input, textarea').placeholder()  

   
	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

	
	$("#contactForm-1").submit(function() {
		$.ajax({
			type: "POST",
			url: "email.php",
			data: $(this).serialize()
		}).done(function() {
			// $(this).find("input, textarea").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#contactForm-1").trigger("reset");
		});
		return false;
	});
	$("#contactForm-2").submit(function() {
		$.ajax({
			type: "POST",
			url: "email.php",
			data: $(this).serialize()
		}).done(function() {
			// $(this).find("input, textarea").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#contactForm-2").trigger("reset");
		});
		return false;
	});

})(jQuery);

$( document ).ready(function() {
			/* Basic Gallery */
			$( '.swipebox' ).swipebox();
});

// ---------------------------------------------------------------- //
	// Top of Page Link
	// ---------------------------------------------------------------- //

	$(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.top-of-page-link').fadeIn();
			} else {
            $('.top-of-page-link').fadeOut();
		}
	});

	$('.top-of-page-link').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
	
 });           