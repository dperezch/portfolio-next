import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Barra } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Perez",
  description: "Portfolio David Perez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-800`}>
        <Barra />
        {children}
      </body>
    </html>
  );
}
