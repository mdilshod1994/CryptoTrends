// form
$('form').on("submit", function (e) {

	var form = $(this),
		errors = true,
		notice = $('.form__error');

	form.find('[type="text"][type="password"]').each(function () {
		if (errors) {
			var field = $(this);
			var val = field.val();

			if (val == '') {
				notice.addClass('active');
				field.addClass('field-error');
				setTimeout(function () {
					notice.removeClass('active');
				}, 2000);
				errors = false;
				field.focus();
			} else {
				$(this).removeClass('field-error');
				$(".modal__btn").prop('disabled', false);
			}
		}
	});

	if (errors) {
		return true;
	} else {
		return false;
	}

});

$(".form__password-icon").on("click", function(e) {
    e.preventDefault();
    let valueType = $(this).parent().find(".field");
    if (valueType.attr('type') === 'password') {
        valueType.attr('type', 'text');
        $(this).addClass("active");
    } else {
        valueType.attr('type', 'password');
        $(this).removeClass("active");
    }
});
