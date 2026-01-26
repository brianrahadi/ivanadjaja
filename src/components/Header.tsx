import { useState, useEffect } from 'react';

// WMO Weather interpretation codes (http://www.wmo.int/pages/prog/www/IMOP/publications/CIMO-Guide/CIMO_Guide-7th_Edition-2008.html)
function getWeatherDescription(code: number): string {
    if (code === 0) return 'Clear sky';
    if (code === 1) return 'Mainly clear';
    if (code === 2) return 'Partly cloudy';
    if (code === 3) return 'Overcast';
    if (code === 45 || code === 48) return 'Fog';
    if (code >= 51 && code <= 55) return 'Drizzle';
    if (code >= 56 && code <= 57) return 'Freezing Drizzle';
    if (code >= 61 && code <= 65) return 'Rain';
    if (code >= 66 && code <= 67) return 'Freezing Rain';
    if (code >= 71 && code <= 77) return 'Snow fall';
    if (code >= 80 && code <= 82) return 'Rain showers';
    if (code >= 85 && code <= 86) return 'Snow showers';
    if (code >= 95) return 'Thunderstorm';
    if (code >= 96 && code <= 99) return 'Thunderstorm with hail';
    return 'Unknown';
}

export function Header() {
    const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(null);
    const [time, setTime] = useState(new Date());

    // Fetch Weather
    useEffect(() => {
        async function fetchWeather() {
            try {
                // Vancouver coordinates: 49.2827, -123.1207
                const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current=temperature_2m,weather_code&timezone=auto');
                const data = await res.json();

                if (data.current) {
                    setWeather({
                        temp: data.current.temperature_2m,
                        desc: getWeatherDescription(data.current.weather_code)
                    });
                }
            } catch (error) {
                console.error("Failed to fetch weather", error);
            }
        }

        fetchWeather();
        // Refresh weather every 15 minutes
        const interval = setInterval(fetchWeather, 15 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Update Time
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Format Date: "Sunday, Jan 25"
    // Format Time: "6:22:35 PM PST"
    const dateStr = time.toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    const timeStr = time.toLocaleTimeString('en-US', { hour12: true, timeZoneName: 'short' });

    return (
        <header className="w-full max-w-4xl mx-auto px-4 py-2 md:py-4 flex flex-row justify-between items-center text-stone-500 text-sm md:text-base font-medium font-pica gap-1 md:gap-0">
            {/* Left: Location & Weather */}
            <div className="flex items-center gap-2 h-6">
                {weather && (
                    <span className="flex items-center gap-2 animate-fade-in">
                        <span>Vancouver, BC</span>
                        <span>-</span>
                        <span className="hidden md:inline">{weather.desc}</span>
                        <span className="hidden md:inline">-</span>
                        <span>{Math.round(weather.temp)}°C</span>
                    </span>
                )}
            </div>

            {/* Right: Date & Time */}
            <div className="flex items-center gap-2 tabular-nums h-6">
                {weather && (
                    <span className="flex items-center gap-2 animate-fade-in">
                        <span className="hidden md:inline">{dateStr}</span>
                        <span className="min-w-[110px] text-right">{timeStr}</span>
                    </span>
                )}
            </div>
        </header>
    );
}
