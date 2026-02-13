import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair"  // Changed from --font-display
});

export const metadata: Metadata = {
  title: {
    default: "Avenoir Films",
    template: "Avenoir Films | %s",
  },
  description:
    "A cinematic film studio crafting visually compelling stories.",
  openGraph: {
    title: "Avenoir Films",
    description:
      "A cinematic film studio crafting visually compelling stories.",
    // url: "https://yourdomain.com",
    siteName: "Avenoir Films",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-background text-foreground antialiased font-sans`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}