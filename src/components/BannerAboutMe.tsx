import Image from "next/image";
import soy from "../assets/images/im.svg";
import miFoto from "../assets/images/mi-imagen.svg";
export const BannerAboutMe = () => {
  return (
    <>
      <div className="backgroundAboutMe min-h-[700px]  ">
       
       <div className="max-w-[1920px] m-auto flex items-center  flex-col px-[20px] lg:px-[100px] 2xl:px-[150px] lg:flex-row lg:justify-between marginMS">
       <div className="flex justify-start w-full flex-col 2xl:flex-row relative max-w-[384px] lg:max-w-[794px] mt-64 lg:mt-0  lg:justify-center ">

          <Image
            src={soy}
            alt="imagen de un texto en cursiva que dice soy"
            className="text-left mt-7 w-10 h-auto absolute -top-11 -left-4 lg:-left-2 lg:-top-9"
          />
          <h1 className="font-semibold text-white  text-4xl z-20 lg:text-[72px] leading-[97%]   sm:text-center lg:text-left">
            Gabriela Aguilar
            <span className="text-yellow"> - Frontend Developer</span>
          </h1>
     

        </div>
        <Image src={miFoto} alt="mi imagen" className="w-80 lg:mt-24 lg:w-96" />
     

       </div>
      
      </div>

      <div className="flex max-w-[924px] m-auto px-[20px] 2xl:max-w-[1024px] paddinArriba">
        <h4 className="text-black/80 font-semibold text-[18px] lg:text-[20px] leading-[160%] lg:ml-24 mb-7">
        I am a web developer with over 3 years of experience in creating dynamic and functional websites. I hold a degree as a Higher Technical University in Computer Science, which has provided me with a solid foundation to specialize in technologies such as WordPress, React, Next.js, CSS, Tailwind, TypeScript, Photoshop, and Figma. With an intermediate level of English and a focus on continuous learning, I stay up to date with the latest technological trends, always striving to offer optimized solutions and exceed my clients' expectations.
        </h4>
      </div>
    </>
  );
};
