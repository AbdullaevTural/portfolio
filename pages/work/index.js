//components
import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="min-h-full w-full flex items-center text-center xl:text-left overflow-hidden">
      <Circles />
      <div className="container mx-auto mb-14">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/*text*/}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Мои проекты
              <span className="text-accent dark:text-accentDark">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0"
            >
              Реальные проекты на Vue.js, React, Next.js. Наведите на карточку,
              чтобы увидеть ссылки на демо и GitHub.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
