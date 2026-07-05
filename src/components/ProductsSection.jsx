import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useToast } from "./ToastContext";
import { productsData, categories } from "./DataProducts";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("TÜMÜ");
  const [sortOption, setSortOption] = useState("varsayilan");
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Fiyat string'i ("₺610" gibi) sıralama için sayıya çevriliyor
  const getNumericPrice = (priceStr) =>
    parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0;

  const categoryFiltered =
    activeCategory === "TÜMÜ"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  const filteredProducts = [...categoryFiltered].sort((a, b) => {
    if (sortOption === "fiyat-artan") {
      return getNumericPrice(a.price) - getNumericPrice(b.price);
    }
    if (sortOption === "fiyat-azalan") {
      return getNumericPrice(b.price) - getNumericPrice(a.price);
    }
    if (sortOption === "isim") {
      return a.name.localeCompare(b.name, "tr");
    }
    return 0; // "varsayilan" — orijinal sıra korunur
  });

  return (
    <section className="py-24 bg-[#F5F4F2] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-[#1A1A1A] leading-tight max-w-xl mx-auto">
            Her cilt tipi, her ihtiyaç, <br />
            <span className="font-sans not-italic text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-gray-500">
              hayalindeki parlaklık için.
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 border-b border-gray-200 pb-6 text-[11px] tracking-[0.2em] font-medium text-gray-400">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative pb-2 transition-colors duration-300 hover:text-[#1A1A1A] ${
                activeCategory === cat ? "text-[#1A1A1A] font-bold" : ""
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B2635]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-end items-center gap-3 mb-12">
          <label
            htmlFor="sort-select"
            className="text-[10px] uppercase tracking-widest text-gray-400"
          >
            Sırala:
          </label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-[11px] uppercase tracking-widest text-[#1A1A1A] bg-transparent border border-gray-300 rounded-full px-4 py-2 outline-none cursor-pointer hover:border-[#8B2635] transition-colors"
          >
            <option value="varsayilan">Önerilen</option>
            <option value="fiyat-artan">Fiyat: Artan</option>
            <option value="fiyat-azalan">Fiyat: Azalan</option>
            <option value="isim">İsim (A-Z)</option>
          </select>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col items-center text-center relative"
              >
                <Link
                  to={`/Products/${product.id}`}
                  className="w-full aspect-[4/5] bg-[#EAE8E4] p-8 flex items-center justify-center relative overflow-hidden rounded-sm mb-6"
                >
                  {product.tag && (
                    <span className="absolute top-4 right-4 bg-[#8B2635] text-white text-[9px] tracking-widest font-sans px-3 py-1 uppercase rounded-sm">
                      {product.tag}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>

                <span className="text-[9px] font-sans tracking-[0.3em] text-gray-400 uppercase mb-2">
                  {product.category}
                </span>

                <Link to={`/Products/${product.id}`}>
                  <h3 className="text-xl font-serif text-[#1A1A1A] mb-2 px-4 hover:text-[#8B2635] transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-[10px] font-sans tracking-wide text-gray-400 max-w-[280px] leading-relaxed mb-6 uppercase h-8 flex items-center justify-center">
                  {product.description}
                </p>

                <button
                  onClick={() => {
                    addToCart(product);
                    showToast(`${product.name} sepete eklendi`);
                  }}
                  className="w-full max-w-[240px] bg-[#1A1A1A] hover:bg-[#8B2635] text-white text-[11px] tracking-[0.2em] py-3.5 px-6 uppercase font-medium transition-colors duration-300 flex justify-between items-center px-6"
                >
                  <span>SEPETE EKLE</span>
                  <span className="opacity-60">—</span>
                  <span>{product.price}</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
