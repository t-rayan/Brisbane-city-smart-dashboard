import {CityEventsApiResponse, EventItem } from "@/types/event";
import { mapRawEventToUi } from "@/types/event-mapper";

export async function getCityEventsInfo(): Promise<EventItem[]> {

    const API_KEY = process.env.BCC_API_KEY

    const EVENTS_URL = "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/brisbane-city-council-events/records?limit=10&order_by=start_datetime%20asc"

    try {
        const res = await fetch(EVENTS_URL, {
            headers: {
                'Authorization': `Apikey ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            next:{revalidate:300}
        })
        if(!res.ok) {
            throw new Error('Failed to fetch event data');
        }
        const data:CityEventsApiResponse = await res.json();
        const cleanEvents: EventItem[] = data.results.map(mapRawEventToUi)
        return cleanEvents;
    } catch (error) {
        console.log(error)
        return []
    }
} 