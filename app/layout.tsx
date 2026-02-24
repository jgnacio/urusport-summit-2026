import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Revealer from "@/components/sections/Revealer";
import Splash from "@/components/ui/Splash";

export const metadata: Metadata = {
  title: "URUSport SUMMIT 2026 - Hub Regional Deportivo",
  description: "El principal evento del ecosistema deportivo Uruguayo que reúne y conecta el talento con las oportunidades a través del networking y la formación. Ahora sos parte del cambio.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Respaldo general
      { url: "/favicon.svg", type: "image/svg+xml" }, // Para navegadores modernos
      { 
        url: "/favicon-48x48.png", 
        sizes: "48x48", 
        type: "image/png" 
      }, // Específico para Google Search y Task Switchers
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
        <html lang="es">
          <body className={`${plusJakartaSans.variable} ${spaceMono.variable} antialiased`}>
        <Splash>
            <Revealer />
            <Header />
            {children}
            <Footer />
    </Splash>
          </body>
        </html>
      </ViewTransitions>
  );
}
