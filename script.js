document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
                return;
            }

            const cityName = data.name;
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            document.getElementById('city-name').textContent = cityName;
            document.getElementById('weather-description').textContent = weatherDescription;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;

            document.getElementById('weather-result').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
