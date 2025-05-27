export default function HowToOrder() {
  const steps = [
    {
      number: 1,
      title: "Pilih Menu",
      description:
        "Pilih menu favorit Anda dari daftar di atas dan masukkan ke Keranjang.",
    },
    {
      number: 2,
      title: "Periksa Keranjang",
      description:
        "Lihat Keranjang Anda, pastikan pesanan sudah benar. Anda bisa tambahkan catatan khusus jika ada.",
    },
    {
      number: 3,
      title: "Checkout",
      description: "Klik tombol 'Checkout' atau 'Lanjut Pesan'.",
    },
    {
      number: 4,
      title: "Isi Detail Pesanan",
      description:
        "Isi detail pesanan: Nama, Nomor HP, Alamat Lengkap (untuk pengiriman) atau konfirmasi Ambil Sendiri.",
    },
    {
      number: 5,
      title: "Pilih Pengiriman & Pembayaran",
      description:
        "Pilih Layanan Pengiriman (Diantar atau Ambil Sendiri) dan Metode Pembayaran (Transfer Bank, QRIS, atau Tunai khusus Ambil Sendiri).",
    },
    {
      number: 6,
      title: "Kirim Pesanan",
      description:
        "Tekan tombol 'Kirim Pesanan Via WhatsApp'. Detail pesanan Anda akan langsung terkirim ke WA kami.",
    },
    {
      number: 7,
      title: "Konfirmasi",
      description:
        "Tim Warung Bang Ais akan segera menghubungi Anda via WhatsApp untuk konfirmasi total biaya (termasuk ongkir jika diantar) dan detail pembayaran.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Mudahnya Pesan Langsung ke WhatsApp Kami!
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brown-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
