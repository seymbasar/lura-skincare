import { useNavigate } from "react-router-dom";
import fruit from "../photos/fruitandcream.png";
import cream from "../photos/s-cream.mp4";
import mask from "../photos/s-mask.mp4";
import serum from "../photos/s-serum.mp4";
import { useState, useRef } from "react";

const ScienceSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  const togglePlay = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        isPlaying ? video.pause() : video.play();
      }
    });
    setIsPlaying(!isPlaying);
  };

  const videos = [cream, mask, serum];
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-14 md:py-20 bg-[#F5F4F2] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col items-center">
        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden flex flex-col items-center justify-center text-center p-6 sm:p-10 md:p-12 group shadow-xl bg-white mb-12 md:mb-20">
          <div className="absolute inset-0 scale-110 group-hover:scale-100 transition-transform duration-[2000ms]">
            <img
              src={fruit}
              className="w-full h-full object-cover brightness-90"
              alt="Bilim ve doğa"
            />
            <div className="absolute inset-0 bg-[#8B2635]/20 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic mb-3 md:mb-4 leading-tight">
              Bilimin Işığında <br /> Cilt Bakımında Yeni Bir Çağ.
            </h2>
            <p className="text-[10px] md:text-[11px] font-light tracking-wide max-w-xs mx-auto mb-4 md:mb-6 opacity-90">
              Klinik düzeydeki araştırmaları bilinçli güzellikle birleştirerek
              konfor ve netlik sunan formüller yaratıyoruz.
            </p>
            <button
              onClick={() => navigate("/About")}
              className="px-6 md:px-8 py-2 md:py-2.5 bg-white text-black rounded-full text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 shadow-md"
            >
              Daha Fazla Bilgi →
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {videos.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-square sm:aspect-[3/4] md:h-[600px] md:aspect-auto overflow-hidden rounded-sm shadow-lg"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end mt-8 md:mt-10">
          <button
            onClick={togglePlay}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all"
          >
            <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
              {isPlaying ? "||" : "▶"}
            </span>
            {isPlaying ? "DURDUR" : "OYNAT"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
