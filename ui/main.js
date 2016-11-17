$(function(){
	$('.work').find('a').bind('click',false);
	$('.work').find('a').addClass('disable');
	$('p').toggleClass('.noselect');
	$('.hex1').click(function(){
		$(this).toggleClass('hex1ani');
		$(this).siblings().toggleClass('hidden');
		$('.about-photo').toggleClass('aboutani');
		$('.about-photo').siblings().toggleClass('abani');
		$(this).find('p').toggleClass('hide-text');
		$(this).find('span').toggleClass('glyphicon').toggleClass('glyphicon-arrow-down');
		$('p').toggleClass('.noselect');
	});

	$('.hex2').click(function(){
		$(this).toggleClass('hex2ani');
		$(this).siblings().toggleClass('hidden');
		$('.work').toggleClass('workani');
		$(this).find('p').toggleClass('hide-text');
		$(this).find('span').toggleClass('glyphicon').toggleClass('glyphicon-arrow-right');
		$('.work').find('a').unbind('click',false);
		$('.work').find('a').toggleClass('disable');
		
	});

	$("#login").click(function(){
	        $("#myModal").modal();
	});

	$('[data-toggle="popover"]').popover();


});
