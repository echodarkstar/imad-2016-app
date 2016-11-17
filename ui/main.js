<<<<<<< HEAD
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
=======
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
>>>>>>> 4c02b718662f8517124fc6723afba51ee2c412b0
