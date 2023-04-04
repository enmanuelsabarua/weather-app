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

eval("const API = 'd9493cf0499c46beb13185646230204';\nconst form = document.querySelector('.form');\nconst city = document.querySelector('#city');\n\nconst weatherStatus = document.querySelector('.weather');\nconst icon = document.querySelector('.icon img');\nconst data = {};\n\nform.addEventListener('submit', e => getWeather(e, city.value));\n\nasync function getWeather(e, city) {\n    try {\n        if (e) {\n            e.preventDefault();\n        }\n    \n        const url = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;\n    \n        const response = await fetch(url);\n        const json = await response.json();\n\n        data.condition = json.current.condition;\n        data.feelslike_c = json.current.feelslike_c;\n        data.temp_c = json.current.temp_c;\n        data.wind_kph = json.current.wind_kph;\n        data.humidity = json.current.humidity;\n\n        data.city = json.location.name;\n        data.country = json.location.country;\n\n        updateWeather(data);\n        console.log(data);\n    } catch (error) {\n        console.log(error);\n    }\n\n\n}\n\nfunction updateWeather(data) {\n    weatherStatus.textContent =  data.condition.text.toLowerCase();\n    city.value = data.city;\n    icon.src = data.condition.icon;\n}\n\ngetWeather(null, 'London');\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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