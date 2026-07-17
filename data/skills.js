import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaSass,
  FaGitAlt,
  FaNodeJs,
  FaFigma,
  FaWordpress,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiNuxt,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiWebpack,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Nuxt.js", icon: SiNuxt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sass", icon: FaSass },
    ],
  },

  {
    title: "CMS",
    skills: [
      { name: "Bitrix", icon: FaCode },
      { name: "WordPress", icon: FaWordpress },
    ],
  },

  {
    title: "Backend / БД",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "REST API", icon: FaCode },
    ],
  },

  {
    title: "Инструменты",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Figma", icon: FaFigma },
      { name: "Webpack", icon: SiWebpack },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
