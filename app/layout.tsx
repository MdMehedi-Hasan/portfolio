import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Mehedi Hasan",
  description:
    "Front-end based full stack developer. I build things for the web.",
  openGraph: {
    title: "Md. Mehedi Hasan",
    description:
      "Front-end based full stack developer. I build things for the web.",
    images: [
      {
        url: "/Assets/og-image-1.png",
        width: 1200,
        height: 630,
        alt: "Md. Mehedi Hasan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Mehedi Hasan",
    description:
      "Front-end based full stack developer. I build things for the web.",
    images: ["/Assets/og-image-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
