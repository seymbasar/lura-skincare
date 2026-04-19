const categories = [
  {
    id: 1,
    title: "Serumlar",
    desc: "Aktif İçerikler & Konsantre Bakım",
    span: "md:col-span-2",
    color: "bg-[#F4F7F2]",
  },
  {
    id: 2,
    title: "Temizleyiciler",
    desc: "Arındırıcı Formüller",
    span: "md:col-span-1",
    color: "bg-[#FDFCF0]",
  },
  {
    id: 3,
    title: "Maskeler",
    desc: "Haftalık Yoğun Terapi",
    span: "md:col-span-1",
    color: "bg-[#F9F5F6",
  },
  {
    id: 4,
    title: "Güneş Kremleri",
    desc: "Geniş Spektrumlu Koruma",
    span: "md:col-span-2",
    color: "bg-[#F2F6F7]",
  },
];

const CategoryGrid = () => {
  return (
    <section className="mt-32 px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((item) => (
        <div
          key={item.id}
          className={`${item.span} relative group cursor-pointer`}
        >
          {/*Kutunun gerçek gövesi */}
          <div
            className={`w-full h-96 ${item.color} flex flex-col items-center justify-center overflow-hidden transition-all duration-700 group-hover:shadow-xl group-hover:-translate-y-2 border border-transparent hover:border-gray-100`}
          >
            {/*Yazı alanı */}
            <span className="uppercase tracking-[0.4em] font-light text-lg group-hover:scale-105 transition-transform duration-500">
              {item.title}
            </span>

            {/*Açıklama Yazısı */}
            <p className="mt-4 text-[15px] uppercase tracking-[0.2em] text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
              {item.desc}
            </p>

            {/*Arka plana çok hafif renk */}
            <div className="absolute inset-0 bg-[#F9F8F6] opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryGrid;
