import auth from './auth';

// HTML Elements
const cityInput = document.querySelector('#city');
const tempText = document.querySelector('.js-dataTemp');
const cityText = document.querySelector('.js-cityName');
const feelsTempText = document.querySelector('.js-feelsLike');
const humidityText = document.querySelector('.js-humidity');
const pressureText = document.querySelector('.js-pressure');
const weatherText = document.querySelector('.js-weather');
const { body } = document;

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
  const weatherName = getWeatherName(weather).toLowerCase();
  body.classList.forEach((value) => body.classList.remove(value)); // Remove every class on body
  body.classList.add(weatherName); // Add class based on weather of fetched city
};

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

const fetchCity = (cityName) => {
  try {
    auth.fetchData(cityName).then((data) => {
      console.log(data);
      updateElements(getUsedData(data));
    });
  } catch (error) {
    console.log(error);
  } finally {
    cityInput.value = '';
  }
};

const applyInputValue = ({ key }) => {
  if (key !== 'Enter') return;
  const cityName = cityInput.value;
  fetchCity(cityName);
};

// Events
const fireEvents = () => {
  cityInput.addEventListener('keydown', applyInputValue);
};

const init = (cityName) => {
  fetchCity(cityName);
  fireEvents();
};

export default { init };
