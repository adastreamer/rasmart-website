$(document).ready(function(){
 if (screen.width < 576) {
  $('.cases_btn').attr('href', '#scroll_text');
}

$('.soon_btn').click(function(){
swal("Coming soon!", "");
  });


 	$('.IOT').click(function(){
 		$('.cases__content_box').addClass('hide');
  		$('.iot-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.IOT').addClass('btnback');

	});

	$('.logistic').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.logistic-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.logistic').addClass('btnback');
	});

	$('.exchange ').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.exchange-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.exchange').addClass('btnback');
	});

	$('.payment').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.payment-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.payment').addClass('btnback');
	});

	$('.gaming').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.gaming-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.gaming').addClass('btnback');
	});

	$('.credits').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.credits-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.credits').addClass('btnback');
	});

	$('.loyalty').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.loyalty-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.loyalty').addClass('btnback');
	});

	$('.government').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.government-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.government').addClass('btnback');
	});

	$('.copyright').click(function(){
		$('.cases__content_box').addClass('hide');
  		$('.copyright-content').removeClass('hide');
  		$('.cases_btn').removeClass('btnback');
  		$('.copyright').addClass('btnback');
	});

		var $info = $('.figure_info-win');
		$info.each( function () {
		  var dataInfo = $(this).data("figure_info-win");
		  $( this ).append('<span class="inner" >' + dataInfo + '</span>');
		});


$(".team_slider_foto").slick({
	slidesToShow: 3,
	centerMode: true,
	slidesToScroll:1,
	infinite: true,
  	centerPadding: '0px',
  	prevArrow:'<i class="fa fa-angle-double-left arrows"></i>',
  	nextArrow:'<i class="fa fa-angle-double-right arrows"></i>',
  	asNavFor:".team_slider_info",
  	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
  	}
  	,
  	{
      breakpoint: 420,
      settings: {
      	slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }

    }
     
  ]
});

$(".team_slider_info").slick({
	slidesToShow:1,
	slidesToScroll:1,
	arrows: false,
	infinite: true,
	asNavFor:".team_slider_foto"
});

$(".team_slider_foto-advisors").slick({
	slidesToShow: 3,
	centerMode: true,
	slidesToScroll:1,
	infinite: true,
  	centerPadding: '0px',
  	prevArrow:'<i class="fa fa-angle-double-left arrows"></i>',
  	nextArrow:'<i class="fa fa-angle-double-right arrows"></i>',
  	asNavFor:".team_slider_info-advisors",
  	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
  	},
  	{
      breakpoint: 420,
      settings: {
      	slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }

    }
  ]
});

$(".team_slider_info-advisors").slick({
	slidesToShow:1,
	slidesToScroll:1,
	arrows: false,
	infinite: true,
	asNavFor:".team_slider_foto-advisors"
});

$('a[href^="#"]').bind("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
   scrollTop: $(anchor.attr("href")).offset().top
  }, 1000);
  e.preventDefault();
 });
 return false;﻿





});

var header = new Headhesive('.header_top');	

var elements = $('.modal-overlay, .modal');

$('#header__modal_btn').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

$('.lblInp input').keyup(function() {
  if($(this).val().length > 0){
    $(this).closest('.lblInp input').addClass('filled');
  }
  else{
    $(this).closest('.lblInp input').removeClass('filled');
  }
});



$(document).ready(function(){

$("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      swal("Thanks for your support!", "", "success");
      $("#form").trigger("reset");
    });
    return false;
  });
});

