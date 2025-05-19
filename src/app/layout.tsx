// 'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import SessionProviderWrapper from "@/components/layout/SessionProviderWrapper";

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

export const metadata: Metadata = {
  title: 'Home',
  description: 'Aplikasi untuk belajar nextjs',
  authors: [{name:'riven', url:'http://localhost:3000'}],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Home',
    description: 'Aplikasi untuk belajar nextjs',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
      }
    ],
    url: 'http://localhost:3000',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
        <SessionProviderWrapper>
          <Navbar /> 
          {children}
        </SessionProviderWrapper>
        
      </body>
    </html>
  );
}
