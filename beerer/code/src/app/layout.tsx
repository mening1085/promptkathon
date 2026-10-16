import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Floodwatch | Thailand in view',description:'Explore Thailand flood conditions, emergency requests and evacuation centers. Clearly labeled demonstration data.'};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {return <html lang="th"><body>{children}</body></html>}
