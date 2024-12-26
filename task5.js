const apiKey = 'your-api-key-here'; // Replace with your OpenWeatherMap API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

getWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a city name');
    }
});

function getWeather(location) {
    // API URL to get weather data by city name
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Something went wrong. Please try again later.');
        });
}

function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = data.main.temp;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;

    weatherInfo.style.display = 'block';
}
