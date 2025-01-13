const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function getWeatherService({ city = "Paris" }) {
  const url_base = 'http://api.weatherapi.com/v1/current.json';
  const url = `${url_base}?key=${apiKey}&q=${city}&lang=fr`;

  const options = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      throw error;
    });
}

export function getWeatherForecast({ city = "Paris", days = 1 }) {
  const url_base = 'http://api.weatherapi.com/v1/forecast.json';
  const url = `${url_base}?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no&lang=fr`;

  const options = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      throw error;
    });
}