import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ChatPopupWrapper } from "@/components/chat-popup-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delivera - AI-Powered Logistics Intelligence for Indian MSMEs",
  description: "Make smarter shipping decisions with Delivera. AI-powered logistics intelligence that helps you choose the right partners, predict delays, and reduce costs.",
  keywords: ["logistics", "shipping", "India", "MSME", "AI", "Delhivery", "Blue Dart", "DTDC", "e-commerce"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatPopupWrapper />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
