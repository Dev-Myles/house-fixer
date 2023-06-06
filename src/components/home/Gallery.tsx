import Image from "next/image";
import SectionProvider from "../providers/SectionProvider";

const Gallery: React.FC = () => {
  return (
    <SectionProvider>
      <h1
        className="font-dis text-3xl
      font-bold
      "
      >
        Our Work:
      </h1>
      <Image
        alt="gallery img"
        src="/images/plans.png"
        className="mx-auto my-2 drop-shadow-lg"
        height={250}
        width={250}
      />
      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        earum, magnam expedita officia amet repudiandae unde modi vitae quidem.
        Cum amet molestiae nulla sequi voluptatibus nostrum excepturi, non
        tempora facilis.
      </p>
    </SectionProvider>
  );
};

export default Gallery;
