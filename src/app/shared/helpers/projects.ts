export interface Projects {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
}

export const projectsMock: Projects[] = [
  {
    id: 1,
    title: "E-commerce Vem da Terra",
    description: "Aplicativo de comércio eletrônico com carrinho de compras e integração de pagamento.",
    technologies: ["Spring Boot", "Java", "MySQL", "Angular"],
    projectUrl: "https://vemdaterrabrasil.netlify.app/#/inicio",
    githubUrl: "https://github.com/mabiamabia/E-commerce-Vem-da-Terra"
  },
  {
    id: 2,
    title: "Spotplay API",
    description: "API que simula o Spotify, permitindo integração e acesso a dados de música.",
    technologies: ["Node.js", "Express", "API Rest", "Docker"],
    projectUrl: "https://github.com/mabiamabia/spotplay-API-que-simula-spotify",
    githubUrl: "https://github.com/mabiamabia/spotplay-API-que-simula-spotify"
  },
  {
    id: 3,
    title: "TelaFlix",
    description: "Simulação de uma página inicial de streaming.",
    technologies: ["React", "CSS", "Javascript"],
    projectUrl: "https://github.com/mabiamabia/TelaFlix",
    githubUrl: "https://github.com/mabiamabia/TelaFlix"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Um site de portfólio responsivo para mostrar meus projetos e habilidades.",
    technologies: ["Angular", "TypeScript"],
    projectUrl: "https://prisciladuarte.netlify.app/#/",
    githubUrl: "https://github.com/mabiamabia/Portfolio"
  }
];
