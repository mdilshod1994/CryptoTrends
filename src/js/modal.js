$('.callback--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#callback-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.transaction--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#transaction-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.quiz--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#quiz-modal',
		baseClass: 'quiz-fancybox',
		touch: false,
	});
});

$('.quiz-modal--js').on('click', function (event) {
	event.preventDefault();
	$(".quiz-modal__info").show(300);
	$(".quiz-modal__checbox-icon").addClass("hidden");
	$(this).addClass("hidden");
	$(".quiz-modal__closed").addClass("quiz-modal--cancel").removeClass("quiz-modal__closed--fancybox");
	const infoLines = document.querySelectorAll('.quiz-modal__info-line');
	infoLines.forEach(infoLine => {
		const width = parseFloat(infoLine.querySelector('span').style.width);
	if (width < 40) {
		infoLine.classList.add('red');
	} else if (width < 70) {
		infoLine.classList.add('yellow');
	} else {
		infoLine.classList.add('green');
	}
	});
});

$('body').on('click', ".quiz-modal--cancel", function (event) {
	event.preventDefault();
	$(".quiz-modal__info").hide(300);
	$(this).removeClass("quiz-modal--cancel").addClass("quiz-modal__closed--fancybox");
	$(".quiz-modal__checbox-icon").removeClass("hidden");
	$(".quiz-modal--js").removeClass("hidden");
});

$("body").on('click', ".quiz-modal__closed--fancybox", function (event) {
	$.fancybox.close();
});

$("[data-modal]").on("click", function (e) {
	e.preventDefault();
	$('.modal__tab').removeClass('active');
	$('.modal__block').removeClass('active');
	var tabModal = $(this).data('modal');
	$('[data-modal="' + tabModal + '"]').toggleClass('active');
	$('[data-modal-block="' + tabModal + '"]').toggleClass('active');
});

new AirDatepicker('.form-data');