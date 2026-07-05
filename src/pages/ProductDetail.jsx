import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { productsData } from "../components/DataProducts";
import { useCart } from "../components/CartContext";
import { useToast } from "../components/ToastContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [qty, setQty] = useState(1);

  const product = productsData.find((p) => String(p.id) === id);

  // Ürün bulunamazsa (örn. elle yanlış bir id yazılırsa) kullanıcıyı bilgilendir
  if (!product) {
    return (
      <main className="bg-[#F5F4F2] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md pt-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#8B2635] mb-6 font-semibold">
            Ürün Bulunamadı
          </p>
          <h1 className="text-3xl font-serif italic text-[#1A1A1A] mb-8">
            Aradığınız ürün mevcut değil.
          </h1>
          <button
            onClick={() => navigate("/Products")}
            className="px-8 py-3 bg-[#1A1A1A] hover:bg-[#8B2635] text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300"
          >
            Tüm Ürünlere Dön
          </button>
        </div>
      </main>
    );
  }

  // Aynı kategoriden, kendisi hariç en fazla 3 ilgili ürün
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    showToast(`${product.name} (${qty} adet) sepete eklendi`);
  };

  return (
    <main className="bg-[#F5F4F2] min-h-screen">
      <div className="pt-28 md:pt-32 pb-20 md:pb-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mb-10 md:mb-14">
            <Link to="/" className="hover:text-black transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to="/Products" className="hover:text-black transition-colors">
              Koleksiyon
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Ürün görseli */}
            <div className="w-full aspect-[4/5] bg-[#EAE8E4] flex items-center justify-center relative overflow-hidden rounded-sm">
              {product.tag && (
                <span className="absolute top-6 right-6 bg-[#8B2635] text-white text-[9px] tracking-widest font-sans px-3 py-1.5 uppercase rounded-sm">
                  {product.tag}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[80%] max-w-[80%] object-contain mix-blend-multiply"
              />
            </div>

            {/* Ürün bilgisi */}
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-sans tracking-[0.3em] text-gray-400 uppercase mb-4">
                {product.category}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
                {product.name}
              </h1>

              <p className="text-2xl font-light text-[#1A1A1A] mb-8">
                {product.price}
              </p>

              <div className="w-16 h-[1px] bg-[#8B2635] mb-8"></div>

              <p className="text-sm text-gray-600 tracking-wide leading-relaxed uppercase mb-10 max-w-md">
                {product.description}
              </p>

              {/* Miktar seçici */}
              <div className="flex items-center gap-6 mb-8">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Adet
                </span>
                <div className="flex items-center gap-4 border border-gray-300 rounded-full px-2 py-1.5">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 flex items-center justify-center hover:text-[#8B2635] transition-colors"
                    aria-label="Azalt"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-7 h-7 flex items-center justify-center hover:text-[#8B2635] transition-colors"
                    aria-label="Arttır"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full max-w-[360px] bg-[#1A1A1A] hover:bg-[#8B2635] text-white text-[11px] tracking-[0.2em] py-4 px-6 uppercase font-medium transition-colors duration-300"
              >
                Sepete Ekle
              </button>

              {/* Ek bilgi rozetleri */}
              <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-gray-200">
                <span className="px-4 py-2 border border-gray-300 text-gray-500 text-[9px] uppercase tracking-widest">
                  Vegan
                </span>
                <span className="px-4 py-2 border border-gray-300 text-gray-500 text-[9px] uppercase tracking-widest">
                  Dermatolojik Test
                </span>
                <span className="px-4 py-2 border border-gray-300 text-gray-500 text-[9px] uppercase tracking-widest">
                  Paraben İçermez
                </span>
              </div>
            </div>
          </div>

          {/* İlgili ürünler */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 md:mt-32 pt-16 border-t border-gray-200">
              <h2 className="text-2xl font-serif italic text-[#1A1A1A] mb-10">
                Bunlar da İlginizi Çekebilir
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/Products/${related.id}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="w-full aspect-[4/5] bg-[#EAE8E4] p-6 flex items-center justify-center overflow-hidden rounded-sm mb-4">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm font-serif text-[#1A1A1A] group-hover:text-[#8B2635] transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {related.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
