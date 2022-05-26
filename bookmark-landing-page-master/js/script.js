// /*---------------- tab clicking functionality -----------------*/
const tabs = document.querySelectorAll('.main-tab');
const tabSelectors = document.querySelectorAll('.tab');

tabSelectors.forEach((selector) => {
	selector.onclick = () => {
		tabSelectors.forEach((selector) => {
			selector.classList.remove('active-tab');
		}); // remove active tab class from all selectors

		// add active tab class to the required selector
		selector.classList.add('active-tab');

		tabs.forEach((tab) => (tab.style.display = 'none')); //set all tabs display to none

		// set the required tab display to flex
		if (selector.classList.contains('sb-option-tab')) {
			tabs[0].style.display = 'flex';
		} else if (selector.classList.contains('ss-option-tab')) {
			tabs[1].style.display = 'flex';
		} else if (selector.classList.contains('es-option-tab')) {
			tabs[2].style.display = 'flex';
		}
	};
});

/*------------------- question expanding functionality -----------------*/
const questions = document.querySelectorAll('.title');

questions.forEach((question) => {
	question.onclick = () => {
		question.parentElement
			.querySelector('.answer')
			.classList.toggle('answer-hidden');
		question.querySelector('.handle-down').classList.toggle('handle-display');
		question.querySelector('.handle-up').classList.toggle('handle-display');
	};
});

/*------------------- mobile nav functionality ------------------*/
const logo = document.querySelector('.logo');
const menuButton = document.querySelector('.nav-menu-btn');
const mobileNav = document.querySelector('.mobile-navbar');
const mobileNavCloseBtn = document.querySelector('.close-mobile-nav-btn');

menuButton.onclick = () => {
	mobileNav.style.display = 'flex';
	menuButton.style.display = 'none';
	logo.style.display = 'none';
};
mobileNavCloseBtn.onclick = () => {
	logo.style.display = 'block';
	mobileNav.style.display = 'none';
	menuButton.style.display = 'block';
};
