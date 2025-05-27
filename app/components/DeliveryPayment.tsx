export default function DeliveryPayment() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 mb-12">
          Opsi Pengiriman & Pembayaran Warung Bang Ais
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-black mb-4">Pengiriman</h3>
            <p className="text-brown-600">
              Pesanan Anda bisa Diantar ke lokasi Anda di sekitar Aceh Besar
              (dengan biaya tambahan Rp 12.000 per kilometer, dihitung dari
              lokasi Warung Bang Ais di Baitussalam). Atau, Anda bisa memilih
              Ambil Sendiri langsung di Warung kami.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-black mb-4">Pembayaran</h3>
            <p className="text-brown-600">Kami menerima pembayaran via:</p>
            <ul className="list-disc list-inside text-brown-600 mt-2 space-y-2">
              <li>Transfer Bank</li>
              <li>QRIS (scan barcode)</li>
              <li>
                Tunai (khusus untuk pengambilan pesanan langsung di tempat/ambil
                sendiri)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
