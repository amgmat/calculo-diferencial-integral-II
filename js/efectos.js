$(document).ready(function(){

	$('.menu a').each(function(index,elemento){
		$(this).css({
			'top':'-200px'
		});
		$(this).animate({
			top:'0'
		},2000 + (index * 500));
	})

	if ($(window).width()>350) {
		$('header .logo').css({
			opacity:0,
			marginTop:0
		});

		$('header .logo').animate({
			opacity:1,
			marginTop:'-52px'
		}, 1800);
	}

	$('header .mensaje').animate({
		marginTop:'-100px'
	},1800);

	$('header .contacto').animate({
		marginTop:'-100px'
	},1800);

	$('header .sitios').animate({
		marginTop: '-100px'
	},1800);
});