import DOM from './DOM';

const ENDPOINT = (city) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3cdbc3f91e152ae949830280ac768421&units=metric`;

const fetchData = async (city) => {
  try {
    const response = await fetch(ENDPOINT(city));
    const data = await response.json();
    DOM.updateElements(DOM.getUsedData(data));
  } catch (error) {
    DOM.printMessage('City name not found');
  } finally {
    DOM.cityInput.value = '';
  }
};

export default { fetchData };
