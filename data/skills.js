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
} from "react-icons/fa";

import {
  SiNextdotjs,
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
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sass", icon: FaSass },
    ],
  },
  {
    title: "Инструменты",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "npm", icon: FaNodeJs },
      { name: "Figma", icon: FaFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Webpack", icon: SiWebpack },
    ],
  },
  {
    title: "Backend / БД",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
];
