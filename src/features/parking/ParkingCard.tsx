import {ParkingSpot} from '@/types/parking';
interface ParkingCardProps {
    spot: ParkingSpot;
}
export function ParkingCard({spot}: ParkingCardProps) {
    // calculate how full the parking spot is
    const spaceOccupied = spot.capacity - spot.availableSpots;
    const fillPercentage = (spaceOccupied / spot.capacity) * 100;

    // determine color based on fill percentage
    let getStatusColor = (rate: number) => {
        if (rate >= 90) return 'bg-red-500';
        if(rate >=70) return 'bg-orange-500';
        return 'bg-emerald-500';
    }

    const barColor = getStatusColor(fillPercentage);

    return (
    <div data-testid="parking-card" className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{spot.name}</h3>
          <p className="text-xs text-slate-500">
            Updated: {new Date(spot.uploadedAt).toLocaleTimeString()}
          </p>
        </div>
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase text-white ${barColor}`}>
          {fillPercentage >= 90 ? 'Full' : 'Available'}
        </span>
      </div>

      <div className="space-y-3">
        {/* Progress Bar Container */}
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div 
            className={`h-full ${barColor} transition-all duration-1000 ease-out`}
            style={{ width: `${fillPercentage}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-slate-600 font-medium">
            {spot.availableSpots} <span className="text-slate-400 font-normal text-xs">Available</span>
          </span>
          <span className="text-slate-400 text-xs">
            Capacity: {spot.capacity}
          </span>
        </div>
      </div>
    </div>
    );
}