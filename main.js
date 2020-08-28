$(document).ready(function () {
	$('.accordion-item__trigger').click(function () {
		const parent =  $(this).parent();
		if (parent.hasClass('accordion-item--active')) {
			parent.removeClass('accordion-item--active');
		} else {
			$('.accordion-item--active').removeClass('accordion-item--active');
			parent.addClass('accordion-item--active');
		}
	});
});