import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import { skillCategories } from "../../data/skills";

const TechStack = () => {
  return (
    <div className="w-full min-h-dvh flex items-center text-center xl:text-left">
      <Circles />
      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-20">
        <div className="w-full min-h-dvh flex items-center text-center xl:text-left flex-col xl:flex-row gap-x-20">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col items-center xl:items-start xl:text-left mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Мой стек
              <span className="text-accent dark:text-accentDark">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0"
            >
              Основной стек —  Vue.js и Nuxt.js. Пишу адаптивные
              интерфейсы с Tailwind CSS и Sass. Работаю с Git, REST API,
              инструментами сборки. Работаю с Node.js, PHP и Bitrix. Имею опыт работы с React, Next.js и другими технологиями.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <div className="space-y-6">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-sm uppercase tracking-wider text-white/40 mb-3 text-center xl:text-left">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-x-3 bg-white/5 border border-white/10 rounded-lg px-4 py-4 hover:border-accent/50 dark:hover:border-accentDark/50 hover:bg-white/10 transition-all duration-300 group justify-center sm:justify-start"
                        >
                          <Icon className="text-2xl sm:text-xl text-accent dark:text-accentDark group-hover:scale-110 transition-transform" />
                          <span className="text-sm sm:text-sm text-white/80">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
