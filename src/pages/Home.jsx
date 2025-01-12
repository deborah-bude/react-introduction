import React, { useState, useEffect } from 'react';
import { Search, Sun, Cloud, CloudRain } from 'lucide-react';
import CardForecast from '../componants/CardForecast';
import ListForecast from '../componants/ListForecast';
import { getWeatherService, getWeatherForecast } from '../fetchApi';

const hourlyForecast = [
  { time: 'Now', temp: '24', icon: <Sun className="text-yellow-400" /> },
  { time: '13:00', temp: '25', icon: <Cloud className="text-gray-400" /> },
  { time: '14:00', temp: '23', icon: <Cloud className="text-gray-400" /> },
  { time: '15:00', temp: '24', icon: <Sun className="text-yellow-400" /> },
  { time: '16:00', temp: '26', icon: <Sun className="text-yellow-400" /> },
  { time: '17:00', temp: '25', icon: <Sun className="text-yellow-400" /> },
];

const dailyForecast = [
  { day: 'Today', temp: '24', maxTemp: '28', icon: <Sun className="text-yellow-400" /> },
  { day: 'Tomorrow', temp: '22', maxTemp: '26', icon: <Cloud className="text-gray-400" /> },
  { day: 'Wed', temp: '20', maxTemp: '24', icon: <CloudRain className="text-gray-600" /> },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [weatherForecastHour, setWeatherForecastHour] = useState(null);
  const [weatherForecastDay, setWeatherForecastDay] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const data = await getWeatherService({ city : "Paris" });
      const formattedWeatherData  = {
          city: data.location.name,
          region: data.location.region,
          localDate: new Date(data.location.localtime).toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          temp_c: data.current.temp_c,
          temp_text: data.current.condition.text,
          icon: `https:${data.current.condition.icon}`,
          feelsLike: data.current.feelslike_c,
          wind_kph: data.current.wind_kph,
          humidity: data.current.humidity,  
          visibility: data.current.vis_km,
      };

      setWeather(formattedWeatherData );
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWeatherForecastData = async (city) => {
    try {
      const data = await getWeatherForecast({ city : "Paris", days: 7 });
      
      const formattedWeatherHourData = data.forecast.forecastday[0].hour.map(day => ({
        time: new Date(day.time).toLocaleTimeString('fr-FR', {
          hour: 'numeric',
          minute: 'numeric',
        }),
        temp: day.temp_c,
        icon: `https:${day.condition.icon}`,
      }));

      const formattedWeatherDayData = data.forecast.forecastday.map(day => ({
          day: new Date(day.date).toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          temp: day.day.avgtemp_c,
          maxTemp: day.day.maxtemp_c,
          icon: `https:${day.day.condition.icon}`,
        }));
      
      setWeatherForecastHour(formattedWeatherHourData);
      setWeatherForecastDay(formattedWeatherDayData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeatherData().catch(error => {
      console.error('Error in weather fetch:', error);
    });
    fetchWeatherForecastData().catch(error => {
      console.error('Error in weather forecast fetch:', error);
    });
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-4xl mx-auto space-y-4 my-8">
      <section className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="Chercher une ville"
          className="w-96 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-lg border border-white/30 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2">
          <Search size={18} />
          Rechercher
        </button>
      </section>
  
      <section className="p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold">{weather.city}, {weather.region}</h2>
            <p className="text-gray-600">{weather.localDate}</p>
            <div className="flex items-center mt-4">
              <img src={weather.icon} alt="weather icon" className="w-12 h-12 mr-4" />
              <div>
                <span className="text-4xl font-bold">{weather.temp_c}°C</span>
                <p className="text-gray-600">{weather.temp_text}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div className="flex items-center gap-2">
              <Cloud className="text-blue-500" />
              <span>Vent : {weather.wind_kph} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="text-blue-500" />
              <span>Humidité : {weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="text-yellow-400" />
              <span>Ressentie : {weather.feelsLike}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="text-blue-500" />
              <span>Visibilité : {weather.visibility}km</span>
            </div>
          </div>
        </div>
      </section>
  
      <section className="p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Prévisions horaires</h3>
        <div className="grid grid-cols-6 gap-4">
          {weatherForecastHour ? weatherForecastHour.map((forecast, index) => (
            <CardForecast forecast={forecast} key={index}>
              <span className="font-medium">{forecast.time}</span>
              <img src={forecast.icon} alt="weather icon" className="w-8 h-8" />
              <span className="font-semibold">{forecast.temp}°C</span>
            </CardForecast>
          )) : "Loading..."}
        </div>
      </section>
  
      <section className="p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Prévisions pour les 7 prochains jours</h3>
        <div className="space-y-2">
          <ul>
            {weatherForecastDay && weatherForecastDay.map((forecast, index) => (
              <ListForecast forecast={forecast} key={index} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}