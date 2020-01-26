$(document).ready(() => {
	const WIDTH = 990;

	$('.btn__menu').click(() => {
		$('.header__navbar').toggleClass('menuOpen');	
	})

	$('.navbar__ul').click(() => {
		$('.btn__menu').click();
	})

	$('.dropdown').hover(() => {
		$('.navbar__hide').toggleClass('menuOpen');
	})

	$(window).resize(() => {
		if(window.innerWidth > WIDTH) {
			$('.header__navbar').removeClass('menuOpen');
			$('.navbar__hide').removeClass('menuOpen');
		}
	})

	$(window).scroll(() => {
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			$('.header').addClass('header__scroll');
		} else {
			$('.header').removeClass('header__scroll');
		}
	})
})