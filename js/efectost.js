$(document).ready(function(){

	$('.menu li').each(function(index,elemento){
		$(this).css({
			'top':'-200px'
		});
		$(this).animate({
			top:'0'
		},2000 + (index * 500));
	});

	 $('.submenu').click(function(){
	 	$(this).children('.children').slideToggle();
	 });

	if ($(window).width()>400) {
		$('header .logo').css({
			opacity:0,
			marginTop:0
		});

		$('header .logo').animate({
			opacity:1,
			marginTop:'-160px'
		}, 1800);
	
		$('.tarea2 h2').animate({
			marginTop:'-420px'
		},1800);

		$('.tarea1 h2').animate({
			marginTop:'-420px'
		},1800);

		}else{
			$('header .logo').animate({
			opacity:1,
			marginTop:'-100px'
		}, 1800);
	
		$('.tarea2 h2').animate({
			marginTop:'-320px'
		},1800);

		$('.tarea1 h2').animate({
			marginTop:'-320px'
		},1800);
		}
/*	$('.tarea1 iframe').animate({
			marginTop:'-5px'
		},1800);*/
	

});