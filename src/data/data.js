// All texts of the site are here. Components read them from LanguageContext.
// Texts with a colored part are split as { before, highlight, after }.

const links = {
  github: 'https://github.com/sinembaglar',
  linkedin: 'https://www.linkedin.com/in/sinembaglar',
  email: 'sinembglr@gmail.com',
}

const skills = ['JavaScript', 'React', 'Redux', 'Tailwind', 'Spring Boot', 'PostgreSQL']

const data = {
  tr: {
    header: {
      darkMode: 'KARANLIK MOD',
      lightMode: 'AYDINLIK MOD',
      changeLanguage: { before: 'SWITCH TO ', highlight: 'ENGLISH', after: '' },
    },
    hero: {
      greeting: 'Merhaba! 👋',
      name: 'Ben Sinem.',
      intro:
        "Workintech Full Stack Developer programından mezun olmak üzereyim. React ile kullanıcı dostu arayüzler, Spring Boot ile REST API'ler geliştiriyorum. Tanışalım!",
      availability: { before: '', highlight: 'Full stack developer', after: ' olarak yeni fırsatlara açığım.' },
      contact: 'Ekibine katılmam için →',
    },
    skills: {
      title: 'Yetenekler',
      list: skills,
    },
    profile: {
      title: 'Profil',
      basicTitle: 'Temel Bilgiler',
      basic: [
        { label: 'İkamet Şehri', value: 'Ankara' },
        { label: 'Eğitim', value: 'Workintech Yazılım Akademisi' },
        { label: 'Tercih Ettiği Rol', value: 'Full Stack Developer' },
      ],
      aboutTitle: 'Hakkımda',
      about: [
        'Workintech Full Stack Developer programında önce React, Redux ve Tailwind ile arayüzler, ardından Java, Spring Boot ve PostgreSQL ile REST API’ler geliştirdim.',
        'Bir projeyi baştan sona, veritabanından kullanıcının gördüğü ekrana kadar kurabilmek bana keyif veriyor.',
      ],
    },
    projects: {
      title: 'Projeler',
      githubText: "Github'da gör",
      liveText: 'Siteye git →',
      list: [
        {
          id: 1,
          title: 'E-Ticaret',
          description:
            'Ürün listeleme ve detay, sepet, üye girişi, sipariş oluşturma ve sipariş geçmişi içeren e-ticaret sitesi. Global state Redux Thunk ile, API istekleri Axios ile yönetiliyor.',
          tags: ['react', 'redux thunk', 'tailwind', 'axios', 'react hook form'],
          github: 'https://github.com/sinembaglar/e-commerce-project',
          live: 'https://e-commerce-project-three-sand.vercel.app',
        },
        {
          id: 2,
          title: 'Favori Filmler Arşivi',
          description:
            'Film arşivini gezip izleme listesi oluşturabildiğin uygulama. Arama, tür filtresi ve localStorage ile kalıcı liste.',
          tags: ['react', 'redux', 'react router', 'tailwind'],
          github: 'https://github.com/sinembaglar/favori-filmler-redux',
          live: 'https://favori-filmler-redux.vercel.app',
        },
        {
          id: 3,
          title: 'Twitter Clone',
          description:
            'Tweet, yorum, beğeni ve retweet özellikleri olan REST API. Spring Security ile oturum tabanlı giriş ve BCrypt ile şifreleme.',
          tags: ['java', 'spring boot', 'spring security', 'postgresql'],
          github: 'https://github.com/sinembaglar/twitter-clone-backend',
          live: '',
        },
      ],
    },
    footer: {
      text: { before: 'Bir sonraki projende ', highlight: 'birlikte çalışalım', after: '.' },
      linkNames: { github: 'Github', linkedin: 'Linkedin', email: 'E-posta' },
    },
    toast: {
      pending: 'İçerik yükleniyor...',
      success: 'İçerik sunucudan alındı',
      error: 'Sunucuya ulaşılamadı, yerel içerik gösteriliyor',
    },
    links,
  },
  en: {
    header: {
      darkMode: 'DARK MODE',
      lightMode: 'LIGHT MODE',
      changeLanguage: { before: '', highlight: 'TÜRKÇE', after: "'YE GEÇ" },
    },
    hero: {
      greeting: 'Hi! 👋',
      name: "I'm Sinem.",
      intro:
        "I'm about to graduate from the Workintech Full Stack Developer program. I build user-friendly interfaces with React and REST APIs with Spring Boot. Let's meet!",
      availability: { before: "I'm open to new opportunities as a ", highlight: 'full stack developer', after: '.' },
      contact: 'Invite me to join your team →',
    },
    skills: {
      title: 'Skills',
      list: skills,
    },
    profile: {
      title: 'Profile',
      basicTitle: 'Basic Information',
      basic: [
        { label: 'City', value: 'Ankara' },
        { label: 'Education', value: 'Workintech Software Academy' },
        { label: 'Preferred Role', value: 'Full Stack Developer' },
      ],
      aboutTitle: 'About Me',
      about: [
        'During the Workintech Full Stack Developer program I first built interfaces with React, Redux and Tailwind, then REST APIs with Java, Spring Boot and PostgreSQL.',
        'I enjoy building a project end to end, from the database all the way to the screen the user sees.',
      ],
    },
    projects: {
      title: 'Projects',
      githubText: 'View on Github',
      liveText: 'Go to app →',
      list: [
        {
          id: 1,
          title: 'E-Commerce',
          description:
            'An e-commerce site with product listing and details, cart, user login, checkout and order history. Global state is handled with Redux Thunk and API requests with Axios.',
          tags: ['react', 'redux thunk', 'tailwind', 'axios', 'react hook form'],
          github: 'https://github.com/sinembaglar/e-commerce-project',
          live: 'https://e-commerce-project-three-sand.vercel.app',
        },
        {
          id: 2,
          title: 'Favorite Movies Archive',
          description:
            'Browse a movie archive and build your own watchlist. Search, genre filter and a watchlist that persists in localStorage.',
          tags: ['react', 'redux', 'react router', 'tailwind'],
          github: 'https://github.com/sinembaglar/favori-filmler-redux',
          live: 'https://favori-filmler-redux.vercel.app',
        },
        {
          id: 3,
          title: 'Twitter Clone',
          description:
            'A REST API with tweets, comments, likes and retweets. Session-based login with Spring Security and BCrypt password hashing.',
          tags: ['java', 'spring boot', 'spring security', 'postgresql'],
          github: 'https://github.com/sinembaglar/twitter-clone-backend',
          live: '',
        },
      ],
    },
    footer: {
      text: { before: "Let's ", highlight: 'work together', after: ' on your next product.' },
      linkNames: { github: 'Github', linkedin: 'Linkedin', email: 'Email' },
    },
    toast: {
      pending: 'Loading content...',
      success: 'Content received from the server',
      error: 'Could not reach the server, showing local content',
    },
    links,
  },
}

export default data
