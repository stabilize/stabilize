$(document).on('click', '.mobile-menu', function(){
	$(this).toggleClass('is-active');
	$('nav ul').toggleClass('open');
})


$(document).on('click', '.features', function(){
	$('#features').addClass('open');
	$('body').addClass('lock');
})

$(document).on('click', '.software', function(){
	$('#software').addClass('open');
	$('body').addClass('lock');
})

$(document).on('click', '#features .close-button, #software .close-button', function(){
	$('#features, #software').removeClass('open')
	$('body').removeClass('lock');
})

$(document).on('click', '.down-arrow', function(){
	$('html,body').animate({
        scrollTop: $(window).height()
    }, 500);
})

$(document).on('click', '#products article > div', function(){
	if($(this).parent().hasClass('open')) {
		$(this).parent().removeClass('open');
	} else {
		$('#products article').removeClass('open');
		$(this).parent().addClass('open');
	}
})


// On before slide change
$('.info-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

	$(".technology-illustration").removeClass (function (index, className) {
	    return (className.match (/(^|\s)pos-\S+/g) || []).join(' ');
	});
	$('.technology-illustration .icons g').removeClass('active')

  	$('.technology-illustration').addClass('pos-'+(nextSlide+1)+'');
  	$('.technology-illustration .icons g:nth-child(' + (nextSlide+1) + ')').addClass('active');
});

$('.info-slider').slick({
	arrows: false,
	fade: true,
	dots: true,
	adaptiveHeight: true,
	appendDots: $('.slider-nav')
})

$(document).on('click', '.solutions-wrapper > div', function(){
	var column = $(this).index();
	if(column % 3 == 1) {
		$('.solutions-wrapper').addClass('push-1');
	}
	if(column % 3 == 2) {
		$('.solutions-wrapper').addClass('push-2');
	}

	var title = $(this).find('h4').text();
	var svg = $(this).find('svg').clone()[0];
	var content = $(this).find('div[hidden]').html();


	$('.panel').addClass('open');
	$('.panel h5').text(title);
	$('.panel .svg-wrapper').html(svg);
	$('.panel .panel-content').html(content);

	$('body').toggleClass('lock');
})


$(document).on('click', '.panel .close-button', function(){
	$('.panel').removeClass('open');
	$('body').removeClass('lock');
	$('.solutions-wrapper').removeClass('push-1').removeClass('push-2')
})



$(document).on('click', 'nav ul li a', function(){
	$('nav ul').removeClass('open');
	$('.mobile-menu').removeClass('is-active');
	$('.panel').removeClass('open');
	$('body').removeClass('lock');
	$('.solutions-wrapper').removeClass('push-1').removeClass('push-2')
})


$(document).on('click', '.sign-up', function(e){
	e.preventDefault();
	$('.sign-up-panel').addClass('open');
	$('nav ul').removeClass('open');
	$('.mobile-menu').removeClass('is-active');
})


$(document).on('click', '.sign-up-panel .close-button', function(e){
	$('.sign-up-panel').removeClass('open');
})

var loadingBarBlocks = $('.loading g > rect');
$(window).on('load', function(){
	for(var i=0;i<loadingBarBlocks.length;i++) {
		(function(i){
			setTimeout(function(){
				$(loadingBarBlocks[i]).addClass('load');
			}, 75 * i)
		})(i);
	}
})
