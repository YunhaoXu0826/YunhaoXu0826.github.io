import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunhao (Henry) Xu | Materials Science Researcher & Engineer",
  description: "Portfolio of Yunhao (Henry) Xu - M.S. in Materials Science at Carnegie Mellon University",
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/icon.jpg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
