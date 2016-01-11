$(function ($) {
	
	$('.panel').panel();
	
	$('#menu-btn').on('click', function (e) {
		$('.panel').panel('toggle', 'push');
	});
	
	$('.mmenu div.mmenu-search span').on('click', function(e){
		$('.panel').panel('close');
	});

}(Zepto));
