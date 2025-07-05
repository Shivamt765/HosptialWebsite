import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import hospitalData from '@/data/hospitalData.json';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: `${hospitalData.name} - ${hospitalData.tagline}`,
  description: hospitalData.description,
  keywords: 'hospital, healthcare, medical services, emergency care, doctors, treatment',
  authors: [{ name: hospitalData.name }],
  openGraph: {
    title: `${hospitalData.name} - ${hospitalData.tagline}`,
    description: hospitalData.description,
    url: 'https://yourhospital.com',
    siteName: hospitalData.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hospitalData.name} - ${hospitalData.tagline}`,
    description: hospitalData.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}