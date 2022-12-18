import { ReactNode } from "react";
import Heading from "./heading";
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
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
