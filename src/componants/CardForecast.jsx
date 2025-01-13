export default function CardForecast({ children, index }) {
    return (    
        <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-white/30f">
            {children}
        </div>
    )
}