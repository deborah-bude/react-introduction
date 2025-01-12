import React, { useState } from 'react';
import { Search, MapPin, Star, Share2, Sun, Cloud, CloudRain } from 'lucide-react';

const currentWeather = {
  city: 'Paris, France',
  date: 'Mardi 15 Janvier 2025',
  temp: '24°C',
  condition: 'Ensoleillé',
  wind: '12 km/h',
  humidity: '68%',
  feelsLike: '26°C',
  visibility: '10 km'
};

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

function App() {
  return (
    <section className="min-h-screen p-6 bg-gradient-to-br from-blue-200 via-purple-100 to-teal-200">
      <main className="max-w-4xl mx-auto space-y-4">
        <section className="flex justify-between items-center p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <div className="flex items-center space-x-2">
            <Cloud className="text-blue-500" />
            <span className="text-lg font-semibold">WeatherApp</span>
          </div>
          <nav>
            <a href="/" className="px-4 py-2 rounded-lg text-gray-700">Accueil</a>
          </nav>
        </section>

        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Chercher une ville"
            className="w-96 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-lg border border-white/30 focus:outline-none"
          />
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2">
            <Search size={18} />
            Rechercher
          </button>
        </div>

        <div className="p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold">Paris, France</h2>
              <p className="text-gray-600">Mardi 15 Janvier 2025</p>
              <div className="flex items-center mt-4">
                <Sun className="text-yellow-400 w-12 h-12 mr-4" />
                <div>
                  <span className="text-4xl font-bold">24°C</span>
                  <p className="text-gray-600">Ensoleillé</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex items-center gap-2">
                <Cloud className="text-blue-500" />
                <span>Vent : 12 km/h</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="text-blue-500" />
                <span>Humidité : 68%</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="text-yellow-400" />
                <span>Ressentie : 26°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="text-blue-500" />
                <span>Visibilité : 10km</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Prévisions horaires</h3>
          <div className="grid grid-cols-6 gap-4">
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/30">
              <span className="font-medium">Maintenant</span>
              <Sun className="text-yellow-400" />
              <span className="font-semibold">25°C</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/30">
              <span className="font-medium">Maintenant</span>
              <Sun className="text-yellow-400" />
              <span className="font-semibold">25°C</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/30">
              <span className="font-medium">Maintenant</span>
              <Sun className="text-yellow-400" />
              <span className="font-semibold">25°C</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/30">
              <span className="font-medium">Maintenant</span>
              <Sun className="text-yellow-400" />
              <span className="font-semibold">25°C</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/30">
              <span className="font-medium">Maintenant</span>
              <Sun className="text-yellow-400" />
              <span className="font-semibold">25°C</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/30">
              <span className="font-medium">Maintenant</span>
              <Sun className="text-yellow-400" />
              <span className="font-semibold">25°C</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Prévisions pour les 7 prochains jours</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30">
              <div className="flex items-center gap-4">
                <span className="w-24">Aujourd'hui</span>
                <Sun className="text-yellow-400" />
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">24°C</span>
                <span className="font-semibold">28°C</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30">
              <div className="flex items-center gap-4">
                <span className="w-24">Aujourd'hui</span>
                <Sun className="text-yellow-400" />
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">24°C</span>
                <span className="font-semibold">28°C</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30">
              <div className="flex items-center gap-4">
                <span className="w-24">Aujourd'hui</span>
                <Sun className="text-yellow-400" />
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">24°C</span>
                <span className="font-semibold">28°C</span>
              </div>
            </div>
          </div>
        </div>

        <section className="flex justify-between items-center p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30">
          <span className="text-sm text-gray-600">© 2025 WeatherApp. All rights reserved.</span>
          <div className="flex gap-4">
            <MapPin className="cursor-pointer" />
            <Star className="cursor-pointer" />
            <Share2 className="cursor-pointer" />
          </div>
        </section>
      </main>
    </section>
  )
}

export default App
