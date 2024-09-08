
import niceSelect from "./nice-select2.js";


//click function
let slideEnd, fadeEnd = null;
const $body = document.body;
const $html = document.documentElement;
const getElement = (selector) => {

    const elem = document.querySelector(selector);

    const attachedElem = Object.assign(elem, {
        onClick: function(callback, ...args) {
            this.addEventListener('click', (e) => {
				callback(e,...args);
			});
        },
		onHover: function(callback, ...args) {
			this.addEventListener('mouseover', (e) => {
				callback(e,...args);
			});
		},
		unHover: function(callback, ...args) {
			this.addEventListener('mouseleave', (e) => {
				callback(e,...args);
			})
		}
    })
	return attachedElem;
}

const resetStyles = ($element, duration, position, display = null) => {
	if(slideEnd) {
		clearTimeout(slideEnd);
	}
	slideEnd = setTimeout(() => {
		$element.style.height = null;
		$element.style.overflow = null;
		$element.style.transition = null;
		if(!display) {
			$element.style.display = null;
			$element.removeAttribute('data-height');
		};
        if(position) {
            $element.style.position = null
        }
		clearTimeout(slideEnd);
	}, duration);
}

const slideDown = ($element, duration = 300, type = 'ease-in-out', blockType = 'block') => {
	$element.style.display = blockType;
	let blockHeight = $element.getAttribute('data-height') ? parseInt($element.getAttribute('data-height')) : parseFloat(window.getComputedStyle($element).height);
	if(!$element.getAttribute('data-height')) {
		$element.setAttribute('data-height', blockHeight);
	}
	let position = window.getComputedStyle($element).position == 'static' ? 'relative' : null;

	$element.style.height = 0;
	$element.style.transition = 'height ' + duration + 'ms ' + type; 
	position ? $element.style.position = position : '';
	$element.style.overflow = 'hidden';

	setTimeout(()=> {
		$element.style.height = blockHeight + 'px';
		resetStyles($element, duration, position, blockType);
	},0);
}

const slideUp = ($element, duration = 300, type = 'ease-in-out') => {
	let blockHeight = parseFloat(window.getComputedStyle($element).height);
	let position = window.getComputedStyle($element).position == 'static' ? 'relative' : null;
	
	$element.style.height = blockHeight + 'px';
	position ? $element.style.position = position : '';
	$element.style.overflow = 'hidden';
	$element.style.transition = 'height ' + duration + 'ms ' + type; 

	setTimeout(()=> {
		$element.style.height = 0 + 'px';
		resetStyles($element, duration, position);
		
	},0);
}

const finishFade = ($element, duration, $display = null) => {
	if(fadeEnd) {
		clearTimeout(fadeEnd);
	};
	fadeEnd = setTimeout(() => {
		$element.style.opacity = null;
		$element.style.transition = null;
		$element.style.overflow = null;
        if(!$display) {
            $element.style.display = null;
        }
		clearTimeout(fadeEnd);
	}, duration);
}

const fadeIn = ($element, duration = 300, type = 'ease-in-out', blockType = 'block') => {
	$element.style.display = blockType;
	// let position = window.getComputedStyle($element).position == 'static' ? 'relative' : null;

	$element.style.opacity = 0;
	$element.style.transition = 'opacity ' + duration + 'ms ' + type; 
	// position ? $element.style.position = position : '';
	$element.style.overflow = 'hidden';

	setTimeout(()=> {
		$element.style.opacity = 1;
		finishFade($element, duration, blockType);
	},0);
}

const fadeOut = ($element, duration = 300, type = 'ease-in-out') => {
	// let position = window.getComputedStyle($element).position == 'static' ? 'relative' : null;
	
	// position ? $element.style.position = position : '';
	$element.style.overflow = 'hidden';
	$element.style.transition = 'opacity ' + duration + 'ms ' + type; 

	setTimeout(()=> {
		$element.style.opacity = 0;
		finishFade($element, duration);
	},0);
}

const closeAllMenues = (evt) => {

	if($$('.drop_block.opened').length > 0 && !evt.target.closest('.drop_inner') || evt.target.classList.contains('close_btn')) {
		slideUp($('.drop_block.opened .drop_inner'));
		$('.drop_block.opened').classList.remove('opened');
	};

	if($$('.search_block.opened').length > 0 && !evt.target.closest('.search_form')) {
		$('.search_block.opened').classList.remove('opened');
	}

	const closeBtn = evt.target.closest('.close_filter');
	if (closeBtn) {
		$body.classList.remove('filter_opened');

		if($$('.clear_block.opened').length > 0) {
			$('.clear_block.opened').classList.remove('opened');
		}
	}
}

const comboHover = ($element, $block) => {
	const hoveredEl = getElement($element);
	const comboMouseOver = (e) => {
		if(e.target.tagName.toLowerCase() === 'a' || e.target.parentNode.tagName.toLowerCase() === 'a') {
			e.target.closest($block).classList.add('hovered');
		} else {
			comboMouseLeave();
		}
	}

	const comboMouseLeave = () => {
		if(document.querySelectorAll('.hovered').length > 0) {
			document.querySelectorAll($block).forEach((item) => {
				item.classList.remove('hovered');
			})
		}
	}

    hoveredEl.onHover(comboMouseOver);
    hoveredEl.unHover(comboMouseLeave);
}

const tabSwitch = (e, btnType = 'button') => {
	e.preventDefault();
	if(e.target.tagName.toLowerCase() === btnType && !e.target.classList.contains('selected')) {
		const tabBtn = e.target;
		const currentActive = tabBtn.parentNode.querySelector('.selected');
		const currentTab = tabBtn.closest('.tab_section').querySelector('.tab_block.selected');
		const tabId = tabBtn.getAttribute('data-tab');
		const newTab = document.querySelector(`.tab_block.${tabId}`);
		currentActive.classList.remove('selected');
		currentTab.classList.remove('selected');
		tabBtn.classList.add('selected');
		newTab.classList.add('selected');
		
	}
}

const callPopup = (popupKey) => {

	let popupBlock = document.querySelector(`.${popupKey}_popup`);
	const popupTemplate = document.querySelector(`.${popupKey}_template`);

	if (popupBlock || popupTemplate) {
		let popupCreateTime = 0;
		if (!popupBlock) {
			popupCreateTime = 300;
			$body.insertAdjacentHTML('beforeend', popupTemplate.innerHTML);
			validateBtn();
			if (document.querySelectorAll('.city_select').length > 0) {
				selectElements();
			}
			popupBlock = document.querySelector(`.${popupKey}_popup`);
			popupTemplate.remove();

		}
		$body.classList.add('popup_opened');
		setTimeout(() => {
			popupBlock.classList.add('showed');
			const closeBtn = getElement('.showed .popup_container');
			closeBtn.onClick(closePopup);
		}, popupCreateTime)
	}
};

const selectElements = (target) => {
	const mySelectElements = document.querySelectorAll('.city_select');

	if (mySelectElements.length > 0) {
		const niceSelectOptions = {
			showSelectedItems: true,
		};

		mySelectElements.forEach((selectElement) => {
			new niceSelect(selectElement, niceSelectOptions);
		});
	}
};

const openPopupByBtn = (e) => {
	const popupId = e.target.getAttribute('data-popup');
	callPopup(popupId);
}

const $ = (element) => {
	return document.querySelector(element);
}

const $$ = (elements) => {
	return document.querySelectorAll(elements);
}

const showDropBlock = (evt) => {
	if(evt.target.classList.contains('drop_btn') || evt.target.parentNode.classList.contains('drop_btn')) {
		const dropParent = evt.target.closest('div');
		const dropElement = dropParent.querySelector('.drop_inner');
		if(!dropParent.classList.contains('opened')) {
			closeAllMenues(evt);
			evt.stopPropagation();
			dropParent.classList.add('opened');
			slideDown(dropElement);
		}
	}
}

const closePopup = (e) => {
	if(!e || e.target.classList.contains('popup_close')) {
		if(document.querySelectorAll('.popup_block.showed').length > 0) {
			$body.classList.remove('popup_opened');
			document.querySelector('.popup_block.showed').classList.remove('showed');
		}
	}
}

const resizeTextarea = ($area) => {
	$area.setAttribute("style", "height:" + ($area.scrollHeight) + "px");
	$area.addEventListener("input", OnInput, false);

	function OnInput() {
		this.style.height = 0;
		this.style.height = (this.scrollHeight + 10)  + "px";
	}
}


//detecting document ready state
const docReady = (fn) => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

export {
	resetStyles,
	slideDown,
	slideUp,
	fadeIn,
	fadeOut,
	getElement,
	docReady,
	comboHover,
	closeAllMenues,
	tabSwitch,
	callPopup,
	openPopupByBtn,
	$,
	$$,
	closePopup,
	showDropBlock,
	selectElements,
	$body,
	$html
}