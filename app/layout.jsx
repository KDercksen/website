import { Inter } from "@next/font/google";
import Metadata from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import Heading from "../components/heading";
import Navigation from "../components/navigation";

import "@/styles/globals.css";

export const metadata = Metadata({
  title: "Koen Dercksen - Homepage",
  description:
    "Website containing personal information for Koen Dercksen. Publications, contact details, projects and more.",
});

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between px-10 md:px-20 pb-2">
        <div className="flex flex-col items-center py-2 space-y-2 max-w-5xl">
          <Heading />
          <Navigation />
          <main className={inter.className}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
