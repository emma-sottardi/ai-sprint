import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-inter-light",
  display: "swap",
});

const playfair = Playfair_Display({
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ship Studio",
  description: "How professionals build with AI. No coding required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
