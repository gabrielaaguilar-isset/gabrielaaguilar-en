
import CertificadosSlider from './CertificadosSlider';
import { Subtitles } from "./Subtitles";
import Titles from "./Titles";

const Certificados = () => {
  return (
    <div className="mb-[100px] mx-[20px] lg:px-[100px] 2xl:px-[150px] pb-10 max-w-[1920px] 2xl:m-auto 2xl:mb-[100px]">
      <div className=" flex flex-col lg:flex-row    lg:gap-44 lg:justify-between ">
        <div className="max-w-[207px] lg:max-w-[277px]">
          <Titles text="Certificates" customClass="text-left" />
        </div>
        <div className=" ">
          <Subtitles
            text="Each certificate reflects my commitment to excellence and my dedication to continuous learning. These accreditations guarantee my skills and knowledge in the key technologies and tools of web development."
            customClass="leading-[171%] text-black mt-2 lg:max-w-[838px]"
          />
        </div>
      </div>
      <CertificadosSlider />
    </div>
  );
};

export default Certificados;
