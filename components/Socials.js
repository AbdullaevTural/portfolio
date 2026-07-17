//next link 
import Link from "next/link"

//icons
import { RiYoutubeLine, RiInstagramLine, RiTelegramFill , RiWhatsappLine, RiGithubLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
const Socials = () => {
  return <div className=" flex items-center gap-x-5 text-2xl">
  <Link href={'https://github.com/abdullaevtural'} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><RiGithubLine/></Link>
  <Link href={'https://t.me/TuralAbd'} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><RiTelegramFill /></Link>
  <Link href={'https://vk.com/id49410524'} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><SlSocialVkontakte/></Link>
  <Link href={'https://wa.me/79095910091'} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><RiWhatsappLine /></Link>
  <Link href={'https://www.youtube.com/channel/UCs4GDQFr0j6PboCcP3j7pZw'} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><RiYoutubeLine/></Link>
  </div>;
};

export default Socials;
