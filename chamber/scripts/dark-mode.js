const modeButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
const nav = document.querySelectorAll('#larger-nav a');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo-mobile img, #larger-nav img');

modeButton.addEventListener('change', () => {
    if (modeButton.checked) {
        body.style.background = '#000';
        body.style.color = '#fff';
        menu.style.color = '#fff';
        logo.src = 'images/ecc-logo-white.svg';
        headings.forEach(heading => {
            heading.style.color = '#fff';
        });
        nav.forEach(link => {
            link.style.color = '#fff';
        });
    } else {
        body.style.background = '#F2EBDC';
        body.style.color = '#000';
        menu.style.color = '#254559';
        logo.src = 'images/ecc-logo.svg';
        headings.forEach(heading => {
            heading.style.color = '#254559';
        });
        nav.forEach(link => {
            link.style.color = '#254559';
        })
    }
});
