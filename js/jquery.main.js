var $ = jQuery.noConflict();
jQuery(function () {
	isElementExist(".hero-slider", initHeroSlider);
	isElementExist(".article-slider", initCardSlider);

	initMenu();
	initSearchForm();
	headerScrollUp();
});

//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// Helper if element exist then call function
function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch (e) {
			console.log(e);
		}
	}
}

function initMenu(){
	$('.menu__item').each(function () {
		if ($(this).find('.sub-menu').length) {
			$(this).addClass('has-submenu');
		}
	});

	$('.menu__link').on('click', function (e) {
		if ($(this).siblings('.sub-menu').length && !$(this).closest('.menu__item').hasClass('submenu-open')) {
			e.preventDefault();
			$(this).closest('.menu__item').addClass('submenu-open');
			$(this).closest('.menu__item').siblings('li.submenu-open').find('.menu__item.submenu-open').removeClass('submenu-open');
			$(this).closest('.menu__item').siblings('li.submenu-open').removeClass('submenu-open');
		}
	});

	$('.nav-opener').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-active');
	})
};

function initSearchForm() {
	$('.header-search .btn-search').on('click', function () {
		if (!$(this).closest('.header-search').hasClass('open')) {
			$(this).closest('.header-search').addClass('open');
			return false;
		} else if (!$(this).closest('.header-search').find('input.form-control').val().length) {
			$(this).closest('.header-search').removeClass('open');
			return false;
		}
	});

	$('.btn-cancel').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.header-search').removeClass('open');
	});
}

function headerScrollUp() {
	var lastScrollTop = jQuery(window).scrollTop();
	jQuery(window).on('scroll load', function (event) {
		var st = jQuery(window).scrollTop();
		lastScrollTop = st;

		if (st > 0) {
			jQuery('.header').addClass('header--fixed');
		} else {
			jQuery('.header').removeClass('header--fixed');
		}
	});
}

function initHeroSlider() {
	$(".hero-slider").each(function () {
		const self = this;
		var swiper = new Swiper(this, {
			slidesPerView: 'auto',
			// navigation: {
			// 	nextEl: $(self).closest('section').find(".slider-nav__next").get(0),
			// 	prevEl: $(self).closest('section').find(".slider-nav__prev").get(0),
			// },
		});
	});
}


function initCardSlider() {
	$(".article-slider").each(function () {
		const self = this;
		var swiper = new Swiper(this, {
			slidesPerView: 'auto',
			spaceBetween: 18,
			navigation: {
				nextEl: $(self).closest('.slider-wrap').find(".slider-nav__next").get(0),
				prevEl: $(self).closest('.slider-wrap').find(".slider-nav__prev").get(0),
			},
			breakpoints: {
			  1024: {
				spaceBetween: 32,
			  },
			},
		});
	});
}

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

// jcf library select, radio, checkbox modules

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------