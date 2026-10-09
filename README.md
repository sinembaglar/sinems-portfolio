# Sinem's Portfolio

React ile geliştirdiğim kişisel portfolyo sitem. Workintech Full Stack Developer programının S12 Frontend Challenge projesi.

**Canlı demo:** https://sinems-portfolio.vercel.app

## Özellikler

- **Türkçe / İngilizce:** Dil yönetimi i18n paketi kullanmadan Context API ile yapıldı. Tüm metinler tek bir veri dosyasında (`src/data/data.js`), component'ler metinleri buradan okuyor.
- **Açık / koyu tema:** Renkler CSS değişkenleri olarak tanımlandı, tema değişince yalnızca değişkenlerin değeri değişiyor.
- **Tercihler hatırlanıyor:** Dil ve tema seçimi `useLocalStorage` hook'u ile saklanıyor. İlk ziyarette tarayıcının dil ve renk tercihi kullanılıyor.
- **Dış servis ile iletişim:** Seçili dilin içeriği Axios ile [reqres.in](https://reqres.in)'e POST ediliyor ve sayfada sunucudan dönen cevap gösteriliyor. Her dil bir kez istenip önbelleğe alınıyor. Yükleniyor, başarılı ve hata durumları React Toastify ile bildiriliyor. İstek başarısız olursa yerel içerik gösteriliyor.
- **Responsive:** Mobil, tablet ve masaüstü uyumlu.
- **Figma tasarımına birebir uyum:** Renkler, fontlar ve ölçüler tasarımdan alındı.

## Kullanılan Teknolojiler

- React 19 + Vite
- Tailwind CSS v4
- Context API (tema ve dil)
- Axios, React Toastify
- React Icons

## Proje Yapısı

```
src/
├── api/          # Axios instance ve reqres istekleri
├── components/   # Her bölüm ayrı bir component (Hero, Skills, Profile, Projects, Footer)
├── context/      # ThemeContext ve LanguageContext
├── hooks/        # useLocalStorage, useTheme, useLanguage, useRemoteContent
├── data/         # TR/EN site içeriği
└── assets/       # Görseller
```

## Kurulum

```bash
npm install
cp .env.example .env.local   # reqres API key'ini ekle: https://app.reqres.in/api-keys
npm run dev
```

Uygulama `http://localhost:5173` adresinde açılır.
