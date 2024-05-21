import Footer from "@/components/footer";
import Heading from "@/components/heading";
import Navigation from "@/components/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

export const metadata = {
  title: "Koen Dercksen - Homepage",
  description:
    "Website containing personal information for Koen Dercksen. Publications, contact details, projects and more.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="flex min-h-screen flex-col justify-between items-center px-8">
          <div className="flex flex-col flex-grow items-center py-2 space-y-4 max-w-4xl">
            <SpeedInsights />
            <Heading />
            <Navigation />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
