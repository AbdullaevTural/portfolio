import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSass,
  FaVuejs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  {
    title: "Навыки",
    info: [
      {
        title: "Frontend",
        icons: [
          { icon: <FaHtml5 />, name: "HTML5" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <FaReact />, name: "React" },
          { icon: <FaVuejs />, name: "Vue.js" },
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <SiTailwindcss />, name: "Tailwind" },
          { icon: <FaSass />, name: "Sass" },
          { icon: <FaGitAlt />, name: "Git" },
          { icon: <FaFigma />, name: "Figma" },
        ],
      },
    ],
  },
  {
    title: "Обучение",
    info: [
      {
        title: "СПбГУТ им. проф. М.А. Бонч-Бруевича — ИСИТ",
        stage: "2019",
      },
      {
        title: "Frontend-программист — GeekBrains",
        stage: "2024",
      },
      {
        title: "JavaScript/DOM/Интерфейсы — javascript.ru",
        stage: "2020",
      },
      {
        title: "CCNA Routing and Switching — Cisco",
        stage: "2018",
      },
    ],
  },
  {
    title: "Контакты",
    info: [
      {
        title: "Email",
        stage: (
          <a href="mailto:tural.abdullaev@mail.ru" className="hover:text-accent dark:hover:text-accentDark transition-colors">
            tural.abdullaev@mail.ru
          </a>
        ),
      },
      {
        title: "Telegram",
        stage: (
          <a href="https://t.me/TuralAbd" target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accentDark transition-colors">
            @TuralAbd
          </a>
        ),
      },
      {
        title: "Телефон",
        stage: (
          <a href="tel:+79095910091" className="hover:text-accent dark:hover:text-accentDark transition-colors">
            +7 909 591 00 91
          </a>
        ),
      },
      {
        title: "Локация",
        stage: "Санкт-Петербург",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full min-h-dvh flex items-center text-center xl:text-left">
      <Circles />
      <div className="container mx-auto flex flex-col items-start xl:flex-row gap-x-20">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Frontend-
            <span className="text-accent dark:text-accentDark">разработчик</span>{" "}
            с опытом в IT
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Работаю в RealWeb — разрабатываю и поддерживаю клиентскую часть
            веб-приложений. Создаю лендинги и промо-сайты. Имею обширный опыт в
            IT: от администрирования сайтов и сетевого оборудования до
            коммерческой веб-разработки. Окончил СПбГУТ по направлению
            «Информационные системы и технологии».
          </motion.p>

          {/* Quick stats */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 gap-x-6"
          >
            <div className="text-center">
              <div className="text-2xl xl:text-3xl font-bold text-accent dark:text-accentDark">
                2+
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                года веб-разработки
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl xl:text-3xl font-bold text-accent dark:text-accentDark">
                8+
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                проектов
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl xl:text-3xl font-bold text-accent dark:text-accentDark">
                9+
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                лет в IT
              </div>
            </div>
          </motion.div>
        </div>

        {/* info tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent dark:text-accentDark after:w-[100%] after:bg-accent dark:after:bg-accentDark after:transition-all after:duration-300"
                    : ""
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0 text-white">
                  {item.title}
                </div>
                {item.stage && (
                  <>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                  </>
                )}
                {/* icons for skills */}
                {item.icons && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {item.icons.map((skillItem, si) => (
                      <div
                        key={si}
                        className="flex flex-col items-center gap-y-1"
                      >
                        <span className="text-2xl text-accent dark:text-accentDark">
                          {skillItem.icon}
                        </span>
                        <span className="text-[10px] text-white/50">
                          {skillItem.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
