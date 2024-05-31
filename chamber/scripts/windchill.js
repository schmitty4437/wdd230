const temperatureElement = document.getElementById("temperature");
const windspeedElement = document.getElementById("windspeed");

document.addEventListener("DOMContentLoaded", function() {
    if (temperatureElement && windspeedElement) {
        const temperature = parseFloat(temperatureElement.textContent);
        const windspeed = parseFloat(windspeedElement.textContent);

        // Function for calculating wind chill
        function calculateWindChill(temperature, windspeed) {
            if (temperature <= 50 && windspeed > 3) {
                // Formula for wind chill
                const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
                return windChill.toFixed(2);
            } else {
                return "N/A";
            }
        }

        // Calculate wind chill
        const windChill = calculateWindChill(temperature, windspeed);

        // Display wind chill on home page
        document.getElementById("windchill").textContent = windChill;
    } else {
        console.error("Not found");
    }
});
