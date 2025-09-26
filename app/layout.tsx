import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans", // 👈 overwrite Tailwind's font-sans variable
});

export const metadata: Metadata = {
  title: "Composite Warehouse",
  description: "Composite Fancy Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
