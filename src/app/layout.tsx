'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','500','600','700','800','900']
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body className={poppins.className}>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
        <SessionProvider>
          <Navbar /> 
          {children}
        </SessionProvider>
        
      </body>
    </html>
  );
}
