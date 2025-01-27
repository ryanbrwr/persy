import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Brewer - Software Engineer & Designer",
  description: "Forging Rare Earth Metals",
  metadataBase: new URL("https://ryanbrewer.me"),
  openGraph: {
    images: [
      {
        url: "/nyc.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fff] text-[#000] text-sm`}>
        {children}
      </body>
    </html>
  );
}
