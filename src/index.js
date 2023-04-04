const API = 'd9493cf0499c46beb13185646230204';
const form = document.querySelector('.form');
const city = document.querySelector('#city');

const weatherStatus = document.querySelector('.weather');
const icon = document.querySelector('.icon img');
const data = {};

form.addEventListener('submit', e => getWeather(e, city.value));

async function getWeather(e, city) {
    try {
        if (e) {
            e.preventDefault();
        }
    
        const url = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;
    
        const response = await fetch(url);
        const json = await response.json();

        data.condition = json.current.condition;
        data.feelslike_c = json.current.feelslike_c;
        data.temp_c = json.current.temp_c;
        data.wind_kph = json.current.wind_kph;
        data.humidity = json.current.humidity;

        data.city = json.location.name;
        data.country = json.location.country;

        updateWeather(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }


}

function updateWeather(data) {
    weatherStatus.textContent =  data.condition.text.toLowerCase();
    city.value = data.city;
    icon.src = data.condition.icon;
}

getWeather(null, 'London');