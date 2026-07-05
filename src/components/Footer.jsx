import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "./ToastContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = () => {
    const trimmed = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValidEmail) {
      showToast("Lütfen geçerli bir e-posta adresi girin.", "error");
      return;
    }

    // NOT: Gerçek bir e-posta servisi (Mailchimp, Brevo vb.) entegrasyonu henüz yok.
    // Şimdilik sadece kullanıcıya kayıt onayı gösteriyoruz.
    setSubscribed(true);
    showToast("Kaydınız alındı, teşekkürler!");
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-[#F5F4F2] pt-16 md:pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-14 md:mb-20">
          <div className="sm:col-span-2 flex flex-col items-start">
            <h2 className="text-lg md:text-xl font-extralight tracking-[0.4em] uppercase mb-6 md:mb-8">
              Lura<span className="font-normal italic">SkinCare</span>
            </h2>
            <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-6">
              Yeniliklerden ve dürüst içeriklerden haberdar olun.
            </p>
            <div className="flex w-full max-w-sm border-b border-gray-400 py-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="E-POSTA ADRESİNİZ"
                className="bg-transparent text-[10px] w-full outline-none tracking-widest placeholder:text-gray-400"
              />
              <button
                onClick={handleSubscribe}
                className="text-[10px] tracking-widest hover:opacity-50 transition-opacity shrink-0"
              >
                KAYDOL
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-[#8B2635] tracking-widest uppercase mt-3">
                Kaydınız alındı, teşekkürler!
              </p>
            )}
          </div>

          <div className="flex flex-col items-start gap-4">
            <h4 className="text-[11px] font-medium tracking-[0.3em] uppercase mb-4">
              Keşfet
            </h4>
            <Link to="/Products" className="nav-link-style">
              Tüm Ürünler
            </Link>
            <Link to="/Products" className="nav-link-style">
              En Çok Satanlar
            </Link>
            <a href="#" className="nav-link-style">
              Setler
            </a>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h4 className="text-[11px] font-medium tracking-[0.3em] uppercase mb-4">
              Takip Et
            </h4>
            <a href="https://www.instagram.com/" className="nav-link-style">
              Instagram
            </a>
            <a href="https://tr.pinterest.com/" className="nav-link-style">
              Pinterest
            </a>
            <a href="#" className="nav-link-style">
              Bize Ulaşın
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <span className="text-[9px] text-gray-400 tracking-widest uppercase">
            © 2026 Lura Skincare. Tüm Hakları Saklıdır. <br /> ŞEYMANUR BAŞAR
          </span>
          <div className="flex gap-8">
            <span className="text-[9px] text-gray-400 tracking-widest uppercase cursor-pointer hover:text-black">
              KVKK
            </span>
            <span className="text-[9px] text-gray-400 tracking-widest uppercase cursor-pointer hover:text-black">
              Çerez Politikası
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
