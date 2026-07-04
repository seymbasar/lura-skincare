import heroImg from "../photos/heroimg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-end overflow-hidden bg-[#F5F4F2]">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Lura Skincare"
          className="w-full h-full object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F4F2]/30"></div>
      </div>

      <div className="relative z-20 self-start ml-6 md:ml-24 mb-24 md:mb-32 max-w-[280px] md:max-w-[340px] text-left hidden sm:block">
        <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E8D8D3] shadow-sm mb-8">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#5A4B45] leading-tight text-center font-medium">
            Saf <br /> İçerik
          </span>
        </div>
      </div>

      <div className="relative z-30 w-full">
        <h1 className="text-[18vw] md:text-[16vw] font-extralight uppercase tracking-[-0.05em] leading-[0.8] text-[#D4B9B0] text-center select-none translate-y-1 md:translate-y-2 opacity-90">
          Lura<span className="italic font-thin text-[#B09A91]">Skin</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
