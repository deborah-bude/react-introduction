export default function ListForecast({ forecast, index }) {
    return (
        <li className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30">
            <div key={index} className="flex items-center gap-4">
                <span className="w-48">{forecast.day}</span>
                <img src={forecast.icon} alt="weather icon" className="w-8 h-8" />
            </div>
            <div className="flex gap-4">
                <span className="text-gray-600">{forecast.temp}°C</span>
                <span className="font-semibold">{forecast.maxTemp}°C</span>
            </div>
        </li>
    )
}