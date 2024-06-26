// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Get stored value if it exists in localStorage. If missing assign 0 to numVisits
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//Use if/else to see if it is the users first visit or not.
if(numVisits !==0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is  your first visit.`;
}

// Increment number of visits
numVisits++;

// Store new visit total in localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);