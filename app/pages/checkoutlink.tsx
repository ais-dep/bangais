"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutLink() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
    clearCart,
  } = useCart();

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return "";

    const itemsText = cart
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} (Rp ${(
            item.price * item.quantity
          ).toLocaleString()})`
      )
      .join("\n");

    return `Halo, saya ingin memesan:\n${itemsText}\nTotal Harga: Rp ${totalPrice.toLocaleString()}`;
  };

  const whatsappLink = `https://wa.me/628116890320?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brown mb-12">
          Checkout Pesanan Anda
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-brown-800">Keranjang Anda kosong.</p>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <h4 className="font-medium text-brown-800">{item.name}</h4>
                    <p className="text-brown-600">
                      Rp {item.price.toLocaleString()} x {item.quantity} = Rp{" "}
                      {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                      aria-label={`Kurangi jumlah ${item.name}`}
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                      aria-label={`Tambah jumlah ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 font-semibold ml-4"
                      aria-label={`Hapus ${item.name} dari keranjang`}
                    >
                      Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between items-center">
              <span className="font-bold text-xl text-brown-800">
                Total: Rp {totalPrice.toLocaleString()}
              </span>
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Kosongkan Keranjang
              </button>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded"
            >
              Pesan via WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
