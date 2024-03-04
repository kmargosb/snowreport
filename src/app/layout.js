
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import SnowReportContextProvider from "./context/SnowReport";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snow Report",
  description: "Personal frontEnd Proyect by Nelson Camargo from gammaTech School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <SnowReportContextProvider>
          <Navbar />
          {children}
          <Footer />
        </SnowReportContextProvider>

      </body>
    </html>
  );
}
