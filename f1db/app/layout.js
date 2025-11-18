import "../styles/globals.css";
import localFont from 'next/font/local';
import { Major_Mono_Display, Space_Grotesk } from 'next/font/google';
import Footer from "../components/Footer.jsx"
import HtmlHead from "../components/HtmlHead.jsx"
import NavBar from "../components/NavBar.jsx";


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
      <HtmlHead title="F1 Database"/>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}