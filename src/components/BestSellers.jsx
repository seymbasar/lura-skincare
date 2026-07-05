import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { useToast } from "./ToastContext";
import { productsData } from "./DataProducts";

const BestSellers = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Öne çıkan ürünler: gerçek ürün verisinden seçiliyor (ilk 3 ürün)
  const featuredProducts = productsData.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-[#B7A39B]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/90 mb-4 block">
            En Çok Tercih Edilen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 md:mb-8 tracking-tight">
            Günlük Temeller.
          </h2>
          <button
            onClick={() => navigate("/Products")}
            className="px-8 py-3 rounded-full bg-white text-[#B7A39B] text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500"
          >
            Tüm Ürünleri Keşfet →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div
                onClick={() => navigate("/Products")}
                className="aspect-[3/4] overflow-hidden mb-6 relative shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex justify-between items-baseline text-white px-1 mb-4">
                <h3 className="text-[12px] font-light uppercase tracking-[0.15em] opacity-90 leading-relaxed max-w-[70%]">
                  {product.name}
                </h3>
                <span className="text-[14px] font-medium opacity-100 whitespace-nowrap">
                  {product.price}
                </span>
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                  showToast(`${product.name} sepete eklendi`);
                }}
                className="w-full bg-white/90 hover:bg-white text-[#1A1A1A] text-[10px] tracking-[0.2em] py-3 uppercase font-medium transition-colors duration-300"
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-16 md:mt-20">
          <button
            onClick={() => navigate("/Products")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black cursor-pointer transition-all"
            aria-label="Tüm ürünlere git"
          >
            ←
          </button>
          <button
            onClick={() => navigate("/Products")}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all"
            aria-label="Tüm ürünlere git"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
