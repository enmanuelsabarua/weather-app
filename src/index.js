const API = 'd9493cf0499c46beb13185646230204';
const form = document.querySelector('.form');
const city = document.querySelector('#city');

const weatherStatus = document.querySelector('.weather');
const icon = document.querySelector('.icon img');
const temp = document.querySelector('.temp');

const feelsLike = document.querySelector('.feels-like');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const celsBtn = document.querySelector('.cel');
const fahreBtn = document.querySelector('.fahre');
celsBtn.addEventListener('click', celsius);
fahreBtn.addEventListener('click', fahrenheit);

let degree = 'c';

const data = {};

form.addEventListener('submit', e => getWeather(e, city.value));

async function getWeather(e, city) {
    try {
        if (e) e.preventDefault();
    
        const url = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;
    
        const response = await fetch(url, {mode: "cors"});
        const json = await response.json();

        data.condition = json.current.condition;
        data.feelslike_c = json.current.feelslike_c;
        data.temp_c = json.current.temp_c;
        data.feelslike_f = json.current.feelslike_f;
        data.temp_f = json.current.temp_f;
        data.wind_kph = json.current.wind_kph;
        data.humidity = json.current.humidity;

        data.city = json.location.name;
        data.country = json.location.country;

        updateWeather(data, degree);
        console.log(data);
    } catch (error) {
        console.log(error);
        handleError();
    }


}

function updateWeather(data, degree) {
    weatherStatus.textContent =  data.condition.text.toLowerCase();

    city.value = data.city;
    icon.src = data.condition.icon;

    if (degree === 'c') {
        temp.innerHTML = data.temp_c + '<span class="degree">°C</span>';
        feelsLike.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i> ' + data.feelslike_c + ' <span class="icon-text-feelslike">Feels Like</span>';
    } else if (degree === 'f') {
        temp.innerHTML = data.temp_f + '<span class="degree">°F</span>';
        feelsLike.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i> ' + data.feelslike_f + ' <span class="icon-text-feelslike">Feels Like</span>';
    }

    wind.innerHTML = '<i class="fa-solid fa-wind"></i> ' + data.wind_kph + ' <span class="icon-text">kph</span>';
    humidity.innerHTML = '<i class="fa-solid fa-droplet"></i> ' + data.humidity + ' <span class="icon-text">%</span>';
}

function celsius() {
    degree = 'c';
    celsBtn.classList.add('active');
    fahreBtn.classList.remove('active');
    updateWeather(data, degree);
}

function fahrenheit() {
    degree = 'f';
    celsBtn.classList.remove('active');
    fahreBtn.classList.add('active');
    updateWeather(data, degree);
}

function handleError() {
    const p = document.createElement('p');
    p.textContent = 'City not found';
    p.classList.add('label');
    p.classList.add('error');

    const container = document.querySelector('.container');
    container.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 3000);
}


getWeather(null, 'London');
city.value = 'London';

// Input resize snipped
const input = document.querySelector('input'); // get the input element
city.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(city); // immediately call the function

function resizeInput() {
    this.style.width = this.value.length + 1 + "ch";
}