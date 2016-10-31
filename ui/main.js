$(function(){
	var a=0;
	$('.hex1').click(function(){
		$(this).toggleClass('hex1ani');
		$(this).siblings().toggleClass('hidden');
		$('.about-photo').toggleClass('aboutani');
		$('.about-photo').siblings().toggleClass('abani');
	})

	$('.hex2').click(function(){
		$(this).toggleClass('hex2ani');
		$(this).siblings().toggleClass('hidden');
		$('.work').toggleClass('workani');
	})

	$('.hex3').click(function(){
		$(this).toggleClass('hex3ani');
		$(this).siblings().toggleClass('hidden');
		$('.contact').toggleClass('conani');
	})
})