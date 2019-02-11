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
			marginTop:'-200px'
		}, 1800);
	}

	$('.tarea1 h2').animate({
			marginTop:'-420px'
		},1800);

/*	$('.tarea1 iframe').animate({
			marginTop:'-5px'
		},1800);*/
	

});