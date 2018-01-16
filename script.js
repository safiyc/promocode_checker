$(document).ready(function(){
	var url = window.location.href;
	var urlArray = url.split('?');
	var promoCode = urlArray[1];
	promoCode = promoCode.split('=');
	promoCode = promoCode[1];

	$('.banner h1').text(promoCode);
});