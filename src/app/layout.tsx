import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  metadataBase: "https://axie-web-form.vercel.app/",
  title: "MetaPals Axie Infinity Early Access Form",
  description:
    "A website to register for Axie Infinity early access on Metapals",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-gilroy">{children}</body>
    </html>
  );
}
