$(document).ready(function() {
	$('.header__burger').click(function(event)
	 {
		$('.header__burger,.header__menu').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();

$(document).ready(function(){
	$('.slider').slick({
		autoplay:true,
		speed:3000,
		autoplaySpeed:6000,
		pauseOnFocus:false,
		pauseOnHover:false,
		pauseOnDotsHover:false,
		draggable:false,
		swipe:false,
	});
});






