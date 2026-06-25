import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
// import MetaPixel from "./components/MetaPixel";
import VercelTracking from "./components/VercelTracking";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-visby",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrthoFlow",
  description: "Viva a Liberdade De Sorrir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <GoogleAnalytics />
        {/* <MetaPixel /> */}
        {children}
        <CookieBanner />
        <VercelTracking />
      </body>
    </html>
  );
}
