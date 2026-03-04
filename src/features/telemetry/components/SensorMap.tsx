"use client";

import { Map, Overlay } from "pigeon-maps";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Target } from "lucide-react";

interface SensorData {
  sensorId: string;
  locationName: string;
  sensorType: string;
  geopoint: { lat: number | string; lon: number | string }; 
  currentValue: string;
  unitOfMeasurement: string;
}

const BRISBANE_CBD: [number, number] = [-27.4698, 153.0251];

export default function SimpleSensorMap({ sensors }: { sensors: SensorData[] }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [center, setCenter] = useState<[number, number]>(BRISBANE_CBD);
  const [zoom, setZoom] = useState(11);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  // Switches between Light and Dark map tiles
  function mapTiler(x: number, y: number, z: number, dpr?: number) {
    const themePath = resolvedTheme === "dark" ? "dark_all" : "light_all";
    return `https://basemaps.cartocdn.com/${themePath}/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
  }

  const handleRecenter = () => {
    setCenter(BRISBANE_CBD);
    setZoom(12);
  };

  if (!mounted) return <div className="h-[400px] w-full rounded-2xl bg-muted/5 animate-pulse" />;

  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-muted/20 shadow-sm relative bg-background group/map">
      
      {/* 1. Legend */}
      <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md p-3 rounded-xl border border-muted/20 shadow-md">
        <h4 className="text-foreground text-[10px] font-bold uppercase tracking-widest mb-2">Live Sensors</h4>
        <div className="flex gap-3 text-[10px] font-bold">
          <span className="flex items-center gap-1.5 text-muted">
            <span className="w-2 h-2 rounded-full bg-brand"></span> Rain
          </span>
          <span className="flex items-center gap-1.5 text-muted">
            <span className="w-2 h-2 rounded-full bg-accent"></span> Creek
          </span>
        </div>
      </div>

      {/* 2. Recenter Button */}
      <button 
        onClick={handleRecenter}
        className="absolute bottom-4 right-4 z-10 p-2 bg-background/90 backdrop-blur-md border border-muted/20 rounded-lg text-muted hover:text-brand hover:border-brand/50 shadow-lg transition-all active:scale-95"
        title="Recenter to CBD"
      >
        <Target size={18} />
      </button>

      <Map 
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
        provider={mapTiler}
      >
        {sensors.map((sensor) => {
          const lat = Number(sensor.geopoint.lat);
          const lon = Number(sensor.geopoint.lon);
          if (isNaN(lat) || isNaN(lon)) return null;

          const isRain = sensor.sensorType === 'Rainfall';
          const colorClass = isRain ? "bg-brand" : "bg-accent";

          return (
            <Overlay key={sensor.sensorId} anchor={[lat, lon]} offset={[6, 6]}>
              <div className="group relative">
                
                {/* Ping Animation Layer */}
                <div className={`absolute inset-0 w-3 h-3 rounded-full ${colorClass} animate-ping opacity-40`} />
                
                {/* Main Marker */}
                <div className={`w-3 h-3 rounded-full ${colorClass} ring-2 ring-background shadow-sm cursor-pointer hover:scale-150 transition-transform duration-200 relative z-10`} />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[150px] hidden group-hover:block bg-foreground text-background text-[10px] px-3 py-2 rounded-lg shadow-xl z-50 pointer-events-none">
                  <div className="font-bold truncate uppercase tracking-tight">{sensor.locationName}</div>
                  <div className="opacity-80 mt-0.5 font-medium">
                    {sensor.currentValue} {sensor.unitOfMeasurement}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                </div>

              </div>
            </Overlay>
          );
        })}
      </Map>
    </div>
  );
}