# Sinem's Portfolio

React ile geliştirdiğim kişisel portfolyo sitem. Workintech Full Stack Developer programının S12 Frontend Challenge projesi.

**Canlı demo:** https://sinems-portfolio.vercel.app

## Özellikler

- **Türkçe / İngilizce:** Dil yönetimi i18n paketi kullanmadan Context API ile yapıldı. Tüm metinler tek bir veri dosyasında (`src/data/data.js`), component'ler metinleri buradan okuyor.
- **Açık / koyu tema:** Renkler CSS değişkenleri olarak tanımlandı, tema değişince yalnızca değişkenlerin değeri değişiyor.
- **Tercihler hatırlanıyor:** Dil ve tema seçimi `useLocalStorage` hook'u ile saklanıyor. İlk ziyarette tarayıcının dil ve renk tercihi kullanılıyor.
- **Dış servis ile iletişim:** Seçili dilin içeriği Axios ile [reqres.in](https://reqres.in)'e POST ediliyor ve sayfada sunucudan dönen cevap gösteriliyor. Her dil bir kez istenip önbelleğe alınıyor. Yükleniyor, başarılı ve hata durumları React Toastify ile bildiriliyor. İstek başarısız olursa yerel içerik gösteriliyor.
- **Responsive:** Mobil, tablet ve masaüstü uyumlu.
- **Performans:** İlk ekrandaki Hero hemen yükleniyor, alttaki bölümler `React.lazy` ve `Suspense` ile ayrı parçalara bölünüp sonradan yükleniyor (code splitting). Proje görselleri lazy loading ile ekrana yaklaşınca indiriliyor.
- **Figma tasarımına birebir uyum:** Renkler, fontlar ve ölçüler tasarımdan alındı.

## Kullanılan Teknolojiler

- React 19 + Vite
- Tailwind CSS v4
- Context API (tema ve dil)
- Axios, React Toastify
- React Icons
- Cypress (uçtan uca testler), GitHub Actions (CI)

## Proje Yapısı

```
src/
├── api/          # Axios instance ve reqres istekleri
├── components/   # Her bölüm ayrı bir component (Hero, Skills, Profile, Projects, Footer)
├── context/      # ThemeContext ve LanguageContext
├── hooks/        # useLocalStorage, useTheme, useLanguage, useRemoteContent
├── reducers/     # API isteğinin durumu (request / success / failure) için useReducer
├── data/         # TR/EN site içeriği
└── assets/       # Görseller
```

## Yerel Kurulum

```bash
npm install
cp .env.example .env.local
npm run dev
```

`.env.local` dosyasına [reqres.in](https://app.reqres.in/api-keys) API key'ini ekle. Uygulama `http://localhost:5173` adresinde açılır.

## Testler

```bash
npm run build
npm run test:e2e   # önizleme sunucusunu açar ve Cypress testlerini çalıştırır
npm run cy:open    # testleri Cypress arayüzünde açar (önce npm run preview)
```

Cypress testleri sayfanın bölümlerini, dil ve tema değişimini, tercihlerin localStorage'da saklanmasını ve API akışını (istek, önbellek, hata durumu) kontrol ediyor. reqres istekleri `cy.intercept` ile taklit edildiği için testler internete ve API key'e bağlı değil.

## Geliştirme Akışı

- Geliştirme `dev` branch'inde yapılıyor.
- Her push'ta GitHub Actions lint, build ve Cypress testlerini çalıştırıyor.
- Testler geçince `dev`, pull request ile `main`'e birleştiriliyor ve Vercel `main`'i otomatik olarak yayına alıyor.
