import "../styles/globals.css";
import { localFont } from 'next/font/local';
import { Major_Mono_Display, Space_Grotesk } from 'next/font/google';

import Header from "../components/Head_main.jsx"
import NavBar from "../components/NavBar.jsx";

const SFPro = localFont({
  src: [
    {
      path: '../public/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
      format: 'woff2',
    },
    {
      path: '../public/fonts/SFProDisplay-UltraLightItalic.woff2',
      weight: '200',
      style: 'normal',
      format: 'woff2',
    },
    {
      path: '../public/fonts/SFProDisplayMedium.woff2',
      weight: '600',
      style: 'normal',
      format: 'woff2',
    },
    {
      path: '../public/fonts/SFProDisplay-Bold.woff2',
      weight: '800',
      style: 'normal',
      format: 'woff2',
    },
  ],
});

const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${SFPro.className} ${majorMonoDisplay.className} ${spaceGrotesk.className}`}>
      <body>
        <Header/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
