import { BccApiResponse, BccTelemetryMetadata, TelemetryMetadata } from "@/types/telemetry_metadata"

export function mapBccTelemetryMetadata(
    apiMetadata: BccTelemetryMetadata):
    TelemetryMetadata {
    return {
        sensorId: apiMetadata.sensor_id,
        locationId: apiMetadata.location_id,
        locationName: apiMetadata.location_name,
        sensorType: apiMetadata.sensor_type,
        unitOfMeasurement: apiMetadata.unit_of_measure,
        geopoint: {
          lon: apiMetadata.geopoint?.lon || String(apiMetadata.longitude),
          lat: apiMetadata.geopoint?.lat || String(apiMetadata.latitude)
      }
    }
}

export function mapBccApiResponse(
  response: BccApiResponse
): TelemetryMetadata[] {
  return response.results.map(mapBccTelemetryMetadata)
}