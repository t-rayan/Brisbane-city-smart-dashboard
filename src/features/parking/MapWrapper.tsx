'use client';

import dynamic from 'next/dynamic';
import { ParkingSpot } from '@/types/parking';

// We move the dynamic import here
const ParkingMap = dynamic(() => import('./ParkingMap'), { 
  ssr: false,
  loading: () => <div className="h-[400px] bg-slate-100 animate-pulse rounded-2xl" />
});

export default function MapWrapper({ stations }: { stations: ParkingSpot[] }) {
  return <ParkingMap stations={stations} />;
}