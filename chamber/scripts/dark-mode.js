const modeButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const navLinks = document.querySelectorAll('#larger-nav a');
const menu = document.querySelector('#menu');
const logos = document.querySelectorAll('#logo-mobile img, #larger-nav img, footer .footer-logo');
const socialIcons = document.querySelectorAll('.facebook, .linkedin, .instagram');
const buttons = document.querySelectorAll('.button');
const legends = document.querySelectorAll('legend');
const labels = document.querySelectorAll('label');
const heroHeading = document.querySelector('.herolabel h1');
const links = document.querySelectorAll('a');

modeButton.addEventListener('change', () => {
    if (modeButton.checked) {
        body.style.background = '#000';
        body.style.color = '#fff';
        menu.style.color = '#fff';

        socialIcons.forEach(icon => {
            icon.src = `images/${icon.className.split(' ')[0]}-icon-white.webp`;
        });

        headings.forEach(heading => {
            heading.style.color = '#fff';
        });
        navLinks.forEach(link => {
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
        links.forEach(link => {
            link.style.color = '#fff';
        });
    } else {
        body.style.background = '#F2EBDC';
        body.style.color = '#000';
        menu.style.color = '#254559';

        socialIcons.forEach(icon => {
            icon.src = `images/${icon.className.split(' ')[0]}-icon.webp`;
        });

        headings.forEach(heading => {
            heading.style.color = '#254559';
        });
        navLinks.forEach(link => {
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
        links.forEach(link => {
            link.style.color = '#254559';
        });
    }
});
