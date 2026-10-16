# Floodwatch Thailand

A map-first, bilingual flood-monitoring demonstration built with Next.js App Router, React, TypeScript, Leaflet, Lucide, TanStack Query, Zustand and Zod. Thai is the default language.

## Run

`npm install` then `npm run dev`. Build a static export with `npm run build`; serve `out/` using any static server. `npm run typecheck` checks TypeScript.

## Features

- Clickable provincial, district and subdistrict GeoJSON boundaries. Region selection and location breadcrumbs. Area files load on demand.
- Map panning, zoom, screen-space marker clustering, category layers, quick priority filters, location search and geographic filters.
- Derived location statistics and urgency-ordered incident list.
- Desktop details panel and mobile bottom sheet, including shelter capacity and electrical cautions.
- English/Thai controls, keyboard-accessible geographic features, offline indicator, boundary/data error handling and empty states.
- Practice reporting is saved only in browser storage and never dispatched.

## Data contract

`src/lib/data.ts` defines the mock adapter, models and validation. Replace `getReports()` with an authenticated API adapter and validate complete remote payloads before use. `src/lib/geography.ts` loads real reference geography. See `public/data/ATTRIBUTION.md` for sources.

**This is a demonstration, not an operational emergency system.** All emergencies, flood severity values, verification states, response-team assignments and shelter capacity are fictional. No official live feed is connected. No public report is automatically verified. Areas without a severity report are labeled as no data. Map directions provide a location reference and do not confirm route safety.

Before live use, implement authorized source integrations, freshness policies, authentication/roles, moderation and duplicate detection on the backend, consent-aware reporting, and operational validation of all response and evacuation information. External map tiles and fonts need network access; reference boundaries are shipped locally. Boundaries are generalized reference geometry and may not match current official administrative definitions.
