import { Navbar } from "@/components/Navbar";

import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Enesca",
  description: "Shop at fingertip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative h-full antialiased`}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
