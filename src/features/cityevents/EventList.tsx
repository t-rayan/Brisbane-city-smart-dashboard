"use client";

import { Calendar } from "lucide-react";
import { EventsCard } from "./EventCard";
import { EventItem } from "@/types/event";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function EventList({ initialEvents }: { initialEvents: EventItem[] }) {
  
  // Updated to use BNE Pulse theme variables for a cleaner look
  const getTagColor = (cat: string) => {
    switch (cat) {
      case "Markets": return "bg-accent/10 text-accent border-accent/20";
      case "Music": return "bg-brand/10 text-brand border-brand/20";
      case "Workshop": return "bg-success/10 text-success border-success/20";
      default: return "bg-muted/10 text-muted border-muted/20";
    }
  };

  return (
    <div className="bg-background rounded-2xl flex flex-col h-full max-h-[500px] border border-muted/20 shadow-sm overflow-hidden">
      
      <SectionHeader
        title="What's On"
        subtitle="Upcoming in Brisbane"
        Icon={Calendar}
        showViewAll={true} 
      />
  
      {/* Applied the scrollbar fix: 
          no-scrollbar hides the persistent gray bars.
          hover:custom-scrollbar shows the thin themed bar on interaction.
      */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar hover:custom-scrollbar transition-colors bg-background/50">
        {initialEvents.map((evt) => (
          <EventsCard key={evt.id} evt={evt} />
        ))}
      </div>
    </div>
  );
}