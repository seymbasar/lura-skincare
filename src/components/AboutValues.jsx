import { motion } from "framer-motion";
import lurapages from "../photos/lurapages.png";

const AboutValues = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F4F2] px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="md:col-span-6 h-[280px] sm:h-[380px] md:h-[500px] bg-gray-200 overflow-hidden rounded-sm"
        >
          <img
            src={lurapages}
            alt="Laboratuvar Süreci"
            className="w-full h-full object-cover contrast-125 hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>

        <div className="md:col-span-6 flex flex-col justify-center p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-white/20">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 md:mb-6 text-[#1A1A1A]">
            Neden Lura?
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8">
            Bizim için temiz içerik bir trend değil, bir zorunluluk. Lura
            olarak, laboratuvar hassasiyetini doğanın ham gücüyle
            birleştiriyoruz. Cildinizin biyolojisine saygı duyan formüller
            geliştiriyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 border border-[#8B2635] text-[#8B2635] text-[10px] uppercase tracking-widest">
              Temiz İçerik
            </span>
            <span className="px-4 py-2 border border-[#8B2635] text-[#8B2635] text-[10px] uppercase tracking-widest">
              Klinik Onay
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
