$(function(){
	var a=0;

	$('.name').one('webkitAnimationEnd oAnimationEnd msAnimationEnd Animationend animationend',   
	  function() {
	    
	    $('.hexagon').toggleClass('activate');

	});
	$('.hex1').click(function(){
		$(this).toggleClass('hex1ani');
		$(this).siblings().toggleClass('hidden');
		$('.about-photo').toggleClass('aboutani');
		$('.about-photo').siblings().toggleClass('abani');
	});

	$('.hex2').click(function(){
		$(this).toggleClass('hex2ani');
		$(this).siblings().toggleClass('hidden');
		$('.work').toggleClass('workani');
	});

	$('.hex3').click(function(){
		$(this).toggleClass('hex3ani');
		$(this).siblings().toggleClass('hidden');
		$('.contact').toggleClass('conani');
	});
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
