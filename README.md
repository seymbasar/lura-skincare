# Lura Skincare

A fully responsive skincare e-commerce site built with React, Tailwind CSS, and Framer Motion — my first end-to-end frontend project, covering everything from component architecture to deployment.

**Live site:** [lura-skincare.vercel.app](https://lura-skincare.vercel.app/)

---

## Features

- Product catalog with category filtering and price/name sorting
- Dynamic product detail pages with related product suggestions
- Persistent shopping cart (survives page reloads via `localStorage`)
- Toast notification system for cart actions, form feedback, and checkout
- Live search in the navbar with instant product matching
- Fully responsive layout — mobile menu, adaptive grids, touch-friendly interactions
- Optimized media — background videos compressed from ~120MB to ~10MB total with `ffmpeg`
- Custom animations with Framer Motion (page transitions, layout animations, scroll-triggered reveals)
- Client-side routing with React Router, including a custom 404 page and scroll-restoration on navigation
- Basic SEO setup — meta tags, Open Graph/Twitter cards, `robots.txt`, `sitemap.xml`

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React 18, Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Animation | Framer Motion |
| State Management | React Context API |
| Deployment | Vercel |
| Media tooling | ffmpeg (video compression) |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/seymbasar/lura-skincare.git
cd lura-skincare

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/       # Reusable UI pieces (Navbar, Footer, CartContext, ToastContext...)
├── pages/            # Route-level screens (Home, About, Products, ProductDetail, NotFound)
├── photos/           # Product images and background videos
└── App.jsx           # Route definitions and app-wide providers
```

## What I Learned

This was my first time building a complete React application from scratch, and it took me through the full lifecycle of a real product — not just writing components, but designing, debugging, deploying, and documenting one:

- **Component architecture** — broke a single-page idea into over 20 reusable components (Navbar, Footer, product sections, about-page sections) and learned to decide what belongs in `pages/` versus `components/`
- **State management at scale** — moved from scattered local state to a proper Context API architecture for the cart and toast notifications, including persisting cart state to `localStorage` so it survives page reloads
- **Client-side routing** — set up React Router with static routes, a dynamic `/Products/:id` route for product detail pages, a catch-all 404 page, and scroll-restoration on navigation (a default browser behavior that doesn't come for free in SPAs)
- **Real-world debugging** — fixed dead buttons and disconnected data (a "best sellers" section using fake products instead of the real catalog), inconsistent navigation, and missing empty/error states in search and product lookup
- **Performance debugging** — diagnosed a 120MB media payload that was silently slowing the entire site down, and used `ffmpeg` to compress video assets by over 90% without a visible quality loss
- **Git and deployment in practice** — resolved real authentication issues (GitHub's move away from password auth to Personal Access Tokens), recovered from months of untracked local changes never pushed to the remote, and understood how Vercel's auto-deploy pipeline reacts to a `git push`
- **SEO and metadata** — added meta tags, Open Graph/Twitter cards, a favicon, `robots.txt`, and `sitemap.xml` — and learned why each of these matters once a site is actually public
- **UX polish** — replaced blocking `alert()` calls with a custom toast notification system, added category filtering and price/name sorting to the product catalog, and built a product detail page with related-product suggestions
- **Documentation as part of the job** — writing this README itself, including an honest roadmap of what's still missing (payments, legal pages, tests) rather than presenting the project as more finished than it is

## Roadmap

- [ ] Real payment integration (iyzico / Stripe)
- [ ] Legal pages (KVKK / privacy policy, terms of sale)
- [ ] Contact form
- [ ] Unit tests with Vitest + React Testing Library
- [ ] i18n (English/Turkish toggle)

## Author

**Şeymanur Başar**

---
---

<br>

# Lura Skincare (Türkçe)

React, Tailwind CSS ve Framer Motion ile geliştirilmiş, tamamen responsive bir cilt bakım e-ticaret sitesi — component mimarisinden deploy sürecine kadar uçtan uca deneyimlediğim ilk frontend projem.

**Canlı site:** [lura-skincare.vercel.app](https://lura-skincare.vercel.app/)

---

## Özellikler

- Kategoriye göre filtreleme ve fiyat/isme göre sıralama içeren ürün kataloğu
- İlgili ürün önerileriyle birlikte dinamik ürün detay sayfaları
- Sayfa yenilense bile kaybolmayan kalıcı sepet (`localStorage` ile)
- Sepet işlemleri, form geri bildirimi ve ödeme için toast bildirim sistemi
- Navbar üzerinde anlık eşleşme yapan canlı arama
- Tamamen responsive tasarım — mobil menü, uyarlanabilir düzenler, dokunmatik dostu etkileşimler
- `ffmpeg` ile ~120MB'tan ~10MB'a indirilen optimize edilmiş medya dosyaları
- Framer Motion ile özel animasyonlar (sayfa geçişleri, layout animasyonları, scroll ile tetiklenen efektler)
- React Router ile client-side routing, özel 404 sayfası ve sayfa değişiminde scroll sıfırlama dahil
- Temel SEO kurulumu — meta etiketleri, Open Graph/Twitter kartları, `robots.txt`, `sitemap.xml`

## Kullanılan Teknolojiler

| Kategori | Araçlar |
|---|---|
| Framework | React 18, Vite |
| Stil | Tailwind CSS v4 |
| Routing | React Router v6 |
| Animasyon | Framer Motion |
| State Yönetimi | React Context API |
| Deploy | Vercel |
| Medya araçları | ffmpeg (video sıkıştırma) |

## Kurulum

```bash
# Depoyu klonla
git clone https://github.com/seymbasar/lura-skincare.git
cd lura-skincare

# Bağımlılıkları kur
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

## Proje Yapısı

```
src/
├── components/       # Tekrar kullanılabilir arayüz parçaları (Navbar, Footer, CartContext, ToastContext...)
├── pages/            # Route seviyesindeki sayfalar (Home, About, Products, ProductDetail, NotFound)
├── photos/           # Ürün görselleri ve arka plan videoları
└── App.jsx           # Route tanımları ve uygulama geneli provider'lar
```

## Bu Projede Öğrendiklerim

Bu, sıfırdan tam bir React uygulaması kurma konusundaki ilk deneyimimdi ve beni sadece component yazmakla kalmayıp; tasarlamak, hata ayıklamak, deploy etmek ve dokümante etmekten geçen gerçek bir ürünün tüm yaşam döngüsünden geçirdi:

- **Component mimarisi** — tek bir sayfa fikrini 20'den fazla tekrar kullanılabilir component'e (Navbar, Footer, ürün bölümleri, hakkımızda sayfası bölümleri) böldüm ve neyin `pages/`'e, neyin `components/`'a ait olduğuna nasıl karar verileceğini öğrendim
- **Ölçeklenebilir state yönetimi** — dağınık local state'lerden, sepet ve toast bildirimleri için düzgün bir Context API mimarisine geçtim; sepet state'ini `localStorage`'a kaydederek sayfa yenilense bile kaybolmamasını sağladım
- **Client-side routing** — statik route'ların yanı sıra ürün detay sayfaları için dinamik bir `/Products/:id` route'u, tüm-yakalayan bir 404 sayfası ve sayfa değişiminde scroll sıfırlama (tarayıcının normalde otomatik yaptığı ama SPA'larda kendiliğinden gelmeyen bir davranış) kurdum
- **Gerçek hayattan hata ayıklama** — işlevsiz butonları ve kopuk veriyi (gerçek katalog yerine sahte ürünler kullanan bir "en çok satanlar" bölümü), tutarsız navigasyonu, arama ve ürün bulmada eksik olan boş/hata durumlarını düzelttim
- **Performans hata ayıklama** — sitenin tamamını sessizce yavaşlatan 120MB'lık medya yükünü tespit ettim ve `ffmpeg` ile video dosyalarını görsel kalite kaybı olmadan %90'ın üzerinde küçülttüm
- **Gerçek hayatta Git ve deploy süreci** — GitHub'ın şifre kimlik doğrulamasından Personal Access Token'a geçişi gibi gerçek kimlik doğrulama sorunlarını çözdüm, aylardır uzak depoya hiç gönderilmemiş yerel değişiklikleri kurtardım ve Vercel'in otomatik deploy sürecinin bir `git push` işlemine nasıl tepki verdiğini anladım
- **SEO ve meta veriler** — meta etiketleri, Open Graph/Twitter kartları, favicon, `robots.txt` ve `sitemap.xml` ekledim — ve bir site gerçekten yayına girdiğinde bunların her birinin neden önemli olduğunu öğrendim
- **Kullanıcı deneyimi cilası** — engelleyici `alert()` çağrılarını özel bir toast bildirim sistemiyle değiştirdim, ürün kataloğuna kategori filtreleme ve fiyat/isme göre sıralama ekledim, ilgili ürün önerileri sunan bir ürün detay sayfası kurdum
- **İşin bir parçası olarak dokümantasyon** — bu README'yi yazmanın kendisi de dahil olmak üzere, projeyi olduğundan daha bitmiş göstermek yerine hâlâ eksik olan şeylerin (ödeme, yasal sayfalar, testler) dürüst bir yol haritasını sunmak

## Yol Haritası

- [ ] Gerçek ödeme entegrasyonu (iyzico / Stripe)
- [ ] Yasal sayfalar (KVKK / gizlilik politikası, satış şartları)
- [ ] İletişim formu
- [ ] Vitest + React Testing Library ile unit testler
- [ ] Çoklu dil desteği (İngilizce/Türkçe geçişi)

## Geliştiren

**Şeymanur Başar**
