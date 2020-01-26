$(document).ready(() => {
	const debounce = function(func, wait, immediate) {
		let timeout;
		return function(...args) {
			const context = this;
			const later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			const callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	function animaScroll() {
		const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

		$('[data-anima]').each(function() {
			((windowTop) > this.offsetTop) ? $(this).addClass('animationScroll') : $(this).removeClass('animationScroll');
		})
	}

	animaScroll();

	if($('[data-anima]').length) $(window).scroll(debounce(() => animaScroll(), 200))


	/*--------------Scroll smooth--------------*/
	$('.header__navbar a[href^="#"]').click(scrollToId);

	function scrollToId(event) {
		event.preventDefault();
		const to = getScrollTop(event.target) - 50;
		scrollToPosition(to);
	}

	function getScrollTop(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}

	function scrollToPosition(to) {
		window.scroll({
			top: to,
			behavior: "smooth",
		});
	}
})