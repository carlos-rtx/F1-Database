//imports
import "../styles/globals.css";
import localFont from 'next/font/local';
import { Major_Mono_Display, Space_Grotesk } from 'next/font/google';
import Footer from "../components/Footer.jsx"
import NavBar from "../components/NavBar.jsx";
//metadata 
export const metadata = {
  title: {
    template: "%s | F1 Database",
    default: "F1 Database",
  },
  description: "Discover the interactive F1 Database, results, stats, history & all about Formula 1",
  keywords: ["f1", "formula", "1", "formula1", "cars", "motorsport", "wheels", "sports", "formula 1", "pcs"],
  authors: [{ name: "Chärles" }],
  robots: "index, follow",
  language: "en",
  charset: "UTF-8",
  revisitAfter: "2 days",
  openGraph: {
    type: "website",
    url: "https://f1-database.vercel.app/",
    title: "F1 Database",
    description: "Discover the interactive F1 Database, results, stats, history & all about Formula 1",
    images: [
      "https://opengraph.b-cdn.net/production/images/b3fb204d-8acb-4923-bd10-470b9af4237d.png?token=HdCsqSWd3mFxvCPg9Yrd0IETwGggeirJg1v9vUhaw9k&height=613&width=1200&expires=33290888846"
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "f1-database.vercel.app",
    url: "https://f1-database.vercel.app/",
    title: "F1 Database",
    description: "Discover the interactive F1 Database, results, stats, history & all about Formula 1",
    images: [
      "https://opengraph.b-cdn.net/production/images/b3fb204d-8acb-4923-bd10-470b9af4237d.png?token=HdCsqSWd3mFxvCPg9Yrd0IETwGggeirJg1v9vUhaw9k&height=613&width=1200&expires=33290888846"
    ],
  },
  verification: {
    google: ""
  }
};
//viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
//fonts
const SFPro = localFont({
  src: [
    {
      path: '../public/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SFProDisplay-UltralightItalic.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/SFProDisplay-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/SFProDisplay-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
  display: 'swap',
});

const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-major-mono',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${SFPro.variable} ${majorMonoDisplay.variable} ${spaceGrotesk.variable}`}>
        <NavBar/>
        {children}
        <Footer/>
    </html>
  );
}