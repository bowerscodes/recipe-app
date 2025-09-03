import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Providers from "@/providers/Providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Find and track your favourite recipes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Providers>
          {children} 
        </Providers>
      </body>
    </html>
  );
}
