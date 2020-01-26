$(document).ready(() => {
	let currentSlideHome = 0;
	let currentSlideTestimon = 0;

	init()

	function init() {
		$('.slideshow__link:first').addClass('actived');
		$('.testimonial__link:first').addClass('actived');

		activedLink($('.slideshow__link'))
		activedLink($('.testimonial__link'))
		sliderInterval()
	}

	function activedLink(element) {		
		element.click((e) => {
			currentSlideHome = e.target.textContent;
			currentSlideTestimon = e.target.textContent;
			showSlideHome()
			showSlideTestimonial()
		})		
	}	

	function sliderInterval() {
		let interval = setInterval(function(){
			currentSlideHome++;
			currentSlideTestimon++;
			showSlideHome()
			showSlideTestimonial()
		}, 5000);
	}

	function showSlideHome() {
		let leng = $('.home__itens').length;
		let slide = currentSlideHome % leng;
		slide = Math.abs(slide);	

		$('.slideshow__link.actived').removeClass('actived');

		$('.slideshow__link').eq(slide).addClass('actived');

		if(slide === 2) {
			$('.home__container').attr('style', 'left: -200%');
		} else if(slide === 1) {
			$('.home__container').attr('style', 'left: -100%');
		} else {
			$('.home__container').attr('style', 'left: 0');
		}
	}

	function showSlideTestimonial() {
		let leng = $('.testimonial__itens').length;
		let slide = currentSlideTestimon % leng;
		slide = Math.abs(slide);

		$('.testimonial__link.actived').removeClass('actived');

		$('.testimonial__link').eq(slide).addClass('actived');

		if(slide === 3) {
			$('.testimonial__container').attr('style', 'left: -300%');
		} else if(slide === 2) {
			$('.testimonial__container').attr('style', 'left: -200%');
		} else if(slide === 1) {
			$('.testimonial__container').attr('style', 'left: -100%');
		} else {
			$('.testimonial__container').attr('style', 'left: 0');
		}
	}
})
