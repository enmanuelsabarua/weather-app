/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API = 'd9493cf0499c46beb13185646230204';\nconst form = document.querySelector('.form');\nconst city = document.querySelector('#city');\n\nconst weatherStatus = document.querySelector('.weather');\nconst icon = document.querySelector('.icon img');\nconst temp = document.querySelector('.temp');\n\nconst feelsLike = document.querySelector('.feels-like');\nconst wind = document.querySelector('.wind');\nconst humidity = document.querySelector('.humidity');\n\nconst celsBtn = document.querySelector('.cel');\nconst fahreBtn = document.querySelector('.fahre');\ncelsBtn.addEventListener('click', celsius);\nfahreBtn.addEventListener('click', fahrenheit);\n\nlet degree = 'c';\n\nconst data = {};\n\nform.addEventListener('submit', e => getWeather(e, city.value));\n\nasync function getWeather(e, city) {\n    try {\n        if (e) e.preventDefault();\n    \n        const url = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;\n    \n        const response = await fetch(url);\n        const json = await response.json();\n\n        data.condition = json.current.condition;\n        data.feelslike_c = json.current.feelslike_c;\n        data.temp_c = json.current.temp_c;\n        data.feelslike_f = json.current.feelslike_f;\n        data.temp_f = json.current.temp_f;\n        data.wind_kph = json.current.wind_kph;\n        data.humidity = json.current.humidity;\n\n        data.city = json.location.name;\n        data.country = json.location.country;\n\n        updateWeather(data, degree);\n        console.log(data);\n    } catch (error) {\n        console.log(error);\n        handleError();\n    }\n\n\n}\n\nfunction updateWeather(data, degree) {\n    weatherStatus.textContent =  data.condition.text.toLowerCase();\n\n    city.value = data.city;\n    icon.src = data.condition.icon;\n\n    if (degree === 'c') {\n        temp.innerHTML = data.temp_c + '<span class=\"degree\">°C</span>';\n        feelsLike.innerHTML = '<i class=\"fa-solid fa-temperature-three-quarters\"></i> ' + data.feelslike_c + ' <span class=\"icon-text-feelslike\">Feels Like</span>';\n    } else if (degree === 'f') {\n        temp.innerHTML = data.temp_f + '<span class=\"degree\">°F</span>';\n        feelsLike.innerHTML = '<i class=\"fa-solid fa-temperature-three-quarters\"></i> ' + data.feelslike_f + ' <span class=\"icon-text-feelslike\">Feels Like</span>';\n    }\n\n    wind.innerHTML = '<i class=\"fa-solid fa-wind\"></i> ' + data.wind_kph + ' <span class=\"icon-text\">kph</span>';\n    humidity.innerHTML = '<i class=\"fa-solid fa-droplet\"></i> ' + data.humidity + ' <span class=\"icon-text\">%</span>';\n}\n\nfunction celsius() {\n    degree = 'c';\n    celsBtn.classList.add('active');\n    fahreBtn.classList.remove('active');\n    updateWeather(data, degree);\n}\n\nfunction fahrenheit() {\n    degree = 'f';\n    celsBtn.classList.remove('active');\n    fahreBtn.classList.add('active');\n    updateWeather(data, degree);\n}\n\nfunction handleError() {\n    const p = document.createElement('p');\n    p.textContent = 'City not found';\n    p.classList.add('label');\n    p.classList.add('error');\n\n    const container = document.querySelector('.container');\n    container.appendChild(p);\n\n    setTimeout(() => {\n        p.remove();\n    }, 3000);\n}\n\n\ngetWeather(null, 'London');\ncity.value = 'London';\n\n// Input resize snipped\nconst input = document.querySelector('input'); // get the input element\ncity.addEventListener('input', resizeInput); // bind the \"resizeInput\" callback on \"input\" event\nresizeInput.call(city); // immediately call the function\n\nfunction resizeInput() {\n    this.style.width = this.value.length + 1 + \"ch\";\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;