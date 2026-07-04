import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    year: "2024",
    title: "Markanın Doğuşu",
    content:
      "Lura Skincare markasının temelleri atıldı. En saf içerikler için global ham madde tedarik ağımızı kurduk.",
  },
  {
    year: "2025",
    title: "Önemli Dönüm Noktaları",
    content:
      "Laboratuvar onaylı ilk 'Dream & Do' serimiz tamamlandı ve dermatolojik testlerden tam not aldı.",
  },
  {
    year: "2026",
    title: "Yarının Vizyonu",
    content:
      "Sürdürülebilir ambalaj ve akıllı cilt analizi teknolojilerimizle sektöre yön vermeye devam ediyoruz.",
  },
];

const AboutTimeline = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-[#F5F4F2] flex items-center justify-center px-6 md:px-10 relative overflow-hidden py-20 md:py-0">
      <div className="max-w-[1200px] w-full">
        <motion.p
          key={`title-${current}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-[#1A1A1A] mb-4"
        >
          {highlights[current].title}
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.h2
              key={highlights[current].year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="text-[70px] sm:text-[120px] md:text-[300px] font-bold text-[#1A1A1A] leading-none tracking-tighter"
            >
              {highlights[current].year}
            </motion.h2>
          </AnimatePresence>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            className="h-[2px] bg-gradient-to-r from-[#8B2635] via-[#8B2635] to-transparent mt-4"
          />
        </div>

        <div className="mt-10 md:mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={`text-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
            >
              {highlights[current].content}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-10 md:mt-0 md:absolute md:bottom-20 md:right-20 flex justify-end">
          <button
            onClick={nextSlide}
            className="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-gray-300 rounded-full hover:border-[#8B2635] transition-colors"
          >
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
            <div className="absolute inset-0 border-t-2 border-[#8B2635] rounded-full opacity-0 group-hover:opacity-100 animate-spin" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
