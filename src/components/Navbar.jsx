const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-transparent">
      {/* Sol Kısım: Menü Linkleri */}
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
        <a href="#" className="hover:opacity-50 transition-opacity">
          Mağaza
        </a>
        <a href="#" className="hover:opacity-50 transition-opacity">
          Koleksiyon
        </a>
        <a href="#" className="hover:opacity-50 transition-opacity">
          Hikayemiz
        </a>
      </div>

      {/* Orta Kısım: Logo */}
      <div className="text-2xl font-light tracking-[0.2em] uppercase cursor-pointer">
        LuraSkinCare
      </div>

      {/* Sağ Kısım: İkonlar */}
      <div className="flex gap-6 text-sm uppercase tracking-widest">
        <button className="hover:opacity-50 transition-opacity">Ara</button>
        <button className="hover:opacity-50 transition-opacity">
          Sepet (0)
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
