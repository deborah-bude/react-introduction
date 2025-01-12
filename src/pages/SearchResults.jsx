import React from 'react';
import { 
  Sun, Cloud, Wind, Droplets, ThermometerSun, Eye, 
  Compass, Sunset, Sunrise, Gauge, CloudRain, MapPin
} from 'lucide-react';
import ListForecast from '../componants/ListForecast';

// Composant pour une carte d'information météo
const WeatherInfoCard = ({ icon: Icon, title, value, unit }) => (
  <div className="p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/30 hover:bg-white/40 transition-all duration-300">
    <div className="flex items-center gap-3">
      <Icon size={20} className="text-gray-800/80" strokeWidth={1.5} />
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-semibold">{value}{unit}</p>
      </div>
    </div>
  </div>
);

export default function SearchResults() {
  const weatherData = {
    city: "Paris",
    country: "France",
    currentTemp: "24",
    feelsLike: "26",
    condition: "Ensoleillé",
    details: {
      wind: "12",
      humidity: "68",
      pressure: "1015",
      visibility: "10",
      dewPoint: "18",
      uvIndex: "6",
      sunrise: "07:45",
      sunset: "18:30"
    },
    forecast: [
      { day: "Aujourd'hui", maxTemp: "24°C", temp: "18°C", icon: <Sun className="text-yellow-400" /> },
      { day: "Demain", maxTemp: "23°C", temp: "17°C", icon: <CloudRain className="text-gray-400" /> },
      { day: "Mercredi", maxTemp: "22°C", temp: "16°C", icon: <Cloud className="text-gray-400" />}
    ]
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-200 via-purple-100 to-teal-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <MapPin className="text-gray-700" />
          <h1 className="text-2xl font-semibold">
            {weatherData.city}, {weatherData.country}
          </h1>
        </div>

        <div className="p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Sun size={48} className="text-yellow-500" strokeWidth={1.5} />
              <div>
                <div className="flex items-start">
                  <span className="text-6xl font-bold">{weatherData.currentTemp}</span>
                  <span className="text-2xl mt-2">°C</span>
                </div>
                <p className="text-xl text-gray-600">{weatherData.condition}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Ressenti</p>
              <p className="text-2xl font-semibold">{weatherData.feelsLike}°C</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <WeatherInfoCard icon={Wind} title="Vent" value={weatherData.details.wind} unit=" km/h" />
          <WeatherInfoCard icon={Droplets} title="Humidité" value={weatherData.details.humidity} unit="%" />
          <WeatherInfoCard icon={Gauge} title="Pression" value={weatherData.details.pressure} unit=" hPa" />
          <WeatherInfoCard icon={Eye} title="Visibilité" value={weatherData.details.visibility} unit=" km" />
          <WeatherInfoCard icon={ThermometerSun} title="Point de rosée" value={weatherData.details.dewPoint} unit="°C" />
          <WeatherInfoCard icon={Sun} title="Index UV" value={weatherData.details.uvIndex} unit="/10" />
          <WeatherInfoCard icon={Sunrise} title="Lever du soleil" value={weatherData.details.sunrise} unit="" />
          <WeatherInfoCard icon={Sunset} title="Coucher du soleil" value={weatherData.details.sunset} unit="" />
        </div>

        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Prévisions à venir</h2>
          <div className="space-y-4">
            <ul>
              {weatherData.forecast.map((forecast, index) => (
                <ListForecast forecast={forecast} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};