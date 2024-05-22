const modeButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const headings = document.querySelectorAll('h2, h3, h4, h5, h6');

modeButton.addEventListener('change', () => {
    if (modeButton.checked) {
        body.style.background = '#000';
        body.style.color = '#fff';
        headings.forEach(heading => {
            heading.style.color = '#fff';
        });
    } else {
        body.style.background = '#F2EBDC';
        body.style.color = '#000';
        headings.forEach(heading => {
            heading.style.color = '#254559';
        });
    }
});
