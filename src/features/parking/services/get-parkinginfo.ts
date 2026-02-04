// import 'server-only';
import {ParkingResponse, ParkingSpot} from '@/types/parking';

export async function getParkingInfo(): Promise<ParkingSpot[]> {
    const url = "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/brisbane-parking-stations/records?limit=20";

    const res = await fetch(url, {next: {revalidate: 300}});
    if (!res.ok) {
        throw new Error('Failed to fetch parking info');
    }
    
    const data: ParkingResponse = await res.json();
    const latest = data.results[0];
    console.log(latest)

    return [
        {
            name: "King George Square Parking",
            availableSpots: latest.king_george_square,
            capacity: 494,
            uploadedAt: latest.uploaded_to_open_data_at
        },
        {
            name: "Wickham Terrace Parking",
            availableSpots: latest.wickham_terrace,
            capacity: 624,
            uploadedAt: latest.uploaded_to_open_data_at
        }
    ]
}
