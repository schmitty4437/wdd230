const modeButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const nav = document.querySelectorAll('#larger-nav a');
const menu = document.querySelector('#menu');
const logos = document.querySelectorAll('#logo-mobile img, #larger-nav img, footer .footer-logo');
const facebook = document.querySelector('.facebook');
const linkedin = document.querySelector('.linkedin');
const instagram = document.querySelector('.instagram');
const buttons = document.querySelectorAll('.button');
const legends = document.querySelectorAll('legend');
const labels = document.querySelectorAll('label');
const heroHeading = document.querySelector('.herolabel h1');


modeButton.addEventListener('change', () => {
    if (modeButton.checked) {
        body.style.background = '#000';
        body.style.color = '#fff';
        menu.style.color = '#fff';

        facebook.src = 'images/facebook-icon-white.webp';
        linkedin.src = 'images/linkedin-logo-white.webp';
        instagram.src = 'images/instagram-icon-white.webp';

        headings.forEach(heading => {
            heading.style.color = '#fff';
        });
        nav.forEach(link => {
            link.style.color = '#fff';
        });
        buttons.forEach(button => {
            button.style.background = '#F29849';
            button.style.color = '#254559';
        });
        logos.forEach(logo => {
            logo.src = 'images/ecc-logo-white.webp';
        });
        if (heroHeading) {
            heroHeading.style.color = '#fff'; 
        }
    } else {
        body.style.background = '#F2EBDC';
        body.style.color = '#000';
        menu.style.color = '#254559';

        facebook.src = 'images/facebook-icon.webp';
        linkedin.src = 'images/linkedin-logo.webp';
        instagram.src = 'images/instagram-icon.webp';

        headings.forEach(heading => {
            heading.style.color = '#254559';
        });
        nav.forEach(link => {
            link.style.color = '#254559';
        });
        buttons.forEach(button => {
            button.style.background = '#254559';
            button.style.color = '#F2EBDC';
        });
        logos.forEach(logo => {
            logo.src = 'images/ecc-logo.webp';
        });
        if (heroHeading) {
            heroHeading.style.color = '#F29849';
        }
    }
});
