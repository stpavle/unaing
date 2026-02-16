import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prevodilac - Multi-Language Translator",
  description: "Simultani prevod sa srpskog, bosanskog, crnogorskog i hrvatskog na engleski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
