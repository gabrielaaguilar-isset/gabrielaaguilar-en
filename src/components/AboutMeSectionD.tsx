

"use client";
import { useState } from "react";
import react from "../assets/icons/react.svg";
import wordpress from "../assets/icons/wordpress.svg";
import nextJs from "../assets/icons/nextjs.svg";
import typeScript from "../assets/icons/typescript.svg";
import tailwind from "../assets/icons/tailwind.svg";
import mongoDb from "../assets/icons/mongodb.svg";
import photoshop from "../assets/icons/photshop.svg";
 
import figma from "../assets/icons/figma.svg";
import Image from "next/image";
import arrowRight from "../assets/icons/arrow-right.svg";
import Link from "next/link";
const logos = [
  { alt: "WordPress logo", url: wordpress },
  { alt: "React logo", url: react },
  { alt: "Next.js logo", url: nextJs },
  { alt: "TypeScript logo", url: typeScript },
  { alt: "Tailwind logo", url: tailwind },
  { alt: "Figma logo", url: figma },
  { alt: "MongoDB logo", url: mongoDb },
  { alt: "Photoshop logo", url: photoshop },
];

const services = [
  { service: "Web Pages" },
  { service: "Online Stores" },
  { service: "Landing Pages" },
  { service: "Maintenance" },
  { service: "SEO" },
  { service: "Flyers" },
  { service: "Community Manager" },
  { service: "Content Manager" },
];

const AboutMeSectionD = () => {
  const [activeTab, setActiveTab] = useState("skillsAndTechnologies");

  const renderContent = () => {
    switch (activeTab) {
      case "skillsAndTechnologies":
        return (
          <>
            <h4 className="font-medium text-[19px] leading-[124%]">
              Web developer with over 3 years of experience creating dynamic and functional sites. Expert in:
            </h4>
            <div className="flex gap-[20px] flex-wrap mt-8">
              {logos.map(({ alt, url }) => (
                <Image
                  src={url}
                  key={alt}
                  alt={alt}
                  className="w-28 h-auto"
                />
              ))}
            </div>
            <h3 className="text-sm mt-11 text-[#6A6A6A] pb-6">
              I am passionate about clean design and optimization, always focused on delivering innovative solutions that exceed expectations.
            </h3>
          </>
        );
      case "services":
        return (
          <>
            <h4 className="font-medium  text-[19px] leading-[124%]">
              I offer a wide range of services to enhance your digital presence. From web development to social media management, every project is an opportunity to create effective and personalized solutions:
            </h4>
            <div className="flex gap-2 flex-col mt-4 pb-6">
              <ul>
                {services.map(({ service }) => (
                  <li key={service} className="flex items-center  text-[19px]">
                    <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      case "certifications":
        return (
          <>
            <h4 className="font-medium  text-[19px] leading-[124%]">
              Demonstrating my dedication and professional growth, I have obtained certifications from recognized companies:
            </h4>
            <div className="flex gap-2 flex-col mt-8 pb-6">
              <ul>
                <li className="flex items-center  text-[19px]">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  Google Digital Garage
                </li>
                <li className="flex items-center  text-[19px]">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  Platzi
                </li>
                <li className="flex items-center  text-[19px]">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  Udemy
                </li>
              </ul>
            </div>
            <div className="flex h-full justify-end items-end ">
              <Link href="/about-me" className="bg-black text-white py-3 px-6 rounded-full">
                See all certifications
              </Link>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hidden max-w-[1009px] h-[437px] bg-black rounded-[35px] m-auto -mt-44 lg:flex overflow-hidden items-center mb-[100px]">
      <div className="bg-black w-[456px] h-full rounded-l-[35px] flex pl-[25px] flex-col pt-[102px]">
        <div
          className={`${activeTab === "skillsAndTechnologies" ? "flex bg-purple mb-6 py-[6px] w-[355px] rounded-[35px] z-20 justify-between pr-2 cursor-pointer pl-[35px]" : "flex items-start mb-9 cursor-pointer"}  `}
          onClick={() => setActiveTab("skillsAndTechnologies")}
        >
          <div className={`${activeTab !== "skillsAndTechnologies" ? "pl-[35px]" : "max-w-[177px]" } max-w-[277px]`}>
            <h3 className="font-semibold text-[21px] text-white">
              Skills and <br /> Technologies
            </h3>
          </div>
          <div className={`${activeTab === "skillsAndTechnologies" ? "flex" : "hidden" } bg-black w-[62px] h-[62px] rounded-full justify-center items-center`}>
            <Image
              src={arrowRight}
              alt="image of an arrow pointing right"
              className="w-[24px] h-auto text-white"
            />
          </div>
        </div>

        <div
           className={`${activeTab === "services" ? "flex bg-purple mb-6 py-[6px] w-[355px] rounded-[35px] z-20 justify-between pr-2 cursor-pointer pl-[35px]" : "flex items-start mb-6 cursor-pointer"}  items-center `}
          onClick={() => setActiveTab("services")}
        >
          <div className={`${activeTab !== "services" ? "pl-[35px]" : "" } `}>
            <h3 className="font-semibold text-[21px] text-white">Services</h3>
          </div>
          <div className={`${activeTab === "services" ? "flex" : "hidden" } bg-black w-[62px] h-[62px] rounded-full justify-center items-center`}>
            <Image
              src={arrowRight}
              alt="image of an arrow pointing right"
              className="w-[24px] h-auto text-white"
            />
          </div>
        </div>

        <div
          className={`${activeTab === "certifications" ? "flex bg-purple mb-6 py-[6px] w-[355px] rounded-[35px] z-20 justify-between pr-2 cursor-pointer pl-[35px]" : "flex items-start mt-6 cursor-pointer"}  items-center`}
          onClick={() => setActiveTab("certifications")}
        >
          <div className={`${activeTab !== "certifications" ? "pl-[35px]" : "" } `}>
            <h3 className="font-semibold text-[21px] text-white">
              Certifications
            </h3>
          </div>
          <div className={`${activeTab === "certifications" ? "flex" : "hidden" } bg-black w-[62px] h-[62px] rounded-full justify-center items-center`} >
            <Image
              src={arrowRight}
              alt="image of an arrow pointing right"
              className="w-[24px] h-auto text-white"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray h-full w-[716px] rounded-[35px] -ml-36 pl-[126px]">
        <div className="flex flex-col justify-start pr-[61px] h-full pt-[67px] pb-[50px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionD;
