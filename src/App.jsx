import Navbar from "./components/Navbar";
import CategoryGrid from "./components/CategoryGrid";

function App() {
  return (
    <div className="min-h-screen">
      {/* Menü buraya gelecek */}
      <Navbar />
      {/* Hero Alanı (Şimdilik sadece yazı) */}
      <main className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-6xl font-extralight tracking-[0.3em] uppercase text-center">
          Dürüst Güzellik
        </h1>
        <p className="mt-6 text-sm tracking-widest text-gray-500 italic">
          Doğadan ilham alan, bilimle kanıtlanan formüller.
        </p>
        <button className="mt-12 px-10 py-4 border border-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500">
          Şimdi Keşfet
        </button>
      </main>

      {/* 4 Ürün listesi buraya gelecek */}
      <CategoryGrid />
    </div>
  );
}

export default App;
