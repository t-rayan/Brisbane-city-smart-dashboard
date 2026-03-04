import { Car } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParkingCard } from "./ParkingCard";
import { ParkingSpot } from "@/types/parking";

interface ParkingSectionProps {
  spots: ParkingSpot[];
}

export function ParkingCardList({ spots }: ParkingSectionProps) {
    return (
      <section className="lg:col-span-4 bg-background rounded-2xl border border-muted/20 shadow-sm flex flex-col h-full max-h-[500px] overflow-hidden">
        {/* Header now sits flush at the top with its own padding */}
        <SectionHeader
          title="City Parking"
          subtitle="Live occupancy for Brisbane CBD bays"
          Icon={Car}
          count={spots.length}
        />
  
        {/* Updated classes: no-scrollbar by default, custom-scrollbar on hover */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar hover:custom-scrollbar transition-colors">
          {spots.map((spot) => (
            <ParkingCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>
    );
}