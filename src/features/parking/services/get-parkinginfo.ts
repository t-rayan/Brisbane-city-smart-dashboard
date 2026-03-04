// import 'server-only';
import {ParkingResponse, ParkingSpot} from '@/types/parking';

export async function getParkingInfo(): Promise<ParkingSpot[]> {
    
    const API_KEY = process.env.BCC_API_KEY

    const fetchOptions = {
        headers: {
            'Authorization': `Apikey ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    };

    const url = "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/brisbane-parking-stations/records?limit=20";

    try {
        const res = await fetch(url, {
            ...fetchOptions, 
            next: {revalidate: 3600}
        }
        );
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            console.error("Parking API Error Details:", errorData);
            throw new Error(`Failed to fetch parking info: ${res.status}`);
        }
        
        const data: ParkingResponse = await res.json();
        const latest = data.results[0];
        // console.log(latest)
    
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
    } catch (error) {
        console.error("getParkingInfo caught error:", error);
        return [];
    }

   
}
