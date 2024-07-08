import { Inter } from "next/font/google";
import "./globals.css";
import ImportBsJS from "./importBsJS";
import { Providers } from "@/redux/provider";
import { LocationProvider } from "./components/Context/LocationContext";
import "react-phone-input-2/lib/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ohogar",
  description: "Trusted Place to Find a Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body className={inter.className}>
        <Providers>
          <LocationProvider>
            {children}
          </LocationProvider>
        </Providers>
        <ImportBsJS /> 
      </body>
    </html>
  );
}
