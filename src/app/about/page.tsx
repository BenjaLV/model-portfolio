import { bodyFont, titleFont } from "@/config/fonts";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <Image src="/photos/IMG_2295.JPG" fill objectFit="cover" objectPosition="center" alt="bgImage" priority />
      <div className="relative max-w-[400px] mx-4 md:mx-auto z-10 bg-white/40 p-8 rounded-sm text-center">
        <h1 className={`${titleFont.className} font-normal text-2xl mb-4`}>
          Sobre mí
        </h1>
        <p className={`${bodyFont.className} font-normal mb-6`}>
          Residente en la ciudad de Mar del Plata, destaco por combinar carisma y pasión en cada proyecto, generando resultados profesionales en todo lo que me propongo. Mi gran interés en el autocuidado y un estilo de vida saludable me convierten en un deportista disciplinado y amante del fitness. Apasionado por la fotografía, estoy dispuesto a compartir mi potencial con el mundo.
        </p>
        <h1 className={`${titleFont.className} font-normal text-2xl mb-4`}>
          Medidas
        </h1>
        <p className={`${bodyFont.className} font-normal mb-6`}>
          Altura: 1,80 mt | Ojos: Verdes | Cabello: Castaño | Remera: M-L | Pantalón: 32 | Calzado: 43
        </p>
      </div>
    </div>
  );
};

export default About;
