# 🇦🇺 Brisbane Smart-City Dashboard
**An AI-Powered Civic Intelligence Platform**

Built for the 2026 Brisbane Tech Market to demonstrate Engineering Excellence, Automated QA, and Agile Methodology.

---

## 💡 Project Overview
The **Brisbane Smart-City Dashboard** is a full-stack application designed to solve a local problem: the fragmentation of municipal data. It consolidates Brisbane City Council (BCC) Open Data into a single, high-performance interface.

### Key Value Propositions:
* **Live Infrastructure Tracking:** Real-time parking and telemetry data from BCC sensors.
* **AI Civic Assistant:** Generative AI summaries of complex Council Meeting Minutes.
* **Enterprise Reliability:** Automated "Health Checks" using Playwright to monitor external API stability.

---

## 🏗️ Technical Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19 / Next.js (App Router) |
| **Styling** | Tailwind CSS (Brisbane Brand Palette) |
| **Backend** | Node.js / Next.js API Routes |
| **Automation/QA** | **Playwright** (End-to-End Testing) |
| **AI Integration** | OpenAI / Gemini API (RAG Implementation) |
| **Data Source** | Brisbane City Council Open Data Portal (Opendatasoft API) |

---

## 🔄 Methodology: Solo-Scrum
This project was managed using **Agile/Scrum** methodologies to simulate a professional engineering environment.

* **Sprint Cadence:** 1-Week Sprints.
* **Task Management:** Managed via [GitHub Projects].
* **Definition of Done (DoD):** Feature must be responsive, pass all Playwright E2E tests, and be documented in the `/docs` folder.

### Sprint Breakdown:
* **Sprint 1 (MVP):** Map integration & Real-time Parking feeds.
* **Sprint 2 (Reliability):** Playwright E2E test suite & CI/CD pipeline setup.
* **Sprint 3 (AI):** Natural Language Processing of BCC meeting records.
* **Sprint 4 (UX/Polish):** Performance optimization and final deployment.

---

## 🧪 Quality Assurance (The Playwright Layer)
Because this app relies on external Government APIs, I implemented a robust testing strategy:

1.  **API Smoke Tests:** Automated daily checks to ensure BCC endpoints haven't changed their schema.
2.  **UI Verification:** Playwright scripts verify that Map markers and AI summaries render correctly on both Mobile and Desktop views.
3.  **Continuous Integration:** GitHub Actions run the test suite on every pull request to ensure zero regressions.

---

## 🚀 How to Run Locally
1. Clone the repo: `git clone [your-repo-link]`
2. Install dependencies: `npm install`
3. Set up `.env`: Add your `OPENAI_API_KEY`
4. Run Playwright Tests: `npx playwright test`
5. Start Development: `npm run dev`

---

## 📈 Future Roadmap
- [ ] Integration with Translink real-time GTFS feeds for Brisbane Ferries.
- [ ] Community "Incident Reporting" feature using Firebase.
- [ ] PWA (Progressive Web App) support for offline access to flood data.

---

**Developed by [Your Name]** *Currently seeking Entry-Level Software Engineering opportunities in Brisbane, Australia.*