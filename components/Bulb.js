//next images
import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="pointer-events-none absolute -left-36 bottom-10 z-10 w-[200px] rotate-12 mix-blend-color-dodge
  animate-pulse duration-75 xl:w-[260px]"
    >
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
