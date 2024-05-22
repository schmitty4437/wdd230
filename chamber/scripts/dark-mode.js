const modeButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const slider = document.querySelector('.slider:before');
const headings = document.querySelectorAll('h2, h3, h4, h5, h6');

modeButton.addEventListener('change', () => {
    if (modeButton.checked) {
        body.style.background = '#000';
        body.style.color = '#fff';
        headings.forEach(heading => {
            heading.style.color = '#fff';
        });
        // Update the SVG icon by setting the background image or content
        slider.style.content = 'url(../images/light-mode-button.svg)';
    } else {
        body.style.background = '#F2EBDC';
        body.style.color = '#000';
        headings.forEach(heading => {
            heading.style.color = '#254559';
        });
        // Update the SVG icon by setting the background image or content
        slider.style.content = 'url(../images/dark-mode-button.svg)';
    }
});