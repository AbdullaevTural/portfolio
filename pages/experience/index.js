import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import { experience, education, certificates } from "../../data/experience";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Experience = () => {
  return (
    <div className="w-full min-h-dvh flex items-center text-center xl:text-left">
      <Circles />
      <div className="container mx-auto items-start xl:flex-row gap-x-20">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-8"
        >
          Опыт работы<span className="text-accent dark:text-accentDark">.</span>
        </motion.h2>

        {/* Timeline */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="experience-swiper"
          >
            {experience.map((item, index) => (
              <SwiperSlide key={index} className="experience-swiper-slide">
                <div className="relative">
                  {/* Card */}
                  <div
                    className="
              bg-white/5 
              border 
              border-white/10 
              rounded-lg 
              p-5
              hover:border-accent/40
              dark:hover:border-accentDark/40
              transition-all
            "
                  >
                    <div
                      className="
              flex 
              flex-col 
              sm:flex-row 
              sm:items-center 
              sm:justify-between
              mb-2
            "
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {item.position}
                      </h3>

                      <span className="text-xs text-white/40">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-accent dark:text-accentDark mb-3">
                      {item.company} — {item.location}
                    </p>

                    <ul className="space-y-1 mb-3">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="
                    text-sm 
                    text-white/60 
                    flex 
                    items-start 
                    gap-x-2
                  "
                        >
                          <span
                            className="
                    text-accent 
                    mt-1.5 
                    text-[6px]
                  "
                          >
                            ●
                          </span>

                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="
                    text-[10px]
                    px-2
                    py-0.5
                    bg-accent/20
                    dark:bg-accentDark/20
                    text-accent
                    dark:text-accentDark
                    rounded-full
                  "
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
