"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Droplets, Waves, ArrowRight, Clock, MapPin } from "lucide-react";

interface SensorListProps {
  sensorId: string;
  locationName: string;
  sensorType: string;
  currentValue: string;
  unitOfMeasurement: string;
  lastUpdated: string;
}

export function SensorListCard({ sensors }: { sensors: SensorListProps[] }) {

  // Helper: Format relative time
  const getTimeAgo = (dateStr: string) => {
    const diff = (Date.now() - new Date(dateStr).getTime()) / 1000 / 60;
    if (diff < 1) return "Just now";
    return `${Math.floor(diff)}m ago`;
  };

  return (
    <div className="bg-background rounded-2xl border border-muted/20 shadow-sm flex flex-col h-full max-h-[500px] overflow-hidden">
      
      {/* 1. Integrated Section Header */}
      <SectionHeader
        title="Live Feed"
        subtitle="Brisbane Telemetry"
        Icon={Waves}
        count={sensors.filter(s => s.currentValue !== '-').length}
      />
  
      {/* 2. List Container with Scrollbar Fixes */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar hover:custom-scrollbar transition-colors">
        {sensors.map((sensor) => {
          const val = parseFloat(sensor.currentValue);
          const isRain = sensor.sensorType === 'Rainfall';
          
          if (sensor.currentValue === '-' || isNaN(val)) return null;
  
          const [street, suburb] = sensor.locationName.split(',');
  
          return (
            <div 
              key={sensor.sensorId} 
              className="flex gap-3 p-3 rounded-xl border border-transparent bg-background hover:border-brand/30 hover:bg-brand/5 transition-all group cursor-pointer"
            >
              
              {/* THE "VALUE BOX" */}
              <div className="flex flex-col items-center justify-center w-12 h-14 bg-background border border-muted/20 rounded-lg shadow-sm shrink-0 group-hover:border-brand/50 transition-colors">
                <span className="text-[9px] font-bold text-muted uppercase tracking-wider mb-0.5">
                  {sensor.unitOfMeasurement}
                </span>
                <span className="text-lg font-black text-foreground leading-none tracking-tight group-hover:text-brand transition-colors tabular-nums">
                  {val.toFixed(isRain ? 1 : 2)}
                </span>
              </div>
  
              {/* Details */}
              <div className="flex flex-col justify-center min-w-0 flex-1">
                
                {/* Top Row: Type & Time */}
                <div className="flex items-center gap-2 mb-1">
                  <span className={`flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                    isRain 
                      ? "bg-brand/10 text-brand border-brand/20" 
                      : "bg-accent/10 text-accent border-accent/20"
                  }`}>
                    {/* Unique Icon for Rain entries */}
                    {isRain && <Droplets size={10} />}
                    {isRain ? "RAIN" : "CREEK"}
                  </span>
                  <span className="text-[10px] text-muted font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 animate-pulse text-muted/60" />
                    {getTimeAgo(sensor.lastUpdated)}
                  </span>
                </div>
                
                <h4 className="text-sm font-bold text-foreground truncate group-hover:text-brand transition-colors">
                  {street}
                </h4>
                
                <div className="flex items-center gap-1 mt-0.5 text-[11px] text-muted truncate">
                  <MapPin className="w-3 h-3 text-muted/60" />
                  {suburb || "Brisbane"}
                </div>
              </div>
  
              {/* Right Arrow Interaction Hint */}
              <div className="flex items-center justify-center pl-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                 <ArrowRight className="w-4 h-4 text-brand/40" />
              </div>
  
            </div>
          );
        })}
      </div>
    </div>
  );
}