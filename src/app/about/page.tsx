

import { bodyFont, titleFont } from "@/config/fonts";
import Image from "next/image";



const About = () => {
  return (
    <div className='relative w-screen h-screen '>
      <Image src='/photos/IMG_2295.JPG' fill objectFit="cover" objectPosition="center" alt="bgImage" priority />
      <div className="absolute max-w-[400px] max-h-max top-52 left-80 -translate-x-2/3 z-10 bg-white/40 p-8 rounded-sm">
        <h1 className={`${titleFont.className} font-normal text-2xl p-2`}>
          Sobre mí
        </h1>
          <p className={`${bodyFont.className} font-light p-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem amet voluptas iusto repellat esse quia, incidunt id eaque consectetur.
          </p>
          <p className={`${bodyFont.className} font-light p-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem amet voluptas iusto repellat esse quia, incidunt id eaque consectetur. Officiis dolorum autem voluptas odit voluptatum nihil itaque quis velit?
          </p>
        
      </div>
    </div>
  );
};

export default About;