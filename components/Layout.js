import { Sora } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Kurale } from "@next/font/google";

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import DarkMode from "./DarkMode";
import CustomCursor from "./CustomCursor";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const kurale = Kurale({
  subsets: ["latin"],
  variable: "--font-kurale",
  weight: ["400"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`
        page
        ${kurale.variable}
        font-kurale
        text-white
        
        min-h-screen

        overflow-x-hidden
        overflow-y-auto
      `}
    >
      <CustomCursor />

      <TopLeftImg />

      <Header />

      <aside
        className="
          flex 
          flex-row 
          xl:flex-col 
          bottom-0 
          xl:h-screen 
          z-50 
          mt-auto 
          xl:right-[2%] 
          justify-center 
          gap-2 
          fixed 
          items-stretch 
          text-3xl 
          xl:text-xl 
          max-xl:w-screen 
          max-xl:bottom-0 
          max-xl:left-0
        "
      >
        <Nav />
        <DarkMode />
      </aside>

      {children}
    </div>
  );
};

export default Layout;
