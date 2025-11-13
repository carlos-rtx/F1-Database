import "../styles/globals.css";
import "../styles/fonts.css"
import Header from "../components/Head_main.jsx"
import NavBar from "../components/NavBar.jsx"; 
// export const metadata = {
//   title: "F1 Database",
//   description: "f1db ",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
