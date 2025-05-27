"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-cream">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-brown-900 drop-shadow-sm mb-4">
          Nikmati Kelezatan Dimsum Daging Premium & Lezat Lainnya
        </h1>
        <h2 className="text-xl md:text-2xl text-brown-800 mb-8">
          Spesialis Dimsum 99% Daging Asli di Aceh Besar, Baitussalam
        </h2>
        <p className="text-lg text-brown-700 mb-8 max-w-2xl">
          Pesan Mudah Online, Diantar atau Ambil Sendiri!
        </p>
        <Link
          href="/pages/checkoutlink"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
        >
          Pesan Sekarang!
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
