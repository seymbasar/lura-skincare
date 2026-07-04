import { motion } from "framer-motion";
import AboutHeroVideo from "../photos/abouthero.mp4";

const AboutVideoSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#F5F4F2] flex flex-col md:flex-row items-center overflow-hidden px-6 md:px-16 py-12 md:py-0">
      <div className="w-full md:w-1/2 p-2 md:p-12 flex items-center justify-center">
        <div className="w-full aspect-[4/5] md:aspect-square relative overflow-hidden rounded-2xl shadow-sm bg-black/5">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={AboutHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#8B2635]/5 pointer-events-none"></div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-24 flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#8B2635] mb-6 md:mb-8 block font-semibold"
        >
          Formülasyonun Gücü
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-[#1A1A1A] leading-tight mb-8 md:mb-10"
        >
          Görünenden Fazlası, <br />
          <span className="font-sans not-italic text-xl sm:text-2xl md:text-4xl uppercase tracking-tighter">
            Hissedilenden Ötesi.
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-[1px] bg-[#8B2635] mb-8 md:mb-10"
        ></motion.div>

        <p className="text-gray-600 font-light leading-relaxed max-w-md text-sm md:text-base">
          Her bir damla Lura, cildinizin ihtiyacı olan saf molekülleri en doğal
          formunda sunmak için tasarlandı. Bilimi sadece bir araç değil, doğaya
          duyduğumuz saygının bir ifadesi olarak görüyoruz.
        </p>

        <div className="mt-10 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 border-t border-gray-200 pt-8">
          <div>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Ph Level
            </p>
            <p className="text-sm font-medium">5.5 — Balanced</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Purity
            </p>
            <p className="text-sm font-medium">100% Organic Origin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
