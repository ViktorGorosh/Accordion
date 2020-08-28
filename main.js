document.querySelectorAll('.accordion-item__trigger').forEach((item) => {
	item.addEventListener('click', function () {
		const parent = item.parentNode;
		if ( parent.classList.contains('accordion-item--active') ) {
			parent.classList.remove('accordion-item--active');
		} else {
			document.querySelectorAll('.accordion-item').forEach((single) => {
				single.classList.remove('accordion-item--active');
			});
			parent.classList.add('accordion-item--active');
		}
	});
});