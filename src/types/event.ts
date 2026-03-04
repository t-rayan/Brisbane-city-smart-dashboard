export interface CityEventsApiResponse {
    total_count:number,
    results: BccCityEventResponse[]
}

// The raw data from Brisbane City Council API
export interface BccCityEventResponse {
    subject: string;
    web_link: string;
    location: string;
    start_datetime: string;
    end_datetime: string;
    formatteddatetime: string;
    description: string;
    event_type: string[];
    primaryeventtype: string;
    cost: string;
    eventimage: string;
    venue: string;
    venueaddress: string;
    geolocation: {
      lon: number;
      lat: number;
    };
  }
  
  // The clean version for your React Components
  export interface EventItem {
    id: string;
    title: string;
    category: string;
    dateDay: string;      // e.g. "15"
    dateMonth: string;    // e.g. "FEB"
    dateFull: string;     // e.g. "Sat, 15 Feb"
    time: string;         // e.g. "6:00 PM"
    location: string;
    address: string;
    cost: string;
    imageUrl: string;
    link: string;
  }