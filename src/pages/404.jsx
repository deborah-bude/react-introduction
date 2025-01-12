import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Error404Page() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-200 via-purple-100 to-teal-200">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="flex justify-center flex-col items-center p-8 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <p className="text-xl text-gray-700 mb-4">Page non trouvée</p>
            <p className="text-gray-600 mb-8">
                Oups ! Il semble que la page que vous recherchez soit partie avec le vent.
            </p>
            <Link to="/" className="flex items-center px-6 py-3 rounded-lg bg-blue-600/80 text-white hover:bg-blue-600/90 transition-all duration-300">
              <Home size={20} className="mr-2" />
              Accueil
            </Link>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <h2 className="font-semibold mb-3">Suggestions :</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              • Vérifiez l'URL saisie
            </li>
            <li className="flex items-center gap-2">
              • Retournez à la page d'accueil
            </li>
            <li className="flex items-center gap-2">
              • Essayez de rechercher une autre ville
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};