export interface BccApiResponse {
    total_count: number,
    results: BccTelemetryMetadata []
    
}

export interface BccTelemetryMetadata {
    sensor_id: string,
    location_id: string,
    location_name: string,
    sensor_type: string,
    unit_of_measure: string,
    latitude: number,
    longitude: number,
    geopoint: {
        lon: string,
        lat:string
    }
}
export interface TelemetryMetadata {
    sensorId: string,
    locationId: string,
    locationName: string,
    sensorType: string,
    unitOfMeasurement: string,
    geopoint: {
        lon: string,
        lat:string
    }
}