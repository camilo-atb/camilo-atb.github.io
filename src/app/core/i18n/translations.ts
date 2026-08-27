export type TranslationNode =
  | string
  | { [key: string]: TranslationNode };

export const translations: Record<string, TranslationNode> = {
  en: {
    nav: {
      brand: "Camilo Téllez",
      home: "Home",
      about: "About",
      stack: "Core Stack",
      projects: "Projects",
      experience: "Experience",
      blog: "Blog",
      milestones: "Milestones",
      certifications: "Certifications",
      contact: "Contact",
      firt: "Home",
      second: "About",
      third: "Core Stack",
      fourth: "Certifications"
    },
    hero: {
      title: 'Crafting Digital.',
      title2: 'Experiences.',
      subtitle:
        'Frontend developer focused on Angular and TypeScript, with a full-stack mindset and oriented toward building scalable and maintainable applications.',
      workBtn: 'Explore my work',
      contactBtn: 'Contact me'
    },
    about: {
      title: 'About Me',
      p1: `I don’t just build interfaces; I aim to create applications that are clear, functional, and maintainable. My path into software development started from an engineering background, which still shapes how I approach problem-solving and system design.`,
      p2: `I primarily work with Angular and TypeScript on the frontend, and I’m also comfortable building backend logic using technologies such as Go, Java, and Node.js. I focus on connecting user experience with solid technical foundations, writing code with clarity, scalability, and long-term evolution in mind.`
    },
    stack: {
      title: "Core Stack"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Three Go practice projects focused on hexagonal architecture, responsibility separation, and end-to-end flows."
    },
    experience: {
      title: "Experience",
      subtitle: "Current learning role and the work I am doing day to day."
    },
    blog: {
      previewTitle: "Code Thoughts",
      previewSubtitle: "Tutorials, architecture notes, and practical lessons while building software.",
      viewAll: "View all posts",
      readArticle: "Read article",
      pageTitle: "Blog",
      pageSubtitle: "Articles about architecture, backend learning, and development workflows.",
      backToHome: "Back to home",
      backToList: "Back to blog",
      notFoundTitle: "Article not found",
      notFoundSubtitle: "The requested post does not exist or is not published yet."
    },
    contact: {
      titlePrefix: "Let's create",
      titleHighlight: "together.",
      formName: "Name",
      formMessage: "Message",
      formSend: "Send message",
      footer: "© 2026 Camilo Andrés Téllez Benítez portfolio. Built with Angular."
    },
    milestones: {
      title: "Milestones & Participations",
      subtitle: "A journey of continuous learning and high-impact contributions."
    },
    certifications:{
      title: "Certifications"
    }
  },

  es: {
    nav: {
      brand: "Camilo Téllez",
      home: "Inicio",
      about: "Acerca de",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Experiencia",
      blog: "Blog",
      milestones: "Hitos",
      certifications: "Certificaciones",
      contact: "Contacto",
      firt: "Hogar",
      second: "Acerca de",
      third: "Tecnologías principales",
      fourth: "Certificaciones"
    },
    hero: {
      title: 'Creando experiencias',
      title2: 'digitales.',
      subtitle:
        'Desarrollador frontend enfocado en Angular y TypeScript, con mentalidad full-stack y orientado a construir aplicaciones escalables y mantenibles.',
      workBtn: 'Ver proyectos',
      contactBtn: 'Contáctame'
    },
    about: {
      title: 'Sobre mí',
      p1: `No solo construyo interfaces; busco crear aplicaciones claras, funcionales y mantenibles. Mi camino hacia el desarrollo comenzó desde una base analítica en ingeniería, lo que hoy influye en cómo abordo los problemas y diseño soluciones de software.`,
      p2: `Trabajo principalmente con Angular y TypeScript en frontend, y tengo experiencia desarrollando lógica backend con tecnologías como Go, Java y Node.js. Me interesa conectar la experiencia de usuario con una base técnica sólida, escribiendo código pensando en la claridad, la escalabilidad y la evolución futura del sistema.`
    },
    stack: {
      title: "Tecnologías principales"
    },
    projects: {
      title: "Proyectos destacados",
      subtitle: "Tres proyectos en Go para practicar arquitectura hexagonal, separación de responsabilidades y flujos completos."
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi rol actual de aprendizaje y el trabajo que estoy realizando día a día."
    },
    blog: {
      previewTitle: "Pensamientos de código",
      previewSubtitle: "Tutoriales, notas de arquitectura y aprendizajes prácticos construyendo software.",
      viewAll: "Ver todo",
      readArticle: "Leer artículo",
      pageTitle: "Blog",
      pageSubtitle: "Artículos sobre arquitectura, backend y flujos de desarrollo.",
      backToHome: "Volver al inicio",
      backToList: "Volver al blog",
      notFoundTitle: "Artículo no encontrado",
      notFoundSubtitle: "El artículo solicitado no existe o aún no está publicado."
    },
    contact: {
      titlePrefix: "Creemos algo",
      titleHighlight: "juntos.",
      formName: "Nombre",
      formMessage: "Mensaje",
      formSend: "Enviar mensaje",
      footer: "© 2026 Portafolio de Camilo. Hecho con Angular."
    },
    milestones: {
      title: "Hitos y participaciones",
      subtitle: "Un recorrido de aprendizaje continuo y aportes de alto impacto."
    },
    certifications:{
      title: "Certificaciones"
    }
  }
};
