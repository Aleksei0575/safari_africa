// Как-то коряво работает при переключении экранов ент меню на десктоп
// $(function(){
//   $('.header__open-menu').on('click', function () {
//     $(this).toggleClass('header__close-menu');
//     if ($(window).width() < 768) {
//       $('.header__nav').toggle('display', '');
//     }
// 	});
// });

// Слайдер для блока gallery
$('.gallery-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<img class="gallery-slider__arrows gallery-slider__arrows--left" src="img/sprite/icon-prew.svg" alt="Стрелка влево">',
  nextArrow: '<img class="gallery-slider__arrows gallery-slider__arrows--right" src="img/sprite/icon-next.svg" alt="Стрелка вправо">',
  // // variableWidth: true,
  focusOnSelect: true,
  //slidesPerRow: 2,
	// 	responsive: [
	// 		// {
	// 		// 	breakpoint: 1024,
	// 		// 	settings: {
  //     //     slidesToShow: 3,
  //     //     centerMode: true,
  //     //     // focusOnSelect: true,
	// 		// 	}
	// 		// },
	// 		// {
	// 		// 	breakpoint: 960,
	// 		// 	settings: {
	// 		// 		slidesToShow: 1,
  //     //     centerMode: true,
  //     //     arrows: false,
	// 		// 	}
	// 		// },
	// 		// {
	// 		// 	breakpoint: 768,
	// 		// 	settings: {
	// 		// 		slidesToShow: 1,
  //     //     centerMode: true,
  //     //     arrows: false,
	// 		// 	}
	// 		// },
	// 		// {
	// 		// 	breakpoint: 480,
	// 		// 	settings: {
	// 		// 		slidesToShow: 1,
  //     //     centerMode: true,
  //     //     arrows: false,
  //     //     variableWidth: true,
	// 		// 	}
	// 		// },
	// 	]
});

// 'use strict';
// // меню
// (function () {
//   var navBtn = document.querySelector('.header__open-menu');
//   var nav = document.querySelector('.header__nav');
//
//   if (navBtn && nav) {
//     navBtn.addEventListener('click', openNav);
//   }
//
//   function openNav(evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//
//     if (navBtn.classList.contains('header__close-menu')) {
//       navBtn.classList.remove('header__close-menu');
//       nav.style.display = '';
//     } else {
//       navBtn.classList.add('header__close-menu');
//       nav.style.display = 'block';
//     }
//   }
// })();

$(document).ready(function() {
  $('.gallery-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    // image: {
    //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //   titleSrc: function(item) {
    //     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    //   }
    // }
  });
});

