// import { docReady} from "./imports/utils.js";
// import { initGlobalFunctions, detectContentHeight } from "./main.js";

// docReady(() => {

// 	initGlobalFunctions();

// 	if (document.querySelectorAll('.sss').length > 0) {
// 		const slider1 = new Swiper(".sss", {
// 			spaceBetween: 10,
// 			slidesPerView: 7,
// 			freeMode: true,
// 			watchSlidesProgress: true,
// 			breakpoints: {
// 				1200: {
// 					slidesPerView: 7,
// 				},
// 				960: {
// 					slidesPerView: 5,
// 				},
// 				576: {
// 					slidesPerView: 4,
// 				},
// 				481: {
// 					slidesPerView: 3,
// 				},
// 				320: {
// 					slidesPerView: 3,
// 				}
// 			},
//             thumbs: {
//                 swiper: slider1,
//             },
// 			navigation: {
// 				nextEl: '.swiper-button-next',
// 				prevEl: '.swiper-button-prev',
// 			},
// 		});
// 	}

// });

// window.addEventListener('load', () => {
// 	detectContentHeight();
// });


import { docReady } from "./imports/utils.js";
import { initGlobalFunctions, detectContentHeight } from "./main.js";

docReady(() => {
    initGlobalFunctions();

    if (document.querySelectorAll('.sss').length > 0) {
        const slider1 = new Swiper(".sss", {
            spaceBetween: 10,
            slidesPerView: 7,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                1200: {
                    slidesPerView: 7,
                },
                960: {
                    slidesPerView: 5,
                },
                576: {
                    slidesPerView: 4,
                },
                481: {
                    slidesPerView: 3,
                },
                320: {
                    slidesPerView: 3,
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});

window.addEventListener('load', () => {
    detectContentHeight();
});
