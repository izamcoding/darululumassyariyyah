import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pondok Pesantren Darul Ulum Assyar'iyyah | Ungaran Timur",
  description: "Pondok Pesantren Darul Ulum Assyar'iyyah - Mendidik generasi qur'ani yang berakhlak mulia, berilmu, dan beramal shaleh. Terletak di Desa Leyangan, Ungaran Timur, Kabupaten Semarang.",
  keywords: "pondok pesantren, pesantren, darul ulum, assyariyyah, ungaran, semarang, jawa tengah, tahfidz, santri, islamic boarding school",
  authors: [{ name: "Darul Ulum Assyar'iyyah" }],
  openGraph: {
    title: "Pondok Pesantren Darul Ulum Assyar'iyyah",
    description: "Mendidik generasi qur'ani yang berakhlak mulia di Ungaran Timur",
    url: "https://darululum-assyariyyah.vercel.app",
    siteName: "Pondok Pesantren Darul Ulum Assyar'iyyah",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
