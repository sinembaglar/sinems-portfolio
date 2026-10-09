# Sinem's Portfolio

React ile geliştirdiğim kişisel portfolyo sitem. Workintech Full Stack Developer programının S12 Frontend Challenge projesi.

## Özellikler

- **Türkçe / İngilizce:** Dil yönetimi i18n paketi kullanmadan Context API ile yapıldı. Tüm metinler tek bir veri dosyasında (`src/data/data.js`), component'ler metinleri buradan okuyor.
- **Açık / koyu tema:** Renkler CSS değişkenleri olarak tanımlandı, tema değişince yalnızca değişkenlerin değeri değişiyor.
- **Tercihler hatırlanıyor:** Dil ve tema seçimi `useLocalStorage` hook'u ile saklanıyor. İlk ziyarette tarayıcının dil ve renk tercihi kullanılıyor.
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
├── components/   # Her bölüm ayrı bir component (Hero, Skills, Profile, Projects, Footer)
├── context/      # ThemeContext ve LanguageContext
├── hooks/        # useLocalStorage, useTheme, useLanguage
├── data/         # TR/EN site içeriği
└── assets/       # Görseller
```

## Kurulum

```bash
npm install
npm run dev
```

Uygulama `http://localhost:5173` adresinde açılır.
