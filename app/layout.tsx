import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import ScrollReset from "./scroll-reset";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Овечки Подлужья — ферма в Подмосковье",
  description: "Балтийская черноголовая порода. Продажа живых овец, баранов, маток и фермерского мяса напрямую с хозяйства.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${nunito.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf9f5] text-[#141413]">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
