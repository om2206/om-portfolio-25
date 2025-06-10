import type { Metadata } from "next";
import { Radley, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const radley = Radley({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-radley",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Omkar Gandhi - Mechanical Engineering Portfolio",
  description: "Mechanical Engineering student passionate about design, manufacturing, and innovation. Showcasing CAD projects, research, and engineering solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${radley.variable} ${ibmPlexSerif.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
