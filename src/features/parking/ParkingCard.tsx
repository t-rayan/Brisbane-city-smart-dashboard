"use client";

import { useState, useEffect } from "react";
import { SquareParking, Clock, AlertCircle } from 'lucide-react';
import { ParkingSpot } from '@/types/parking';
import { getTimeAgo } from "@/utils/time";

interface ParkingCardProps {
  spot: ParkingSpot;
}



export function ParkingCard({ spot }: ParkingCardProps) {
  // 1. Dynamic Time Ago State
  const [timeAgo, setTimeAgo] = useState(getTimeAgo(spot.uploadedAt));

  useEffect(() => {
    // Update the "time ago" string every minute
    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo(spot.uploadedAt));
    }, 60000);

    return () => clearInterval(interval);
  }, [spot.uploadedAt]);

  // 2. Occupancy Calculations
  const spaceOccupied = spot.capacity - spot.availableSpots;
  const fillPercentage = Math.min((spaceOccupied / spot.capacity) * 100, 100);

  // 3. Status Logic using BNE Pulse semantic variables (Teal/Amber/Red)
  const getStatusStyles = (rate: number) => {
    if (rate >= 90) return { 
        bar: 'bg-destructive', 
        bg: 'bg-destructive/10', 
        text: 'text-destructive', 
        label: 'Full' 
    };
    if (rate >= 70) return { 
        bar: 'bg-accent', 
        bg: 'bg-accent/10', 
        text: 'text-accent', 
        label: 'Almost Full' 
    };
    return { 
        bar: 'bg-success', 
        bg: 'bg-success/10', 
        text: 'text-success', 
        label: 'Available' 
    };
  };

  const status = getStatusStyles(fillPercentage);

  return (
    <div className="group rounded-2xl p-5 border border-muted/20 bg-background shadow-sm hover:shadow-md hover:border-brand/50 transition-all duration-300">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex gap-3">
          {/* Distinct Parking Sign Icon */}
          <div className={`p-2 rounded-xl ${status.bg} ${status.text} transition-colors`}>
            <SquareParking size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground group-hover:text-brand transition-colors leading-tight">
              {spot.name.replace(/_/g, ' ')}
            </h3>
            <div className="flex items-center gap-1 text-[10px] text-muted mt-1 font-medium">
              <Clock size={10} className="animate-pulse" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
        
        {/* Status Badge */}
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${status.bg} ${status.text}`}>
          {status.label}
        </span>
      </div>

      {/* Main Stats Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-foreground leading-none tabular-nums">
              {spot.availableSpots}
            </span>
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider mt-1">
              Spots Left
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-muted tabular-nums">
              {Math.round(fillPercentage)}% <span className="font-medium opacity-70 uppercase text-[9px]">Full</span>
            </span>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="relative w-full bg-muted/10 h-1.5 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full ${status.bar} transition-all duration-700 ease-out`}
            style={{ width: `${fillPercentage}%` }}
          />
        </div>

        {/* Footer Info */}
        <div className="pt-2 flex items-center justify-between border-t border-muted/10">
           <span className="text-[9px] text-muted font-bold uppercase tracking-tighter">
             Total Capacity: {spot.capacity}
           </span>
           {/* <div className="flex items-center gap-1 text-[10px] font-bold text-brand cursor-pointer hover:underline">
             View Location
           </div> */}
        </div>
      </div>
    </div>
  );
}