// All site content lives here, one object per language.
// Components never hard-code text; they read it from LanguageContext.
// Shared, language-independent values (links, tech names) are defined once and reused.
// Text that is partly highlighted in the design is split into { before, highlight, after }.

const links = {
  github: 'https://github.com/sinembaglar',
  linkedin: 'https://www.linkedin.com/in/sinembaglar',
  email: 'sinembglr@gmail.com',
}

const skills = ['JavaScript', 'React', 'Redux', 'Tailwind', 'Spring Boot', 'PostgreSQL']

const projectLinks = {
  ecommerce: {
    github: 'https://github.com/sinembaglar/e-commerce-project',
    live: 'https://e-commerce-project-three-sand.vercel.app',
    tags: ['React', 'Redux Thunk', 'Tailwind', 'Axios', 'React Hook Form'],
  },
  movies: {
    github: 'https://github.com/sinembaglar/favori-filmler-redux',
    live: 'https://favori-filmler-redux.vercel.app',
    tags: ['React', 'Redux', 'React Router', 'Tailwind'],
  },
  twitter: {
    github: 'https://github.com/sinembaglar/twitter-clone-backend',
    live: '',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
  },
}

const data = {
  tr: {
    header: {
      darkMode: 'KARANLIK MOD',
      lightMode: 'AYDINLIK MOD',
      // The switch is written in the language it switches to.
      switchLanguage: { before: 'SWITCH TO ', highlight: 'ENGLISH', after: '' },
    },
    hero: {
      greeting: 'Merhaba! 👋',
      name: 'Ben Sinem.',
      intro:
        "Workintech Full Stack Developer programından mezun olmak üzereyim. React ile kullanıcı dostu arayüzler, Spring Boot ile REST API'ler geliştiriyorum. Tanışalım!",
      availability: 'Full stack developer olarak yeni fırsatlara açığım.',
      contactLabel: 'Ekibine katılmam için yaz →',
      photoAlt: 'Sinem Bağlar',
      links,
    },
    skills: {
      title: 'Yetenekler',
      items: skills,
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
      githubLabel: "Github'da gör",
      liveLabel: 'Siteye git →',
      items: [
        {
          id: 'ecommerce',
          title: 'E-Ticaret',
          description:
            'Ürün listeleme ve detay, sepet, üye girişi, sipariş oluşturma ve sipariş geçmişi içeren e-ticaret sitesi. Global state Redux Thunk ile, API istekleri Axios ile yönetiliyor.',
          ...projectLinks.ecommerce,
        },
        {
          id: 'movies',
          title: 'Favori Filmler Arşivi',
          description:
            'Film arşivini gezip izleme listesi oluşturabildiğin uygulama. Arama, tür filtresi ve localStorage ile kalıcı liste.',
          ...projectLinks.movies,
        },
        {
          id: 'twitter',
          title: 'Twitter Clone',
          description:
            'Tweet, yorum, beğeni ve retweet özellikleri olan REST API. Spring Security ile oturum tabanlı giriş ve BCrypt ile şifreleme.',
          ...projectLinks.twitter,
        },
      ],
    },
    footer: {
      message: { before: 'Bir sonraki projende ', highlight: 'birlikte çalışalım', after: '.' },
      linkLabels: { github: 'Github', linkedin: 'Linkedin', email: 'E-posta' },
      links,
    },
  },
  en: {
    header: {
      darkMode: 'DARK MODE',
      lightMode: 'LIGHT MODE',
      switchLanguage: { before: '', highlight: 'TÜRKÇE', after: "'YE GEÇ" },
    },
    hero: {
      greeting: 'Hi! 👋',
      name: "I'm Sinem.",
      intro:
        "I'm about to graduate from the Workintech Full Stack Developer program. I build user-friendly interfaces with React and REST APIs with Spring Boot. Let's meet!",
      availability: "I'm open to new opportunities as a full stack developer.",
      contactLabel: 'Invite me to join your team →',
      photoAlt: 'Sinem Bağlar',
      links,
    },
    skills: {
      title: 'Skills',
      items: skills,
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
      githubLabel: 'View on Github',
      liveLabel: 'Go to app →',
      items: [
        {
          id: 'ecommerce',
          title: 'E-Commerce',
          description:
            'An e-commerce site with product listing and details, cart, user login, checkout and order history. Global state is handled with Redux Thunk and API requests with Axios.',
          ...projectLinks.ecommerce,
        },
        {
          id: 'movies',
          title: 'Favorite Movies Archive',
          description:
            'Browse a movie archive and build your own watchlist. Search, genre filter and a watchlist that persists in localStorage.',
          ...projectLinks.movies,
        },
        {
          id: 'twitter',
          title: 'Twitter Clone',
          description:
            'A REST API with tweets, comments, likes and retweets. Session-based login with Spring Security and BCrypt password hashing.',
          ...projectLinks.twitter,
        },
      ],
    },
    footer: {
      message: { before: "Let's ", highlight: 'work together', after: ' on your next product.' },
      linkLabels: { github: 'Github', linkedin: 'Linkedin', email: 'Email' },
      links,
    },
  },
}

export default data
