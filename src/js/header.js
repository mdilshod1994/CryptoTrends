$(".header__burger").on("click", function(e){
	e.preventDefault();
	$(".header__container").addClass("active");
});

$(".header__closed").on("click", function(e){
	e.preventDefault();
	$(".header__container").removeClass("active");
});

$(".header__search").on("click", function (e) {
	e.preventDefault();
	$('.search').addClass('active');
});
$(function ($) {
	$(document).on("mouseup", function (e) {
	var div = $(".search.active");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass("active");
		}
	});
});