import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#F5F4F2] min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#8B2635] mb-6 font-semibold">
          Sayfa Bulunamadı
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif italic text-[#1A1A1A] mb-8 tracking-tight">
          404
        </h1>
        <p className="text-gray-600 font-light leading-relaxed mb-10">
          Aradığınız sayfa taşınmış, kaldırılmış ya da hiç var olmamış olabilir.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-[#1A1A1A] hover:bg-[#8B2635] text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </main>
  );
}

export default NotFound;
