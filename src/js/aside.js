$(".page__filter").on("click", function(e){
	e.preventDefault();
	$("body").addClass("lock");
	$(".aside").addClass("active");
});

$(".aside__closed").on("click", function(e){
	e.preventDefault();
	$("body").removeClass("lock");
	$(".aside").removeClass("active");
});

$(function ($) {
	$(document).on("mouseup", function (e) {
	var div = $(".aside__wrap");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$("body").removeClass("lock");
		$(".aside").removeClass("active");
		}
	});
});