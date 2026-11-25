import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Dehariya - Software Engineer",
  description: "Portfolio of Vivek Dehariya, a software engineer building modern web experiences."
};

export const viewport: Viewport = {
  themeColor: "#070b1b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg font-sans text-textMain antialiased">{children}</body>
    </html>
  );
}
