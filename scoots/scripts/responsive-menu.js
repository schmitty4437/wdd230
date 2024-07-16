const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.main-nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});