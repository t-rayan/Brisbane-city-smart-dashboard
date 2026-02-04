
import { getParkingInfo } from "@/features/parking/services/get-parkinginfo";
import { ParkingCard } from "@/features/parking/ParkingCard";
import MapWrapper from "@/features/parking/MapWrapper";


export default async function Page() {

    const parkingSpots = await getParkingInfo();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="text-3xl font-bold">Brisbane Parking Live</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {parkingSpots.map((spot) => (
          <ParkingCard key={spot.name} spot={spot} />
        ))}
      </div>

      
      {/* The Interactive Map */}
      {/* <MapWrapper stations={parkingSpots} /> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {parkingSpots.map(s => <ParkingCard key={s.name} spot={s} />)}
      </div> */}
      
        </div>
      
      </main>
    </div>
  );
}
