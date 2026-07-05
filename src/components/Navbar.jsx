import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { useToast } from "./ToastContext";
import { productsData } from "./DataProducts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const { showToast } = useToast();
  const {
    cartItems,
    removeFromCart,
    updateQty,
    clearCart,
    totalCount,
    totalPrice,
  } = useCart();

  const navLinks = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/Products", label: "Koleksiyon" },
    { to: "/About", label: "Hikayemiz" },
  ];

  const searchResults =
    searchTerm.trim().length > 0
      ? productsData.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
        )
      : [];

  const closeAllOverlays = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const handleCheckout = () => {
    // NOT: Gerçek bir ödeme entegrasyonu (iyzico, Stripe vb.) henüz yok.
    // Şimdilik siparişi onaylayıp sepeti temizliyoruz.
    // İleride buraya gerçek ödeme sağlayıcısına yönlendirme eklenebilir.
    const confirmed = window.confirm(
      `Toplam ₺${totalPrice} tutarındaki siparişinizi onaylıyor musunuz?`,
    );
    if (confirmed) {
      clearCart();
      setIsCartOpen(false);
      showToast("Siparişiniz alındı! Teşekkür ederiz.");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-6 bg-[#EAE6E1] md:bg-[#F5F4F2]/80 md:backdrop-blur-md border-b border-gray-100">
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          aria-label="Menüyü aç"
        >
          <span className="block w-6 h-[1px] bg-[#1A1A1A]"></span>
          <span className="block w-4 h-[1px] bg-[#1A1A1A]"></span>
        </button>

        <Link
          to="/"
          className="text-xl font-extralight tracking-[0.4em] uppercase cursor-pointer text-[#1A1A1A] hover:opacity-70 transition-opacity"
        >
          Lura <span className="font-normal italic">SkınCare</span>
        </Link>

        <div className="flex gap-4 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-700">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-black transition-colors"
          >
            Ara
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="hover:text-black transition-colors"
          >
            Sepet <span className="ml-1 text-gray-400">({totalCount})</span>
          </button>
        </div>
      </nav>

      {/* Mobil menü */}
      <div
        className={`fixed inset-0 z-[60] bg-[#EAE6E1] transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-100">
          <span className="text-xl font-extralight tracking-[0.4em] uppercase text-[#1A1A1A]">
            Lura <span className="font-normal italic">SkınCare</span>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-[#1A1A1A] hover:opacity-60 transition-opacity"
            aria-label="Menüyü kapat"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col items-start gap-10 px-8 py-16">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif text-[#1A1A1A] hover:text-[#8B2635] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Arama paneli */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm flex items-start justify-center pt-24 transition-opacity duration-300 ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeAllOverlays} // Dışarıya tıklayınca kapatır
      >
        {/* Ortadaki Beyaz Arama Kutusu */}
        <div
          className={`bg-[#F5F4F2] w-full max-w-2xl mx-4 p-8 rounded-md shadow-2xl transform transition-transform duration-300 ${
            isSearchOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()} // Kutu içine tıklayınca kapanmayı engeller
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Ürün Ara
            </span>
            <button
              onClick={closeAllOverlays}
              className="text-2xl text-[#1A1A1A] hover:opacity-60 transition-opacity"
              aria-label="Aramayı kapat"
            >
              ×
            </button>
          </div>

          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ne arıyorsunuz? (örn. serum, krem...)"
            className="w-full bg-transparent border-b border-gray-400 text-xl md:text-2xl font-serif italic text-[#1A1A1A] outline-none pb-4 placeholder:text-gray-400"
          />

          {/* Sonuç Alanı (Çok sonuç çıkarsa kutunun taşmaması için maksimum yükseklik eklendi) */}
          <div className="mt-8 flex flex-col gap-4 max-h-[40vh] overflow-y-auto pr-2">
            {searchTerm.trim().length > 0 && searchResults.length === 0 && (
              <p className="text-sm text-gray-400">Sonuç bulunamadı.</p>
            )}
            {searchResults.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  closeAllOverlays();
                  navigate("/Products");
                }}
                className="flex items-center gap-4 text-left group"
              >
                <div className="w-14 h-14 bg-[#EAE8E4] flex items-center justify-center overflow-hidden rounded-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
                <div>
                  <p className="text-sm font-serif text-[#1A1A1A] group-hover:text-[#8B2635] transition-colors">
                    {product.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    {product.category} — {product.price}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sepet paneli */}
      <div
        className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-500 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/20"
        ></div>

        <div
          className={`relative w-full max-w-sm h-full bg-[#F5F4F2] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Sepetim ({totalCount})
            </span>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-2xl text-[#1A1A1A] hover:opacity-60 transition-opacity"
              aria-label="Sepeti kapat"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
            {cartItems.length === 0 && (
              <p className="text-sm text-gray-400">Sepetiniz şu an boş.</p>
            )}
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-16 h-16 bg-[#EAE8E4] flex items-center justify-center overflow-hidden rounded-sm shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-serif text-[#1A1A1A]">
                    {item.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    {item.price}
                  </p>
                  <div className="flex items-center gap-3 text-[11px]">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 border border-gray-300 rounded-full hover:border-[#8B2635] transition-colors"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 border border-gray-300 rounded-full hover:border-[#8B2635] transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-gray-400 hover:text-[#8B2635] transition-colors uppercase tracking-widest"
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <div className="px-6 py-6 border-t border-gray-200">
              <div className="flex justify-between text-sm mb-4">
                <span className="uppercase tracking-widest text-gray-500">
                  Toplam
                </span>
                <span className="font-medium text-[#1A1A1A]">
                  ₺{totalPrice}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#1A1A1A] hover:bg-[#8B2635] text-white text-[11px] tracking-[0.2em] py-3.5 uppercase font-medium transition-colors duration-300"
              >
                Ödemeye Geç
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
