# Build Thailand Flood Response Map

> Project: Thailand Flood Monitoring & Emergency Response Platform
>
> Objective
>
> Design and develop a modern, interactive, map-based web application for monitoring flood conditions and coordinating emergency assistance across Thailand.
>
> The platform should help citizens, rescue teams, volunteers, and government agencies quickly understand flood situations, identify high-risk areas, locate people needing urgent assistance, and find nearby evacuation centers.
>
> Design Priority: Clean, minimal, modern, intuitive, accessible, and easy to understand during emergencies.
>
> The interface must be visually appealing without overwhelming users with too much information.
>
> 1. Interactive Thailand Map
>
> The main focus of the application must be a large, interactive map of Thailand.
>
> Geographic Navigation
>
> - Display Thailand’s actual geographic boundaries.
> - Allow users to select and navigate between regions:
>   - Northern Thailand
>   - Northeastern Thailand
>   - Central Thailand
>   - Eastern Thailand
>   - Western Thailand
>   - Southern Thailand
> - Support progressive geographic drill-down:
>   - Country → Region → Province → District → Subdistrict
> - Allow users to click directly on geographic boundaries to explore affected areas.
> - Automatically zoom and center the map when selecting a location.
> - Provide breadcrumb navigation for returning to previous geographic levels.
> - Support map zooming, panning, and marker clustering.
> - Display geographic boundaries using accurate GeoJSON data.
>
> Flood Severity Visualization
>
> Use color-coded geographic areas to represent flood severity:
>
> - Normal: Neutral gray or very light blue
> - Monitoring: Light blue
> - Moderate flooding: Yellow
> - Severe flooding: Orange
> - Critical flooding: Red
>
> Use subtle, semi-transparent map overlays so geographic information remains readable.
>
> Include a compact, collapsible map legend.
>
> 2. Emergency Incident Markers
>
> Display interactive markers representing emergency incidents and assistance requests.
>
> Incident Categories
>
> Electrical Hazards
>
> - Electrical leakage or electrocution hazard
> - Power cutoff locations
> - Power outages
> - Dangerous electrical infrastructure
>
> Emergency Assistance
>
> - People stranded by floodwater
> - Residents awaiting rescue
> - Missing or trapped individuals
> - Areas without drinking water
> - Areas without food supplies
>
> Medical Emergencies
>
> - Critically ill patients requiring immediate assistance
> - Bedridden patients
> - Elderly people requiring evacuation
> - People with disabilities requiring assistance
> - Patients requiring medication or medical transportation
>
> Evacuation and Relief
>
> - Active evacuation centers
> - Temporary shelters
> - Rescue coordination centers
> - Food and water distribution points
> - Nearby medical facilities
>
> Transportation
>
> - Flooded roads
> - Impassable roads
> - Road closures
> - Accessible evacuation routes
>
> Marker Behavior
>
> - Use simple, recognizable Lucide icons.
> - Group nearby markers automatically when zoomed out.
> - Expand clusters as users zoom in.
> - Show essential information when a marker is selected.
> - Open a clean details panel for additional information.
> - Use distinct visual indicators for urgent emergencies.
> - Avoid displaying excessive markers simultaneously.
> - Allow filtering markers by incident category and urgency.
>
> 3. Emergency Priority System
>
> Introduce a clear incident priority classification:
>
> - Critical: Immediate life-threatening emergency
> - High: Urgent assistance required
> - Medium: Assistance needed but not immediately life-threatening
> - Low: Non-urgent requests or general monitoring
>
> Prioritize unresolved Critical incidents in emergency lists.
>
> Show response status separately from priority:
>
> - Awaiting Verification
> - Awaiting Assistance
> - Rescue Team Assigned
> - Assistance In Progress
> - Resolved
>
> Priority indicators should remain readable without relying exclusively on color.
>
> 4. Dashboard Overview
>
> Include a compact summary section showing:
>
> - Provinces affected by flooding
> - Total affected areas
> - Active emergency incidents
> - Critical medical emergencies
> - People awaiting assistance
> - Active evacuation centers
> - Reported electrical hazards
> - Latest data update
>
> Keep summary cards small, well-spaced, and visually consistent.
>
> Allow users to select a province or district to update the statistics for that specific area.
>
> 5. Incident Details Panel
>
> When a user clicks an incident marker, display a side panel on desktop and a bottom sheet on mobile.
>
> Include:
>
> - Incident type
> - Geographic location
> - Latitude and longitude, when available
> - Priority level
> - Description of the situation
> - Estimated number of affected people
> - Specific assistance requirements
> - Reported date and time
> - Last verified date and time
> - Current response status
> - Responsible rescue team or authority, if assigned
> - Available photos or supporting information
> - Directions to the location, when safe and available
>
> Sensitive personal information must not be publicly exposed.
>
> Distinguish verified incidents from unverified public reports.
>
> 6. Evacuation Center Information
>
> Display evacuation centers as dedicated map markers.
>
> When selected, show:
>
> - Evacuation center name
> - Complete address
> - GPS location
> - Operating status
> - Maximum capacity
> - Current occupancy
> - Available spaces
> - Facilities and accessibility information
> - Availability of drinking water, food, medicine, and essential supplies
> - Contact information
> - Last verified update
> - Directions using a mapping application
>
> Clearly indicate whether a center is Open, Full, Temporarily Closed, or Unverified.
>
> 7. Search, Filters, and Map Layers
>
> Provide a minimal and intuitive filtering experience.
>
> Location Filters
>
> - Region
> - Province
> - District
> - Subdistrict
>
> Incident Filters
>
> - Flood severity
> - Electrical hazards
> - Power outages
> - Rescue requests
> - Water shortages
> - Food shortages
> - Medical emergencies
> - Evacuation centers
> - Road closures
>
> Quick Filters
>
> - All Incidents
> - Critical Only
> - Awaiting Assistance
> - Evacuation Centers
>
> Map Layers
>
> Allow users to toggle:
>
> - Flood severity overlay
> - Emergency incidents
> - Electrical hazards
> - Medical emergencies
> - Evacuation centers
> - Road conditions
>
> Filters should use compact dropdowns, icon buttons, or collapsible controls instead of large permanent panels.
>
> 8. UI/UX Design Requirements
>
> Create a premium-quality interface with a clean, professional visual style.
>
> Visual Style
>
> - Modern minimal dashboard
> - Light theme by default
> - White and soft neutral backgrounds
> - Subtle blue accents
> - Clean typography
> - Rounded corners
> - Soft borders
> - Very subtle shadows
> - Generous spacing
> - Consistent iconography
> - Minimal visual noise
>
> Design Inspiration
>
> - Apple Maps
> - Google Maps
> - Modern emergency monitoring dashboards
> - Contemporary SaaS interfaces
>
> Avoid excessive gradients, heavy glassmorphism, oversized cards, decorative illustrations, and unnecessary animations.
>
> Use emergency colors primarily to communicate actual severity.
>
> Typography
>
> - Use Noto Sans Thai for Thai content.
> - Use Inter or a similar modern font for English content.
> - Maintain readable sizes and accessible contrast ratios.
>
> User Experience
>
> - The map must always remain the primary visual element.
> - Display critical information first.
> - Use progressive disclosure for advanced information.
> - Keep the default view uncluttered.
> - Prefer contextual panels over full-page navigation.
> - Support keyboard navigation and accessible controls.
> - Provide loading, empty, offline, and error states.
> - Never display missing or outdated data as confirmed safe conditions.
>
> 9. Responsive Layout
>
> Desktop
>
> - Compact top navigation
> - Small summary cards
> - Large central map
> - Collapsible left filter panel
> - Contextual right details panel
> - Floating map controls
> - Compact emergency incident list
>
> Mobile
>
> - Full-screen interactive map
> - Minimal floating controls
> - Compact search and region selector
> - Horizontally scrollable summary metrics
> - Bottom-sheet incident details
> - Collapsible filter drawer
> - Large touch-friendly interactive targets
>
> Avoid permanently displaying multiple panels on small screens.
>
> 10. Real-Time Data and Reliability
>
> Prepare the architecture for live emergency information.
>
> Potential data sources include:
>
> - Thai government flood monitoring datasets
> - Department of Disaster Prevention and Mitigation (DDPM)
> - Thai Meteorological Department
> - Royal Irrigation Department
> - Provincial disaster management authorities
> - Verified rescue organizations
> - Authorized community incident reports
>
> Requirements:
>
> - Use official or verified sources whenever possible.
> - Provide source attribution and update timestamps.
> - Use polling or real-time updates where supported.
> - Prevent duplicate incident reports.
> - Support report verification and moderation.
> - Do not mark public reports as verified automatically.
> - Clearly distinguish mock data from real operational data.
> - Do not fabricate real emergencies, rescue availability, or evacuation capacity.
>
> For electrical hazards, show cautionary warnings and avoid presenting any location as electrically safe without verified confirmation.
>
> 11. Suggested Technology Stack
>
> Use:
>
> - Next.js with App Router
> - React
> - TypeScript
> - Tailwind CSS
> - shadcn/ui
> - Lucide React
> - MapLibre GL JS or Leaflet
> - GeoJSON for geographic boundaries
> - TanStack Query for server-state management
> - Zustand for map and filter state
> - Zod for data validation
>
> Prefer reusable components, type-safe data models, clean architecture, and maintainable code.
>
> Support internationalization with Thai as the default language and English as an alternative.
>
> 12. Suggested Component Structure
>
> Create reusable components such as:
>
> - FloodDashboard
> - ThailandInteractiveMap
> - RegionSelector
> - LocationBreadcrumb
> - FloodSeverityLayer
> - EmergencyMarkerLayer
> - IncidentMarker
> - MarkerCluster
> - MapLegend
> - MapLayerControls
> - DashboardSummary
> - IncidentFilterPanel
> - EmergencyPriorityList
> - IncidentDetailsPanel
> - EvacuationCenterDetails
> - LastUpdatedIndicator
> - MobileIncidentBottomSheet
>
> 13. Mock Data and API Preparation
>
> Create realistic demonstration data using clearly labeled fictional incidents.
>
> Define TypeScript interfaces for:
>
> - Region
> - Province
> - District
> - Subdistrict
> - FloodStatus
> - EmergencyIncident
> - IncidentPriority
> - IncidentResponseStatus
> - EvacuationCenter
> - EmergencyResource
> - DataSource
>
> Ensure incident records include coordinates, geographic identifiers, timestamps, severity, verification state, and response status.
>
> Design the data layer so mock data can later be replaced with live APIs without major UI changes.
>
> 14. Expected User Flow
>
> Flow A: Explore Flood Conditions
>
> Open dashboard → View Thailand map → Select region → Select province → Select district → View flood severity and incidents.
>
> Flow B: Find Critical Emergencies
>
> Open dashboard → Select Critical Only → View prioritized incident markers → Select incident → View details and response status.
>
> Flow C: Locate Evacuation Centers
>
> Open dashboard → Enable Evacuation Centers layer → Select location → View center availability and facilities → Open directions.
>
> Flow D: Track Assistance Requests
>
> Select affected area → View pending assistance requests → Filter by medical, food, or water needs → Open incident details → Check verification and response progress.
>
> 15. Final Deliverables
>
> Generate:
>
> 1. A production-quality responsive frontend.
> 2. An interactive Thailand map with geographic drill-down.
> 3. Flood severity overlays and emergency markers.
> 4. A clean dashboard with meaningful statistics.
> 5. Interactive filters and map layers.
> 6. Incident details and evacuation center panels.
> 7. A priority-based emergency incident list.
> 8. Type-safe mock data and API-ready architecture.
> 9. Thai and English localization support.
> 10. Accessible loading, error, and empty states.
>
> Critical Design Instruction
>
> Do not build a conventional dashboard overloaded with charts, tables, and sidebars.
>
> The interactive Thailand map must occupy most of the available screen space.
>
> Keep the interface exceptionally clean, calm, structured, and intuitive while ensuring critical emergency information remains prominent.
>
> The final result should feel like a modern geographic emergency response platform, not a generic admin dashboard.
>
> Prioritize clarity, geographic exploration, incident urgency, accessibility, and practical emergency usability above decorative design.

<details><summary>24 previous messages</summary>

> The layout will center on a quiet, full-height map, with a narrow incident rail and compact statistics above it. Flood colors will carry the urgency; all incident and shelter information will be explicitly marked as fictional demo data.
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `mkdir -p /workspace/sites/floodwatch; curl -I --max-time 20 https://registry.npmjs.org/next; ls /opt/codex/runtimes/codex-primary-runtime/dependencies/node/lib/node_modules`
> - Ran `curl -I --max-time 20 https://registry.npmjs.org/next; ls -la /opt; find / -maxdepth 4 -type d -name node_modules 2>/dev/null`
> - Ran `cat > package.json <<'EOF'
{"name":"floodwatch-thailand","version":"1.0.0","private":true,"scripts":{"dev":"next dev --hostname 0.0.0.0","build":"next build","typecheck":"tsc --noEmit"},"dependencies":{"next":"^15.5.0","react":"^19.1.0","react-dom":"^19.1.0","leaflet":"^1.9.4","lucide-react":"^0.468.0","zustand":"^5.0.0","zod":"^3.24.0","@tanstack/react-query":"^5.62.0"},"devDependencies":{"typescript":"^5.7.0","@types/react":"^19.0.0","@types/react-dom":"^19.0.0","@types/leaflet":"^1.9.15","@types/node":"^22.0.0"}}
EOF
npm install --no-audit --no-fund`
> - Ran `mkdir -p public/data src/app src/components src/lib; curl -L --fail --max-time 40 https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json -o public/data/thailand.geojson`
>
> </details>
>
> I’ll build a map-first frontend with clearly labeled demonstration data, geographic exploration, and contextual emergency details. I’m using the Sites skill to develop and preview the application.
>
> <details><summary>Ran 8 commands, called 2 tools</summary>
>
> - Ran `pwd && rg --files -g '!node_modules' -g '!package-lock.json' -g '!*lock*' -g 'AGENTS.md' -g 'package.json' -g 'src/**' -g 'app/**' -g 'pages/**' -g 'index.html' -g 'vite.config.*' -g 'tsconfig.json'`
> - Ran `ls -la /workspace; printenv SITES_MANAGED_LINUX_CONTAINER; find / -path '*/scripts/project-setup.mjs' 2>/dev/null | head -5`
> - Ran `ls -la /workspace/shared; ls -la /tmp; cat /etc/codex/network-policy.json; which node npm pnpm; rg --files /workspace/.agents /workspace/.codex`
>
> MCP tool call
>
> codex_apps.cloud_environment.environment_status
>
> ```json
> {}
> ```
>
> ```text
> {
>   "capabilities": [],
>   "connectivity": "connected",
>   "desired_phase": "running",
>   "environment_id": "ccarenv_b64_Y2NhcmVudl9kNmI1NjQxZWZlMjA4MTkxOWVlM2Y0NWY4MThjMmQ4Mg",
>   "failure": null,
>   "network_policy": {
>     "mode": "unrestricted",
>     "state": "enforced"
>   },
>   "observations_current": true,
>   "observed_phase": "running",
>   "observed_spec_revision": "2",
>   "outbound_identities": [],
>   "provider": "cloud",
>   "runtime_variables": [],
>   "secrets": [],
>   "source_config_id": null,
>   "source_config_version_id": null,
>   "spec_revision": "2"
> }
> ```
>
> ```json
> {
>   "capabilities": [],
>   "connectivity": "connected",
>   "desired_phase": "running",
>   "environment_id": "ccarenv_b64_Y2NhcmVudl9kNmI1NjQxZWZlMjA4MTkxOWVlM2Y0NWY4MThjMmQ4Mg",
>   "failure": null,
>   "network_policy": {
>     "mode": "unrestricted",
>     "state": "enforced"
>   },
>   "observations_current": true,
>   "observed_phase": "running",
>   "observed_spec_revision": "2",
>   "outbound_identities": [],
>   "provider": "cloud",
>   "runtime_variables": [],
>   "secrets": [],
>   "source_config_id": null,
>   "source_config_version_id": null,
>   "spec_revision": "2"
> }
> ```
>
> - Ran `find /opt /tmp /workspace -name 'site-workflow.mjs' -o -name 'AGENTS.md' 2>/dev/null; npm view next version`
>
> MCP tool call
>
> codex_apps.sites.create_site
>
> ```json
> {
>   "creation_intent": "user_requested",
>   "description": "A map-first bilingual Thailand flood monitoring demonstration with fictional emergency reports.",
>   "slug": "floodwatch-thailand",
>   "title": "Floodwatch — Thailand Flood & Emergency Map"
> }
> ```
>
> ```text
> Action completed.
> ```
>
> ```json
> {
>   "auth_client_id": "oaiapp_2c39df073b0ba560f85ce515bb5bfbdae9b8ae6f782e7b84cf81910202ad7599",
>   "created_at": "2026-10-16T02:31:47.196238+00:00",
>   "current_live_url": null,
>   "current_preview_url": null,
>   "description": "A map-first bilingual Thailand flood monitoring demonstration with fictional emergency reports.",
>   "disabled_by": null,
>   "expected_url": "https://floodwatch-thailand.blackcrow3.chatgpt.site",
>   "id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2",
>   "latest_edit_context": null,
>   "latest_version_number": 0,
>   "screenshot_url": null,
>   "slug": "floodwatch-thailand",
>   "source_repository_credential": {
>     "app_repository_id": "appgrepo_2ed7f03ed27081918a473222cc7874d6",
>     "auth_mode": "http_extra_header",
>     "branch": "main",
>     "provider": "cloudflare_artifact",
>     "publish_on_push_accepted": false,
>     "publish_on_push_expires_at": null,
>     "remote_url": "https://git.chatgpt-team.site/16d74e52-a8b9-40dd-9b78-47069f2d3fda/appgprj_6ad18c8ebf308191912617fde6ddd8f2.git",
>     "repository": "appgprj_6ad18c8ebf308191912617fde6ddd8f2",
>     "token": "art_v2_x_d2279f2ed9af72e2599ff4144f354bf76001d89a",
>     "token_expires_at": "2026-10-16T02:41:56.752Z"
>   },
>   "status": "active",
>   "title": "Floodwatch — Thailand Flood & Emergency Map",
>   "updated_at": "2026-10-16T02:31:57.947059+00:00"
> }
> ```
>
> - Ran `python - <<'PY'
import json
j=json.load(open('public/data/thailand.geojson')); print(j['type'],len(j['features'])); print(j['features'][0]['properties']); print([f['properties'] for f in j['features'][:3]])
PY
mkdir -p .openai
cat > .openai/hosting.json <<'EOF'
{"project_id":"appgprj_6ad18c8ebf308191912617fde6ddd8f2","static":{"directory":"out"}}
EOF
cat > next.config.ts <<'EOF'
import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', images: { unoptimized: true } };
export default config;
EOF
cat > tsconfig.json <<'EOF'
{"compilerOptions":{"target":"ES2017","lib":["dom","dom.iterable","esnext"],"allowJs":true,"skipLibCheck":true,"strict":true,"noEmit":true,"esModuleInterop":true,"module":"esnext","moduleResolution":"bundler","resolveJsonModule":true,"isolatedModules":true,"jsx":"preserve","incremental":true,"plugins":[{"name":"next"}],"paths":{"@/*":["./src/*"]}},"include":["next-env.d.ts","**/*.ts","**/*.tsx",".next/types/**/*.ts"],"exclude":["node_modules"]}
EOF
cat > src/app/layout.tsx <<'EOF'
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Floodwatch | Thailand in view',description:'Explore Thailand flood conditions, emergency requests and evacuation centers. Clearly labeled demonstration data.'};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {return <html lang="th"><body>{children}</body></html>}
EOF
cat > src/app/page.tsx <<'EOF'
import FloodDashboard from '@/components/FloodDashboard';
export default function Page(){return <FloodDashboard/>}
EOF`
> - Ran `cat > src/lib/data.ts <<'EOF'
import { z } from 'zod';
export type Localized = {en:string;th:string};
export interface Region {id:string;name:Localized;center:[number,number];zoom:number;provinces:string[]}
export interface Province {id:string;name:Localized;regionId:string}
export interface District {id:string;name:Localized;provinceId:string}
export interface Subdistrict {id:string;name:Localized;districtId:string}
export type IncidentPriority = 'critical'|'high'|'medium'|'low';
export type IncidentResponseStatus = 'verification'|'waiting'|'assigned'|'progress'|'resolved';
export type Category = 'rescue'|'medical'|'electrical'|'supplies'|'road'|'shelter';
export interface FloodStatus {provinceId:string;severity:'normal'|'monitoring'|'moderate'|'severe'|'critical'|'unknown';updatedAt:string;sourceId:string}
export interface DataSource {id:string;name:string;url?:string;isMock:boolean;updatedAt:string}
export interface EmergencyResource {id:string;name:Localized;type:string;availability:'unknown'|'available'|'unavailable'}
export const incidentSchema=z.object({id:z.string(),lat:z.number().min(-90).max(90),lng:z.number().min(-180).max(180),priority:z.enum(['critical','high','medium','low']),verified:z.boolean()});
export interface EmergencyIncident {id:string;title:Localized;description:Localized;category:Category;priority:IncidentPriority;status:IncidentResponseStatus;province:string;district:string;subdistrict:string;region:string;lat:number;lng:number;people:number;verified:boolean;reportedAt:string;verifiedAt:string|null;sourceId:string;requirements:Localized;team:string|null}
export interface EvacuationCenter extends EmergencyIncident {capacity:number;occupancy:number;operatingStatus:'open'|'full'|'closed'|'unverified';facilities:Localized;address:Localized;contact:string|null}
export const snapshot='2026-10-16T07:30:00+07:00';
export const sources:DataSource[]=[{id:'demo',name:'Floodwatch fictional demonstration dataset',isMock:true,updatedAt:snapshot}];
export const regions:Region[]=[
{id:'north',name:{en:'Northern Thailand',th:'ภาคเหนือ'},center:[18.3,99.4],zoom:7,provinces:['Chiang Mai','Chiang Rai','Mae Hong Son','Lamphun','Lampang','Phayao','Phrae','Nan','Uttaradit','Sukhothai','Phitsanulok','Phichit','Phetchabun','Nakhon Sawan','Uthai Thani','Kamphaeng Phet']},
{id:'northeast',name:{en:'Northeastern Thailand',th:'ภาคตะวันออกเฉียงเหนือ'},center:[16.2,103.2],zoom:7,provinces:['Nong Khai','Bueng Kan','Loei','Udon Thani','Nong Bua Lam Phu','Sakon Nakhon','Nakhon Phanom','Mukdahan','Kalasin','Khon Kaen','Maha Sarakham','Roi Et','Yasothon','Amnat Charoen','Ubon Ratchathani','Si Sa Ket','Surin','Buri Ram','Nakhon Ratchasima','Chaiyaphum']},
{id:'central',name:{en:'Central Thailand',th:'ภาคกลาง'},center:[14.3,100.5],zoom:8,provinces:['Bangkok Metropolis','Bangkok','Phra Nakhon Si Ayutthaya','Pathum Thani','Nonthaburi','Samut Prakan','Samut Sakhon','Samut Songkhram','Nakhon Pathom','Suphan Buri','Ang Thong','Sing Buri','Chai Nat','Lop Buri','Saraburi']},
{id:'east',name:{en:'Eastern Thailand',th:'ภาคตะวันออก'},center:[13.1,101.7],zoom:8,provinces:['Chon Buri','Rayong','Chanthaburi','Trat','Chachoengsao','Prachin Buri','Sa Kaeo','Nakhon Nayok']},
{id:'west',name:{en:'Western Thailand',th:'ภาคตะวันตก'},center:[14.5,99],zoom:7,provinces:['Tak','Kanchanaburi','Ratchaburi','Phetchaburi','Prachuap Khiri Khan']},
{id:'south',name:{en:'Southern Thailand',th:'ภาคใต้'},center:[8.8,99.5],zoom:7,provinces:['Chumphon','Ranong','Surat Thani','Phangnga','Phuket','Krabi','Nakhon Si Thammarat','Trang','Phatthalung','Satun','Songkhla','Pattani','Yala','Narathiwat']}];
const raw:[string,string,string,Category,IncidentPriority,IncidentResponseStatus,string,string,string,number,number,number,boolean][]=[
['FW-001','Stranded residents need evacuation','ประชาชนติดค้าง ต้องการอพยพ','rescue','critical','waiting','Chiang Mai','Mueang Chiang Mai','Wat Ket',18.795,99.012,12,true],
['FW-002','Urgent medical transport needed','ต้องการเคลื่อนย้ายผู้ป่วยฉุกเฉิน','medical','critical','assigned','Chiang Rai','Mueang Chiang Rai','Rop Wiang',19.91,99.84,2,true],
['FW-003','Electrical hazard near flooded road','อันตรายจากไฟฟ้าบริเวณถนนน้ำท่วม','electrical','high','waiting','Sukhothai','Mueang Sukhothai','Thani',17.01,99.82,0,true],
['FW-004','Families awaiting drinking water','ครอบครัวรอรับน้ำดื่มสะอาด','supplies','high','waiting','Phra Nakhon Si Ayutthaya','Phra Nakhon Si Ayutthaya','Pratu Chai',14.35,100.56,36,false],
['FW-005','Flooded road — access restricted','ถนนน้ำท่วม — จำกัดการสัญจร','road','medium','progress','Ubon Ratchathani','Warin Chamrap','Warin Chamrap',15.19,104.86,0,true],
['FW-006','Elderly residents need assistance','ผู้สูงอายุต้องการความช่วยเหลือ','medical','high','waiting','Nan','Mueang Nan','Nai Wiang',18.78,100.77,4,false],
['FW-007','Community evacuation request','ชุมชนร้องขอการอพยพ','rescue','high','progress','Nong Khai','Mueang Nong Khai','Nai Mueang',17.88,102.74,18,true],
['FW-008','Food and essential supplies needed','ต้องการอาหารและของใช้จำเป็น','supplies','medium','assigned','Nakhon Si Thammarat','Mueang Nakhon Si Thammarat','Tha Wang',8.44,99.96,25,true],
['FW-009','Residents awaiting rescue boat','ประชาชนรอเรือช่วยเหลือ','rescue','critical','waiting','Chiang Mai','Saraphi','Nong Phueng',18.72,99.03,8,false],
['FW-010','Medication delivery requested','ร้องขอการจัดส่งยา','medical','medium','waiting','Phitsanulok','Mueang Phitsanulok','Nai Mueang',16.82,100.26,3,true],
['FW-011','Power outage reported','มีรายงานไฟฟ้าดับ','electrical','medium','verification','Pathum Thani','Mueang Pathum Thani','Bang Prok',14.02,100.52,0,false],
['FW-012','Road closure at riverside','ปิดถนนเลียบแม่น้ำ','road','high','progress','Chiang Rai','Mae Sai','Mae Sai',20.42,99.88,0,true]];
export const incidents:EmergencyIncident[]=raw.map(([id,en,th,category,priority,status,province,district,subdistrict,lat,lng,people,verified])=>({id,title:{en,th},description:{en:'Fictional scenario for demonstration. Rising water has affected access in this area. The people and needs shown are simulated; do not use this report for real emergency decisions.',th:'สถานการณ์สมมติเพื่อการสาธิต ระดับน้ำที่สูงขึ้นส่งผลต่อการเข้าถึงพื้นที่ จำนวนผู้ได้รับผลกระทบและความต้องการเป็นข้อมูลจำลอง ห้ามใช้ตัดสินใจในเหตุฉุกเฉินจริง'},category,priority,status,province,district,subdistrict,region:regions.find(r=>r.provinces.includes(province))?.id||'central',lat,lng,people,verified,reportedAt:snapshot,verifiedAt:verified?snapshot:null,sourceId:'demo',requirements:{en:category==='medical'?'Medical transport, medication and trained personnel':category==='electrical'?'Authorized electrical assessment. Keep away from floodwater and electrical equipment.':'Rescue assessment, drinking water and essential supplies',th:category==='medical'?'รถพยาบาล ยา และบุคลากรทางการแพทย์':category==='electrical'?'ตรวจสอบโดยเจ้าหน้าที่ไฟฟ้า หลีกเลี่ยงน้ำท่วมและอุปกรณ์ไฟฟ้า':'ประเมินการช่วยเหลือ น้ำดื่ม และสิ่งของจำเป็น'},team:status==='assigned'||status==='progress'?'Demo response team A':null}));
export const centers:EvacuationCenter[]=[['EC-001','Community relief center','ศูนย์พักพิงชุมชน','Chiang Mai',18.82,98.97,120,78],['EC-002','Municipal evacuation center','ศูนย์อพยพเทศบาล','Phra Nakhon Si Ayutthaya',14.38,100.58,200,146],['EC-003','Southern relief center','ศูนย์พักพิงภาคใต้','Surat Thani',9.14,99.32,100,100],['EC-004','Regional community shelter','ศูนย์พักพิงชุมชนภูมิภาค','Khon Kaen',16.44,102.83,180,62]].map((r)=>{const [id,en,th,province,lat,lng,capacity,occupancy]=r;return {...incidents[0],id:String(id),title:{en:String(en),th:String(th)},category:'shelter',priority:'low',status:'progress',province:String(province),district:'Mueang',subdistrict:'Community center',region:regions.find(x=>x.provinces.includes(String(province)))?.id||'central',lat:Number(lat),lng:Number(lng),people:0,capacity:Number(capacity),occupancy:Number(occupancy),operatingStatus:capacity===occupancy?'full':'open',facilities:{en:'Wheelchair access · Toilets · Drinking water · Food · First aid',th:'ทางลาดรถเข็น · ห้องน้ำ · น้ำดื่ม · อาหาร · ปฐมพยาบาล'},address:{en:'Fictional community facility, '+province,th:'สถานที่สมมติ จังหวัด '+province},contact:null} as EvacuationCenter});
export const allReports=[...incidents,...centers];
export const severityByProvince:Record<string,string>={'Chiang Mai':'critical','Chiang Rai':'severe','Nan':'severe','Sukhothai':'moderate','Phitsanulok':'moderate','Nong Khai':'severe','Ubon Ratchathani':'moderate','Phra Nakhon Si Ayutthaya':'moderate','Pathum Thani':'monitoring','Nakhon Si Thammarat':'moderate','Surat Thani':'monitoring','Phrae':'monitoring','Lampang':'monitoring','Lamphun':'moderate','Phayao':'moderate','Tak':'monitoring','Bueng Kan':'moderate','Nakhon Phanom':'monitoring'};
export const colors:Record<string,string>={critical:'#ea7969',severe:'#f2ac69',moderate:'#ead28b',monitoring:'#9fc9d6',normal:'#e1e9e5',unknown:'#e5ebe5'};
export async function getReports():Promise<EmergencyIncident[]>{return allReports.map(r=>{incidentSchema.parse(r);return r})}
EOF`
> - Ran `npm install --cache /tmp/floodwatch-npm --no-audit --no-fund`
> - Ran ``cat > src/lib/store.ts <<'EOF'
import {create} from 'zustand';
import type {Category,EmergencyIncident} from './data';
interface State {lang:'th'|'en';region:string;province:string;district:string;subdistrict:string;quick:string;category:Category|'';query:string;selected:EmergencyIncident|null;layers:Record<string,boolean>;set:(v:Partial<State>)=>void}
export const useDashboard=create<State>((set)=>({lang:'th',region:'',province:'',district:'',subdistrict:'',quick:'all',category:'',query:'',selected:null,layers:{flood:true,rescue:true,electrical:true,medical:true,shelter:true,supplies:true,road:true},set}));
EOF
cat > src/components/ThailandInteractiveMap.tsx <<'EOF'
'use client';
import {useEffect,useRef,useState} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {renderToStaticMarkup} from 'react-dom/server';
import {Zap,HeartPulse,House,HandHelping,Package,Route,Plus,Minus,LocateFixed,Layers,ChevronDown,Expand} from 'lucide-react';
import {useDashboard} from '@/lib/store';
import {regions,colors,severityByProvince,type EmergencyIncident} from '@/lib/data';
const icons={rescue:HandHelping,medical:HeartPulse,electrical:Zap,shelter:House,supplies:Package,road:Route};
export default function ThailandInteractiveMap({reports,provincesLoaded}:{reports:EmergencyIncident[];provincesLoaded:(p:string[])=>void}){
 const container=useRef<HTMLDivElement>(null),map=useRef<L.Map|null>(null),geo=useRef<L.GeoJSON|null>(null),markers=useRef<L.LayerGroup|null>(null);
 const s=useDashboard();const [ready,setReady]=useState(false),[error,setError]=useState(''),[layerOpen,setLayerOpen]=useState(false),[legend,setLegend]=useState(true),[tileError,setTileError]=useState(false);
 const latest=useRef(s);latest.current=s;
 useEffect(()=>{if(!container.current)return;const m=L.map(container.current,{zoomControl:false,attributionControl:false,minZoom:5,maxZoom:17}).setView([13.7,101.1],5.55);map.current=m;
 L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd'}).on('tileerror',()=>setTileError(true)).addTo(m);
 markers.current=L.layerGroup().addTo(m);L.control.attribution({position:'bottomright',prefix:false}).addTo(m).addAttribution('© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © CARTO');
 fetch('/data/thailand.geojson').then(r=>{if(!r.ok)throw Error();return r.json()}).then(data=>{provincesLoaded(data.features.map((f:{properties:{name:string}})=>f.properties.name).sort());geo.current=L.geoJSON(data,{style:f=>({color:'#ffffff',weight:1.2,fillColor:colors[severityByProvince[f?.properties.name]||'unknown'],fillOpacity:.52}),onEachFeature:(f,l)=>{l.bindTooltip(f.properties.name,{sticky:true,className:'province-tooltip'});l.on('click',()=>{const r=regions.find(r=>r.provinces.includes(f.properties.name));latest.current.set({province:f.properties.name,region:r?.id||'',district:'',subdistrict:'',selected:null});});}}).addTo(m);setReady(true)}).catch(()=>setError('Geographic boundaries could not load. Please reload.'));
 const resize=new ResizeObserver(()=>m.invalidateSize());resize.observe(container.current);return()=>{resize.disconnect();m.remove();map.current=null};},[]);
 useEffect(()=>{const m=map.current;if(!m||!geo.current)return;geo.current.setStyle(f=>({fillOpacity:s.layers.flood?.6:.1,fillColor:colors[severityByProvince[f?.properties.name]||'unknown'],color:s.province===f?.properties.name?'#246c67':'#fff',weight:s.province===f?.properties.name?2.5:1}));},[s.layers.flood,s.province,ready]);
 useEffect(()=>{const m=map.current;if(!m||!geo.current)return;if(s.province){geo.current.eachLayer(l=>{const x=l as L.Polygon&{feature:{properties:{name:string}}};if(x.feature.properties.name===s.province)m.fitBounds(x.getBounds(),{padding:[75,75],maxZoom:10})})}else if(s.region){const r=regions.find(r=>r.id===s.region);if(r)m.setView(r.center,r.zoom)}else m.setView([13.7,101.1],5.55)},[s.province,s.region,ready]);
 useEffect(()=>{if(s.selected&&map.current)map.current.flyTo([s.selected.lat,s.selected.lng],Math.max(map.current.getZoom(),10),{duration:.5})},[s.selected]);
 useEffect(()=>{const m=map.current,group=markers.current;if(!m||!group)return;const draw=()=>{group.clearLayers();const cells=new Map<string,EmergencyIncident[]>();reports.filter(r=>s.layers[r.category]).forEach(r=>{const p=m.project([r.lat,r.lng]);const cell=`${Math.floor(p.x/48)}-${Math.floor(p.y/48)}`;cells.set(cell,[...(cells.get(cell)||[]),r])});cells.forEach(rs=>{const r=rs[0],Icon=icons[r.category],cluster=rs.length>1;const html=cluster?`<span>${rs.length}</span>`:renderToStaticMarkup(<Icon size={17} strokeWidth={2.2}/>);const marker=L.marker([r.lat,r.lng],{icon:L.divIcon({className:`incident-pin ${cluster?'cluster':r.category} ${r.priority==='critical'?'urgent':''} ${s.selected?.id===r.id?'selected':''}`,html,iconSize:cluster?[37,37]:[34,34],iconAnchor:[17,17]}),title:cluster?`${rs.length} demonstration incidents`:r.title[s.lang],keyboard:true}).addTo(group);marker.on('click',()=>{if(cluster){m.setView([r.lat,r.lng],m.getZoom()+2)}else s.set({selected:r})});marker.bindTooltip(cluster?`${rs.length} ${s.lang==='th'?'รายงานสมมติ':'demo reports'}`:r.title[s.lang],{direction:'top',offset:[0,-15]})})};draw();m.on('zoomend',draw);return()=>{m.off('zoomend',draw)}},[reports,s.layers,s.lang,s.selected,ready]);
> const t=(en:string,th:string)=>s.lang==='en'?en:th;
> return <div className="map-shell"><div ref={container} className="map-canvas" aria-label={t('Interactive Thailand emergency map','แผนที่สถานการณ์ฉุกเฉินประเทศไทย')}/>{!ready&&!error&&<div className="map-status">{t('Loading geographic boundaries…','กำลังโหลดขอบเขตภูมิศาสตร์…')}</div>}{error&&<div role="alert" className="map-status">{error} <button onClick={()=>location.reload()}>Reload</button></div>}
>  <div className="map-caption"><span className="live-dot"/>{t('THAILAND OVERVIEW','ภาพรวมประเทศไทย')}<span className="map-caption-divider"/>{t('77 provinces','77 จังหวัด')}</div>
>  <div className="map-tools"><button aria-label="Zoom in" onClick={()=>map.current?.zoomIn()}><Plus size={19}/></button><button aria-label="Zoom out" onClick={()=>map.current?.zoomOut()}><Minus size={19}/></button><hr/><button aria-label="Reset map" onClick={()=>{s.set({region:'',province:'',district:'',subdistrict:''});map.current?.setView([13.7,101.1],5.55)}}><LocateFixed size={19}/></button><button aria-label="Fit Thailand" onClick={()=>map.current?.fitBounds([[5.5,97.3],[20.5,105.7]])}><Expand size={18}/></button></div>
>  <div className="layers-wrap">{layerOpen&&<div className="layer-menu"><strong>{t('Map layers','ชั้นข้อมูลแผนที่')}</strong>{Object.entries(s.layers).map(([key,value])=><label key={key}><span>{({flood:t('Flood severity','ความรุนแรงน้ำท่วม'),rescue:t('Rescue requests','คำร้องขอช่วยเหลือ'),medical:t('Medical emergencies','เหตุฉุกเฉินทางการแพทย์'),electrical:t('Electrical hazards','อันตรายจากไฟฟ้า'),shelter:t('Evacuation centers','ศูนย์อพยพ'),supplies:t('Food & water','อาหารและน้ำ'),road:t('Road conditions','สภาพถนน')} as Record<string,string>)[key]}</span><input type="checkbox" checked={value} onChange={()=>s.set({layers:{...s.layers,[key]:!value}})}/></label>)}</div>}<button className={`layer-button ${layerOpen?'active':''}`} onClick={()=>setLayerOpen(!layerOpen)}><Layers size={17}/>{t('Layers','ชั้นข้อมูล')}<ChevronDown size={14}/></button></div>
>  <div className={`map-legend ${!legend?'collapsed':''}`}><button onClick={()=>setLegend(!legend)}><strong>{t('Flood severity','ระดับน้ำท่วม')}</strong><ChevronDown size={14} style={{transform:legend?'rotate(180deg)':undefined}}/></button>{legend&&<><div className="legend-items">{['unknown','monitoring','moderate','severe','critical'].map((x,i)=><span key={x}><i style={{background:colors[x]}}/>{[t('No data','ไม่มีข้อมูล'),t('Monitoring','เฝ้าระวัง'),t('Moderate','ปานกลาง'),t('Severe','รุนแรง'),t('Critical','วิกฤต')][i]}</span>)}</div><small>{t('Illustrative flood levels · not live observations','ระดับน้ำจำลอง · ไม่ใช่ข้อมูลสถานการณ์จริง')}</small></>}</div>
>  <div className="map-scale">100 km <span/></div>{tileError&&<div className="tile-warning">{t('Base map unavailable. Boundaries and reports remain available.','โหลดแผนที่พื้นหลังไม่ได้ ยังแสดงขอบเขตและรายงานได้')}</div>}
>  </div>
> }
> EOF``
>
> </details>
>
> The application now has locally stored boundaries for all 77 provinces, with clickable areas and map zooming. I’m connecting the filters, priority list, and detail panels so selecting an area updates both the map and its statistics. Unreported provinces will show “no data,” rather than implying safe conditions.
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran ``cat > src/components/FloodDashboard.tsx <<'EOF'
'use client';
import {useEffect,useMemo,useState} from 'react';
import dynamic from 'next/dynamic';
import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query';
import {Waves,Map,House,Radio,BookOpen,ArrowUpRight,ChevronDown,ChevronRight,Search,SlidersHorizontal,HeartPulse,HandHelping,Zap,Users,MapPin,Clock,ShieldCheck,TriangleAlert,X,Check,ArrowRight,Navigation,Phone,Package,Route,Info,Globe,RefreshCw,PanelLeftClose,PanelLeftOpen,Building2,Send} from 'lucide-react';
import {useDashboard} from '@/lib/store';
import {getReports,regions,incidents,centers,severityByProvince,type EmergencyIncident,type EvacuationCenter,type Category} from '@/lib/data';
const ThailandInteractiveMap=dynamic(()=>import('./ThailandInteractiveMap'),{ssr:false,loading:()=> <div className="map-shell map-loading">Loading Thailand map…</div>});
const client=new QueryClient();
const icons={rescue:HandHelping,medical:HeartPulse,electrical:Zap,shelter:House,supplies:Package,road:Route};
export default function FloodDashboard(){return <QueryClientProvider client={client}><Dashboard/></QueryClientProvider>}
function Dashboard(){const s=useDashboard();const [provinces,setProvinces]=useState<string[]>([]),[filters,setFilters]=useState(false),[rail,setRail]=useState(true),[modal,setModal]=useState<'report'|'resources'|null>(null),[submitted,setSubmitted]=useState(false),[offline,setOffline]=useState(false),[formError,setFormError]=useState('');
 const t=(en:string,th:string)=>s.lang==='en'?en:th;
 useEffect(()=>{document.documentElement.lang=s.lang;},[s.lang]);
 useEffect(()=>{const update=()=>setOffline(!navigator.onLine);update();window.addEventListener('online',update);window.addEventListener('offline',update);return()=>{window.removeEventListener('online',update);window.removeEventListener('offline',update)}},[]);
 useEffect(()=>{const esc=(e:KeyboardEvent)=>{if(e.key==='Escape'){s.set({selected:null});setModal(null);setFilters(false)}};document.addEventListener('keydown',esc);return()=>document.removeEventListener('keydown',esc)},[]);
 const {data=[],isPending,isError,refetch}=useQuery({queryKey:['reports'],queryFn:getReports,staleTime:60000});
 const local=data.filter(r=>(!s.region||r.region===s.region)&&(!s.province||r.province===s.province)&&(!s.district||r.district===s.district)&&(!s.subdistrict||r.subdistrict===s.subdistrict));
 const reports=useMemo(()=>local.filter(r=>(!s.category||r.category===s.category)&&(s.quick!=='critical'||r.priority==='critical')&&(s.quick!=='waiting'||r.status==='waiting')&&(s.quick!=='shelters'||r.category==='shelter')&&(!s.query||`${r.title.en} ${r.title.th} ${r.province} ${r.district} ${r.id}`.toLowerCase().includes(s.query.toLowerCase()))).sort((a,b)=>({critical:0,high:1,medium:2,low:3}[a.priority]-{critical:0,high:1,medium:2,low:3}[b.priority])),[data,s.region,s.province,s.district,s.subdistrict,s.quick,s.category,s.query]);
> const active=local.filter(r=>r.category!=='shelter'&&r.status!=='resolved');const critical=active.filter(r=>r.priority==='critical');
> const statuses:Record<string,string>={verification:t('Awaiting verification','รอการตรวจสอบ'),waiting:t('Awaiting assistance','รอความช่วยเหลือ'),assigned:t('Rescue team assigned','มอบหมายทีมแล้ว'),progress:t('Assistance in progress','กำลังให้ความช่วยเหลือ'),resolved:t('Resolved','ช่วยเหลือแล้ว')};
> const priorities:Record<string,string>={critical:t('Critical','วิกฤต'),high:t('High','เร่งด่วน'),medium:t('Medium','ปานกลาง'),low:t('Low','ทั่วไป')};
> const areaProvinces=provinces.filter(p=>!s.region||regions.find(r=>r.id===s.region)?.provinces.includes(p));
> const reset=()=>s.set({region:'',province:'',district:'',subdistrict:'',query:'',quick:'all',category:'',selected:null});
> return <div className="app"><header className="topbar"><a className="brand" href="/" aria-label="Floodwatch home"><span className="brand-symbol"><Waves size={25}/></span><span>floodwatch<span className="brand-country">THAILAND</span></span></a><nav className="main-nav"><button className="nav-active" onClick={()=>{setModal(null)}}><Map size={16}/>{t('Situation map','แผนที่สถานการณ์')}</button><button onClick={()=>{s.set({quick:'shelters',category:''});setRail(true)}}><House size={16}/>{t('Evacuation centers','ศูนย์อพยพ')}</button><button onClick={()=>setModal('resources')}><BookOpen size={16}/>{t('Resources','ข้อมูลช่วยเหลือ')}</button></nav><div className="top-actions"><span className="demo-badge"><i/>{t('DEMO WORKSPACE','พื้นที่สาธิต')}</span><button className="language" onClick={()=>s.set({lang:s.lang==='en'?'th':'en'})}><Globe size={15}/>{s.lang==='en'?'EN':'TH'}<ChevronDown size={12}/></button><span className="top-divider"/><button className="report-button" onClick={()=>{setModal('report');setSubmitted(false)}}><span>+</span>{t('Report an incident','รายงานเหตุ')}</button></div></header>
>  <main><section className="page-intro"><div><div className="eyebrow"><span className="live-dot"/>{t('FLOOD MONITORING & EMERGENCY RESPONSE','ติดตามน้ำท่วมและประสานความช่วยเหลือ')}</div><h1>{t('A clearer view. A faster response.','เห็นสถานการณ์ชัด ช่วยเหลือได้เร็วขึ้น')}</h1><p>{t('Understand the situation. Find help. Stay connected.','ติดตามสถานการณ์ ค้นหาความช่วยเหลือ เชื่อมต่อทุกการดูแล')}</p></div><div className="update-block"><span><Clock size={14}/>{t('Demo snapshot','ข้อมูลสาธิต ณ')} <b>16 Oct 2026, 07:30 ICT</b></span><span className="update-note">{t('Fictional data · Not for operational use','ข้อมูลสมมติ · ไม่ใช้เพื่อปฏิบัติการจริง')}<button aria-label="Refresh demo data" onClick={()=>refetch()}><RefreshCw size={13}/></button></span></div></section>
>  <section className="summary" aria-label="Situation summary">{[
>  {icon:MapPin,label:t('Affected provinces','จังหวัดได้รับผลกระทบ'),value:Object.keys(severityByProvince).filter(p=>(!s.province||p===s.province)&&(!s.region||regions.find(r=>r.id===s.region)?.provinces.includes(p))).length,sub:t('in demonstration','ในสถานการณ์จำลอง'),color:'teal',action:()=>setFilters(true)},
>  {icon:Radio,label:t('Active incidents','เหตุที่กำลังดำเนินการ'),value:active.length,sub:t(`${new Set(active.map(r=>r.district)).size} affected areas`,`${new Set(active.map(r=>r.district)).size} พื้นที่ได้รับผลกระทบ`),color:'blue',action:()=>s.set({quick:'all',category:''})},
>  {icon:HeartPulse,label:t('Critical medical','ผู้ป่วยฉุกเฉินวิกฤต'),value:active.filter(r=>r.category==='medical'&&r.priority==='critical').length,sub:t('Immediate attention','ต้องช่วยเหลือทันที'),color:'red',action:()=>s.set({quick:'critical',category:'medical'})},
>  {icon:Users,label:t('Awaiting assistance','ประชาชนรอช่วยเหลือ'),value:active.filter(r=>r.status==='waiting').reduce((n,r)=>n+r.people,0),sub:t('people in demo reports','คน ในรายงานสมมติ'),color:'orange',action:()=>s.set({quick:'waiting',category:''})},
>  {icon:House,label:t('Open evacuation centers','ศูนย์อพยพที่เปิดให้บริการ'),value:local.filter(r=>r.category==='shelter'&&(r as EvacuationCenter).operatingStatus==='open').length,sub:t('Simulated availability','สถานะความพร้อมจำลอง'),color:'green',action:()=>s.set({quick:'shelters',category:''})},
>  {icon:Zap,label:t('Electrical hazards','รายงานอันตรายไฟฟ้า'),value:active.filter(r=>r.category==='electrical').length,sub:t('Avoid affected floodwater','หลีกเลี่ยงน้ำท่วมบริเวณเสี่ยง'),color:'yellow',action:()=>s.set({quick:'all',category:'electrical'})}
>  ].map(m=><button className="metric" key={m.label} onClick={m.action}><div className="metric-top"><span>{m.label}</span><m.icon size={16} className={m.color}/></div><div className="metric-bottom"><strong>{m.value.toLocaleString()}</strong><span className={m.color==='red'?'red':''}>{m.sub}</span></div></button>)}</section>
>  <section className="workspace"><div className="workspace-toolbar"><div className="breadcrumb"><button aria-label="All Thailand" onClick={reset}><Map size={15}/><span>{t('Thailand','ประเทศไทย')}</span></button>{s.region&&<><ChevronRight size={13}/><button onClick={()=>s.set({province:'',district:'',subdistrict:''})}>{regions.find(r=>r.id===s.region)?.name[s.lang]}</button></>}{s.province&&<><ChevronRight size={13}/><button onClick={()=>s.set({district:'',subdistrict:''})}>{s.province}</button></>}{s.district&&<><ChevronRight size={13}/><button onClick={()=>s.set({subdistrict:''})}>{s.district}</button></>}{s.subdistrict&&<><ChevronRight size={13}/><span>{s.subdistrict}</span></>}</div><div className="location-selectors"><select aria-label="Select region" value={s.region} onChange={e=>s.set({region:e.target.value,province:'',district:'',subdistrict:''})}><option value="">{t('All regions','ทุกภูมิภาค')}</option>{regions.map(r=><option key={r.id} value={r.id}>{r.name[s.lang]}</option>)}</select><select aria-label="Select province" value={s.province} onChange={e=>s.set({province:e.target.value,region:regions.find(r=>r.provinces.includes(e.target.value))?.id||s.region,district:'',subdistrict:''})}><option value="">{t('All provinces','ทุกจังหวัด')}</option>{areaProvinces.map(p=><option key={p}>{p}</option>)}</select><button className={filters?'icon-btn active':'icon-btn'} aria-label="Location and incident filters" onClick={()=>setFilters(!filters)}><SlidersHorizontal size={17}/></button></div></div>
>  {filters&&<div className="filter-drawer"><label>{t('District (demo coverage)','อำเภอ (พื้นที่ข้อมูลสาธิต)')}<select value={s.district} onChange={e=>s.set({district:e.target.value,subdistrict:''})}><option value="">{t('All districts','ทุกอำเภอ')}</option>{[...new Set(data.filter(r=>!s.province||r.province===s.province).map(r=>r.district))].map(d=><option key={d}>{d}</option>)}</select></label><label>{t('Subdistrict (demo coverage)','ตำบล (พื้นที่ข้อมูลสาธิต)')}<select value={s.subdistrict} onChange={e=>s.set({subdistrict:e.target.value})}><option value="">{t('All subdistricts','ทุกตำบล')}</option>{[...new Set(local.map(r=>r.subdistrict))].map(d=><option key={d}>{d}</option>)}</select></label><label>{t('Incident category','ประเภทเหตุ')}<select value={s.category} onChange={e=>s.set({category:e.target.value as Category|''})}><option value="">{t('All categories','ทุกประเภท')}</option>{Object.keys(icons).map(c=><option key={c} value={c}>{({rescue:t('Rescue requests','ขอความช่วยเหลือ'),medical:t('Medical emergencies','การแพทย์ฉุกเฉิน'),electrical:t('Electrical hazards','อันตรายไฟฟ้า'),supplies:t('Food & water','อาหารและน้ำ'),road:t('Road conditions','สภาพถนน'),shelter:t('Evacuation centers','ศูนย์อพยพ')} as Record<string,string>)[c]}</option>)}</select></label><button className="text-button" onClick={reset}>{t('Reset filters','ล้างตัวกรอง')}</button><button className="icon-btn" onClick={()=>setFilters(false)} aria-label="Close filters"><X size={17}/></button></div>}
>  <div className="quick-toolbar"><div className="quick-filters">{[{id:'all',icon:Radio,label:t('All incidents','ทุกเหตุการณ์')},{id:'critical',icon:TriangleAlert,label:t('Critical only','วิกฤตเท่านั้น')},{id:'waiting',icon:Clock,label:t('Awaiting assistance','รอความช่วยเหลือ')},{id:'shelters',icon:House,label:t('Evacuation centers','ศูนย์อพยพ')}].map(q=><button key={q.id} onClick={()=>s.set({quick:q.id,category:''})} className={s.quick===q.id?'quick-active':''}><q.icon size={14}/>{q.label}{q.id==='critical'&&<span>{critical.length}</span>}</button>)}</div><button className="list-toggle" onClick={()=>setRail(!rail)}>{rail?<PanelLeftClose size={16}/>:<PanelLeftOpen size={16}/>}<span>{t('Incident list','รายการเหตุ')}</span></button></div>
>  <div className={`map-workspace ${!rail?'rail-hidden':''}`}>{rail&&<aside className="incident-rail"><div className="rail-heading"><div><h2>{s.quick==='shelters'?t('Evacuation centers','ศูนย์อพยพ'):t('Incident overview','ภาพรวมเหตุการณ์')}<span>{reports.length}</span></h2><p>{t('Priority first. Every response matters.','ทุกการช่วยเหลือ เริ่มจากเหตุที่สำคัญที่สุด')}</p></div></div><label className="search-box"><Search size={16}/><input aria-label="Search incidents or locations" placeholder={t('Search incidents or locations…','ค้นหาเหตุการณ์ หรือสถานที่…')} value={s.query} onChange={e=>s.set({query:e.target.value})}/>{s.query&&<button aria-label="Clear search" onClick={()=>s.set({query:''})}><X size={13}/></button>}<kbd>⌕</kbd></label><div className="list-sort"><span><span className="live-dot"/>{t('ACTIVE REPORTS','รายงานที่กำลังดำเนินการ')}</span><span>{t('By priority','ตามความเร่งด่วน')}<ChevronDown size={12}/></span></div><div className="incident-scroll">{isPending&&<p className="empty-state">{t('Loading reports…','กำลังโหลดรายงาน…')}</p>}{isError&&<div className="empty-state" role="alert">{t('Unable to load reports.','ไม่สามารถโหลดรายงานได้')}<button onClick={()=>refetch()}>Retry</button></div>}{!isPending&&!reports.length&&<div className="empty-state"><Search size={28}/><h3>{t('No matching demo reports','ไม่พบรายงานสาธิตที่ตรงกัน')}</h3><p>{t('Try another area or clear your filters. No reports does not mean the area is safe.','ลองพื้นที่อื่นหรือล้างตัวกรอง การไม่มีรายงานไม่ได้หมายความว่าปลอดภัย')}</p><button className="text-button" onClick={reset}>{t('Clear filters','ล้างตัวกรอง')}</button></div>}{reports.map(r=>{const Icon=icons[r.category];return <button className={`incident-card ${s.selected?.id===r.id?'selected':''}`} key={r.id} onClick={()=>s.set({selected:r})}><div className="incident-card-top"><span className={`category-icon ${r.category}`}><Icon size={17}/></span><span className={`priority ${r.priority}`}>{r.priority==='critical'&&<TriangleAlert size={11}/>} {r.category==='shelter'?((r as EvacuationCenter).operatingStatus==='full'?t('Full','เต็ม'):t('Open','เปิด')):priorities[r.priority]}</span><span className="incident-time">07:30</span></div><h3>{r.title[s.lang]}</h3><p><MapPin size={12}/>{r.district}, {r.province}</p><div className="incident-card-bottom"><span className={`response-status ${r.status}`}><i/>{r.category==='shelter'?t(`${(r as EvacuationCenter).capacity-(r as EvacuationCenter).occupancy} demo spaces available`,`${(r as EvacuationCenter).capacity-(r as EvacuationCenter).occupancy} ที่ว่างจำลอง`):statuses[r.status]}</span>{r.verified?<ShieldCheck size={14} className="verified-icon" aria-label="Verified within demonstration"/>:<span className="unverified">{t('Unverified','ยังไม่ตรวจสอบ')}</span>}<ChevronRight size={14}/></div></button>})}</div><div className="rail-footer"><ShieldCheck size={15}/><span>{t('All reports are fictional examples','ทุกรายงานเป็นตัวอย่างสมมติ')}</span><Info size={13}/></div></aside>}
>  <ThailandInteractiveMap reports={reports} provincesLoaded={setProvinces}/>{s.selected&&<aside className="details-panel" role="dialog" aria-label={t('Incident details','รายละเอียดเหตุการณ์')}><div className="detail-top"><span className="eyebrow">{s.selected.id} · {t('DEMONSTRATION','ข้อมูลสมมติ')}</span><button className="icon-btn" onClick={()=>s.set({selected:null})} aria-label="Close incident details"><X size={18}/></button></div><span className={`detail-category category-icon ${s.selected.category}`}>{(()=>{const I=icons[s.selected.category];return <I size={23}/>})()}</span><h2>{s.selected.title[s.lang]}</h2><p className="detail-location"><MapPin size={14}/>{s.selected.subdistrict}, {s.selected.district}, {s.selected.province}</p><div className="detail-badges"><span className={`priority ${s.selected.priority}`}>{priorities[s.selected.priority]}</span><span className={s.selected.verified?'verification verified':'verification'}>{s.selected.verified?<ShieldCheck size={13}/>:<Info size={13}/>} {s.selected.verified?t('Demo verification','ตรวจสอบในข้อมูลสาธิต'):t('Unverified public report','รายงานที่ยังไม่ตรวจสอบ')}</span></div><div className="status-box"><span>{t('RESPONSE STATUS','สถานะการช่วยเหลือ')}</span><strong><i className="live-dot"/>{statuses[s.selected.status]}</strong>{s.selected.team&&<small>{s.selected.team} ({t('fictional','สมมติ')})</small>}</div>{s.selected.category==='shelter'?<ShelterDetails center={s.selected as EvacuationCenter} lang={s.lang}/>:<><h3>{t('Situation','รายละเอียดสถานการณ์')}</h3><p className="detail-copy">{s.selected.description[s.lang]}</p>{s.selected.people>0&&<div className="people-count"><Users size={19}/><strong>{s.selected.people}</strong><span>{t('people affected (simulated)','คนได้รับผลกระทบ (จำลอง)')}</span></div>}<h3>{t('Assistance needed','ความช่วยเหลือที่ต้องการ')}</h3><p className="detail-copy">{s.selected.requirements[s.lang]}</p></>}{s.selected.category==='electrical'&&<div className="caution"><Zap size={18}/>{t('Never enter floodwater near electrical equipment. No electrical safety has been confirmed.','ห้ามลงน้ำใกล้อุปกรณ์ไฟฟ้า ยังไม่มีการยืนยันความปลอดภัยทางไฟฟ้า')}</div>}<dl className="detail-meta"><div><dt>{t('Coordinates','พิกัด')}</dt><dd>{s.selected.lat.toFixed(5)}, {s.selected.lng.toFixed(5)}</dd></div><div><dt>{t('Reported','เวลารายงาน')}</dt><dd>16 Oct 2026 · 07:30 ICT</dd></div><div><dt>{t('Last verified','ตรวจสอบล่าสุด')}</dt><dd>{s.selected.verifiedAt?'16 Oct 2026 · 07:30 ICT':t('Not verified','ยังไม่ตรวจสอบ')}</dd></div><div><dt>{t('Source','แหล่งข้อมูล')}</dt><dd>{t('Fictional demo dataset','ชุดข้อมูลสมมติ')}</dd></div></dl><a className="directions-button" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${s.selected.lat},${s.selected.lng}`}><Navigation size={16}/>{t('View demonstration location','ดูตำแหน่งสาธิต')}<ArrowUpRight size={16}/></a><p className="safety-note">{t('Location reference only. Route accessibility is unknown. No real rescue or shelter availability is represented.','สำหรับอ้างอิงตำแหน่งเท่านั้น ไม่ทราบสภาพเส้นทาง ไม่ใช่ข้อมูลทีมช่วยเหลือหรือศูนย์พักพิงจริง')}</p></aside>}</div>
>  </section><footer className="bottom-bar"><span><Info size={13}/>{t('Demo environment. All incidents, flood levels, and capacities are fictional.','พื้นที่สาธิต เหตุการณ์ ระดับน้ำ และความจุศูนย์พักพิงทั้งหมดเป็นข้อมูลสมมติ')}</span><span>{offline?<><span className="offline-dot"/>{t('Offline · cached demo','ออฟไลน์ · ข้อมูลสาธิตที่เก็บไว้')}</>:<><span className="live-dot"/>{t('Demo data loaded','โหลดข้อมูลสาธิตแล้ว')}</>}<span className="footer-divider"/>{t('In an emergency','เหตุฉุกเฉิน')} <a href="tel:1784">1784 <ArrowUpRight size={11}/></a></span></footer>
>  </main>{modal&&<div className="modal-backdrop" onClick={()=>setModal(null)}><section className="modal" role="dialog" aria-modal="true" aria-label={modal==='resources'?t('Emergency resources','ข้อมูลช่วยเหลือ'):t('Report an incident','รายงานเหตุ')} onClick={e=>e.stopPropagation()}><button className="modal-close icon-btn" onClick={()=>setModal(null)} aria-label="Close"><X size={20}/></button>{modal==='resources'?<><span className="brand-symbol"><BookOpen size={24}/></span><h2>{t('Help, when it matters.','ข้อมูลช่วยเหลือเมื่อคุณต้องการ')}</h2><p>{t('For a real emergency, contact the appropriate service directly.','ในเหตุฉุกเฉินจริง โปรดติดต่อหน่วยงานโดยตรง')}</p>{[['1784',t('Disaster prevention & mitigation','กรมป้องกันและบรรเทาสาธารณภัย')],['1669',t('Emergency medical services','สถาบันการแพทย์ฉุกเฉิน')],['191',t('Police emergency','แจ้งเหตุด่วนเหตุร้าย')],['1129',t('Provincial Electricity Authority','การไฟฟ้าส่วนภูมิภาค')]].map(([n,label])=><a className="resource-row" key={n} href={`tel:${n}`}><span><Phone size={17}/>{label}</span><strong>{n}<ArrowUpRight size={15}/></strong></a>)}<p className="caution">{t('Avoid floodwater, follow local authority instructions, and never touch wet electrical equipment.','หลีกเลี่ยงน้ำท่วม ปฏิบัติตามคำแนะนำของเจ้าหน้าที่ ห้ามสัมผัสอุปกรณ์ไฟฟ้าที่เปียก')}</p></>:submitted?<div className="submitted"><span className="success-icon"><Check size={30}/></span><h2>{t('Demo report saved locally','บันทึกรายงานสาธิตแล้ว')}</h2><p>{t('This practice report is stored only in this browser. It has not been sent to emergency services or added as a verified incident.','รายงานฝึกหัดนี้บันทึกในเบราว์เซอร์นี้เท่านั้น ไม่ได้ส่งถึงหน่วยงานฉุกเฉินหรือเพิ่มเป็นเหตุที่ยืนยันแล้ว')}</p><button className="report-button" onClick={()=>setModal(null)}>{t('Back to map','กลับสู่แผนที่')}<ArrowRight size={16}/></button></div>:<><span className="brand-symbol"><Send size={23}/></span><h2>{t('Report an incident','รายงานเหตุการณ์')}</h2><p>{t('Practice mode · This form does not contact emergency services. Do not enter personal information.','โหมดฝึกหัด · แบบฟอร์มนี้ไม่ติดต่อหน่วยงานฉุกเฉิน ห้ามกรอกข้อมูลส่วนบุคคล')}</p><form onSubmit={e=>{e.preventDefault();const fd=new FormData(e.currentTarget);try{localStorage.setItem('floodwatch-demo-report',JSON.stringify({category:fd.get('category'),location:fd.get('location'),description:fd.get('description'),verified:false,createdAt:new Date().toISOString()}));setSubmitted(true)}catch{setFormError(t('Browser storage unavailable. Your report was not saved.','ไม่สามารถบันทึกในเบราว์เซอร์ได้'))}}}><label>{t('Incident type','ประเภทเหตุการณ์')}<select name="category"><option>Rescue request / ขอความช่วยเหลือ</option><option>Medical / การแพทย์</option><option>Electrical / ไฟฟ้า</option><option>Food & water / อาหารและน้ำ</option><option>Road closure / ถนนปิด</option></select></label><label>{t('Location','สถานที่')}<input required name="location" maxLength={120} placeholder={t('Province, district, nearby landmark','จังหวัด อำเภอ จุดสังเกตใกล้เคียง')}/></label><label>{t('Situation description','รายละเอียดสถานการณ์')}<textarea required name="description" minLength={10} maxLength={1000} rows={4} placeholder={t('Describe the situation and assistance needed…','อธิบายสถานการณ์และความช่วยเหลือที่ต้องการ…')}/></label>{formError&&<p role="alert">{formError}</p>}<button className="report-button" type="submit">{t('Save practice report','บันทึกรายงานฝึกหัด')}<ArrowRight size={16}/></button></form></>}</section></div>}
>  </div>
> }
> function ShelterDetails({center:c,lang}:{center:EvacuationCenter;lang:'en'|'th'}){const t=(en:string,th:string)=>lang==='en'?en:th;return <><h3>{t('Center availability (simulated)','ความพร้อมศูนย์พักพิง (จำลอง)')}</h3><div className="capacity"><strong>{c.capacity-c.occupancy}<small> / {c.capacity}</small></strong><span>{t('available spaces','ที่ว่าง')}</span><div className="capacity-track"><i style={{width:`${c.occupancy/c.capacity*100}%`}}/></div><p>{c.occupancy} {t('current occupants · fictional','ผู้เข้าพักปัจจุบัน · สมมติ')}</p></div><h3>{t('Facilities & supplies','สิ่งอำนวยความสะดวกและสิ่งของ')}</h3><p className="detail-copy">{c.facilities[lang]}</p><h3>{t('Address','ที่อยู่')}</h3><p className="detail-copy">{c.address[lang]}</p><p className="detail-copy">{t('No real contact number is provided for this fictional center.','ไม่มีหมายเลขติดต่อจริงสำหรับศูนย์พักพิงสมมตินี้')}</p></>}
> EOF``
> - Ran `cat > src/app/globals.css <<'EOF'
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650;700;750;800&family=Noto+Sans+Thai:wght@400;450;500;550;600;650;700&display=swap');
:root{--ink:#253c3d;--muted:#83908f;--teal:#216b61;--line:#e7ece9;--bg:#f8faf9}*{box-sizing:border-box}body{margin:0;color:var(--ink);font:13px 'Inter','Noto Sans Thai',sans-serif;background:var(--bg);-webkit-font-smoothing:antialiased}button,input,select,textarea{font:inherit}button,a,input,select,textarea{-webkit-tap-highlight-color:transparent}button{cursor:pointer;background:none;border:0;color:inherit}a{color:inherit;text-decoration:none}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #56a89a;outline-offset:3px}button{transition:background .15s,color .15s}button:hover{color:var(--teal)}svg{flex-shrink:0}h1,h2,h3,p{margin:0}.topbar{height:77px;padding:0 31px;display:flex;align-items:center;background:#fff;border-bottom:1px solid var(--line);gap:45px}.brand{display:flex;align-items:center;gap:10px;font-size:25px;font-weight:750;letter-spacing:-1.2px}.brand-symbol{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;background:var(--teal);color:#fff;border-radius:12px}.brand-country{display:block;font-size:8px;letter-spacing:2.8px;font-weight:600;color:#879593;margin-top:1px;line-height:10px}.main-nav{display:flex;align-self:stretch;gap:28px}.main-nav button{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:550;color:#7b8987;position:relative;white-space:nowrap;padding:0}.main-nav .nav-active{color:var(--teal)}.nav-active:after{content:'';height:3px;border-radius:4px;background:var(--teal);position:absolute;bottom:0;left:0;right:0}.top-actions{display:flex;align-items:center;gap:19px;margin-left:auto}.demo-badge{font-size:9px;letter-spacing:.75px;display:flex;align-items:center;gap:6px;color:#8f865e;white-space:nowrap;background:#f7f5ec;padding:6px 8px;border-radius:4px}.demo-badge i{width:5px;height:5px;border-radius:50%;background:#b6a773}.language{display:flex;align-items:center;gap:6px;font-size:11px}.top-divider{height:21px;width:1px;background:var(--line)}.report-button{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--teal);color:white;border:1px solid var(--teal);border-radius:7px;padding:11px 15px;font-size:11px;font-weight:550;white-space:nowrap}.report-button:hover{color:white;background:#17574f}.report-button>span{font-size:20px;line-height:10px;font-weight:400}main{padding:26px 30px 0;max-width:1920px;margin:auto}.page-intro{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:24px}.eyebrow{font-size:9px;letter-spacing:1.3px;font-weight:600;color:#68807a;display:flex;align-items:center;gap:7px}.live-dot{width:6px;height:6px;display:inline-block;flex-shrink:0;border-radius:50%;background:#4a9c7b;box-shadow:0 0 0 3px #4a9c7b0c}h1{font-size:29px;letter-spacing:-.9px;font-weight:600;line-height:1.45;margin-top:5px}.page-intro p{font-size:11px;color:#8a9592;margin-top:4px}.update-block{text-align:right;display:flex;flex-direction:column;gap:9px;font-size:10px;color:#8b9694;margin-top:16px}.update-block>span{display:flex;align-items:center;justify-content:flex-end;gap:6px}.update-block b{font-weight:500;color:#536b65}.update-note{font-size:9px}.update-note button{padding:0 0 0 4px;display:flex;color:#637d73}.summary{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:24px}.metric{text-align:left;background:#fff;border:1px solid var(--line);border-radius:9px;min-height:100px;padding:17px 17px 15px;box-shadow:0 2px 3px #24473a02}.metric:hover{background:#fcfefc;border-color:#c9d9d1}.metric-top{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:#7d8a86;font-weight:500}.metric-bottom{display:flex;gap:12px;align-items:baseline;margin-top:12px}.metric-bottom strong{font-size:29px;font-weight:600;line-height:1;letter-spacing:-1px;color:#30473f}.metric-bottom span{font-size:8px;color:#929c97}.teal{color:#388775}.blue{color:#6492b0}.red{color:#cf7267!important}.orange{color:#cf9760}.green{color:#6e9b7c}.yellow{color:#b6a166}.workspace{border:1px solid #dde6df;border-radius:11px;background:white;overflow:hidden;box-shadow:0 3px 12px #23443703}.workspace-toolbar{height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 18px;border-bottom:1px solid var(--line)}.breadcrumb{display:flex;align-items:center;gap:7px;font-size:10px;overflow:auto;white-space:nowrap;max-width:70%;scrollbar-width:none}.breadcrumb button{display:flex;align-items:center;gap:8px;padding:8px 2px;font-weight:550}.breadcrumb>svg{color:#a0aaa5}.breadcrumb button:first-child{color:#53756c}.location-selectors{display:flex;gap:10px;align-items:center}select{appearance:none;background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23778680' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 10px center;border:1px solid #e2e8e4;border-radius:6px;padding:8px 29px 8px 11px;color:#53665e;font-size:10px;max-width:180px;cursor:pointer}.icon-btn{height:33px;width:33px;border:1px solid var(--line);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;background:white;color:#6d8178}.icon-btn:hover,.icon-btn.active{background:#eef5f0;color:var(--teal)}.quick-toolbar{height:53px;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:0 17px;border-bottom:1px solid var(--line)}.quick-filters{display:flex;align-items:center;gap:7px;overflow:auto;scrollbar-width:none}.quick-filters button{display:flex;align-items:center;gap:7px;padding:8px 12px;border:1px solid transparent;color:#829087;border-radius:6px;font-size:10px;white-space:nowrap}.quick-filters button.quick-active{color:#2d7665;border-color:#d4e5d9;background:#eff6f0;font-weight:550}.quick-filters button:nth-child(2)>svg{color:#d98d7d}.quick-filters button>span{font-size:9px;background:#f5e6e1;color:#bd6d60;padding:1px 5px;border-radius:4px}.list-toggle{display:flex;gap:7px;align-items:center;font-size:10px;color:#829287;white-space:nowrap}.map-workspace{display:flex;position:relative;min-height:520px;height:calc(100dvh - 413px);max-height:1000px}.incident-rail{width:315px;flex-shrink:0;display:flex;flex-direction:column;background:#fff;border-right:1px solid var(--line);z-index:500}.rail-heading{padding:19px 18px 14px}.rail-heading h2{font-size:14px;letter-spacing:-.2px;font-weight:600;display:flex;align-items:center;gap:8px}.rail-heading h2 span{font-size:9px;padding:2px 6px;color:#7c8f81;background:#f0f4ef;border-radius:4px;font-weight:500}.rail-heading p{font-size:9px;color:#9aa59e;margin-top:5px}.search-box{margin:0 17px;display:flex;align-items:center;gap:8px;border:1px solid #e5eae5;border-radius:6px;height:35px;padding:0 10px;background:#fcfdfb;color:#96a298}.search-box input{background:none;width:100%;min-width:0;border:0;outline:none;font-size:10px;color:var(--ink)}.search-box input::placeholder{color:#a0aaa1}.search-box kbd{border:1px solid #e2e8df;font:11px Inter;border-radius:3px;padding:0 3px}.search-box button{display:flex;padding:0}.list-sort{display:flex;align-items:center;justify-content:space-between;padding:18px 18px 10px;font-size:8px;color:#9ba79d}.list-sort>span{display:flex;align-items:center;gap:5px}.list-sort>span:first-child{font-size:8px;letter-spacing:.6px}.list-sort .live-dot{width:4px;height:4px}.incident-scroll{flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#dce5dc transparent;padding:0 9px 7px}.incident-card{width:100%;padding:14px 9px 13px;text-align:left;border-bottom:1px solid #eef1eb;border-radius:5px}.incident-card:hover{background:#f8faf6}.incident-card.selected{background:#edf5ee;box-shadow:inset 3px 0 #629d83}.incident-card-top{display:flex;align-items:center;gap:8px}.category-icon{height:31px;width:31px;border-radius:8px;display:flex;align-items:center;justify-content:center}.category-icon.rescue{background:#faeeea;color:#bf8574}.category-icon.medical{background:#faecec;color:#c77878}.category-icon.electrical{background:#fbf4e6;color:#b29b54}.category-icon.supplies{background:#edf2fa;color:#7997b7}.category-icon.road{background:#f1eff4;color:#9481a4}.category-icon.shelter{background:#eaf3ed;color:#719b7e}.priority{display:inline-flex;align-items:center;gap:3px;border-radius:4px;padding:3px 6px;font-size:8px;font-weight:550;line-height:1.3;white-space:nowrap}.priority.critical{color:#c4685d;background:#fcf0eb}.priority.high{color:#bc925d;background:#fbf4e9}.priority.medium{color:#94905d;background:#f6f5e9}.priority.low{color:#6b9277;background:#edf5ed}.incident-time{margin-left:auto;font-size:8px;color:#a2aaa1}.incident-card h3{font-size:11px;font-weight:550;margin:9px 0 7px;line-height:1.6;color:#42554a}.incident-card>p{display:flex;gap:4px;align-items:center;color:#a0a99f;font-size:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.incident-card-bottom{display:flex;align-items:center;margin-top:13px;gap:5px;color:#a3afa3}.response-status{display:inline-flex;align-items:center;gap:5px;font-size:8px;flex:1}.response-status i{height:4px;width:4px;display:inline-block;border-radius:50%;background:#caab74}.response-status.assigned{color:#809cb6}.response-status.assigned i{background:#809cb6}.response-status.progress{color:#83a08b}.response-status.progress i{background:#83a08b}.verified-icon{color:#88a794}.unverified{font-size:7px;color:#b3a37f}.rail-footer{height:40px;display:flex;align-items:center;gap:6px;padding:0 17px;border-top:1px solid var(--line);font-size:8px;color:#98a797;background:#fcfdfb}.rail-footer>svg:last-child{margin-left:auto}.map-shell{position:relative;flex:1;min-width:0;background:#edf1ea;isolation:isolate}.map-canvas{height:100%;width:100%;z-index:0}.leaflet-container{background:#e6eee5;font-family:'Inter','Noto Sans Thai',sans-serif}.leaflet-tile-pane{filter:saturate(.58) contrast(.9) brightness(1.045)}.leaflet-control-attribution{font-size:7px!important;background:#ffffffbd!important;color:#8c9b92!important;padding:2px 5px!important}.leaflet-control-attribution a{color:#7e9286!important}.map-caption{position:absolute;top:18px;left:20px;z-index:401;background:#fffffff5;box-shadow:0 2px 10px #3852420a;border:1px solid #e3e9df;border-radius:6px;display:flex;align-items:center;gap:8px;height:31px;padding:0 11px;font-size:8px;letter-spacing:.6px;color:#7b8d7c}.map-caption-divider{height:9px;width:1px;background:#dce4d9}.map-caption>span:last-child{font-size:8px;letter-spacing:0}.map-tools{position:absolute;right:17px;top:18px;display:flex;flex-direction:column;padding:3px;background:white;border:1px solid #e1e7dd;border-radius:8px;box-shadow:0 2px 9px #34502d07}.map-tools button{height:34px;width:32px;display:flex;align-items:center;justify-content:center;color:#6a7b65;border-radius:5px}.map-tools button:hover{background:#f1f5ec}.map-tools hr{border:0;border-top:1px solid #edf0e7;width:23px;margin:3px auto}.map-legend{position:absolute;bottom:24px;left:20px;padding:12px 14px;background:#fffffff5;border:1px solid #e1e7dc;border-radius:7px;box-shadow:0 2px 10px #38524206}.map-legend>button{display:flex;justify-content:space-between;gap:30px;width:100%;padding:0;color:#5b705b}.map-legend strong{font-size:9px;font-weight:550}.legend-items{display:flex;gap:13px;margin-top:12px}.legend-items>span{display:flex;align-items:center;gap:4px;font-size:8px;color:#85917e}.legend-items i{width:8px;height:8px;border-radius:2px;display:block}.map-legend small{font-size:7px;color:#a2aa9c;display:block;margin-top:10px}.layers-wrap{position:absolute;right:17px;bottom:25px;z-index:410}.layer-button{background:white;border:1px solid #dce4d7;border-radius:6px;display:flex;align-items:center;gap:8px;font-size:9px;padding:10px;color:#6a7c65;box-shadow:0 2px 10px #38524208}.layer-menu{width:225px;background:white;border:1px solid #dce4d7;box-shadow:0 5px 25px #29452a17;border-radius:9px;padding:16px;margin-bottom:8px}.layer-menu strong{font-size:12px;display:block;margin-bottom:12px}.layer-menu label{display:flex;justify-content:space-between;font-size:10px;align-items:center;gap:20px;padding:7px 0;color:#6a7b64}.layer-menu input{accent-color:var(--teal)}.map-scale{position:absolute;bottom:28px;right:135px;font-size:7px;color:#7c8c74;display:flex;flex-direction:column;gap:3px;text-align:right}.map-scale span{display:block;width:62px;height:4px;border:1px solid #7c8c74;border-top:0}.incident-pin{display:flex!important;align-items:center;justify-content:center;border-radius:50%;border:3px solid white;box-shadow:0 2px 5px #405b4230;color:white;background:#cf947a}.incident-pin.medical{background:#cd817c}.incident-pin.electrical{background:#d8b270}.incident-pin.shelter{background:#719e85}.incident-pin.supplies{background:#89a5be}.incident-pin.road{background:#a697b4}.incident-pin.urgent{box-shadow:0 0 0 5px #d57f6b19,0 2px 5px #405b4230}.incident-pin.cluster{background:#fff;color:#697f66;border:1px solid #d5dfcd;font-size:11px;font-weight:600;box-shadow:0 0 0 5px #ffffff70,0 2px 5px #405b4220}.incident-pin.selected{box-shadow:0 0 0 7px #216b6125}.province-tooltip{background:#fffef8!important;color:#566f50!important;border:1px solid #e5e8db!important;box-shadow:0 2px 8px #3f583d0a!important;font-size:10px!important;padding:5px 9px!important}.map-loading,.map-status{display:flex;align-items:center;justify-content:center;color:#6b846c}.map-status{position:absolute;top:45%;left:20%;right:20%;background:white;padding:20px;z-index:450;border-radius:8px;font-size:12px}.tile-warning{position:absolute;left:20px;bottom:110px;background:#fff9eb;color:#9e8353;padding:8px;border-radius:5px;font-size:9px;max-width:230px}.bottom-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 1px 16px;color:#98a496;font-size:8px}.bottom-bar>span{display:flex;align-items:center;gap:6px}.bottom-bar>span:last-child{white-space:nowrap}.bottom-bar a{display:flex;align-items:center;gap:3px;color:#6f8c77;font-weight:600}.footer-divider{height:9px;width:1px;background:#dce5d9;margin:0 5px}.offline-dot{width:6px;height:6px;border-radius:50%;background:#cc9762}.filter-drawer{display:flex;align-items:flex-end;gap:12px;padding:15px 18px;background:#f8faf7;border-bottom:1px solid var(--line)}.filter-drawer label{font-size:9px;display:flex;flex-direction:column;gap:7px;color:#7c8e7c}.filter-drawer select{min-width:165px}.text-button{font-size:10px;text-decoration:underline;padding:9px;color:var(--teal)}.empty-state{padding:32px 18px;color:#81947f;font-size:11px;text-align:center;line-height:1.8}.empty-state>svg{margin-bottom:10px;color:#9bae97}.empty-state h3{font-size:12px;margin-bottom:7px}.empty-state p{font-size:10px}.details-panel{position:absolute;right:14px;top:14px;bottom:14px;width:335px;padding:20px;background:white;border:1px solid #dce6d9;border-radius:10px;box-shadow:0 8px 40px #364c351c;z-index:600;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#dce5dc transparent}.detail-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.detail-top .eyebrow{font-size:8px;letter-spacing:.7px}.detail-top .icon-btn{width:28px;height:28px;border:0}.detail-category{width:44px;height:44px;border-radius:11px;margin-bottom:12px}.details-panel h2{font-size:19px;line-height:1.6;font-weight:600;letter-spacing:-.3px;margin-bottom:9px}.detail-location{font-size:10px;line-height:1.8;display:flex;gap:5px;align-items:flex-start;color:#90a08c}.detail-location svg{margin-top:3px}.detail-badges{display:flex;gap:8px;margin:15px 0}.verification{display:flex;align-items:center;gap:4px;font-size:8px;color:#b2a67d}.verification.verified{color:#7d9e83}.status-box{padding:13px;border:1px solid #e6ece1;background:#f8faf5;border-radius:7px;display:flex;flex-direction:column;gap:8px;margin:16px 0}.status-box>span{font-size:8px;letter-spacing:.8px;color:#9aa792}.status-box strong{font-size:11px;font-weight:550;display:flex;gap:7px;align-items:center}.status-box small{font-size:9px;color:#8a9d82}.details-panel h3{font-size:11px;font-weight:600;margin:20px 0 7px}.detail-copy{font-size:10px;line-height:1.9;color:#83927c}.people-count{display:flex;align-items:center;gap:8px;padding:13px 0;color:#859b7e}.people-count strong{font-size:22px;font-weight:600;color:#4d6a47}.people-count span{font-size:9px}.detail-meta{margin:18px 0;border-top:1px solid var(--line);padding-top:8px}.detail-meta>div{display:flex;justify-content:space-between;gap:10px;font-size:8px;padding:7px 0}.detail-meta dt{color:#9ba795}.detail-meta dd{margin:0;color:#708766;text-align:right}.directions-button{width:100%;display:flex;align-items:center;gap:7px;justify-content:center;border:1px solid #d4e2d0;background:#f3f8ee;padding:11px;border-radius:6px;font-size:10px;color:#4e7850}.directions-button svg:last-child{margin-left:auto}.safety-note{font-size:8px;line-height:1.7;color:#a3ad9e;margin-top:9px}.caution{display:flex;align-items:flex-start;gap:9px;background:#fcf6e9;border:1px solid #efe5c7;border-radius:7px;color:#a58e56;font-size:10px;line-height:1.8;padding:12px;margin-top:15px}.capacity{background:#f4f8ef;border-radius:8px;padding:15px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.capacity strong{font-size:27px;font-weight:600;color:#6a8b5d}.capacity strong small{font-size:14px;color:#a7b49b}.capacity>span{font-size:9px;color:#8b9d7e}.capacity-track{width:100%;height:5px;background:#e1e9d9;border-radius:9px;margin-top:12px;overflow:hidden}.capacity-track i{height:100%;display:block;background:#9ab18c}.capacity p{font-size:8px;color:#9cac90;margin-top:7px}.modal-backdrop{position:fixed;inset:0;background:#1c342d50;backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:20px}.modal{position:relative;background:white;border:1px solid #e6ece1;border-radius:17px;padding:35px;width:480px;max-height:90dvh;overflow:auto;box-shadow:0 20px 80px #19362d22}.modal-close{position:absolute;right:15px;top:15px;border:0}.modal h2{font-size:23px;font-weight:600;letter-spacing:-.6px;margin:19px 0 10px}.modal>p,.submitted p{font-size:11px;color:#8b9d82;line-height:1.9}.modal form{margin-top:24px}.modal form label{display:flex;flex-direction:column;gap:8px;font-size:11px;margin:17px 0;color:#6a8061}.modal input,.modal textarea,.modal select{border:1px solid #dfe8d8;border-radius:6px;padding:11px;max-width:none;width:100%;font-size:11px;color:#5f7656;resize:vertical}.modal input::placeholder,.modal textarea::placeholder{color:#a3b19a}.modal form>.report-button{width:100%;margin-top:5px}.resource-row{display:flex;align-items:center;justify-content:space-between;padding:18px 0;border-bottom:1px solid var(--line);font-size:11px}.resource-row>span,.resource-row strong{display:flex;align-items:center;gap:9px}.resource-row>span{color:#7f9276}.resource-row strong{color:var(--teal)}.submitted{text-align:center;padding:24px 0}.submitted .report-button{margin-top:24px}.success-icon{width:62px;height:62px;background:#eef6e9;color:#6f9662;display:inline-flex;align-items:center;justify-content:center;border-radius:50%}
@media(min-width:1600px){.map-workspace{height:calc(100dvh - 415px);min-height:600px}.incident-rail{width:350px}.incident-card{padding:17px 12px}.incident-card h3{font-size:12px}.metric-bottom span{font-size:10px}}
@media(max-width:1200px){.topbar{gap:27px;padding:0 22px}.main-nav{gap:20px}.main-nav button{font-size:10px}.demo-badge{display:none}.top-actions{gap:13px}main{padding:23px 22px 0}.metric{padding:14px 12px}.metric-bottom{gap:6px;flex-direction:column;margin-top:10px}.metric{min-height:111px}.metric-top{font-size:9px}.metric-bottom strong{font-size:26px}.metric-bottom span{font-size:8px}.map-workspace{height:calc(100dvh - 423px)}.incident-rail{width:290px}.map-legend{left:13px;bottom:20px;padding:11px}.legend-items{gap:8px}.legend-items>span{font-size:7px}.map-caption{left:13px}.details-panel{width:310px}.map-scale{display:none}}
@media(max-width:950px){.brand{font-size:22px}.topbar{gap:20px}.main-nav{gap:18px}.main-nav button{font-size:10px}.main-nav button:nth-child(3){display:none}.report-button{font-size:10px;padding:10px 12px}.top-divider{display:none}.page-intro h1{font-size:25px}.update-block{font-size:8px}.metric-top{font-size:8px}.summary{gap:8px}.map-workspace{min-height:550px}.map-legend{max-width:260px}.legend-items{flex-wrap:wrap;gap:8px 11px}.quick-filters button{padding:8px;font-size:9px}.incident-rail{width:267px}.details-panel{width:300px}.list-toggle span{display:none}.metric-top svg{width:13px}.metric-bottom span{font-size:7px}}
@media(max-width:760px){.topbar{height:65px;padding:0 16px;gap:10px}.brand{font-size:22px}.brand-symbol{width:35px;height:35px;border-radius:10px}.main-nav{display:none}.top-actions{gap:10px}.language{font-size:10px}.language>svg{display:none}.report-button{font-size:10px;padding:9px 11px}main{padding:20px 13px 0}.page-intro{margin-bottom:19px;align-items:flex-start}.page-intro h1{font-size:22px;letter-spacing:-.6px}.eyebrow{font-size:7px;letter-spacing:.7px}.page-intro p{font-size:9px;margin-top:5px}.update-block{display:none}.summary{display:flex;overflow-x:auto;padding-bottom:4px;scrollbar-width:none;margin-bottom:15px;gap:9px}.metric{min-width:150px;min-height:94px;padding:13px;flex:1}.metric-top{font-size:9px}.metric-bottom{flex-direction:row;align-items:baseline;margin-top:15px;gap:8px}.metric-bottom strong{font-size:25px}.metric-bottom span{font-size:7px;max-width:65px}.workspace-toolbar{height:50px;padding:0 12px;gap:7px}.breadcrumb{max-width:36%;gap:4px;font-size:9px}.breadcrumb button{gap:4px}.breadcrumb button svg{width:13px}.location-selectors{gap:5px}.location-selectors select{font-size:9px;max-width:116px;padding-left:8px;padding-right:24px;background-position:right 5px center}.location-selectors .icon-btn{height:30px;width:30px}.quick-toolbar{padding:0 9px;height:49px;gap:5px}.quick-filters{gap:3px}.quick-filters button{font-size:9px;padding:7px 8px;gap:5px}.quick-filters button svg{width:12px}.list-toggle{padding:7px 1px}.map-workspace{height:calc(100dvh - 337px);min-height:465px}.map-shell{width:100%}.incident-rail{position:absolute;left:9px;bottom:13px;right:9px;width:auto;height:154px;z-index:500;border:1px solid #dce5d7;border-radius:9px;box-shadow:0 4px 15px #33563210;overflow:hidden;background:#fffffff7}.rail-heading{padding:10px 12px 6px}.rail-heading h2{font-size:11px}.rail-heading p,.search-box,.list-sort,.rail-footer{display:none}.incident-scroll{display:flex;overflow-x:auto;overflow-y:hidden;padding:0 5px 5px;scrollbar-width:none}.incident-card{min-width:235px;width:235px;border-bottom:0;border-right:1px solid var(--line);padding:5px 10px 7px}.category-icon{height:24px;width:24px;border-radius:6px}.category-icon svg{width:14px}.incident-card h3{font-size:10px;margin:5px 0}.incident-card>p{font-size:7px}.incident-card-bottom{margin-top:8px}.incident-card .priority{font-size:7px;padding:3px 5px}.incident-card .response-status{font-size:7px}.incident-time{font-size:7px}.incident-card-top{gap:6px}.map-caption{top:12px;left:12px;height:28px;font-size:7px;padding:0 9px;gap:6px}.map-caption>span:last-child{font-size:7px}.map-tools{top:12px;right:12px}.map-tools button{height:31px;width:28px}.map-legend{bottom:180px;left:12px;max-width:210px;padding:9px 11px}.map-legend strong{font-size:8px}.map-legend small{font-size:6px;margin-top:7px}.legend-items{gap:7px 9px;margin-top:9px}.legend-items>span{font-size:6px}.legend-items i{width:6px;height:6px}.layers-wrap{bottom:180px;right:12px}.layer-button{padding:9px;font-size:8px}.rail-hidden .map-legend,.rail-hidden .layers-wrap{bottom:24px}.bottom-bar{padding:12px 2px;font-size:7px;align-items:flex-start;line-height:1.7}.bottom-bar>span:first-child{max-width:61%;align-items:flex-start}.bottom-bar>span:last-child{flex-wrap:wrap;justify-content:flex-end;max-width:35%;font-size:7px}.bottom-bar .footer-divider{display:none}.bottom-bar>span:last-child>.live-dot{width:4px;height:4px}.bottom-bar>span:last-child{gap:3px 5px}.filter-drawer{flex-wrap:wrap;padding:12px;gap:10px}.filter-drawer label{width:calc(50% - 5px)}.filter-drawer select{min-width:0;width:100%;max-width:none}.details-panel{top:auto;bottom:0;left:0;right:0;width:100%;max-height:80%;border-radius:16px 16px 0 0;padding:19px 22px;box-shadow:0 -8px 40px #2c482f20}.details-panel:before{content:'';display:block;width:35px;height:4px;background:#d5e0cf;border-radius:5px;margin:-9px auto 10px}.details-panel h2{font-size:20px}.details-panel .detail-copy{font-size:11px}.details-panel .detail-category{height:35px;width:35px}.detail-top{margin-bottom:9px}.detail-meta>div{font-size:9px}.layer-menu{width:220px}.modal{padding:26px;width:100%;border-radius:13px}.modal h2{font-size:21px}.tile-warning{bottom:300px;left:12px;font-size:8px;max-width:210px}.empty-state{padding:8px;min-width:100%;font-size:10px}.empty-state>svg{display:none}.empty-state p{font-size:8px}.empty-state h3{font-size:10px;margin-bottom:3px}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
EOF
npm run typecheck`
> - Ran `curl -L --fail --max-time 30 https://www.geoboundaries.org/api/current/gbOpen/THA/ADM2/ -o /tmp/thailand-adm2.json; curl -L --fail --max-time 30 https://www.geoboundaries.org/api/current/gbOpen/THA/ADM3/ -o /tmp/thailand-adm3.json; which chromium chromium-browser google-chrome; find /opt -maxdepth 5 -iname '*playwright*' 2>/dev/null`
>
> </details>
>
> The main interactions are implemented, including Thai/English switching, clustered markers, shelter capacity panels, layer controls, and a practice report form that stays in the browser. I’m checking the production build and responsive behavior, and reviewing the React components for accessibility and state consistency.
>
> <details><summary>Ran 9 commands</summary>
>
> - Ran `npm run build`
> - Ran `python - <<'PY'
import json
for n in ['2','3']:
 try:
  j=json.load(open('/tmp/thailand-adm'+n+'.json')); print(n, j.get('simplifiedGeometryGeoJSON'),j.get('boundaryLicense'),j.get('boundarySource'))
 except Exception as e: print(e)
PY`
> - Ran `curl -L --fail --max-time 40 https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/THA/ADM2/geoBoundaries-THA-ADM2_simplified.geojson -o public/data/districts.geojson; curl -L --fail --max-time 20 https://raw.githubusercontent.com/chingchai/OpenGISData-Thailand/master/README.md -o /tmp/geo-readme`
> - Ran `python -m http.server 3000 --bind 0.0.0.0 --directory out`
> - Ran `python - <<'PY'
import json
j=json.load(open('public/data/districts.geojson'));print(len(j['features']));print(j['features'][0]['properties']);print(open('/tmp/geo-readme').read()[:4000] if __import__('os').path.exists('/tmp/geo-readme') else '')
PY`
> - Ran `npm install --save-dev @playwright/test --cache /tmp/floodwatch-npm --no-audit --no-fund; npx playwright install chromium`
> - Ran `curl -L --fail --max-time 60 https://raw.githubusercontent.com/chingchai/OpenGISData-Thailand/master/districts.geojson -o /tmp/th-districts.geojson; curl -L --fail --max-time 60 https://raw.githubusercontent.com/chingchai/OpenGISData-Thailand/master/subdistricts.geojson -o /tmp/th-subdistricts.geojson`
> - Ran `cat > /tmp/qa-flood.cjs <<'EOF'
const { chromium } = require('/opt/codex/cua_node/lib/node_modules/playwright');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:3000');await page.waitForTimeout(3500);await page.screenshot({path:'/workspace/sites/floodwatch/desktop.png'});console.log({errors,title:await page.title(),pins:await page.locator('.incident-pin').count(),cards:await page.locator('.incident-card').count()});await page.getByRole('button',{name:'TH',exact:true}).click();await page.getByRole('button',{name:'Critical only'}).click();console.log('critical cards',await page.locator('.incident-card').count());await page.locator('.incident-card').first().click();console.log('details',await page.getByRole('dialog').count());await page.getByRole('button',{name:'Close incident details'}).click();await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'All incidents',exact:true}).click();await page.screenshot({path:'/workspace/sites/floodwatch/mobile.png'});console.log('mobile overflow',await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth));await browser.close()})().catch(e=>{console.error(e);process.exit(1)});
EOF
node /tmp/qa-flood.cjs`
> - Ran `python - <<'PY'
import json,importlib.util,os
print('shapely',bool(importlib.util.find_spec('shapely')))
for p in ['/tmp/th-districts.geojson','/tmp/th-subdistricts.geojson']:
 if os.path.exists(p):
  j=json.load(open(p));print(p,len(j['features']),j['features'][0]['properties'])
PY`
>
> </details>
>
> Viewed 2 images
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `curl -I --max-time 15 https://a.basemaps.cartocdn.com/light_all/5/24/14.png; python - <<'PY'
import json,os
for p in ['/tmp/th-districts.geojson','/tmp/th-subdistricts.geojson']:
 print(p,os.path.getsize(p))
PY`
> - Ran `cat > /tmp/prepare-geo.py <<'PY'
import json,os,math
root='/workspace/sites/floodwatch/public/data'
def simplify(points,tol=.001):
 if len(points)<=4:return points
 a,b=points[0],points[-1];dx,dy=b[0]-a[0],b[1]-a[1];den=dx*dx+dy*dy
 best=0;at=0
 for i,p in enumerate(points[1:-1],1):
  t=max(0,min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/den)) if den else 0
  d=(p[0]-a[0]-t*dx)**2+(p[1]-a[1]-t*dy)**2
  if d>best:best=d;at=i
 if best>tol*tol:return simplify(points[:at+1],tol)[:-1]+simplify(points[at:],tol)
 return [a,b]
def geom(g):
 depth={'Polygon':1,'MultiPolygon':2}[g['type']]
 def walk(c,d):
  if d:return [walk(x,d-1) for x in c]
  s=simplify(c);return [[round(v,5) for v in p] for p in (s if len(s)>=4 else c)]
 return {'type':g['type'],'coordinates':walk(g['coordinates'],depth)}
index={'districts':[],'subdistricts':[],'provinces':{}}
for level in ['districts','subdistricts']:
 data=json.load(open('/tmp/th-'+level+'.geojson'));groups={}
 for f in data['features']:
  p=f['properties'];props={k:p[k] for k in ['pro_code','pro_en','pro_th','amp_code','amp_en','amp_th']+(['tam_code','tam_en','tam_th'] if level=='subdistricts' else [])}
  index[level].append(props);index['provinces'][p['pro_en']]=p['pro_th']
  key=p['pro_en'] if level=='districts' else p['amp_code']
  groups.setdefault(key,[]).append({'type':'Feature','properties':props,'geometry':geom(f['geometry'])})
 os.makedirs(root+'/'+level,exist_ok=True)
 for key,fs in groups.items():json.dump({'type':'FeatureCollection','features':fs},open(root+'/'+level+'/'+key+'.json','w'),ensure_ascii=False,separators=(',',':'))
json.dump(index,open(root+'/geography-index.json','w'),ensure_ascii=False,separators=(',',':'))
os.remove(root+'/districts.geojson')
print('Prepared',len(index['districts']),'districts and',len(index['subdistricts']),'subdistricts')
PY
python /tmp/prepare-geo.py`
>
> </details>
>
> The production build passes, and browser checks found no runtime errors or mobile overflow. I also found a source with district and subdistrict boundaries, so I’m extending the map beyond province-level navigation and splitting those files by area to keep loading lightweight.
>
> <details><summary>Ran 10 commands</summary>
>
> - Ran ``cat > src/lib/geography.ts <<'EOF'
>   export interface GeographicArea {pro_code:string;pro_en:string;pro_th:string;amp_code:string;amp_en:string;amp_th:string;tam_code?:string;tam_en?:string;tam_th?:string}
>   export interface GeographicIndex {districts:GeographicArea[];subdistricts:GeographicArea[];provinces:Record<string,string>}
>   export async function getGeography():Promise<GeographicIndex>{const r=await fetch('/data/geography-index.json');if(!r.ok)throw new Error('Boundary index unavailable');return r.json()}
>   EOF
>   python - <<'PY'
>   p='src/components/FloodDashboard.tsx'
>   s=open(p).read().replace("import {useDashboard} from '@/lib/store';","import {useDashboard} from '@/lib/store';\nimport {getGeography} from '@/lib/geography';")
>   s=s.replace("const {data=[],isPending,isError,refetch}=useQuery", "const {data:geography}=useQuery({queryKey:['geography'],queryFn:getGeography,staleTime:Infinity});\n const {data=[],isPending,isError,refetch}=useQuery")
>   s=s.replace("const areaProvinces=", "const provinceLabel=(p:string)=>s.lang==='th'?(geography?.provinces[p]||p):p;\n const districtAreas=geography?.districts.filter(d=>(!s.province||d.pro_en===s.province)&&(!s.region||regions.find(r=>r.id===s.region)?.provinces.includes(d.pro_en)))||[];\n const subdistrictAreas=geography?.subdistricts.filter(d=>(!s.province||d.pro_en===s.province)&&s.district&&d.amp_en===s.district)||[];\n const areaProvinces=")
>   s=s.replace('<option key={p}>{p}</option>','<option key={p} value={p}>{provinceLabel(p)}</option>')
>   s=s.replace("t('District (demo coverage)','อำเภอ (พื้นที่ข้อมูลสาธิต)')","t('District','อำเภอ / เขต')").replace("t('Subdistrict (demo coverage)','ตำบล (พื้นที่ข้อมูลสาธิต)')","t('Subdistrict','ตำบล / แขวง')")
>   s=s.replace("{[...new Set(data.filter(r=>!s.province||r.province===s.province).map(r=>r.district))].map(d=><option key={d}>{d}</option>)}","{districtAreas.map(d=><option key={d.amp_code} value={d.amp_en}>{s.lang==='th'?d.amp_th:d.amp_en}</option>)}")
>   s=s.replace("{[...new Set(local.map(r=>r.subdistrict))].map(d=><option key={d}>{d}</option>)}","{subdistrictAreas.map(d=><option key={d.tam_code} value={d.tam_en}>{s.lang==='th'?d.tam_th:d.tam_en}</option>)}")
>
> # default status freshness more honest verifiedAt demo
>
> open(p,'w').write(s)
> p='src/components/ThailandInteractiveMap.tsx';s=open(p).read()
> s=s.replace("import {renderToStaticMarkup}","import {useQuery} from '@tanstack/react-query';\nimport {getGeography} from '@/lib/geography';\nimport {renderToStaticMarkup}")
> s=s.replace("markers=useRef<L.LayerGroup|null>(null);","markers=useRef<L.LayerGroup|null>(null),detailGeo=useRef<L.GeoJSON|null>(null);")
> s=s.replace("const s=useDashboard();", "const s=useDashboard();const {data:index}=useQuery({queryKey:['geography'],queryFn:getGeography,staleTime:Infinity});")
> s=s.replace("minZoom:5,maxZoom:17}).setView([13.7,101.1],5.55)","minZoom:4,maxZoom:17,zoomSnap:.25}).fitBounds([[5.5,97.3],[20.5,105.7]],{paddingTopLeft:[25,35],paddingBottomRight:[25,window.innerWidth<760?180:35]})")
> s=s.replace("else m.setView([13.7,101.1],5.55)","else m.fitBounds([[5.5,97.3],[20.5,105.7]],{paddingTopLeft:[25,35],paddingBottomRight:[25,window.innerWidth<760?180:35]})")
> s=s.replace("map.current?.setView([13.7,101.1],5.55)","map.current?.fitBounds([[5.5,97.3],[20.5,105.7]],{paddingTopLeft:[25,35],paddingBottomRight:[25,window.innerWidth<760?180:35]})")
> needle=" useEffect(()=>{if(s.selected&&map.current)"
> new=""" useEffect(()=>{const m=map.current;if(!m||!ready)return;let canceled=false;if(detailGeo.current){m.removeLayer(detailGeo.current);detailGeo.current=null}if(!s.province)return;const district=index?.districts.find(d=>d.pro_en===s.province&&d.amp_en===s.district);const sublevel=!!district;const url=sublevel?`/data/subdistricts/${district.amp_code}.json`:`/data/districts/${encodeURIComponent(s.province)}.json`;fetch(url).then(r=>{if(!r.ok)throw Error();return r.json()}).then(data=>{if(canceled)return;detailGeo.current=L.geoJSON(data,{style:f=>({color:'#628b79',weight:1,fillColor:'#dae9d9',fillOpacity:sublevel?.25:.12}),onEachFeature:(f,l)=>{const p=f.properties;const label=sublevel?(s.lang==='th'?p.tam_th:p.tam_en):(s.lang==='th'?p.amp_th:p.amp_en);l.bindTooltip(label,{sticky:true});l.on('click',()=>{s.set(sublevel?{subdistrict:p.tam_en}:{district:p.amp_en,subdistrict:''});m.fitBounds((l as L.Polygon).getBounds(),{padding:[35,35],maxZoom:13})});if(s.subdistrict&&p.tam_en===s.subdistrict)m.fitBounds((l as L.Polygon).getBounds(),{padding:[35,35],maxZoom:14})}}).addTo(m);if(sublevel&&!s.subdistrict)m.fitBounds(detailGeo.current.getBounds(),{padding:[35,35],maxZoom:12});}).catch(()=>setError(s.lang==='th'?'ไม่สามารถโหลดขอบเขตพื้นที่ได้':'Area boundaries could not load'));return()=>{canceled=true}},[s.province,s.district,s.subdistrict,s.lang,index,ready]);
> """
> s=s.replace(needle,new+needle)
> s=s.replace("© CARTO');","© CARTO · Boundaries: <a href=\"https://github.com/chingchai/OpenGISData-Thailand\">OpenGISData Thailand</a>');")
> open(p,'w').write(s)
> PY
> npm run typecheck``
>
> - Ran `curl -L --fail --max-time 25 https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson -o /tmp/world.geojson`
> - Ran `python - <<'PY'
p='/tmp/qa-flood.cjs';s=open(p).read().replace("headless:true,args:","headless:true,proxy:{server:'http://proxy:8080',bypass:'127.0.0.1,localhost'},args:")
open(p,'w').write(s)
PY
npm run build`
> - Ran `python - <<'PY'
import json
j=json.load(open('/tmp/world.geojson'));print(j['features'][0]['properties'])
PY`
> - Ran `node /tmp/qa-flood.cjs`
> - Ran `curl -I --max-time 5 http://127.0.0.1:3000; git --version; du -sh public/data out`
> - Ran ``python - <<'PY'
>   s=open('/tmp/prepare-geo.py').read();exec(s[:s.index("index={'districts'")]);j=json.load(open('/tmp/world.geojson'));fs=[]
>   for f in j['features']:
>   if f['properties']['name'] in ['Thailand','Myanmar','Laos','Cambodia','Vietnam','Malaysia','China','Bangladesh','India','Indonesia']:
>   fs.append({'type':'Feature','properties':{'name':f['properties']['name']},'geometry':geom(f['geometry'])})
>   json.dump({'type':'FeatureCollection','features':fs},open(root+'/context.geojson','w'),separators=(',',':'))
>   PY
>   python - <<'PY'
>   p='src/components/ThailandInteractiveMap.tsx';s=open(p).read()
>   s=s.replace("markers.current=L.layerGroup().addTo(m);", "m.createPane('offlineLand');m.getPane('offlineLand')!.style.zIndex='150';fetch('/data/context.geojson').then(r=>r.json()).then(data=>{if(map.current===m)L.geoJSON(data,{pane:'offlineLand',interactive:false,style:{fillColor:'#edf0e7',fillOpacity:1,color:'#d4ded0',weight:1}}).addTo(m)}).catch(()=>{});\n markers.current=L.layerGroup().addTo(m);")
>   s=s.replace("const t=(en:string,th:string)=>s.lang==='en'?en:th;", "const t=(en:string,th:string)=>s.lang==='en'?en:th;")
>
> # keyboard enable boundary paths
>
> s=s.replace("l.bindTooltip(f.properties.name,{sticky:true,className:'province-tooltip'});", "l.bindTooltip(f.properties.name,{sticky:true,className:'province-tooltip'});l.on('add',()=>{const el=(l as L.Path).getElement();if(el){el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',f.properties.name);el.addEventListener('keydown',(e)=>{if((e as KeyboardEvent).key==='Enter')l.fire('click')})}});")
> s=s.replace("l.bindTooltip(label,{sticky:true});", "l.bindTooltip(label,{sticky:true});l.on('add',()=>{const el=(l as L.Path).getElement();if(el){el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',label);el.addEventListener('keydown',e=>{if((e as KeyboardEvent).key==='Enter')l.fire('click')})}});")
> open(p,'w').write(s)
> PY
> cat >> src/app/globals.css <<'EOF'
> .leaflet-container{background:#dfe9e6!important}.metric-top{font-size:11px}.metric-bottom span{font-size:9px}.incident-card h3{font-size:12px}.incident-card>p{font-size:9px}.response-status{font-size:9px}.incident-card .unverified{font-size:8px}.detail-copy{font-size:11px}.map-legend strong{font-size:10px}.legend-items>span{font-size:9px}.map-legend small{font-size:8px}.leaflet-interactive:focus{outline:2px solid #216b61;outline-offset:2px}
> @media(max-width:1200px){.metric-top{font-size:9px}.metric-bottom span{font-size:8px}.incident-card h3{font-size:11px}.incident-card>p{font-size:8px}.response-status{font-size:8px}.legend-items>span{font-size:8px}}
> @media(max-width:760px){.metric-top{font-size:9px}.metric-bottom span{font-size:7px}.incident-card h3{font-size:10px}.incident-card>p{font-size:7px}.incident-card .response-status{font-size:7px}.legend-items>span{font-size:7px}.map-legend strong{font-size:8px}.map-legend small{font-size:6px}.map-legend{max-width:225px}}
> EOF
> cat > public/data/ATTRIBUTION.md <<'EOF'
>
> # Geographic data
>
> Province boundaries: https://github.com/apisit/thailand.json (77 provinces).
> District and subdistrict boundaries: https://github.com/chingchai/OpenGISData-Thailand (CC BY 4.0). Coordinates simplified for display; administrative definitions may differ from current official boundaries. 928 district and 7,367 subdistrict features; loaded on demand by parent area.
> Contextual country boundaries: Natural Earth via https://github.com/datasets/geo-countries (public domain).
> Base map: © OpenStreetMap contributors © CARTO.
>
> All incident records, flood levels, shelter occupancy, timestamps and verification examples are fictional. Geographic boundaries are reference geometry, not a flood dataset.
> EOF
> cat > .gitignore <<'EOF'
> node_modules/
> .next/
> out/
> _.tsbuildinfo
> _.png
> \*.tar.gz
> EOF
> cat > README.md <<'EOF'
>
> # Floodwatch Thailand
>
> A map-first, bilingual flood-monitoring demonstration built with Next.js App Router, React, TypeScript, Leaflet, Lucide, TanStack Query, Zustand and Zod. Thai is the default language.
>
> ## Run
>
> `npm install` then `npm run dev`. Build a static export with `npm run build`; serve `out/` using any static server. `npm run typecheck` checks TypeScript.
>
> ## Features
>
> - Clickable provincial, district and subdistrict GeoJSON boundaries. Region selection and location breadcrumbs. Area files load on demand.
> - Map panning, zoom, screen-space marker clustering, category layers, quick priority filters, location search and geographic filters.
> - Derived location statistics and urgency-ordered incident list.
> - Desktop details panel and mobile bottom sheet, including shelter capacity and electrical cautions.
> - English/Thai controls, keyboard-accessible geographic features, offline indicator, boundary/data error handling and empty states.
> - Practice reporting is saved only in browser storage and never dispatched.
>
> ## Data contract
>
> `src/lib/data.ts` defines the mock adapter, models and validation. Replace `getReports()` with an authenticated API adapter and validate complete remote payloads before use. `src/lib/geography.ts` loads real reference geography. See `public/data/ATTRIBUTION.md` for sources.
>
> **This is a demonstration, not an operational emergency system.** All emergencies, flood severity values, verification states, response-team assignments and shelter capacity are fictional. No official live feed is connected. No public report is automatically verified. Areas without a severity report are labeled as no data. Map directions provide a location reference and do not confirm route safety.
>
> Before live use, implement authorized source integrations, freshness policies, authentication/roles, moderation and duplicate detection on the backend, consent-aware reporting, and operational validation of all response and evacuation information. External map tiles and fonts need network access; reference boundaries are shipped locally. Boundaries are generalized reference geometry and may not match current official administrative definitions.
> EOF
> npm run build``
>
> - Ran `ls -la /workspace/.git; find / -maxdepth 5 -name '*sites*' 2>/dev/null | head -25`
> - Ran `python - <<'PY'
p='/tmp/qa-flood.cjs';s=open(p).read().replace("proxy:{server:'http://proxy:8080',bypass:'127.0.0.1,localhost'},",'')
s=s.replace("const errors=[];", "const errors=[];await page.route('https://*.basemaps.cartocdn.com/**',async route=>{try{const {execFile}=require('child_process');const body=await new Promise((resolve,reject)=>execFile('curl',['-sLf','--max-time','15',route.request().url()],{encoding:'buffer',maxBuffer:2000000},(e,o)=>e?reject(e):resolve(o)));await route.fulfill({body,contentType:'image/png'});}catch{await route.abort()}});")
s=s.replace("await page.waitForTimeout(3500)","await page.waitForTimeout(6000)")
open(p,'w').write(s)
PY
node /tmp/qa-flood.cjs`
> - Ran `python - <<'PY'
import json
j=json.load(open('public/data/geography-index.json'));print([d for d in j['districts'] if d['pro_en']=='Chiang Mai'][:3]); print([d for d in j['districts'] if 'Mueang Chiang Mai'==d['amp_en']]); print([d for d in j['subdistricts'] if d['tam_en']=='Wat Ket'])
PY`
>
> </details>
>
> Viewed 2 images
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `curl -sLf --max-time 20 https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/5/14/24 -o /tmp/esri.png; curl -sLf --max-time 20 https://tile.openstreetmap.org/5/24/14.png -o /tmp/osm.png`
> - Ran `python - <<'PY'
>   p='src/components/FloodDashboard.tsx';s=open(p).read();s=s.replace("const areaProvinces=", "useEffect(()=>{if(s.selected&&!reports.some(r=>r.id===s.selected?.id))s.set({selected:null})},[reports]);\n const areaProvinces=")
>
> # modal keyboard trap and focus restore
>
> s=s.replace("const statuses:Record<string,string>","useEffect(()=>{if(!modal)return;const before=document.activeElement as HTMLElement|null;const root=document.querySelector('.modal');const get=()=>Array.from(root?.querySelectorAll<HTMLElement>('button,a,input,select,textarea')||[]);get()[0]?.focus();const trap=(e:KeyboardEvent)=>{if(e.key!=='Tab')return;const els=get(),first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}};document.addEventListener('keydown',trap);return()=>{document.removeEventListener('keydown',trap);before?.focus()}},[modal,submitted]);\n const statuses:Record<string,string>")
> open(p,'w').write(s)
> PY`
>
> </details>
>
> Viewed 2 images
>
> The map now supports drill-down through 928 district and 7,367 subdistrict features. Browser verification also caught a map provider returning “API key required” tiles; I’m replacing it with a working basemap and keeping local geographic context available when tiles cannot load.
>
> <details><summary>Ran 2 commands, called a tool</summary>
>
> - Ran `cat > /tmp/push-flood.py <<'PY'
import sys,json,os,subprocess,tarfile
c=json.loads(sys.stdin.readline()); env=os.environ.copy();env.update({'GIT_CONFIG_COUNT':'1','GIT_CONFIG_KEY_0':'http.extraHeader','GIT_CONFIG_VALUE_0':'Authorization: Bearer '+c['token'],'GIT_TERMINAL_PROMPT':'0'})
def run(args,secret=False):
 p=subprocess.run(args,env=env if secret else None,check=False,capture_output=True,text=True)
 if p.returncode:
  print(p.stderr.replace(c['token'],'[redacted]'));raise SystemExit(p.returncode)
 return p.stdout.strip()
run(['git','init','-b',c['branch']]);run(['git','config','user.name','Floodwatch']);run(['git','config','user.email','build@floodwatch.example']);run(['git','add','.']);run(['git','commit','-m','Build bilingual map-first Thailand flood monitoring demo']);run(['git','remote','add','origin',c['remote_url']]);run(['git','push','-u','origin',c['branch']],True)
sha=run(['git','rev-parse','HEAD']);archive='/workspace/sites/floodwatch-deploy.tar.gz'
with tarfile.open(archive,'w:gz') as t:
 t.add('.openai/hosting.json',arcname='.openai/hosting.json');t.add('out',arcname='out')
print(json.dumps({'project_id':'appgprj_6ad18c8ebf308191912617fde6ddd8f2','commit_sha':sha,'archive':archive}))
PY`
> - Ran `python - <<'PY'
p='src/components/ThailandInteractiveMap.tsx';s=open(p).read().replace("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png","https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}").replace("{maxZoom:19,subdomains:'abcd'}","{maxZoom:17,maxNativeZoom:16}").replace("© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> © CARTO", "Tiles © Esri · HERE · Garmin")
open(p,'w').write(s)
p='src/lib/store.ts';s=open(p).read().replace("category:Category|'';", "category:Category|'';severity:string;").replace("category:'',query:'',", "category:'',severity:'',query:'',");open(p,'w').write(s)
p='src/components/FloodDashboard.tsx';s=open(p).read();s=s.replace("(!s.category||r.category===s.category)","(!s.severity||severityByProvince[r.province]===s.severity)&&(!s.category||r.category===s.category)").replace("s.quick,s.category,s.query]","s.quick,s.category,s.severity,s.query]")
s=s.replace("quick:'all',category:'',selected:null", "quick:'all',category:'',severity:'',selected:null")
s=s.replace("<button className=\"text-button\" onClick={reset}>{t('Reset filters'", "<label>{t('Flood severity','ระดับน้ำท่วม')}<select value={s.severity} onChange={e=>s.set({severity:e.target.value})}><option value=\"\">{t('All levels','ทุกระดับ')}</option>{['monitoring','moderate','severe','critical'].map((v,i)=><option value={v} key={v}>{[t('Monitoring','เฝ้าระวัง'),t('Moderate','ปานกลาง'),t('Severe','รุนแรง'),t('Critical','วิกฤต')][i]}</option>)}</select></label><button className=\"text-button\" onClick={reset}>{t('Reset filters'")
open(p,'w').write(s)
p='public/data/ATTRIBUTION.md';s=open(p).read().replace('Base map: © OpenStreetMap contributors © CARTO.','Base map: Esri World Light Gray Canvas, © Esri, HERE, Garmin and contributors.');open(p,'w').write(s)
PY
npm run build`
>
> MCP tool call
>
> codex_apps.sites.create_source_repository_write_credential
>
> ```json
> {
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2"
> }
> ```
>
> ```text
> Action completed.
> ```
>
> ```json
> {
>   "app_repository_id": "appgrepo_2ed7f03ed27081918a473222cc7874d6",
>   "auth_mode": "http_extra_header",
>   "branch": "main",
>   "provider": "cloudflare_artifact",
>   "publish_on_push_accepted": false,
>   "publish_on_push_expires_at": null,
>   "remote_url": "https://git.chatgpt-team.site/16d74e52-a8b9-40dd-9b78-47069f2d3fda/appgprj_6ad18c8ebf308191912617fde6ddd8f2.git",
>   "repository": "appgprj_6ad18c8ebf308191912617fde6ddd8f2",
>   "token": "art_v2_x_a7d114ec3901b8151abb787de8012b515f726082",
>   "token_expires_at": "2026-10-16T02:57:08.874Z"
> }
> ```
>
> </details>
>
> The final build passes. I’m finishing end-to-end checks for geographic filters, critical incidents, shelter details, language switching, and the mobile bottom sheet, then publishing the private demo. The data adapter is ready to replace, but no live emergency feed is connected.
>
> <details><summary>Ran a command</summary>
>
> - Ran `cat > /tmp/qa-flood-final.cjs <<'EOF'
const {chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright');const assert=require('assert');const {execFile}=require('child_process');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('https://server.arcgisonline.com/**',async route=>{try{const body=await new Promise((resolve,reject)=>execFile('curl',['-sLf','--max-time','15',route.request().url()],{encoding:'buffer',maxBuffer:2000000},(e,o)=>e?reject(e):resolve(o)));await route.fulfill({body,contentType:'image/png'});}catch{await route.abort()}});
await page.goto('http://127.0.0.1:3000');await page.locator('.incident-card').first().waitFor();await page.waitForTimeout(2500);assert.equal(await page.locator('.incident-card').count(),16);await page.getByRole('button',{name:'TH',exact:true}).click();await page.waitForTimeout(3500);await page.screenshot({path:'/workspace/sites/floodwatch/desktop.png'});
await page.getByRole('button',{name:'Critical only',exact:true}).click();assert.equal(await page.locator('.incident-card').count(),3);await page.locator('.incident-card').first().click();await page.getByRole('dialog').waitFor();assert((await page.locator('.details-panel').innerText()).includes('Fictional'));await page.getByRole('button',{name:'Close incident details'}).click();await page.getByRole('button',{name:'All incidents',exact:true}).click();await page.getByRole('combobox',{name:'Select province'}).selectOption('Chiang Mai');assert.equal(await page.locator('.incident-card').count(),3);await page.getByRole('button',{name:'Location and incident filters'}).click();await page.getByLabel('District',{exact:true}).selectOption('Mueang Chiang Mai');await page.waitForTimeout(600);assert.equal(await page.locator('.incident-card').count(),1);await page.getByLabel('Subdistrict',{exact:true}).selectOption('Wat Ket');await page.waitForTimeout(600);assert.equal(await page.locator('.incident-card').count(),1);await page.getByRole('button',{name:'Reset filters',exact:true}).click();await page.getByRole('button',{name:'Close filters'}).click();await page.getByRole('button',{name:'Evacuation centers',exact:true}).last().click();assert.equal(await page.locator('.incident-card').count(),4);await page.locator('.incident-card').first().click();assert((await page.locator('.details-panel').innerText()).includes('available spaces'));await page.getByRole('button',{name:'Close incident details'}).click();await page.getByRole('button',{name:'Report an incident',exact:true}).click();await page.getByLabel('Location',{exact:true}).fill('Fictional practice location');await page.getByLabel('Situation description',{exact:true}).fill('This is a fictional practice report for frontend verification.');await page.getByRole('button',{name:'Save practice report'}).click();assert((await page.getByRole('dialog').innerText()).includes('saved locally'));await page.getByRole('button',{name:'Back to map'}).click();
await page.setViewportSize({width:390,height:844});await page.reload();await page.waitForTimeout(4000);await page.getByRole('button',{name:'TH',exact:true}).click();await page.screenshot({path:'/workspace/sites/floodwatch/mobile.png'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.locator('.incident-card').first().click();assert(await page.locator('.details-panel').isVisible());assert.deepEqual(errors,[]);console.log('PASS: country/province/district/subdistrict filters, critical ordering, shelter details, local practice reporting, Thai/English, mobile sheet, no horizontal overflow, no runtime errors.');await browser.close()})().catch(e=>{console.error(e);process.exit(1)});
EOF
node /tmp/qa-flood-final.cjs`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 3 commands, called 2 tools</summary>
>
> - Ran `python /tmp/push-flood.py`
> - Ran `python /tmp/push-flood.py`
> - Ran `python - <<'PY'
p='/tmp/push-flood.py';s=open(p).read().replace('c=json.loads(sys.stdin.readline());',"import termios\nfd=sys.stdin.fileno();attr=termios.tcgetattr(fd);attr[3]=attr[3]&~termios.ECHO;termios.tcsetattr(fd,termios.TCSANOW,attr);print('Ready for credential JSON (input hidden)',flush=True)\nc=json.loads(sys.stdin.readline());")
open(p,'w').write(s)
p='/tmp/qa-flood-final.cjs';s=open(p).read().replace("{name:'Critical only',exact:true}","{name:/Critical only/}");open(p,'w').write(s)
PY
node /tmp/qa-flood-final.cjs`
>
> MCP tool call
>
> codex_apps.sites.save_version_and_deploy_private
>
> ```json
> {
>   "archive": "/workspace/sites/floodwatch-deploy.tar.gz",
>   "commit_sha": "26c6fb26d6169073b0eb63315c370974f2de11f3",
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2"
> }
> ```
>
> ```text
> Action completed.
> ```
>
> ```json
> {
>   "env_set_revision": 0,
>   "failure_message": null,
>   "has_mcp": false,
>   "id": "appgdep_6ad190a337788191bb3f288e3d857f6d",
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2",
>   "provider_deployment_id": null,
>   "screenshot_asset_pointer": null,
>   "status": "pending",
>   "title": "Floodwatch — Thailand Flood & Emergency Map",
>   "type": "publish",
>   "updated_at": "2026-10-16T02:49:07.844135+00:00",
>   "url": null,
>   "version_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2~appgver_98fce80d5c588191abf56de3421e4345"
> }
> ```
>
> MCP tool call
>
> codex_apps.sites.get_deployment_status
>
> ```json
> {
>   "deployment_id": "appgdep_6ad190a337788191bb3f288e3d857f6d",
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2"
> }
> ```
>
> ```text
> Action completed.
> ```
>
> ```json
> {
>   "env_set_revision": 0,
>   "failure_message": null,
>   "has_mcp": false,
>   "id": "appgdep_6ad190a337788191bb3f288e3d857f6d",
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2",
>   "provider_deployment_id": "site---6ad18c8ebf308191912617fde6ddd8f2",
>   "screenshot_asset_pointer": null,
>   "status": "publishing",
>   "title": "Floodwatch — Thailand Flood & Emergency Map",
>   "type": "publish",
>   "updated_at": "2026-10-16T02:49:17.114224+00:00",
>   "url": null,
>   "version_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2~appgver_98fce80d5c588191abf56de3421e4345"
> }
> ```
>
> </details>
>
> The private demo is publishing. It includes locally bundled boundaries at all three administrative levels, emergency and shelter panels, priority filters, map layers, and Thai/English controls. All flood levels, incidents, verification states, and shelter capacities remain clearly labeled as fictional.
>
> <details><summary>Ran 4 commands, called a tool</summary>
>
> - Ran `git status --short; git log -1 --oneline`
>
> MCP tool call
>
> codex_apps.sites.get_deployment_status
>
> ```json
> {
>   "deployment_id": "appgdep_6ad190a337788191bb3f288e3d857f6d",
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2"
> }
> ```
>
> ```text
> Action completed.
> ```
>
> ```json
> {
>   "env_set_revision": 0,
>   "failure_message": null,
>   "has_mcp": false,
>   "id": "appgdep_6ad190a337788191bb3f288e3d857f6d",
>   "project_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2",
>   "provider_deployment_id": "site---6ad18c8ebf308191912617fde6ddd8f2",
>   "screenshot_asset_pointer": null,
>   "status": "succeeded",
>   "title": "Floodwatch — Thailand Flood & Emergency Map",
>   "type": "publish",
>   "updated_at": "2026-10-16T02:49:31.445887+00:00",
>   "url": "https://floodwatch-thailand.blackcrow3.chatgpt.site",
>   "version_id": "appgprj_6ad18c8ebf308191912617fde6ddd8f2~appgver_98fce80d5c588191abf56de3421e4345"
> }
> ```
>
> - Ran `python - <<'PY'
p='/tmp/qa-flood-final.cjs';s=open(p).read().replace("page.getByLabel('District',{exact:true})","page.locator('.filter-drawer select').nth(0)").replace("page.getByLabel('Subdistrict',{exact:true})","page.locator('.filter-drawer select').nth(1)");open(p,'w').write(s)
PY
node /tmp/qa-flood-final.cjs`
> - Ran `python - <<'PY'
p='/tmp/qa-flood-final.cjs';s=open(p).read().replace("{name:'Report an incident',exact:true}","{name:/Report an incident/}");s=s.replace("assert.equal(await page.locator('.incident-card').count(),3);await page.locator", "assert.equal(await page.locator('.incident-card').count(),3);console.log('critical filter passed');await page.locator");s=s.replace("await page.getByRole('button',{name:'Reset filters'", "console.log('district and subdistrict passed');await page.getByRole('button',{name:'Reset filters'");s=s.replace("await page.getByRole('button',{name:/Report an incident/})", "console.log('shelter passed');await page.getByRole('button',{name:/Report an incident/})");open(p,'w').write(s)
PY`
> - Ran `node /tmp/qa-flood-final.cjs`
>
> </details>
>
> Viewed an image

</details>

Built and published: [Open Floodwatch Thailand](https://floodwatch-thailand.blackcrow3.chatgpt.site)

- Interactive map with province → district → subdistrict drill-down
- Flood overlays, clustered markers, filters, and map layers
- Emergency and shelter details with mobile bottom sheets
- Thai/English support and API-ready TypeScript models

Production build and browser flow checks passed.

All emergency data is clearly labeled fictional; no live feed is connected.
