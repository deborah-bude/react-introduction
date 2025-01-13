import React, { useEffect, useState } from 'react';
import { Sun, Wind, Droplets, ThermometerSun, Eye, Gauge, MapPin, Cloudy, CloudRainWind } from 'lucide-react';
import ListForecast from '../componants/ListForecast';
import WeatherInfoCard from '../componants/WeatherInfoCard';
import { useNavigate, useParams } from "react-router-dom";
import { getWeatherForecast, getWeatherService } from '../fetchApi';

export default function SearchResults() {
  let searchParams = useParams();
  const city = searchParams.id;
  const [weather, setWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchWeatherData = async () => {
    try {
      const data = await getWeatherService({ city: city });

      const formattedWeatherData = {
        city: data.location.name,
        region: data.location.region,
        localDate: new Date(data.location.localtime).toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        temp_c: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        temp_text: data.current.condition.text,
        icon: `https:${data.current.condition.icon}`,
        wind_kph: data.current.wind_kph,
        humidity: data.current.humidity,
        pressure: data.current.pressure_mb,
        visibility: data.current.vis_km,
        dewPoint: data.current.dewpoint_c,
        uv: data.current.uv,
        precipitation: data.current.precip_mm,
        cloudCover: data.current.cloud,
      };

      setWeather(formattedWeatherData);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const fetchWeatherForecastData = async () => {
    try {
      const data = await getWeatherForecast({ city: city, days: 7 });
      const formattedWeatherData = data.forecast.forecastday.map(day => ({
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

      setWeatherForecast(formattedWeatherData);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    fetchWeatherForecastData();
  }, []);

  if (error) {
    navigate(`/`);
  }

  if (weather) return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-200 via-purple-100 to-teal-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <MapPin className="text-gray-700" />
          <h1 className="text-2xl font-semibold">
            {weather.city}, {weather.region}
          </h1>
        </div>

        <div className="p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src={weather.icon} alt="weather icon" className="w-24 h-24" />
              <div>
                <div className="flex items-start">
                  <span className="text-6xl font-bold">{weather.temp_c}</span>
                  <span className="text-2xl mt-2">{weather.temp_c}°C</span>
                </div>
                <p className="text-xl text-gray-600">{weather.temp_text}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Ressenti</p>
              <p className="text-2xl font-semibold">{weather.feelsLike}°C</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <WeatherInfoCard icon={Wind} title="Vent" value={weather.wind_kph} unit=" km/h" />
          <WeatherInfoCard icon={Droplets} title="Humidité" value={weather.humidity} unit="%" />
          <WeatherInfoCard icon={Gauge} title="Pression" value={weather.pressure} unit=" hPa" />
          <WeatherInfoCard icon={Eye} title="Visibilité" value={weather.visibility} unit=" km" />
          <WeatherInfoCard icon={ThermometerSun} title="Point de rosée" value={weather.dewPoint} unit="°C" />
          <WeatherInfoCard icon={Sun} title="Index UV" value={weather.uv} unit="/10" />
          <WeatherInfoCard icon={CloudRainWind} title="Précipitation" value={weather.precipitation} unit="" />
          <WeatherInfoCard icon={Cloudy} title="Couverture nuageuse" value={weather.cloudCover} unit="" />
        </div>

        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Prévisions à venir</h2>
          <div className="space-y-4">
            <ul>
              {weatherForecast && weatherForecast.map((forecast, index) => (
                <ListForecast forecast={forecast} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};