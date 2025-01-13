import { MapPin, Star, Share2} from 'lucide-react';

export default function Footer() {
    return(
        <div className="flex justify-between items-center p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30">
          <span className="text-sm text-gray-600">© 2025 WeatherApp. All rights reserved.</span>
          <div className="flex gap-4">
            <MapPin className="cursor-pointer" />
            <Star className="cursor-pointer" />
            <Share2 className="cursor-pointer" />
          </div>
        </div>
    )
}