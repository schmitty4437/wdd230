document.addEventListener("DOMContentLoaded", function () {
    const banner = document.createElement('div');
    banner.id = 'banner';
    banner.innerHTML = `
        <p>Attend the Chamber of Commerce meet and greet today at 7:00 p.m.</p>
        <button id="closeBanner">&times;</button>
    `;
    
    const existingBanner = document.getElementById('banner');
    if (existingBanner) {
        console.log("Banner already exists. Removing existing banner.");
        existingBanner.remove();
    }
    
    document.body.appendChild(banner);
    
    const closeButton = document.getElementById('closeBanner');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            banner.style.display = 'none';
        });
    }
    
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
});
