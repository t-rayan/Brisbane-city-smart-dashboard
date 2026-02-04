'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ParkingSpot } from '@/types/parking';
import L from 'leaflet';

// Fix for default Leaflet icons in Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ParkingMap({ stations }: { stations: ParkingSpot[] }) {
  // Center of Brisbane CBD
  const brisbaneCBD: [number, number] = [-27.4698, 153.0251];

  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm z-0">
      <MapContainer center={brisbaneCBD} zoom={15} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* We would map through stations here if we had lat/long data */}
        <Marker position={[-27.4691, 153.0233]} icon={customIcon}>
          <Popup>King George Square Car Park</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}