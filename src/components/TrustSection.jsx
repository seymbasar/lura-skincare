const TrustSection = () => {
  const values = [
    { id: 1, title: "Vegan ve Hayvan Dostu" },
    { id: 2, title: "Paraben İçermez" },
    { id: 3, title: "Dermatolojik Olarak Test Edildi" },
    { id: 4, title: "Şeffaf ve Dürüst Formül" },
    { id: 5, title: "%100 Saf İçerik" },
    { id: 6, title: "Sürdürülebilir Ambalaj" },
    { id: 7, title: "Hassas Ciltler İçin Uygun" },
    { id: 8, title: "Alkol ve Sülfat İçermez" },
  ];

  return (
    <section className="py-16 bg-[#F5F4F2] border-t border-b border-gray-200/50 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...values, ...values].map((item, index) => (
          <div key={index} className="flex items-center gap-6 mx-16">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>

            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-medium text-[#1A1A1A]">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />
    </section>
  );
};

export default TrustSection;
