$(function(){
	$('.hex1').click(function(){
		$(this).toggleClass('hex1ani');
		$(this).siblings().toggleClass('hexagon');
	});

	$('.hex2').click(function(){
		$(this).toggleClass('hex2ani');
		$(this).siblings().toggleClass('hexagon');
	});

	$('.hex3').click(function(){
		$(this).toggleClass('hex3ani');
		$(this).siblings().toggleClass('hexagon');
	});
});