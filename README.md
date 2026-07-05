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

This project was my first time building a complete React application from scratch, and it pushed me through the full lifecycle of a real product:

- **State management at scale** — moved from scattered `useState` calls to a proper Context-based architecture for cart and notifications
- **Performance debugging** — diagnosed and fixed a 120MB media payload that was silently slowing the entire site down, using `ffmpeg` to compress video assets by over 90% without a visible quality loss
- **Git workflows in practice** — resolved real authentication issues (GitHub's move away from password auth, Personal Access Tokens), untracked file cleanup, and large file warnings
- **UX details that matter** — scroll-restoration on route change, toast feedback instead of blocking `alert()` calls, empty/error states for search and 404s
- **SEO fundamentals** — meta tags, Open Graph previews, sitemap/robots.txt, and why they matter for a real deployed site

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

Bu proje, sıfırdan tam bir React uygulaması kurma konusundaki ilk deneyimimdi ve beni gerçek bir ürünün tüm yaşam döngüsünden geçirdi:

- **Ölçeklenebilir state yönetimi** — dağınık `useState` çağrılarından, sepet ve bildirimler için düzgün bir Context tabanlı mimariye geçtim
- **Performans hata ayıklama** — sitenin tamamını sessizce yavaşlatan 120MB'lık medya yükünü tespit edip `ffmpeg` ile görsel kalite kaybı olmadan %90'ın üzerinde küçülttüm
- **Gerçek hayatta Git iş akışları** — GitHub'ın şifre kimlik doğrulamasından Personal Access Token'a geçişi, izlenmeyen (untracked) dosya temizliği ve büyük dosya uyarıları gibi gerçek sorunları çözdüm
- **Önemli UX detayları** — sayfa değişiminde scroll sıfırlama, engelleyici `alert()` yerine toast geri bildirimi, arama ve 404 için boş/hata durumları
- **SEO temelleri** — meta etiketleri, Open Graph önizlemeleri, sitemap/robots.txt ve gerçek bir canlı site için neden önemli oldukları

## Yol Haritası

- [ ] Gerçek ödeme entegrasyonu (iyzico / Stripe)
- [ ] Yasal sayfalar (KVKK / gizlilik politikası, satış şartları)
- [ ] İletişim formu
- [ ] Vitest + React Testing Library ile unit testler
- [ ] Çoklu dil desteği (İngilizce/Türkçe geçişi)

## Geliştiren

**Şeymanur Başar**
