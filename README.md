# BNE Pulse 🌆

![BCC API Health Check](https://github.com/t-rayan/Brisbane-city-smart-dashboard/actions/workflows/bcc-health.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

A real-time Brisbane city dashboard consuming live Brisbane City Council (BCC) open data APIs. Built to surface live parking availability, environmental sensor telemetry, and upcoming city events in a clean, unified interface.

🔗 **Live:** [brisbane-city-smart-dashboard.vercel.app](https://brisbane-city-smart-dashboard.vercel.app)

---

## Features

- **Live Parking** — Real-time CBD parking occupancy for King George Square and Wickham Terrace, with availability status and capacity progress bars
- **Sensor Network** — Interactive map of Brisbane's IoT environmental sensors (rainfall and creek levels), with live telemetry readings and hover tooltips
- **City Events** — Upcoming Brisbane City Council events with category filtering, venue details, and direct links
- **Live Feed** — Scrollable telemetry feed showing real-time sensor readings across Brisbane suburbs
- **Dark Mode** — Full light/dark theme support
- **Auto Refresh** — Data syncs automatically every 60 seconds

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Maps | Pigeon Maps + OpenStreetMap |
| Icons | Lucide React |
| Testing | Playwright |
| CI/CD | GitHub Actions |
| Deployment | Vercel |
| Data | Brisbane City Council Open Data API |

---

## Architecture

```
app/
├── page.tsx                          # Server component — fetches all BCC data
features/
├── parking/
│   ├── services/get-parkinginfo.ts   # BCC parking API
│   ├── ParkingCardList.tsx
│   └── ParkingCard.tsx
├── telemetry/
│   ├── services/get-metadatainfo.ts  # BCC telemetry API
│   ├── components/SensorMap.tsx      # Pigeon Maps interactive map
│   └── components/SensorListCard.tsx
├── cityevents/
│   ├── services/get-eventsinfo.ts    # BCC events API
│   └── EventList.tsx
tests/
├── smoke.spec.ts                     # App loads successfully
├── parking.spec.ts                   # Parking data health checks
├── sensors.spec.ts                   # Sensor data health checks
└── events.spec.ts                    # Events data health checks
.github/workflows/
└── bcc-health.yml                    # Scheduled API health checks every 6 hours
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- BCC Open Data API key — get one free at [data.brisbane.qld.gov.au](https://data.brisbane.qld.gov.au)

### Installation

```bash
# Clone the repo
git clone https://github.com/t-rayan/Brisbane-city-smart-dashboard.git
cd Brisbane-city-smart-dashboard

# Install dependencies
npm install

# Add your API key
echo "BCC_API_KEY=your_api_key_here" > .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Testing

This project uses **Playwright** for end-to-end health checks that verify live BCC API data is rendering correctly.

```bash
# Run all tests
npx playwright test

# Run specific feature tests
npx playwright test tests/parking.spec.ts
npx playwright test tests/sensors.spec.ts
npx playwright test tests/events.spec.ts

# Run with browser visible
npx playwright test --headed
```

### Automated Health Checks

GitHub Actions runs the full Playwright test suite every 6 hours to verify all BCC APIs are returning live data. If any check fails, a report is automatically uploaded as a GitHub artifact.

---

## Data Sources

All data is sourced from the [Brisbane City Council Open Data Portal](https://data.brisbane.qld.gov.au):

| Dataset | Refresh Rate |
|---|---|
| Brisbane Parking Stations | Every 60 min |
| Environmental Sensor Telemetry | Live |
| Brisbane City Council Events | Every 5 min |

---

## Author

**Narayan Thapa**
- GitHub: [@t-rayan](https://github.com/t-rayan)
- LinkedIn: https://www.linkedin.com/in/narayan-thapa-7154a411b/

---

## License

MIT
