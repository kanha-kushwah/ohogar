import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "./importBsJS";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ohogar",
  description: "Trusted Place to Find a Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body className={inter.className}>{children}
        <ImportBsJS />
      </body>
    </html>
  );
}