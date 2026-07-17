import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { BsArrowRight, BsGlobe, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/projects";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      {/* Split projects into slides of 4 */}
      {Array.from({ length: Math.ceil(projects.length / 4) }, (_, slideIndex) => (
        <SwiperSlide key={slideIndex} className="max-xl:p-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects
              .slice(slideIndex * 4, slideIndex * 4 + 4)
              .map((project, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden group bg-white/5 border border-white/10 hover:border-accent/50 dark:hover:border-accentDark/50 transition-all duration-300"
                >
                  {/* Image placeholder area */}
                  <div className="relative h-[140px] xl:h-[180px] overflow-hidden bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                    <span className="text-4xl text-white/20 font-bold">
                      {project.title.charAt(0)}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500" />
                    {/* Links on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                          title="Открыть демо"
                        >
                          <BsGlobe className="text-white text-lg" />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                          title="GitHub"
                        >
                          <BsGithub className="text-white text-lg" />
                        </Link>
                      )}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 mb-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 bg-accent/20 dark:bg-accentDark/20 text-accent dark:text-accentDark rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default WorkSlider;
