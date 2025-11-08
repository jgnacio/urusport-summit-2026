import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Revealer from "@/components/sections/Revealer";
import Splash from "@/components/ui/Splash";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "URUSport SUMMIT 2026 - Innovación en Deporte y Tecnología",
  description: "El evento deportivo y tecnológico más importante de Uruguay. Conectando el futuro del deporte.",
};

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
