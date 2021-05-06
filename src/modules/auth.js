const ENDPOINT = (city) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3cdbc3f91e152ae949830280ac768421&units=metric`;

const fetchData = async (city) => {
  const response = await fetch(ENDPOINT(city));
  const data = await response.json();
  return data;
};

export default { fetchData };
