import { mapBccApiResponse } from '@/types/metadata.mapper';
import { BccApiResponse, BccTelemetryMetadata, TelemetryMetadata } from '@/types/telemetry_metadata'



export async function getTelemetryMetadataInfo() {

    const API_KEY = process.env.BCC_API_KEY

    const fetchOptions = {
        headers: {
            'Authorization': `Apikey ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    };

    const METADATA_URL = "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/telemetry-sensors-rainfall-and-stream-heights-metadata/records?limit=20";
    const SENSOR_URL = "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/telemetry-sensors-rainfall-and-stream-heights/records?limit=20";

    try {
        const [metadataResponse, sensorRespone] = await Promise.all([
            fetch(METADATA_URL, fetchOptions).then(res => res.json() as Promise<BccApiResponse>),
            fetch(SENSOR_URL, fetchOptions).then(res => res.json())
        ])
    
        const cleanMetadata = mapBccApiResponse(metadataResponse);
        const liveSensorData = sensorRespone.results[0];

        // return cleanMetadata.map(sensor => ({
        //     ...sensor,
        //     currentValue: liveSensorData[sensor.sensorId.toLowerCase()] || "0",
        //     lastUpdated: liveSensorData.measured
        // }))

        return cleanMetadata.map(sensor => {
            // --- CHANGED LINES START ---
            // Check exact match first, then lowercase to handle API inconsistencies
            const sensorValue = liveSensorData[sensor.sensorId] || liveSensorData[sensor.sensorId.toLowerCase()];
            
            return {
                ...sensor,
                currentValue: sensorValue !== undefined ? String(sensorValue) : "0",
                lastUpdated: liveSensorData.measured
            }
            // --- CHANGED LINES END ---
        })
        
    } catch (error) {
        console.log(error)
        return[]
    }

    
}