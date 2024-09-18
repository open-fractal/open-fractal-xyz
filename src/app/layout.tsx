import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Remove this line:
// import { Inter } from "next/font/google";
import Header from "@/components/header";

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
  title: "Open Fractal",
  description: "Empowering Fractal Bitcoin.",
  openGraph: {
    images: [
      {
        url: '/unfurl.png',
        width: 1200,
        height: 630,
        alt: 'Open Fractal',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
