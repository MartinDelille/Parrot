window.onscroll = function() {
	var heightToStick = 2800;
	var scroll = $(window).scrollTop();
	console.log("scroll: " + scroll);
	if(scroll > heightToStick) {
		$('#micstick').addClass('sticky');
		$('#parrot').addClass('sticky');
	} else {
		$('#micstick').removeClass('sticky');
		$('#parrot').removeClass('sticky');
	}
}