export interface TelemetryApiResponse {
    total_count: number,
    results: TelemetryMetadataResponse []
    
}

export interface TelemetryMetadataResponse {
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
    latitude: number,
    longitude: number,
    geopoint: {
        lon: string,
        lat:string
    }
}