import { getElement, docReady, comboHover, tabSwitch, callPopup, openPopupByBtn, $, $$ } from "./imports/utils.js";
import { initGlobalFunctions, detectContentHeight } from "./main.js";



//call document ready function and init all in ready
docReady(() => {
    //global functions for all pages from main.js file
	initGlobalFunctions();


	// callPopup('callback');

	// document.querySelector('.popup_btn').addEventListener('click', openPopupByBtn)


	
    
})

//detect window load state and call functions 
window.addEventListener('load', () => {
    detectContentHeight();

	window.addEventListener('resize', () => {
		detectContentHeight();
	})
});