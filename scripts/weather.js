// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const separator = document.querySelector('#separator');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.31423144940347&lon=-112.00788379485049&units=imperial&appid=fbb8882852ed7e26477c5482b5a6b907';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
}

apiFetch();

function displayResults(data) {    
    // no decimal places
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let desc = data.weather[0].description;
    desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    if (currentTemp.textContent && desc) {
        separator.style.display = 'inline';
    } else {
        separator.style.display = 'none';
    }
}
