import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QualitySection = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Temiz Marka",
      content:
        "Temiz Marka; Ürünlerimizi geliştirirken doğaya saygılı, hayvanlar üzerinde test edilmeyen, hayvansal içerik bulunmayan; Hayır! Dediğimiz, Paraben, Alkol, Esans, Boya içermeyen bir marka hayal ettik ve ürettik <3",
      link: "/Products",
    },
    {
      title: "Az Ama Öz",
      content:
        "Karmaşık rutinler yerine, cildinizin gerçekten ihtiyacı olan aktif içerikleri en sade formüllerle sunuyoruz. Az ama öz, her zaman daha etkilidir.",
      link: "/Products",
    },
    {
      title: "Etkili Formülasyon",
      content:
        "Laboratuvar ortamında kanıtlanmış, yüksek performanslı içerikleri doğanın mucizeleriyle birleştiriyoruz.",
      link: "/Products",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F5F4F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B2635] mb-6 font-semibold">
            Sağlıklı cilt için en saf çözümler!
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-[1.1] text-[#1A1A1A] max-w-4xl mb-10 md:mb-12 tracking-tighter">
            Geleceğin formüllerini, doğanın <br />
            sessiz bilgeliğiyle dokuyoruz.
          </h2>

          <button
            onClick={() => navigate("/About")}
            className="group flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gray-500 hover:text-black transition-all duration-300"
          >
            Hakkımızda Daha Fazlası
            <span className="w-12 h-[1px] bg-gray-200 group-hover:w-20 group-hover:bg-black transition-all duration-500"></span>
          </button>
        </div>
        <div className="max-w-4xl mx-auto border-t border-gray-200">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
              >
                <span
                  className={`text-xl sm:text-2xl md:text-3xl font-light tracking-tight transition-colors ${openIndex === index ? "text-[#1A1A1A]" : "text-gray-400 group-hover:text-black"}`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-xl font-thin transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[300px] pb-10" : "max-h-0"}`}
              >
                <p className="text-gray-500 leading-relaxed max-w-2xl mb-6 font-light italic">
                  {item.content}
                </p>
                <button
                  onClick={() => navigate(item.link)}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-black pb-1 hover:opacity-50 transition-all"
                >
                  TÜM ÜRÜNLERİMİZİ GÖR →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default QualitySection;
