import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import { experience, supportCompanies } from "../../data/experience";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Experience = () => {
  return (
    <div className="relative min-h-full w-full flex items-center text-center xl:text-left">
      <Circles />
      <div className="container mx-auto items-start xl:flex-row gap-x-20 mb-10">
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

          <div className="mt-10 px-4 pb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Сайты на технической поддержке
              <span className="text-accent dark:text-accentDark">.</span>
            </h3>
            <p className="text-sm text-white/50 mb-5">
              Компании и проекты, для которых я выполнял техническую поддержку
              сайтов.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {supportCompanies.map((company) => (
                <a
                  key={company.url}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg bg-white/5 border border-white/10 p-4 hover:border-accent/50 dark:hover:border-accentDark/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 dark:bg-accentDark/20 text-lg font-semibold text-accent dark:text-accentDark">
                        {company.name.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <h4 className="truncate text-sm font-semibold text-white">
                          {company.name}
                        </h4>
                        <p className="truncate text-xs text-white/45">
                          {company.domain}
                        </p>
                      </div>
                    </div>
                    <BsArrowUpRight className="mt-1 shrink-0 text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:group-hover:text-accentDark" />
                  </div>
                  <p className="mt-4 text-xs text-white/55">
                    {company.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
