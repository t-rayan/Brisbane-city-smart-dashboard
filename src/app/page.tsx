
import { getParkingInfo } from "@/features/parking/services/get-parkinginfo";
import { getTelemetryMetadataInfo } from "@/features/telemetry/services/get-metadatainfo";

import SensorMap from "@/features/telemetry/components/SensorMap";
import { SensorListCard } from "@/features/telemetry/components/SensorListCard";
import EventList from "@/features/cityevents/components/EventList";
import { getCityEventsInfo } from "@/features/cityevents/services/get-eventsinfo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Map } from "lucide-react";
import { ParkingCardList } from "@/features/parking/components/ParkingCardList";


export default async function Page() {
  const parkingSpots = await getParkingInfo();
  const sensors = await getTelemetryMetadataInfo()
  const events = await getCityEventsInfo()

  return (
    <div className="min-h-screen bg-muted/5 transition-colors duration-300">
      <main className="container mx-auto px-4 py-6">

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

          {/* Events Section */}
          <div className="lg:col-span-6 ">
            <EventList initialEvents={events} />
          </div>

          {/* Parking Section */}
          <div className="lg:col-span-4">
            <ParkingCardList spots={parkingSpots} />
          </div>

          {/* Sensor Map Section */}
          <div className="lg:col-span-6 bg-background rounded-2xl border border-muted/20 shadow-sm flex flex-col">
            {/* 1. Integrated Section Header */}
            <SectionHeader
              title="Sensor Network"
              subtitle="Live telemetry from Brisbane environmental sensors"
              Icon={Map} // Make sure to import Map from 'lucide-react'
              count={sensors.length}
            />

            {/* 2. Map Container with internal padding */}
            <div className="p-4 pt-0 flex-1">
              <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden border border-muted/10 bg-muted/5">
                <SensorMap sensors={sensors} />
              </div>
            </div>
          </div>

          {/* Sensors List Section */}
          <div className="lg:col-span-4 ">
            <SensorListCard sensors={sensors} />
          </div>

        </div>
      </main>
      {/* Footer */}
      <footer className="mt-8 pb-4 text-center text-xs text-muted">
        Data provided by{" "}

        <a href="https://data.brisbane.qld.gov.au"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-brand transition-colors"
        >
          Brisbane City Council Open Data Portal
        </a>
      </footer>
    </div>
  );

}
