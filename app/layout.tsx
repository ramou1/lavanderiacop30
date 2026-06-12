import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
