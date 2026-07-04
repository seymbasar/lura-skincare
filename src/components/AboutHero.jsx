import { motion } from "framer-motion";
import heroImg from "../photos/abouthero.jpg";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F4F2] flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="z-10 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[1.2] mb-6 md:mb-8 tracking-tight"
          >
            Doğadan bilime, <br />
            bilimden cildine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base font-light text-gray-600 max-w-md leading-relaxed tracking-wide"
          >
            Lura'nın hikayesi, doğanın en saf bileşenlerini modern bilimin
            süzgecinden geçirerek cildiniz için en yalın hale getirme tutkusuyla
            başladı. Karmaşadan uzak, sadece sonuca odaklı.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="order-1 md:order-2 relative h-[320px] sm:h-[420px] md:h-[600px] w-full rounded-tr-[80px] rounded-bl-[80px] md:rounded-tr-[200px] md:rounded-bl-[200px] overflow-hidden shadow-2xl"
        >
          <img
            src={heroImg}
            alt="Lura Skincare Essence"
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-[#8B2635]/5 mix-blend-multiply pointer-events-none"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 md:bottom-32 left-6 md:left-10 opacity-60 text-[8px] md:text-[9px] font-mono tracking-[0.4em] md:tracking-[0.5em] hidden sm:block">
        LAT: TERRAE ESSENTIA // 41.0082° N, 28.9784° E
      </div>
    </section>
  );
};

export default AboutHero;
