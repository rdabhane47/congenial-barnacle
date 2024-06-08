import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
//import Footer from './Components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
