document.addEventListener('DOMContentLoaded', () => {
    // Display current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Display last modified date
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Static values for temperature and wind speed
    const temperature = 30; // Celsius
    const windSpeed = 5; // km/h

    // Calculate windchill factor
    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
    }

    // Display windchill factor
    const windChillElement = document.querySelector('.cont-weather pre');
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `Temperature: ${temperature}°C\nConditions: Partly Cloudy\nWind: ${windSpeed} km/h\nWind Chill: ${windChill}°C`;
    } else {
        windChillElement.textContent = `Temperature: ${temperature}°C\nConditions: Partly Cloudy\nWind: ${windSpeed} km/h\nWind Chill: N/A`;
    }
});
