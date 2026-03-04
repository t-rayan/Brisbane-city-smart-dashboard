// src/components/SensorCard.tsx
import { parseLocationName } from "@/utils/location-parser";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface SensorCardProps {
  title: string;
  location: string;
  value: string; // e.g. "0.33"
  unit: string;  // e.g. "m"
  type: string
}

export function SensorCard({
  title,
  location,
  value,
  unit,
  type
}: SensorCardProps) {
  
  // 1. Color Config based on Status
  const statusColors = {
    Normal: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Elevated: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    High: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  const chartColor = {
    Normal: "#22d3ee",   // Cyan-400
    Elevated: "#fbbf24", // Amber-400
    High: "#f87171",     // Red-400
  };

  // 2. Trend Icon Selection
  const trendIcon = {
    rising: <ArrowUpRight className="w-4 h-4 text-red-400" />,
    falling: <ArrowDownRight className="w-4 h-4 text-emerald-400" />,
    stable: <Minus className="w-4 h-4 text-slate-500" />,
  };

  
  const parsedLoaction = parseLocationName(location);

  return (
    <div className="bg-background rounded-xl p-5 border border-muted/20 shadow-sm hover:border-brand/30 transition-all group">
      <div className="flex flex-row justify-between items-start">
        <div className="space-y-1">
            <h3 className="text-sm text-foreground font-bold group-hover:text-brand transition-colors">
              {parsedLoaction.title}
            </h3>
            <h3 className="text-[10px] text-muted font-medium uppercase tracking-wider">
              {parsedLoaction.subtitle}
            </h3>
        </div>
        <div className="text-right">
          {/* Using brand color for the live reading to make it "pop" */}
          <span className="text-sm font-black text-brand tabular-nums">
            {value}
          </span>
          <span className="text-[10px] ml-1 font-bold text-muted uppercase">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}




// <div className="flex">
//     <div className="flex justify-between items-start mb-6 relative z-10">
//         <div>
//         <p className="text-slate-500 text-xs mt-1 font-medium uppercase tracking-wider">{location}</p>

//           <h3 className="text-black font-semibold text-base tracking-wide">{title}</h3>
//         </div>
        
//       </div>

//       <div className="flex items-end justify-between relative z-10">
        
//         <div>
//           <div className="flex items-baseline gap-1.5">
//             <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
//             <span className="text-slate-500 text-sm font-medium">{unit}</span>
//           </div>
//           <div className="flex items-center gap-1.5 mt-2">
//           </div>
//         </div>
//       </div>
// </div>
     