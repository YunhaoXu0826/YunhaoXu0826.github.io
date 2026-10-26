import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunhao (Henry) Xu | Process / Packaging Engineer",
  description: "Portfolio of Yunhao (Henry) Xu - Process / Packaging Engineer at Fuyao Glass America; M.S. in Materials Science, Carnegie Mellon University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Standard favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.jpg" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Android/Chrome */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.jpg" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.jpg" />
        {/* Force reload with version parameter */}
        <link rel="shortcut icon" href="/icon.jpg?v=2" type="image/jpeg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
