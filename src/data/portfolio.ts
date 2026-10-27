export type Language = 'es' | 'en';

export interface Project {
  title: string;
  badge: string;
  highlight: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface StackCategory {
  category: string;
  description: string;
  icon: string;
  items: string[];
  gradient: string;
  border: string;
}

export interface Talk {
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Metric {
  value: string;
  label: string;
  isAccent?: boolean;
}

export interface PortfolioData {
  meta: {
    title: string;
    description: string;
    author: string;
    keywords: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    talks: string;
    stack: string;
    contact: string;
    cta: string;
    role: string;
    language: string;
  };
  hero: {
    statusBadge: {
      desktop: string;
      mobile: string;
    };
    headlinePrefix: string;
    headlineGradient: string;
    bioHtml: string;
    exploreCta: string;
    scheduleCta: string;
    metrics: Metric[];
  };
  trustBar: {
    caption: string;
  };
  sections: {
    experience: {
      title: string;
    };
    projects: {
      title: string;
      subtitle: string;
    };
    talks: {
      title: string;
    };
    stack: {
      title: string;
    };
    contact: {
      title: string;
      description: string;
      cta: string;
      quote: string;
    };
  };
  experience: Experience[];
  projects: Project[];
  stack: StackCategory[];
  talk: Talk;
}

export const portfolioContent: Record<Language, PortfolioData> = {
  es: {
    meta: {
      title: 'Jesús Machicado — Tech Lead & Mobile Systems Engineer',
      description:
        'Portfolio de Jesús Machicado: Ingeniero de Sistemas, Tech Lead y Desarrollador Mobile (Flutter, React). Especializado en arquitecturas offline-first, Clean Architecture y sistemas escalables.',
      author: 'Jesús Machicado',
      keywords:
        'Jesús Machicado, Flutter Developer, Tech Lead, Mobile Architecture, Offline-First, React Developer, Systems Engineer, Bolivia',
    },
    nav: {
      home: 'Inicio',
      experience: 'Experiencia',
      projects: 'Proyectos',
      talks: 'Charlas',
      stack: 'Stack',
      contact: 'Contacto',
      cta: 'Agendar Reunión',
      role: 'Tech Lead • Mobile',
      language: 'Idioma:',
    },
    hero: {
      statusBadge: {
        desktop: 'DISPONIBLE PARA NUEVOS PROYECTOS • TECH LEAD',
        mobile: 'DISPONIBLE • TECH LEAD MOBILE',
      },
      headlinePrefix: 'code with logic,',
      headlineGradient: 'build with impact.',
      bioHtml:
        'Hola, soy <span class="text-white font-medium">Jesús Machicado</span>. <br />Ingeniero de Sistemas y Tech Lead Mobile (Flutter). Especializado en Clean Architecture, soluciones offline-first robustas y aplicaciones web y móviles de alto impacto.',
      exploreCta: 'Explorar Proyectos',
      scheduleCta: 'Agendar Reunión',
      metrics: [
        { value: '+3 Años', label: 'Experiencia Mobile & Web' },
        { value: '5+ Apps', label: 'Producción & Arquitectura' },
        { value: '100%', label: 'Offline-First & Clean Arch', isAccent: true },
      ],
    },
    trustBar: {
      caption: 'Confían en mi trabajo y experiencia',
    },
    sections: {
      experience: {
        title: 'Experiencia.',
      },
      projects: {
        title: 'Proyectos Destacados.',
        subtitle: 'Tesis • Hackathons • Corporativo',
      },
      talks: {
        title: 'Conferencias & Comunidad.',
      },
      stack: {
        title: 'Stack Tecnológico.',
      },
      contact: {
        title: 'Construyamos juntos.',
        description:
          'Siempre abierto a colaborar, liderar iniciativas técnicas y resolver problemas complejos con código de alto nivel.',
        cta: 'Conectar en LinkedIn →',
        quote: '"bloom to death."',
      },
    },
    experience: [
      {
        date: 'Nov 2025 - Actualidad',
        title: 'Development and Maintenance Analyst',
        company: 'La Cascada S.A.',
        description:
          'Desarrollo de aplicaciones móviles corporativas. Lideré la creación desde cero de un CRM interno (Proyecto SIC) para el empadronamiento y preventa MKT, e implementé arquitecturas robustas offline-first para garantizar el rendimiento en áreas con conectividad inestable.',
      },
      {
        date: 'Abr 2025 - Nov 2025',
        title: 'Tech Lead Mobile & Frontend Dev',
        company: 'Start Up Favorcito',
        description:
          'Evolución rápida de Frontend Dev a Tech Lead. Lideré el desarrollo e implementación de nuevas features para las apps de clientes y estudiantes, manteniendo la plataforma a la vanguardia con las últimas tecnologías del ecosistema Flutter.',
      },
    ],
    projects: [
      {
        title: 'RouteAndo',
        badge: 'Tesis de Grado',
        highlight: 'Tracking Satelital',
        role: 'Arquitecto Líder & Dev Mobile',
        description:
          'Plataforma integral para seguimiento en tiempo real del transporte escolar. Diseñada bajo Clean Architecture, integra sincronización en vivo con Cloud Firestore, geolocalización de alta precisión con Google Maps API, gestión multiperfil (conductores, padres, administración) y soporte para inferencia local con TFLite.',
        tags: ['Flutter', 'Clean Architecture', 'Firebase', 'Google Maps API', 'Provider', 'TFLite'],
      },
      {
        title: 'Favorcito — On-Demand App',
        badge: 'App Comercial',
        highlight: 'Chat & Audio en Vivo',
        role: 'Tech Lead Mobile & Frontend',
        description:
          'Ecosistema móvil bajo demanda desarrollado en Flutter. Integra mensajería y chat en tiempo real con Firebase, notas de voz con streaming de audio, microinteracciones con Lottie y arquitectura reactiva con Signals.',
        tags: ['Flutter', 'Signals', 'In-App Chat', 'Lottie', 'Audio Streaming', 'Firebase'],
      },
      {
        title: 'ALAS - FinTech Platform',
        badge: 'Proyecto Hackathon',
        highlight: 'Plataforma Web',
        role: 'Líder Frontend & UI/UX',
        description:
          'Plataforma FinTech que conecta micro-inversionistas con oportunidades de negocio locales. Desarrollada en tiempo récord durante una hackathon con React, TypeScript y Redux Toolkit, con mapas interactivos (Leaflet), animaciones dinámicas con Framer Motion y previsualización de contratos legales asistidos por IA.',
        tags: ['React', 'TypeScript', 'Redux Toolkit', 'Leaflet', 'Framer Motion', 'Tailwind CSS'],
      },
      {
        title: 'App de Seguridad y Control Operativo',
        badge: 'Logística Corporativa',
        highlight: 'Offline-First',
        role: 'Liderazgo & Desarrollo Mobile',
        description:
          'Solución móvil empresarial para La Cascada S.A. que automatiza el control de accesos, bitácoras de camiones y protocolos de guardias de seguridad. Arquitectura offline-first para operación ininterrumpida en plantas con conectividad restringida y sincronización centralizada.',
        tags: ['Flutter', 'Offline-First', 'Figma UI/UX', 'MySQL', 'Security Protocols'],
      },
      {
        title: 'Proyecto SIC Fase 3 - CRM Mobile',
        badge: 'Arquitectura & Refactor',
        highlight: 'Escalabilidad',
        role: 'Arquitecto de Sistemas & Dev',
        description:
          'Refactorización profunda y migración de aplicación móvil corporativa desde una arquitectura legacy hacia una estructura modular, escalable y mantenible. Sincronización de dependencias, modernización del motor de datos offline y desacoplamiento de componentes de marketing y preventa.',
        tags: ['Flutter', 'Software Architecture', 'BLoC/Clean', 'Enterprise CRM', 'Data Sync'],
      },
    ],
    stack: [
      {
        category: 'Mobile & Frontend',
        description: 'Ecosistema principal de desarrollo',
        icon: '📱',
        items: ['Flutter', 'Dart', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Figma (UI/UX)'],
        gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
        border: 'hover:border-cyan-500/40',
      },
      {
        category: 'Backend & Nube',
        description: 'Motores de datos y servicios cloud',
        icon: '☁️',
        items: ['Firebase', 'Firestore', 'Node.js', 'Python', 'SQL / MySQL', 'GCP', 'REST & WebSockets'],
        gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
        border: 'hover:border-purple-500/40',
      },
      {
        category: 'Arquitectura & Herramientas',
        description: 'Flujos y patrones de ingeniería',
        icon: '⚡',
        items: ['Clean Architecture', 'BLoC & Signals', 'Offline-First', 'Git / GitHub', 'Postman', 'n8n', 'Jira / ClickUp'],
        gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
        border: 'hover:border-emerald-500/40',
      },
    ],
    talk: {
      badge: 'Conferencia & Speaker',
      title: 'Rompiendo la barrera del hardware con Flutter, IA y Firebase Studio',
      description:
        'Una inmersión arquitectónica sobre optimización de recursos, flujos modernos de desarrollo potenciados con IA y motores en la nube para llevar el rendimiento móvil al siguiente nivel.',
      tags: ['Flutter + AI', 'Firebase Studio', 'Offline Engines', 'High Performance DX'],
    },
  },
  en: {
    meta: {
      title: 'Jesús Machicado — Tech Lead & Mobile Systems Engineer',
      description:
        'Portfolio of Jesús Machicado: Systems Engineer, Tech Lead & Mobile Developer (Flutter, React). Specialized in offline-first architectures, Clean Architecture, and high-impact scalable apps.',
      author: 'Jesús Machicado',
      keywords:
        'Jesús Machicado, Flutter Developer, Tech Lead, Mobile Architecture, Offline-First, React Developer, Systems Engineer, Bolivia',
    },
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      talks: 'Talks',
      stack: 'Stack',
      contact: 'Contact',
      cta: 'Schedule Call',
      role: 'Tech Lead • Mobile',
      language: 'Language:',
    },
    hero: {
      statusBadge: {
        desktop: 'AVAILABLE FOR NEW PROJECTS • TECH LEAD',
        mobile: 'AVAILABLE • TECH LEAD MOBILE',
      },
      headlinePrefix: 'code with logic,',
      headlineGradient: 'build with impact.',
      bioHtml:
        'Hi, I\'m <span class="text-white font-medium">Jesús Machicado</span>. <br />Systems Engineer & Mobile Tech Lead (Flutter). Specialized in Clean Architecture, mission-critical offline-first solutions, and high-impact web and mobile products.',
      exploreCta: 'Explore Projects',
      scheduleCta: 'Schedule a Call',
      metrics: [
        { value: '+3 Years', label: 'Mobile & Web Dev' },
        { value: '5+ Apps', label: 'Production & Architecture' },
        { value: '100%', label: 'Offline-First & Clean Arch', isAccent: true },
      ],
    },
    trustBar: {
      caption: 'Trusted by & Experience with',
    },
    sections: {
      experience: {
        title: 'Experience.',
      },
      projects: {
        title: 'Selected Works.',
        subtitle: 'Thesis • Hackathons • Enterprise',
      },
      talks: {
        title: 'Keynotes & Community.',
      },
      stack: {
        title: 'Tech Stack.',
      },
      contact: {
        title: "Let's build together.",
        description:
          'Always open to collaborate, lead technical architectures, and solve complex problems with clean, high-performance code.',
        cta: 'Connect on LinkedIn →',
        quote: '"bloom to death."',
      },
    },
    experience: [
      {
        date: 'Nov 2025 - Present',
        title: 'Development and Maintenance Analyst',
        company: 'La Cascada S.A.',
        description:
          'Development of corporate mobile apps. Led the scratch creation of an internal CRM (SIC Project) for marketing presales, implementing robust offline-first architectures to guarantee performance in areas with unstable connectivity.',
      },
      {
        date: 'Apr 2025 - Nov 2025',
        title: 'Tech Lead Mobile & Frontend Dev',
        company: 'Start Up Favorcito',
        description:
          'Rapid evolution from Frontend Dev to Tech Lead. Led the development and implementation of new features for client and student apps, keeping the platform at the forefront with the latest technologies of the Flutter ecosystem.',
      },
    ],
    projects: [
      {
        title: 'RouteAndo',
        badge: 'Engineering Thesis',
        highlight: 'Real-Time Tracking',
        role: 'Lead Architect & Mobile Dev',
        description:
          'Comprehensive real-time school transportation tracking platform built on Clean Architecture. Features live sync with Cloud Firestore, high-precision telemetry via Google Maps API, multi-role access (drivers, parents, web dashboard), and edge AI inference support with TFLite.',
        tags: ['Flutter', 'Clean Architecture', 'Firebase', 'Google Maps API', 'Provider', 'TFLite'],
      },
      {
        title: 'Favorcito — On-Demand App',
        badge: 'Commercial App',
        highlight: 'Live Chat & Audio',
        role: 'Tech Lead Mobile & Frontend',
        description:
          'On-demand mobile ecosystem built with Flutter. Features real-time Firebase chat messaging, in-app voice notes and audio streaming, fluid Lottie micro-interactions, and reactive state management powered by Signals.',
        tags: ['Flutter', 'Signals', 'In-App Chat', 'Lottie', 'Audio Streaming', 'Firebase'],
      },
      {
        title: 'ALAS - FinTech Platform',
        badge: 'Hackathon Project',
        highlight: 'Web Platform',
        role: 'Frontend Lead & UI/UX',
        description:
          'FinTech platform connecting micro-investors with local business opportunities. Rapidly built during a hackathon using React, TypeScript, and Redux Toolkit, featuring interactive geospatial maps (Leaflet), fluid animations with Framer Motion, and AI-assisted legal contract previews.',
        tags: ['React', 'TypeScript', 'Redux Toolkit', 'Leaflet', 'Framer Motion', 'Tailwind CSS'],
      },
      {
        title: 'Security & Operational Control App',
        badge: 'Enterprise Logistics',
        highlight: 'Offline-First',
        role: 'Lead / Mobile Developer',
        description:
          'Enterprise mobile solution for La Cascada S.A. automating entry control, truck dispatch logs, and security guard workflows. Engineered with an offline-first architecture for seamless operations in low-connectivity facilities with automated central sync.',
        tags: ['Flutter', 'Offline-First', 'Figma UI/UX', 'MySQL', 'Security Protocols'],
      },
      {
        title: 'SIC Mobile CRM - Phase 3',
        badge: 'Core Architecture',
        highlight: 'Scale & Migration',
        role: 'Systems Architect & Dev',
        description:
          'In-depth architectural refactor and migration of an enterprise mobile CRM from a legacy codebase into a clean, modular structure. Re-engineered offline synchronization pipelines, streamlined dependency graphs, and decoupled presales & marketing workflows.',
        tags: ['Flutter', 'Software Architecture', 'BLoC/Clean', 'Enterprise CRM', 'Data Sync'],
      },
    ],
    stack: [
      {
        category: 'Mobile & Frontend',
        description: 'Core development ecosystem',
        icon: '📱',
        items: ['Flutter', 'Dart', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Figma (UI/UX)'],
        gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
        border: 'hover:border-cyan-500/40',
      },
      {
        category: 'Backend & Cloud',
        description: 'Data engines and cloud services',
        icon: '☁️',
        items: ['Firebase', 'Firestore', 'Node.js', 'Python', 'SQL / MySQL', 'GCP', 'REST & WebSockets'],
        gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
        border: 'hover:border-purple-500/40',
      },
      {
        category: 'Architecture & Tools',
        description: 'Workflows and scalable engineering',
        icon: '⚡',
        items: ['Clean Architecture', 'BLoC & Signals', 'Offline-First', 'Git / GitHub', 'Postman', 'n8n', 'Jira / ClickUp'],
        gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
        border: 'hover:border-emerald-500/40',
      },
    ],
    talk: {
      badge: 'Keynote & Speaker',
      title: 'Breaking Hardware Limits with Flutter, AI & Firebase Studio',
      description:
        'An architectural deep-dive into resource optimization, AI-augmented development workflows, and real-time cloud data engines to elevate cross-platform mobile apps beyond hardware limits.',
      tags: ['Flutter + AI', 'Firebase Studio', 'Offline Engines', 'High Performance DX'],
    },
  },
};
