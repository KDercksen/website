import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Koen Dercksen - Homepage",
  description: "Website containing personal information for Koen Dercksen.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
