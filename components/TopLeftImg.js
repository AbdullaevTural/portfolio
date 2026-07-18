//next image
import Image from "next/image";


const TopLeftImg = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-8 h-[200px] w-[200px] overflow-hidden opacity-40 mix-blend-color-dodge xl:h-[400px] xl:w-[400px]">
    <Image src='/top-left-img.png' width={400} height={400} className="h-full w-full object-contain" alt=""/>
    </div>
  );
};

export default TopLeftImg;
