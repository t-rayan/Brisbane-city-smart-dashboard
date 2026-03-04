import { EventItem } from "@/types/event"
import { Clock, ExternalLink, MapPin, Ticket } from "lucide-react"

interface EventsCardProps {
    evt: EventItem
}

export function EventsCard({ evt }: EventsCardProps) {

    // Color coding for categories
    const getTagColor = (cat: string) => {
        switch (cat) {
            case "Markets": return "bg-orange-100 text-orange-700 border-orange-200";
            case "Music": return "bg-pink-100 text-pink-700 border-pink-200";
            case "Workshop": return "bg-blue-100 text-blue-700 border-blue-200";
            default: return "bg-emerald-100 text-emerald-700 border-emerald-200";
        }
    };

    // return (
    //     <div className="overflow-y-auto p-2 space-y-2 custom-scrollbar flex-1">  
    //       <div 
    //         key={evt.id} 
    //         className="flex gap-3 p-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all group cursor-pointer"
    //       >

    //         {/* Left: Date Badge */}
    //         <div className="flex flex-col items-center justify-center w-12 h-14 bg-white border border-slate-200 rounded-lg shadow-sm shrink-0">
    //           <span className="text-[9px] font-bold text-rose-500 uppercase tracking-wider">
    //             {evt.dateDay.split(" ")[0]} {/* Day Name e.g. "Sat" */}
    //           </span>
    //           <span className="text-lg font-black text-slate-800 leading-none">
    //             {evt.dateDay.split(" ")[1]} {/* Date Number e.g. "15" */}
    //           </span>
    //         </div>

    //         {/* Right: Details */}
    //         <div className="flex flex-col justify-center min-w-0">
    //           <div className="flex items-center gap-2 mb-1">
    //             <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${getTagColor(evt.category)}`}>
    //               {evt.category}
    //             </span>
    //             <span className="text-[10px] text-slate-400 font-medium truncate">
    //               {evt.time}
    //             </span>
    //           </div>

    //           <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-rose-600 transition-colors">
    //             {evt.title}
    //           </h4>

    //           <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
    //             <span className="flex items-center gap-1 truncate max-w-[120px]">
    //               <MapPin className="w-3 h-3 text-slate-400" />
    //               {evt.location}
    //             </span>
    //             <span className="flex items-center gap-1 shrink-0">
    //               <Ticket className="w-3 h-3 text-slate-400" />
    //               {evt.cost}
    //             </span>
    //           </div>
    //         </div>

    //       </div>
    //   </div>
    // )



    
    // return (
    //     <div className="overflow-y-auto p-2 space-y-2 custom-scrollbar flex-1">
    //         {/* We wrap the item in an <a> tag or keep the div and use window.open */}
    //         <div
    //             key={evt.id}
    //             onClick={() => window.open(evt.link, '_blank')}
    //             className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all group cursor-pointer relative"
    //         >

    //             {/* Left: Date Badge */}
    //             <div className="flex flex-col items-center justify-center w-12 h-14 bg-white border border-slate-200 rounded-lg shadow-sm shrink-0">
    //                 <span className="text-[9px] font-bold text-rose-500 uppercase tracking-wider">
    //                     {evt.dateMonth}
    //                 </span>
    //                 <span className="text-lg font-black text-slate-800 leading-none">
    //                     {evt.dateDay}
    //                 </span>
    //             </div>

    //             {/* Middle: Details */}
    //             <div className="flex flex-col justify-center min-w-0 flex-1">
    //                 <div className="flex items-center gap-2 mb-1">
    //                     <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${getTagColor(evt.category)}`}>
    //                         {evt.category}
    //                     </span>
    //                     <span className="text-[10px] text-slate-400 font-medium truncate">
    //                         {evt.time}
    //                     </span>
    //                 </div>

    //                 <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-rose-600 transition-colors">
    //                     {evt.title}
    //                 </h4>

    //                 <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
    //                     <span className="flex items-center gap-1 truncate max-w-[120px]">
    //                         <MapPin className="w-3 h-3 text-slate-400" />
    //                         {evt.location}
    //                     </span>
    //                     <span className="flex items-center gap-1 shrink-0">
    //                         <Ticket className="w-3 h-3 text-slate-400" />
    //                         {evt.cost}
    //                     </span>
    //                 </div>
    //             </div>

    //             {/* Right: External Link Action */}
    //             <a
    //                 href={evt.link}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="flex items-center justify-center pl-3 border-l border-slate-100 ml-1 hover:scale-110 transition-transform"
    //                 onClick={(e) => e.stopPropagation()} // Prevents double-triggering if parent has a click
    //             >
    //                 <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
    //                     <ExternalLink className="w-4 h-4" />
    //                 </div>
    //             </a>

    //         </div>
    //     </div>
    // )



    return (
        <div className="overflow-y-auto p-2 space-y-2 custom-scrollbar flex-1">
            <div
                key={evt.id}
                onClick={() => window.open(evt.link, '_blank')}
                className="flex items-center gap-3 p-3 rounded-xl border border-transparent bg-background hover:border-brand/30 hover:bg-brand/5 transition-all group cursor-pointer relative"
            >
    
                {/* Left: Date Badge - Adaptive background and border */}
                <div className="flex flex-col items-center justify-center w-12 h-14 bg-background border border-muted/20 rounded-lg shadow-sm shrink-0 group-hover:border-brand/50 transition-colors">
                    <span className="text-[9px] font-bold text-brand uppercase tracking-wider">
                        {evt.dateMonth}
                    </span>
                    <span className="text-lg font-black text-foreground leading-none">
                        {evt.dateDay}
                    </span>
                </div>
    
                {/* Middle: Details */}
                <div className="flex flex-col justify-center min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${getTagColor(evt.category)}`}>
                            {evt.category}
                        </span>
                        <span className="text-[10px] text-muted font-medium truncate">
                            {evt.time}
                        </span>
                    </div>
    
                    <h4 className="text-sm font-bold text-foreground truncate group-hover:text-brand transition-colors">
                        {evt.title}
                    </h4>
    
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-muted">
                        <span className="flex items-center gap-1 truncate max-w-[120px]">
                            <MapPin className="w-3 h-3 text-muted/60" />
                            {evt.location}
                        </span>
                        <span className="flex items-center gap-1 shrink-0">
                            <Ticket className="w-3 h-3 text-muted/60" />
                            {evt.cost}
                        </span>
                    </div>
                </div>
    
                {/* Right: External Link Action */}
                <a
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center pl-3 border-l border-muted/10 ml-1 hover:scale-110 transition-transform"
                    onClick={(e) => e.stopPropagation()} 
                >
                    <div className="p-2 rounded-full bg-muted/5 text-muted group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                        <ExternalLink className="w-4 h-4" />
                    </div>
                </a>
            </div>
        </div>
      )
}