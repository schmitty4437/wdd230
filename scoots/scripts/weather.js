// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const forecastContainer = document.querySelector('#forecast-container');
const banner = document.getElementById('banner');
const currentHumidity = document.querySelector('#current-humidity');
const weatherDescription = document.querySelector('#weather-description');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.48398585956197&lon=-86.96910183483305&units=imperial&appid=fbb8882852ed7e26477c5482b5a6b907';

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

function displayResults(data) {
    // Current weather data
    const currentWeather = data.list[0];
    const tempMax = Math.trunc(currentWeather.main.temp_max);
    const temp = Math.trunc(currentWeather.main.temp);
    const humidity = currentWeather.main.humidity;

    // Update temperature, humidity, and description
    if (currentTemp && currentHumidity && weatherDescription) {
        currentTemp.innerHTML = `${temp}&deg;F`;
        currentHumidity.innerHTML = `Humidity: ${humidity}%`;
        const description = currentWeather.weather[0].description;
        weatherDescription.innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    }

    const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', weatherDescription.textContent);

    // Banner with high temperature
    banner.innerHTML = `
        <p>Today's high temperature: ${tempMax}&deg;F</p>
        <button id="closeBanner">&times;</button>
    `;

    // Close button functionality
    const closeButton = document.getElementById('closeBanner');
    closeButton.addEventListener('click', function() {
        banner.classList.add('hidden');
    });

    // Display weather for tomorrow at 3 PM
    const tomorrowForecast = getTomorrowForecast(data.list);
    displayForecast(tomorrowForecast);
}

function getTomorrowForecast(list) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const forecast = list.filter(item => {
        const date = new Date(item.dt_txt);
        return date.getFullYear() === tomorrow.getFullYear() &&
               date.getMonth() === tomorrow.getMonth() &&
               date.getDate() === tomorrow.getDate() &&
               date.getHours() === 15;
    });

    return forecast.length > 0 ? forecast[0] : null;
}

function displayForecast(forecast) {
    if (forecast) {
        const tempForecast = Math.trunc(forecast.main.temp);
        const descForecast = forecast.weather[0].description;
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

        const forecastHTML = `
            <h3>Tomorrow at 3 PM</h3>
            <figure>
                <img src="${iconsrc}" alt="${descForecast}">
                <p>${tempForecast}&deg;F</p>
                <p>${descForecast.charAt(0).toUpperCase() + descForecast.slice(1)}</p>
            </figure>
        `;
        forecastContainer.innerHTML = forecastHTML;
    } else {
        forecastContainer.innerHTML = '<p>No forecast available for tomorrow at 3 PM.</p>';
    }
}

// Fetch the weather data
document.addEventListener("DOMContentLoaded", apiFetch);
