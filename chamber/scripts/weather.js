// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const separator = document.querySelector('#separator');
const forecastContainer = document.querySelector('#forecast-container');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.31423144940347&lon=-112.00788379485049&units=imperial&appid=fbb8882852ed7e26477c5482b5a6b907';

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
    // Current weather data
    const currentWeather = data.list[0];
    currentTemp.innerHTML = `${Math.trunc(currentWeather.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

    let desc = currentWeather.weather[0].description;
    desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    if (currentTemp.textContent && desc) {
        separator.style.display = 'inline';
    } else {
        separator.style.display = 'none';
    }

    // 3 day forecast
    const forecast = getThreeDayForecast(data.list);
    displayForecast(forecast);
}

function getThreeDayForecast(list) {
    const forecast = [];
    const addedDates = new Set();

    for (const item of list) {
        const date = new Date(item.dt_txt);
        const dateString = date.toLocaleDateString();

        // verify if date is in forecast or not
        if (!addedDates.has(dateString)) {
            forecast.push({
                date: item.dt_txt,
                temp: item.main.temp,
                description: item.weather[0].description,
                icon: item.weather[0].icon
            });

            addedDates.add(dateString);

            // Only grabbing 3 future days
            if (forecast.length === 3) {
                break;
            }
        }
    }

    return forecast;
}

function displayForecast(forecast) {
    forecastContainer.innerHTML = '';
    forecast.forEach(day => {
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('forecast-day');

        const date = new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' });
        const temp = `${Math.trunc(day.temp)}&deg;F`;
        const desc = day.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const icon = `https://openweathermap.org/img/w/${day.icon}.png`;

        dayContainer.innerHTML = `
            <p>${date}</p>
            <img src="${icon}" alt="${desc}">
            <p>${temp}</p>
            <p>${desc}</p>
        `;

        forecastContainer.appendChild(dayContainer);
    });
}
