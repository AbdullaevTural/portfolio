//next images
import Image from "next/image";


//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import {motion} from "framer-motion";

//variants
import {fadeIn} from "../variants";

const Home = () => {
  return (<div className="relative overflow-hidden min-h-full w-full flex items-center text-center xl:text-left">
  {/* text */}
  <div className="relative z-10 w-full h-full ">
    <div className="text-center flex flex-col justify-center items-center xl:items-start xl:text-left h-full container mx-auto px-4">
        {/* title */}
        <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit='hidden' className="h1 xl:w-2/4 z-9 [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)] text-3xl sm:text-4xl">
        Привет, я <span className="text-accent dark:text-accentDark ">Турал</span> — <br /> Frontend-разработчик
          </motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit='hidden'  className="max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg sm:text-xl lg:text-2xl">
          Создаю современные веб-приложения на React, Vue и Nuxt.js. Опыт коммерческой разработки в RealWeb. Превращаю макеты в отзывчивые, быстрые и доступные интерфейсы.
          </motion.p>
          {/* btn */}
           <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit='hidden' className="hidden xl:flex">
          <ProjectsBtn/>
          </motion.div>
    </div>
  </div>
  {/* image */}
<div className="overflow-hidden w-full h-full absolute right-0 bottom-0 pointer-events-none md:fixed md:inset-0 md:z-0 md:h-dvh md:w-screen">
  {/* bg image */}
  <div className="overflow-hidden bg-none dark:xl:bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
    {/* Particles */}
    <ParticlesContainer/>
      {/* avatar */}
      <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden' transition={{duration:1, ease:'easeInOut'}}
      className="w-full overflow-hidden h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] hidden lg:block">
        <Avatar/>
      </motion.div>
</div>
</div>
  );
};

export default Home;
