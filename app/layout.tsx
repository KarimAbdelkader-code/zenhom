import type { Metadata } from "next";
import { Amiri, Manrope, Parisienne, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "700"],
  display: "swap",
});

const script = Parisienne({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maged & Mona — A Celebration of Love",
  description: "Celebrate Maged and Mona's engagement on 12 November 2026 at Life eye Resort Oceal Hall.",
  openGraph: {
    title: "Maged & Mona — A Celebration of Love",
    description: "12 November 2026 · 8:00 PM · Life eye Resort Oceal Hall",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${arabic.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
