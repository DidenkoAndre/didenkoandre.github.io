(function($) {
	"use strict";

	$(window).on('load', function() {
	    $(".preloader").fadeOut("slow", function() {
	        $(".preloader-left").addClass("slide-left");
	    });
	});


	//Blog post Modal
	$('.open-post').on('click', function() {
	    var postUrl = $(this).attr("href");
	    $('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(postUrl);
	    return false;
	});

	//On Click Open About/Resume Block
	$('.about-block, .menu-item.about').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.about').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.about').addClass('active');
	    $('.sidebar-menu').addClass('blackbg');
	});
	//On Click Open Blog Block
	$('.blog-block, .menu-item.blog').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.blog').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.blog').addClass('active');
	    $('.sidebar-menu').addClass('blackbg');
	});

	$('#home').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.menu-item').removeClass('active');
	    $(this).addClass('active');
	    $('.inline-menu-container.style2').removeClass('dark');
	    $('.sidebar-menu').removeClass('blackbg');
	    $('.sidebar-menu').addClass('transparent');
	});
})(jQuery);