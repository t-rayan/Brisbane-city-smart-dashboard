export interface ParkingResponse {
    results: [
        {
            king_george_square: number,
            wickham_terrace: number,
            uploaded_to_open_data_at: string
        }
    ];
}
export interface ParkingSpot {
    name: string,
    availableSpots: number,
    capacity: number,
    uploadedAt: string
}