$(document).ready(function(){
	var url = window.location.href;
	var urlArray = url.split('?');
	var promoCode = urlArray[1];
	promoCode = promoCode.split('=');
	promoCode = promoCode[1];

	// ex. ../PromoCodes_dt_project/index.html?url=safi replaces '.banner h1' with 'safi'
	$('.banner h1').text(promoCode);
});
