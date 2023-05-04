$("[data-tab]").on("click", function (e) {
	e.preventDefault();
	$('.page .tab').removeClass('active');
	$('.page__block').removeClass('active');
	var tab = $(this).data('tab');
	$('[data-tab="' + tab + '"]').toggleClass('active');
	$('[data-tab-block="' + tab + '"]').toggleClass('active');
});