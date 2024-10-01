"use client";

import { useState } from "react";
import Image from "next/image";
import react from "../assets/icons/react.svg";
import wordpress from "../assets/icons/wordpress.svg";
import nextJs from "../assets/icons/nextjs.svg";
import typeScript from "../assets/icons/typescript.svg";
import tailwind from "../assets/icons/tailwind.svg";
import mongoDb from "../assets/icons/mongodb.svg";
import photoshop from "../assets/icons/photshop.svg";

import figma from "../assets/icons/figma.svg";
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
  { service: "E-commerce Stores" },
  { service: "Landing Pages" },
  { service: "Maintenance" },
  { service: "SEO" },
  { service: "Flyers" },
  { service: "Community Manager" },
  { service: "Content Manager" },
];

const AboutMeSection = () => {
  const [openSection, setOpenSection] = useState<"skills" | "services" | "certifications" | null>("skills");

  const handleToggle = (section: "skills" | "services" | "certifications") => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mx-6 max-w-[750px] bg-black rounded-[35px] pt-[39px] pb-[45px] px-[18px] -mt-24 sm:m-[15%] sm:-mt-28  lg:hidden mb-[100px]">
      <div
        onClick={() => handleToggle("skills")}
        className={`${openSection === "skills" ? "bg-purple" : "bg-black"} py-[5px] flex justify-between rounded-[35px] pl-[17px] items-center cursor-pointer`}
      >
        <div className="max-w-[45%]">
          <h3 className="text-white text-[17px]">Skills and Technologies</h3>
        </div>
        <div className={`${openSection === "skills" ? "bg-black" : "bg-purple"} rounded-full text-white font-normal text-[38px] w-[45px] h-[45px] flex justify-center items-center mr-2`}>
          {openSection === "skills" ? "-" : "+"}
        </div>
      </div>
      <div
        className={`transition-all duration-700 overflow-hidden ${openSection === "skills" ? "max-h-[1000px] py-6" : "max-h-0 py-0"}`}
      >
        <div className="bg-gray pt-[24px] px-[13px] rounded-[35px]">
          <h4 className="font-medium text-[16px] leading-[124%]">
            Web developer with more than 3 years of experience creating dynamic and functional sites. Expert in:
          </h4>
          <div className="flex gap-2 flex-wrap mt-4 sm:gap-5">
            {logos.map(({ alt, url }) => (
              <Image src={url} key={alt} alt={alt} className="w-24 h-auto sm:w-28" />
            ))}
          </div>
          <h3 className="text-sm mt-9 text-[#6A6A6A] pb-6">
            I am passionate about clean design and optimization, always focused on offering innovative solutions that exceed expectations.
          </h3>
        </div>
      </div>
      <div
        onClick={() => handleToggle("services")}
        className={`${openSection === "services" ? "bg-purple" : "bg-black"} py-[5px] flex justify-between rounded-[35px] pl-[17px] items-center cursor-pointer mt-5`}
      >
        <div className="max-w-[35%]">
          <h3 className="text-white text-[17px]">Services</h3>
        </div>
        <div className={`${openSection === "services" ? "bg-black" : "bg-purple"} rounded-full text-white font-normal text-[38px] w-[45px] h-[45px] flex justify-center items-center mr-2`}>
          {openSection === "services" ? "-" : "+"}
        </div>
      </div>
      <div
        className={`transition-all duration-700 overflow-hidden ${openSection === "services" ? "max-h-[1000px] py-6" : "max-h-0 py-0"}`}
      >
        <div className="bg-gray pt-[24px] px-[13px] rounded-[35px]">
          <h4 className="font-medium text-[16px] leading-[124%]">
            I offer a wide range of services to boost your digital presence. From web development to social media management, every project is an opportunity to create effective and personalized solutions:
          </h4>
          <div className="flex gap-2 flex-col mt-4 pb-6">
            <ul>
              {services.map(({ service }) => (
                <li key={service} className="flex items-center">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleToggle("certifications")}
        className={`${openSection === "certifications" ? "bg-purple" : "bg-black"} py-[5px] flex justify-between rounded-[35px] pl-[17px] items-center cursor-pointer mt-5`}
      >
        <div className="max-w-[35%]">
          <h3 className="text-white text-[17px]">Certifications</h3>
        </div>
        <div className={`${openSection === "certifications" ? "bg-black" : "bg-purple"} rounded-full text-white font-normal text-[38px] w-[45px] h-[45px] flex justify-center items-center mr-2`}>
          {openSection === "certifications" ? "-" : "+"}
        </div>
      </div>
      <div
        className={`transition-all duration-700 overflow-hidden ${openSection === "certifications" ? "max-h-[1000px] py-6" : "max-h-0 py-0"}`}
      >
        <div className="bg-gray pt-[24px] px-[13px] rounded-[35px]">
          <h4 className="font-medium text-[16px] leading-[124%]">
            Validating my dedication and professional growth, I have obtained certifications from recognized companies:
          </h4>
          <div className="flex gap-2 flex-col mt-4 pb-6">
            <ul>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                Google Garage Digital
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                Platzi
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                Udemy
              </li>
            </ul>
            <Link href="/about-me" className="bg-black text-white py-3 px-6 rounded-full">
              See all certifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
