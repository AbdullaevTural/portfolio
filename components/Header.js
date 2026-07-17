//next image
import Image from "next/image";

//next link 
import Link from "next/link"
//components
import Socials from "../components/Socials";

// icons
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Header = ({ isScrollable }) => {
  return (
    <header className={`${isScrollable ? 'relative' : 'absolute'} z-30 w-full flex items-center xl:px-0 xl:h-[96px]`}>
      <div className="w-full mx-auto px-16">
        <div className="flex flex-col lg:flex-row justify-end items-center gap-y-6 py-8">
          {/* Socials + Resume */}
          <div className="flex items-center gap-x-6">
            <Socials />
            <a
              href="/resume.pdf"
              download="Abdullaev_Tural_Frontend_CV.pdf"
              className="flex items-center gap-x-2 text-sm border border-white/30 rounded-full px-4 py-2 hover:border-accent dark:hover:border-accentDark hover:text-accent dark:hover:text-accentDark transition-all duration-300"
              title="Скачать резюме"
            >
              <HiOutlineDocumentArrowDown className="text-lg" />
              <span className="hidden sm:inline">Резюме</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
