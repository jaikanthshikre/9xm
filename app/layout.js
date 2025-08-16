import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "9xm Bet",
  description: "Best betting sites in india, best gaming sites in india",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Topbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
