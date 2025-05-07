import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noventer",
  description: "Yuqori sifatdagi aniqlikka asoslanib istalgan turdagi dasturlarni tayyorlaymiz",
  icons: {
    icon: './favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} inter`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
