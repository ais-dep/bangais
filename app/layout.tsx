import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warung Bang Ais - Dimsum Premium 99% Daging",
  description:
    "Nikmati kelezatan dimsum premium 99% daging dan menu lezat lainnya dari Warung Bang Ais di Aceh Besar, Baitussalam. Pesan online, diantar atau ambil sendiri!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
