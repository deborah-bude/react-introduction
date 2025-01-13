import { Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() { 
    return (        
        <div className="flex justify-between items-center p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <div className="flex items-center space-x-2">
            <Cloud className="text-blue-500" />
            <span className="text-lg font-semibold">WeatherApp</span>
          </div>
          <nav>
            <Link to="/" className="px-4 py-2 rounded-lg text-gray-700">Accueil</Link>
            <Link to="/search-results" className="px-4 py-2 rounded-lg text-gray-700">Résultat de recherche</Link>
          </nav>
        </div>
    )
}