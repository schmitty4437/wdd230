// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Current date in milliseconds
const today = Date.now();

// Milliseconds to days
const msToDays = 1000 * 60 * 60 *24;

//Get stored value in localStorage
let lastVisit = window.localStorage.getItem("lastVisit");

//Use if/else to see if it is the users first visit or not.
if(lastVisit !== null) {
    //Calculating number of days between their visists
    let daysBetweenVisits = (today - Number(lastVisit)) / msToDays;
    daysBetweenVisits = Math.floor(daysBetweenVisits);

    if (daysBetweenVisits < 1) {
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        visitsDisplay.textContent = `You last visisted ${daysBetweenVisits} days ago.`;
    }
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

visitsDisplay.classList.add('label');
visitsDisplay.classList.add('label-visits');

// Store new visit
localStorage.setItem("lastVisit", today);