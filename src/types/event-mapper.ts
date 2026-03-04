import { BccCityEventResponse, EventItem } from "@/types/event";

export function mapRawEventToUi(raw: BccCityEventResponse): EventItem {
  const startDate = new Date(raw.start_datetime);

  return {
    // We use the web_link as a unique ID if none exists
    id: Math.random().toString(),
    
    // Clean up titles (sometimes they are very long)
    title: raw.subject.length > 60 
      ? raw.subject.substring(0, 60) + "..." 
      : raw.subject,

    category: raw.primaryeventtype || (raw.event_type?.[0]) || "General",

    // Date Parsing
    dateDay: startDate.getDate().toString(),
    dateMonth: startDate.toLocaleString('en-AU', { month: 'short' }).toUpperCase(),
    dateFull: startDate.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
    
    // Time Parsing
    time: startDate.toLocaleTimeString('en-AU', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    }),

    location: raw.venue || raw.location,
    address: raw.venueaddress,
    cost: raw.cost || "Free",
    imageUrl: raw.eventimage || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500", // Fallback image
    link: raw.web_link
  };
}