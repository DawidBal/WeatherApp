import auth from './auth';

// HTML Elements
const { body } = document;
const cityInput = document.querySelector('#city');
const searchBtn = document.querySelector('.js-search');
const tempText = document.querySelector('.js-dataTemp');
const cityText = document.querySelector('.js-cityName');
const feelsTempText = document.querySelector('.js-feelsLike');
const humidityText = document.querySelector('.js-humidity');
const pressureText = document.querySelector('.js-pressure');
const printMsg = document.querySelector('.js-printMsg');
const weatherText = document.querySelector('.js-weather');
const weatherList = [
  'Drizzle',
  'Snow',
  'Rain',
  'Clouds',
  'Clear',
  'Thunderstorm',
];

const toggleAnimation = (delay = 175, name) => {
  let timer;
  return function (element) {
    clearTimeout(timer);
    element.classList.add(name);
    timer = setTimeout(() => {
      element.classList.remove(name);
    }, delay);
  };
};

// Message box animation
const msgBoxAnim = toggleAnimation(1500, 'fadeIn-up');

const printMessage = (message) => {
  printMsg.style.cssText =
    '--printMsgColor: var(--white);--printTextColor: var(--primary)';

  printMsg.textContent = message;
  msgBoxAnim(printMsg);
};

const getUsedData = (data) => {
  const {
    name: cityName,
    main: { humidity, pressure, temp, feels_like: feelsLike },
    weather,
  } = data;
  return { cityName, humidity, pressure, temp, weather, feelsLike };
};

const getWeatherName = (weather) => weather[0].main;

const switchBackground = ({ weather }) => {
  const weatherName = weatherList.includes(getWeatherName(weather))
    ? getWeatherName(weather).toLowerCase()
    : 'default';
  body.classList.forEach((value) => body.classList.remove(value)); // Remove every class on body
  body.classList.add(weatherName); // Add class based on weather of fetched city
};

// Update Elements Section
const updateTemp = ({ temp, feelsLike }) => {
  tempText.childNodes[0].nodeValue = temp;
  feelsTempText.textContent = feelsLike;
};

const updateCity = ({ cityName }) =>
  (cityText.childNodes[0].nodeValue = cityName);

const updateHumidity = ({ humidity }) => (humidityText.textContent = humidity);

const updatePressure = ({ pressure }) => {
  pressureText.textContent = pressure;
};

const updateWeather = ({ weather }) => {
  weatherText.textContent = getWeatherName(weather);
};

const updateElements = (resolveData) => {
  switchBackground(resolveData);
  updateTemp(resolveData);
  updateCity(resolveData);
  updateHumidity(resolveData);
  updatePressure(resolveData);
  updateWeather(resolveData);
};

const applyInputValue = ({ key }) => {
  if (key !== 'Enter') return;
  const cityName = cityInput.value;
  auth.fetchData(cityName);
};

// Events
const fireEvents = () => {
  cityInput.addEventListener('keydown', applyInputValue);
  searchBtn.addEventListener('click', () => {
    auth.fetchData(cityInput.value);
  });
};

const init = (cityName) => {
  auth.fetchData(cityName);
  fireEvents();
};

export default { init, updateElements, getUsedData, printMessage, cityInput };
