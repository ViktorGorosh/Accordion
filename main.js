document.querySelectorAll('.accordion-item__trigger').forEach((item) => {
	item.addEventListener('click', function () {
		item.parentElement.classList.toggle('accordion-item--active');
	});
});