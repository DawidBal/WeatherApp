/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ \"./src/modules/DOM.js\");\n\r\n\r\n_modules_DOM__WEBPACK_IMPORTED_MODULE_0__.default.init('Cracow');\r\n\n\n//# sourceURL=webpack://api-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/modules/auth.js\");\n\r\n\r\n// HTML Elements\r\nconst { body } = document;\r\nconst cityInput = document.querySelector('#city');\r\nconst searchBtn = document.querySelector('.js-search');\r\nconst tempText = document.querySelector('.js-dataTemp');\r\nconst cityText = document.querySelector('.js-cityName');\r\nconst feelsTempText = document.querySelector('.js-feelsLike');\r\nconst humidityText = document.querySelector('.js-humidity');\r\nconst pressureText = document.querySelector('.js-pressure');\r\nconst printMsg = document.querySelector('.js-printMsg');\r\nconst weatherText = document.querySelector('.js-weather');\r\nconst weatherList = [\r\n  'Drizzle',\r\n  'Snow',\r\n  'Rain',\r\n  'Clouds',\r\n  'Clear',\r\n  'Thunderstorm',\r\n];\r\n\r\nconst toggleAnimation = (delay = 175, name) => {\r\n  let timer;\r\n  return function (element) {\r\n    clearTimeout(timer);\r\n    element.classList.add(name);\r\n    timer = setTimeout(() => {\r\n      element.classList.remove(name);\r\n    }, delay);\r\n  };\r\n};\r\n\r\n// Message box animation\r\nconst msgBoxAnim = toggleAnimation(1500, 'fadeIn-up');\r\n\r\nconst printMessage = (message) => {\r\n  printMsg.style.cssText =\r\n    '--printMsgColor: var(--white);--printTextColor: var(--primary)';\r\n\r\n  printMsg.textContent = message;\r\n  msgBoxAnim(printMsg);\r\n};\r\n\r\nconst getUsedData = (data) => {\r\n  const {\r\n    name: cityName,\r\n    main: { humidity, pressure, temp, feels_like: feelsLike },\r\n    weather,\r\n  } = data;\r\n  return { cityName, humidity, pressure, temp, weather, feelsLike };\r\n};\r\n\r\nconst getWeatherName = (weather) => weather[0].main;\r\n\r\nconst switchBackground = ({ weather }) => {\r\n  const weatherName = weatherList.includes(getWeatherName(weather))\r\n    ? getWeatherName(weather).toLowerCase()\r\n    : 'default';\r\n  body.classList.forEach((value) => body.classList.remove(value)); // Remove every class on body\r\n  body.classList.add(weatherName); // Add class based on weather of fetched city\r\n};\r\n\r\n// Update Elements Section\r\nconst updateTemp = ({ temp, feelsLike }) => {\r\n  tempText.childNodes[0].nodeValue = temp;\r\n  feelsTempText.textContent = feelsLike;\r\n};\r\n\r\nconst updateCity = ({ cityName }) =>\r\n  (cityText.childNodes[0].nodeValue = cityName);\r\n\r\nconst updateHumidity = ({ humidity }) => (humidityText.textContent = humidity);\r\n\r\nconst updatePressure = ({ pressure }) => {\r\n  pressureText.textContent = pressure;\r\n};\r\n\r\nconst updateWeather = ({ weather }) => {\r\n  weatherText.textContent = getWeatherName(weather);\r\n};\r\n\r\nconst updateElements = (resolveData) => {\r\n  switchBackground(resolveData);\r\n  updateTemp(resolveData);\r\n  updateCity(resolveData);\r\n  updateHumidity(resolveData);\r\n  updatePressure(resolveData);\r\n  updateWeather(resolveData);\r\n};\r\n\r\nconst applyInputValue = ({ key }) => {\r\n  if (key !== 'Enter') return;\r\n  const cityName = cityInput.value;\r\n  _auth__WEBPACK_IMPORTED_MODULE_0__.default.fetchData(cityName);\r\n};\r\n\r\n// Events\r\nconst fireEvents = () => {\r\n  cityInput.addEventListener('keydown', applyInputValue);\r\n  searchBtn.addEventListener('click', () => {\r\n    _auth__WEBPACK_IMPORTED_MODULE_0__.default.fetchData(cityInput.value);\r\n  });\r\n};\r\n\r\nconst init = (cityName) => {\r\n  _auth__WEBPACK_IMPORTED_MODULE_0__.default.fetchData(cityName);\r\n  fireEvents();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ init, updateElements, getUsedData, printMessage, cityInput });\r\n\n\n//# sourceURL=webpack://api-project/./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n\r\n\r\nconst ENDPOINT = (city) =>\r\n  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3cdbc3f91e152ae949830280ac768421&units=metric`;\r\n\r\nconst fetchData = async (city) => {\r\n  try {\r\n    const response = await fetch(ENDPOINT(city));\r\n    const data = await response.json();\r\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.updateElements(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.getUsedData(data));\r\n  } catch (error) {\r\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.printMessage('City name not found');\r\n  } finally {\r\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.cityInput.value = '';\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ fetchData });\r\n\n\n//# sourceURL=webpack://api-project/./src/modules/auth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;