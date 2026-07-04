import { useNavigate } from "react-router-dom";
import red from "../photos/f-red.png";
import twin from "../photos/f-twin.png";
import series from "../photos/f-series.png";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-[#F5F4F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="flex flex-col items-start gap-6 md:gap-8 mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] text-[#1a1a1a] max-w-2xl tracking-tight">
            Geleceğe hazır formüller. <br />
            <span className="text-gray-400 italic">
              Her gününüz için imza koleksiyonlar.
            </span>
          </h2>

          <button
            onClick={() => navigate("/Products")}
            className="group flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#E8D8D3] border border-gray-100 text-[10px] uppercase tracking-[0.2em] text-gray-600 hover:shadow-md transition-all duration-500"
          >
            Popüler Ürünleri Keşfet
            <span className="text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch h-auto md:h-[500px]">
          <div className="flex-[3] h-[260px] md:h-full overflow-hidden">
            <img
              src={twin}
              alt="Lura ürün serisi"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="flex-[4.5] h-[300px] md:h-full overflow-hidden">
            <img
              src={series}
              alt="Lura koleksiyon"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="flex-[2.5] h-[220px] md:h-full overflow-hidden">
            <img
              src={red}
              alt="Lura kırmızı seri"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
