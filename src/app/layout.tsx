import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  // Social networks need absolute URLs for the preview image (app/opengraph-image.png).
  metadataBase: new URL("https://samot2003.github.io"),
  title: "Tomás Aladjem Ramallo · Ingeniero de software",
  description:
    "Ingeniero de software junior en Barcelona. Backend en C#/.NET y TypeScript, full stack con React y Next.js, y aplicaciones con IA multimodal.",
  openGraph: {
    title: "Tomás Aladjem Ramallo · Ingeniero de software",
    description: "Backend, full stack e IA. Experiencia en Win Systems, TFG sobre IA multimodal y Dockly, una plataforma de reserva de amarres.",
    url: "/",
    siteName: "Tomás Aladjem Ramallo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1720" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
