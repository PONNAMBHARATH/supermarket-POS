# MarketFlow POS — Frontend

A React + TypeScript starter UI for the supermarket POS specification.

## Requirements
- Node.js 20 LTS or newer
- npm

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Run with Docker
Build and start the production container:
```bash
docker compose up --build
```
Open http://localhost:3000. Stop the container with `Ctrl+C` (or run `docker compose down` in another terminal).

The API base URL is embedded in the frontend at build time. To override the default (`http://localhost:8080/api/v1`):
```bash
VITE_API_BASE_URL=https://api.example.com/api/v1 docker compose up --build
```
Only use public frontend configuration here; do not pass credentials or other secrets as Vite variables.

## Included screens
- Dashboard overview
- Billing counter with barcode/search input, cart and payment modal
- Product catalogue with search and add-product form
- Customer directory
- Sales reports
- Offers and WhatsApp campaign preparation UI
- Settings and counter information

## Important implementation notes
- This is a **frontend starter with demonstration data**. It does not create real bills or save records to MySQL yet.
- Data resets when the browser is refreshed. Connect the UI to the Spring Boot API before using it for real transactions.
- Barcode scanners that behave like keyboards can type into the focused barcode field. Press Enter to search.
- Browser printing is represented by a printable receipt preview.
- The API base URL is configured through `VITE_API_BASE_URL`.
- Do not put database credentials, object-storage secrets or WhatsApp tokens in frontend environment variables.
- Owner/cashier authorization must be enforced by Spring Security on the backend, not only by hiding frontend controls.
- Configure tax rules with an accountant before production use.

## Suggested next integration
Implement backend endpoints from the project specification and replace the demo data in `src/data/mockData.ts` with calls through `src/services/api.ts`.
