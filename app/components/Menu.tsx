"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Dimsum Mentai Ayam",
    price: 25000,
    category: "Dimsum Mentai",
  },
  {
    id: 2,
    name: "Dimsum Mentai Udang",
    price: 28000,
    category: "Dimsum Mentai",
  },
  {
    id: 3,
    name: "Dimsum Mix Mentai",
    price: 30000,
    category: "Dimsum Mentai",
  },
  { id: 4, name: "Dimsum Ayam", price: 20000, category: "Dimsum Biasa" },
  { id: 5, name: "Dimsum Udang", price: 23000, category: "Dimsum Biasa" },
  { id: 6, name: "Dimsum Mix", price: 26000, category: "Dimsum Biasa" },
  { id: 7, name: "Gyoza Ayam", price: 20000, category: "Lainnya" },
  { id: 8, name: "Gyoza Udang", price: 25000, category: "Lainnya" },
  { id: 9, name: "Wonton Goreng", price: 20000, category: "Lainnya" },
  { id: 10, name: "Teh Manis", price: 7000, category: "Minuman" },
];

export default function Menu() {
  const { cart, addItem } = useCart();

  const categories = Array.from(
    new Set(menuItems.map((item) => item.category))
  );

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 mb-12">
          Pilihan Lezat dari Warung Bang Ais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-brown-900 mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div key={item.id} className="flex flex-col py-2">
                      <div>
                        <div className="font-medium text-black">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          Rp {item.price.toLocaleString()}
                        </div>
                      </div>
                      <button
                        className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-base transition-colors duration-300"
                        onClick={() => addItem(item)}
                      >
                        + Tambah
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="text-brown-900 font-medium">
                Keranjang: {cart.length} item
              </span>
              <Link
                href="/pages/checkoutlink"
                className="bg-orange-600 z-20 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300 text-center w-full sm:w-auto"
              >
                Lihat Keranjang
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
