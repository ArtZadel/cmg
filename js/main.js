import { activateMenu } from "./imports/header.js";
import { closeAllMenues, getElement, $body, $html, $, $$,selectElements,openPopupByBtn } from "./imports/utils.js";

const body = getElement('body'); //body as clickable element

const $mobileSize = 1024; 

//web/touch detect function
const isTouchDevice = () => {
	return 'ontouchstart' in document.documentElement;
};

//viewport meta change function for ios devices during touch and focusout fields with small font sizes
const changeIosMeta = () => {
	const fields = $$('input, textarea');
	if(body.classList.contains('ios_device') && fields.length > 0) {
		
		const viewPortMeta = $('meta[name="viewport"]'); //viewport meta
		const standardMeta = "width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover"; //viewport meta content standard value
		const unScaleMeta = "width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"; //viewport meta content unscaleable value for ios devices with fields with small font sizes
		let metaChange = null; //meta content value change indicator

		fields.forEach((field) => {
			const fieldFontSize = parseFloat(window.getComputedStyle(field).fontSize);
			if (fieldFontSize < 16) {
				field.addEventListener('touchstart', () => {
					if(metaChange) {
						clearTimeout(metaChange);
					}

					viewPortMeta.content = unScaleMeta;
				});

				field.addEventListener('focusout', () => {
					if(metaChange) {
						clearTimeout(metaChange);
					}
					metaChange = setTimeout(()=> {
						viewPortMeta.content = standardMeta;
					},300)
				})
			}
		})  
	}
}

// device type and ios detect function;
const detectDevice = () => {

	//detect ios device or not
	if(navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
		$body.classList.add('ios_device');       
	};	 

	//detect touch device or not
	if(isTouchDevice()) {
		$html.classList.add('touch');

		changeIosMeta();
		
	} else {
		$html.classList.add('web');
	}
}

//device call posibillity detect function
const detectCallPosibillity = () => {
	const phoneLink = $$('[href*="tel:"]');
	if(phoneLink.length > 0 && !/Android|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		phoneLink.forEach((link,index) => {
			link.removeAttribute('href');
		})
	}
}

const detectContentHeight = () => {
	let footerHeight = $$('.footer').length > 0 ? parseFloat(window.getComputedStyle($('.footer')).height) : 0;
	let headerHeight = $$('.header').length > 0  && $('.header').style.position != 'fixed' ? parseFloat(window.getComputedStyle($('.header')).height) : 0;
	
	let freeSpace = window.innerHeight - Math.round(footerHeight) - Math.round(headerHeight) - 1;
	if (freeSpace > 0) {
		$('.content').style.minHeight = freeSpace + 'px';
	} else {
		$('.content').style.minHeight = null;
	};
	$('.footer').style.opacity = 1;
}

let popupBtns = document.querySelectorAll('.popup_btn');
popupBtns.forEach((btn) => {
	btn.addEventListener('click', openPopupByBtn);
});


//group all global functions in one function for exporting
const initGlobalFunctions = () => {
	detectDevice();
	detectCallPosibillity();

	activateMenu(isTouchDevice(), $mobileSize);
	
	
	selectElements();

	body.onClick(closeAllMenues);


}

export {
	initGlobalFunctions,
	detectContentHeight
}