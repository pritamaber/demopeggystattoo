import type { Metadata, Viewport } from "next";
import { Anton, Barlow } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const barlow = Barlow({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-barlow", display: "swap" });

const title = "Peggy's Temporary & Permanent Tattoos | South Padre Island";
const description =
  "Peggy's Temporary & Permanent Tattoos has been tattooing on South Padre Island since 1990. Explore tattoos, piercings, henna, Jagua, custom body art and more.";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Peggy's Temporary & Permanent Tattoos",
    images: [{ url: "/images/work/phoenix.webp", width: 382, height: 510, alt: "Colorful phoenix tattoo by Peggy's" }],
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#0a0a09" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${anton.variable} ${barlow.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
