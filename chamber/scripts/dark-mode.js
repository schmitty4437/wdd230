const modeButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const slider = document.querySelector('.slider:before');

modeButton.addEventListener('change', () => {
    if (modeButton.checked) {
        body.style.background = '#000';
        body.style.color = '#fff';
        // Update the SVG icon by setting the background image or content
        slider.style.content = 'url(../images/light-mode-button.svg)';
    } else {
        body.style.background = '#F2EBDC';
        body.style.color = '#000';
        // Update the SVG icon by setting the background image or content
        slider.style.content = 'url(../images/dark-mode-button.svg)';
    }
});