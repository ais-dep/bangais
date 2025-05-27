"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { FaWhatsapp } from "react-icons/fa";

// Rekomendasi produk (bisa diambil dari menu utama)
const rekomendasi = [
  {
    id: 1,
    name: "Dimsum Mentai Ayam",
    price: 25000,
    category: "Dimsum Mentai",
  },
  {
    id: 2,
    name: "Dimsum Mentai Sapi",
    price: 28000,
    category: "Dimsum Mentai",
  },
  { id: 3, name: "Dimsum Mix Mentai", price: 30000, category: "Dimsum Mentai" },
  { id: 4, name: "Dimsum Ayam", price: 20000, category: "Dimsum Biasa" },
  { id: 5, name: "Dimsum Udang", price: 23000, category: "Dimsum Biasa" },
  { id: 6, name: "Dimsum Mix", price: 26000, category: "Dimsum Biasa" },
  { id: 7, name: "Gyoza Ayam", price: 20000, category: "Lainnya" },
  { id: 8, name: "Gyoza Sapi", price: 25000, category: "Lainnya" },
  { id: 9, name: "Wonton Goreng", price: 20000, category: "Lainnya" },
  { id: 10, name: "Teh Manis", price: 7000, category: "Minuman" },
];

export default function Checkout() {
  const { cart, addItem, removeItem } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [shuffledRekomendasi, setShuffledRekomendasi] = useState(rekomendasi);

  useEffect(() => {
    // Acak rekomendasi hanya di client
    const arr = [...rekomendasi];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffledRekomendasi(arr);
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nama: ${name}\nNo. HP: ${phone}\nAlamat: ${address}\nMetode Pengiriman: ${
      deliveryMethod === "delivery" ? "Diantar" : "Ambil Sendiri"
    }\nMetode Pembayaran: ${
      paymentMethod === "transfer"
        ? "Transfer Bank"
        : paymentMethod === "qris"
        ? "QRIS"
        : "Tunai"
    }\n\nHalo, saya ingin memesan:\n${cart
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} (Rp ${(
            item.price * item.quantity
          ).toLocaleString()})`
      )
      .join("\n")}\n\nTotal: Rp ${totalPrice.toLocaleString()}`;
    window.open(
      `https://wa.me/628116890320?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        {/* Tombol Kembali */}
        <div className="mb-6">
          <Link href="/" className="text-black hover:underline font-medium">
            &larr; Kembali
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Checkout Pesanan
        </h1>

        {/* Ringkasan Pesanan */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-4">
            Ringkasan Pesanan
          </h2>
          {cart.length === 0 ? (
            <p className="text-black">Keranjang kosong.</p>
          ) : (
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center py-2">
                  {/* Nama dan jumlah */}
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-black">{item.name}</span>
                    <span className="ml-2 text-black">x{item.quantity}</span>
                  </div>
                  {/* Tombol - dan + */}
                  <div className="flex items-center justify-center gap-2 w-32">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-gray-200 text-black rounded-full px-3 py-1 transition-all duration-200 hover:bg-gray-300 active:scale-95 shadow"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addItem(item)}
                      className="bg-gray-200 text-black rounded-full px-3 py-1 transition-all duration-200 hover:bg-gray-300 active:scale-95 shadow"
                    >
                      +
                    </button>
                  </div>
                  {/* Harga */}
                  <div className="w-32 text-right">
                    <span className="text-black font-semibold">
                      Rp {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold text-black text-lg border-t border-gray-200 pt-4">
            <span>Total:</span>
            <span>Rp {totalPrice.toLocaleString()}</span>
          </div>
          {(deliveryMethod === "delivery" || paymentMethod === "transfer") && (
            <div className="mt-2 text-black text-sm font-medium">
              Nominal total dapat berubah sesuai ongkir/biaya admin.
            </div>
          )}
        </div>

        {/* Rekomendasi Tambahan */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-bold text-black mb-4">Menu Lainnya</h2>
          <div className="flex flex-wrap gap-4">
            {shuffledRekomendasi
              .filter((item) => !cart.some((c) => c.id === item.id))
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => addItem(item)}
                  className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-full shadow text-sm font-medium"
                >
                  + {item.name} (Rp {item.price.toLocaleString()})
                </button>
              ))}
          </div>
        </div>

        {/* Formulir Checkout */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-black font-medium mb-2">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                required
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Nomor HP
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                required
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Alamat
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Metode Pengiriman
              </label>
              <select
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              >
                <option value="delivery">Diantar</option>
                <option value="pickup">Ambil Sendiri</option>
              </select>
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Metode Pembayaran
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              >
                <option value="transfer">Transfer Bank</option>
                <option value="qris">QRIS</option>
                <option value="cash">Tunai (Khusus Ambil Sendiri)</option>
              </select>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between font-bold text-black text-lg mb-4">
                <span>Total:</span>
                <span>Rp {totalPrice.toLocaleString()}</span>
              </div>
              {(deliveryMethod === "delivery" ||
                paymentMethod === "transfer") && (
                <div className="mb-4 text-red-500 text-sm font-medium">
                  Nominal total dapat berubah sesuai ongkir/biaya admin.
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
              >
                <FaWhatsapp size={22} />
                Pesan via WhatsApp
              </button>
            </div>
          </div>
        </form>
        <footer className="text-center text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Warung Bang Ais. Powered by Next.js.
        </footer>
      </div>
    </div>
  );
}
