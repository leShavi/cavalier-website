import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cavalier Ventures | Building the Future, One Iteration at a Time",
  description: "We build profitable SaaS and info products through lean development and rapid feedback loops. Explore our portfolio of EdTech, AI, and SaaS ventures.",
  keywords: ["venture studio", "SaaS", "EdTech", "AI", "startup", "product development"],
  authors: [{ name: "Cavalier Ventures" }],
  openGraph: {
    title: "Cavalier Ventures",
    description: "Building the Future, One Iteration at a Time",
    type: "website",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
