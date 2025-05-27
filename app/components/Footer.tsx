export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Warung Bang Ais</h2>

          <div className="space-y-4 mb-8">
            <p className="text-brown-200">Lokasi: Aceh Besar, Baitussalam</p>
            <p className="text-brown-200">WhatsApp Order: +628116890320</p>
          </div>

          <div className="border-t border-brown-800 pt-8">
            <p className="text-brown-400 text-sm">
              © {new Date().getFullYear()} Warung Bang Ais. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
