
export default function WeatherInfoCard({ icon: Icon, title, value, unit }) { 
    return(
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
}