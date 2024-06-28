import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSass,
  FaVuejs,
  FaMailBulk,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
} from "react-icons/si";

import { PiFileSql } from "react-icons/pi";
import { BsTwitterX, BsTelephoneInbound } from "react-icons/bs";

//companents
import Avatar from "../../components/Avatar";
import Avatars from "../../components/Avatar_about";
import Circles from "../../components/Circles";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";



//  data
const aboutData = [
  {
    title: "Навыки",
    info: [
      {
        title: "Веб Разработчик",
        info: [
          {
            icon: <FaHtml5 />,
            name: "HTML",
          },
          {
            icon: <FaCss3 />,
            name: "CSS",
          },
          {
            icon: <FaJs />,
            name: "JS",
          },
          {
            icon: <FaReact />,
            name: "REACT",
          },
          {
            icon: <SiNextdotjs />,
            name: "NEXT.JS",
          },
          {
            icon: <FaSass />,
            name: "SASS",
          },
          {
            icon: <SiTailwindcss />,
            name: "Tailwindcss",
          },
          {
            icon: <FaVuejs />,
            name: "VUE",
          },
          {
            icon: <PiFileSql />,
            name: "SQL",
          },
        ],
      },
      {
        title: "UI/UX Дизайн",
        info: [
          {
            icon: <FaFigma />,
            name: "FIGMA",
          },
          {
            icon: <SiAdobephotoshop />,
            name: "Photoshop",
          },
          {
            icon: <BsTwitterX />,
            name: "Axure",
          },
        ],
      },
    ],
  },
  {
    title: "Обучение",
    info: [
      {
        title:
          "Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А.Бонч-Бруевича",
        stage: "2019",
      },
      {
        title: "Курс 'JavaScript/DOM/Интерфейсы' для новичков",
        stage: "2020",
      },
      {
        title: "Курс Frontend-программист - GeekBrains",
        stage: "2024",
      },
    ],
  },
  {
    title: "Контакты",
    info: [
      {
        title: "Email",
        icon: <FaMailBulk />,
        stage: (
          <a href="mailto:tural.abdullaev@mail.ru">tural.abdullaev@mail.ru</a>
        ),
      },
      {
        title: "Telegram",
        icon: <BsTelephoneInbound />,
        stage: "@TuralAbd",
      },
      {
        title: "Номер телефона",
        icon: <BsTelephoneInbound />,
        stage: <a href="tel:+79095910091">+7 909 591 00 91</a>,
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full h-full py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -left-[380px] top-60"
      >
        <Avatars />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className=" flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 "
          >
            Моя <span className=" text-accent dark:text-accentDark"> мечта - </span>стать отличным{" "}
            <span className=" text-accent dark:text-accentDark"> разработчиком</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-2"
          >
            Постоянно учусь и совершенствую свои навыки в программировании,
            люблю работать с новыми технологиями и придерживаюсь коллективного
            подхода в команде. Никогда не останавливаюсь на достигнутом и всегда
            исследую новые возможности. Верю в себя и свой опыт, и уверен, что
            мой постоянный рост и усовершенствование сделают меня ценным членом
            вашей команды.
          </motion.p>
          {/* counters  */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 flex-col  text-center  xl:items-start items-center	"
          >
            <h3 className="text-3xl ">Окончил</h3>
            <div className="flex flex-1  mt-6 ">
              {/* experience  */}
              <div className=" relative flex-1 after:w-[1px] before:w-[1px]  before:bg-white/10 before:absolute before:h-full before:top-0 before:left-0  after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className=" text-2xl xl:text-3xl  mb-2  ">
                  <p
                    className="relative
before:absolute before:inset-0 before:animate-typewriter before:bg-primary dark:before:bg-blackFon after:absolute after:inset-0 after:w-[0.100em] after:animate-caret after:bg-accent dark:after:bg-accentDark dark:text-accentDark text-accent"
                  >
                    СПБГУТ
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]">
                  СПбГУТ имени профессора М. А. Бонч-Бруевича
                </div>
              </div>
              {/* clients */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-3xl  mb-2 ">
                  <p
                    className="relative 
before:absolute before:inset-0 before:animate-typewriter before:bg-primary 
after:absolute after:inset-0 after:w-[0.100em] after:animate-caret dark:before:bg-blackFon after:bg-accent  dark:after:bg-accentDark dark:text-accentDark text-accent"
                  >
                    ИСИТ
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]">
                  Факультет информационные системы и технологии
                </div>
              </div>
              {/* projects */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-3xl  mb-2 ">
                  <p
                    className="relative 
before:absolute before:inset-0 before:animate-typewriter before:bg-primary 
after:absolute after:inset-0 after:w-[0.100em] after:animate-caret dark:before:bg-blackFon after:bg-accent  dark:after:bg-accentDark dark:text-accentDark text-accent"
                  >
                    ИУС
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]">
                  Кафедра Информационных управляющих систем
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent  dark:after:bg-accentDark dark:text-accentDark after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } "cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className=" text-accent dark:text-accentDark">   {item.icon}</div>
                  {/* title */}
                  <div className=" font-light mb-2 md:mb-0 text-white">{item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 ">
                    {/* icons */}
                    {item.info?.map((item, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-2xl text-white flex flex-col items-center"
                        >
                          {item.icon}
                          <div className="text-xs">{item.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
