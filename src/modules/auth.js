const ENDPOINT = (city, units) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3cdbc3f91e152ae949830280ac768421&units=${units}`;

const fetchData = async (city, units) => {
  const response = await fetch(ENDPOINT(city, units));
  const data = await response.json();
  return data;
};

export default { fetchData };
