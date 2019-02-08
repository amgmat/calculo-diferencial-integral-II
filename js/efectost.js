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
			marginTop:'-150px'
		}, 1800);
	}

	$('.tarea1 iframe').animate({
			marginTop:'-400px'
		},1800);
	

});