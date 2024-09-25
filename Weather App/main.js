const apiKey = 'YOUR_API_KEY';
const getWeatherBtn = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const weatherCity = document.getElementById('weather-city');
const weatherDescription = document.getElementById('weather-description');
const weatherTemp = document.getElementById('weather-temp');
const weatherHumidity = document.getElementById('weather-humidity');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        
        weatherCity.textContent = `Weather in ${data.name}`;
        weatherDescription.textContent = `Description: ${data.weather[0].description}`;
        weatherTemp.textContent = `Temperature: ${data.main.temp}°C`;
        weatherHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        weatherCity.textContent = error.message;
        weatherDescription.textContent = '';
        weatherTemp.textContent = '';
        weatherHumidity.textContent = '';
    }
}
