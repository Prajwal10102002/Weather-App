const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherInfo = document.querySelector('.weather-info');

search.addEventListener('click', () => {
    const api = '0cc66ab6135b4d487288094dc28569fd';
    const city = document.querySelector('.search-box input').value;

    if (city == ''){return;}
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`).then(response =>
        response.json()).then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-info .humidity p');
            const wind = document.querySelector('.weather-info .wind-speed p');

            switch (json.weather[0].main) {
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Snow':
                    image.src = 'images/snowy.png';
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/mist.png';
                    break;
            }

            temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${json.wind.speed}Km/h`;
        });
});