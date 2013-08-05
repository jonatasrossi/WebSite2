$(document).ready(function(){
	var h = $('section');
	h.css("height", document.body.clientHeight);

	var offset = 100;

	$('.navbar li a').click(function(event) {
		event.preventDefault();
		$.scrollTo(event.target.hash, 800, {queue:true, offset: -offset});
	});
});