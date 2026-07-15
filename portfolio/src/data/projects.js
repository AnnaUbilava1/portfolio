/** Add live demo and repo URLs when you have them. */
export const projects = [
   {
    id: 'events-board',
    title: 'Events Board',
    team: 'Team of 3',
    bullets: [
      'Full-stack event-sharing web app with real-time listing, filtering, and sorting.',
      'RESTful APIs for events, categories, users, comments, and ratings; implemented authentication and authorization.',
      'React hooks and Context for state management and a seamless user experience.',
      'Test cases for backend and frontend.',
      'Deployed via AWS Amplify with CI/CD.',
    ],
    image: '/projects/events.png',
    tags: ['React', 'TypeScript', 'MongoDB', 'AWS Amplify', 'REST API'],
    links: {
      live: 'https://main.d1r03isbgzcqje.amplifyapp.com',
      repo: 'https://github.com/Anna-Ubilava-I2SEPC/community-events-board.git',
    },
    featured: true,
  },
  {
    id: 'villa-rental',
    title: 'Villa Rental Web App',
    team: 'Solo Project',
    bullets: [
      'Responsive villa rental website with modern UI and optimized performance.',
      'Built with React and Vite.',
      'Deployed on Vercel for cross-device compatibility.',
    ],
    image: '/projects/villa.png',
    tags: ['JavaScript', 'React', 'Vite', 'Vercel'],
    links: {
      live: 'https://basalt-villas-website.vercel.app',
      repo: 'https://github.com/AnnaUbilava1/basalt-villas-website.git',
    },
    featured: true,
  },
  {
    id: 'glossapp',
    title: 'GlossApp — Car Wash Management System',
    team: 'Team of 2',
    bullets: [
      'Full-stack car wash management application enabling businesses to manage wash records, pricing matrices, vehicles, companies, and staff performance.',
      'React Native (Expo) mobile application with bilingual support (Georgian/English) and Material Design UI for cross-platform use (Android, iOS, Web).',
      'Node.js + Express REST API with PostgreSQL and Prisma ORM to handle wash transactions, pricing calculations, and business data management.',
      'JWT-based authentication and role-based access control for admin and staff users.',
      'License plate autocomplete, automated price calculation, payment tracking, dashboard analytics, and staff commission tracking.',
      'Designed the database schema, API endpoints, and system architecture while collaborating in a two-developer team.',
    ],
    image: '',
    tags: [
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'JWT',
    ],
    links: {
      live: '',
      repo: 'https://github.com/AnnaUbilava1/GlossApp.git',
    },
    featured: true,
  },
  {
    id: 'sales-platform',
    title: 'Sales Platform',
    team: 'Solo Project',
    bullets: [
      'E-commerce style platform with product listing, filtering, sorting, and cart functionality.',
      'My first web project, focusing on responsive UI and basic authorization.',
    ],
    image: '',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    links: {
      live: 'https://sales-platform-web.vercel.app',
      repo: 'https://github.com/AnnaUbilava1/SalesPlatformWeb.git',
    },
    featured: false,
  },
]
