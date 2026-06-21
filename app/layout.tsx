import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-visby",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrthoFlow",
  description: "Viva a Liberdade De Sorrir",
  icons: {
    icon: "/Símbolo Mono@2x.png",
    apple: "/Símbolo Mono@2x.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
