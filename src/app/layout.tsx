import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unaing | Designing Context",
  description: "Unaing is a boutique architecture firm specializing in context-driven design. We create spaces that respond to their environment and the people who inhabit them.",
  keywords: ["architecture", "design", "interior design", "commercial architecture", "residential design", "unaing"],
  authors: [{ name: "Unaing Studio" }],
  openGraph: {
    title: "Unaing | Designing Context",
    description: "A boutique architecture firm specializing in context-driven design.",
    type: "website",
    locale: "en_US",
    siteName: "Unaing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unaing | Designing Context",
    description: "A boutique architecture firm specializing in context-driven design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
