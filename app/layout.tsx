import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";
import CursorEffect from "@/components/atoms/CursorEffect";

export const metadata: Metadata = {
  title: "Jan-Jan Laguan — OJT Portfolio",
  description: "Front-End & Mobile Developer intern at Makerspace Innovhub. Built MediTrack — a cross-platform medication adherence system.",
  keywords: ["Jan-Jan Laguan", "OJT", "Makerspace Innovhub", "MediTrack", "Flutter", "Next.js"],
  openGraph: {
    title: "Jan-Jan Laguan — OJT Portfolio",
    description: "Front-End & Mobile Developer intern at Makerspace Innovhub. Built MediTrack — a cross-platform medication adherence system.",
    type: "website",
    siteName: "Jan-Jan Laguan Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Jan-Jan Laguan — OJT Portfolio",
    description: "Front-End & Mobile Developer intern at Makerspace Innovhub. Built MediTrack — a cross-platform medication adherence system.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="noise" aria-hidden="true" />
        <CursorEffect />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
